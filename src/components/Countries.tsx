import { useState, useRef, useEffect } from "react";
import components from ".";
import { Layout, Row, Input } from "antd";
import { CountriesDataType } from "../state/interfaces/CountriesDataType";
import { ActionType } from "../state/action-types";

const Countries = () => {
  const { CountryCard } = components;
  const { Search } = Input;

  const firstUpdate = useRef(true);

  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState<CountriesDataType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchR, setSearchR] = useState<CountriesDataType[]>([]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setIsPending(true);
    const abortCont = new AbortController();

    let initialUrl = `https://restcountries.com/v3.1/name/`;
    let url = initialUrl + searchTerm;

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error(
            "Unfortunately we can't find a country with that name :("
          );
        }
        return res.json();
      })
      .then((data: CountriesDataType[]) => {
        setItems(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [searchTerm]);

  useEffect(() => {
    setIsPending(true);
    const result: CountriesDataType[] = [];
    for (let i of items) {
      if (i.name.official.toLowerCase().includes(searchTerm.toLowerCase())) {
        result.push(i);
      }
    }
    setSearchR(result);
    setIsPending(false);
  }, [items]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  return (
    <div className="main__wrapper">
      <Layout className="p-2">
        <div className="input-group">
          <span className="input-group-text my-2 p-2">🔍</span>
          <Search
            className="searchbox"
            placeholder="start typing to see the results"
            value={searchTerm}
            onChange={(e) => handleChange(e)}
            enterButton
          />
        </div>

        <div className="response__wrapper">
          <Layout className="p-0">
            <div className="heading">
              <div className="heading__text text-center display-3">
                Countries
              </div>
            </div>
          </Layout>

          {isPending && <p className="lead p-4">loading...</p>}

          {!isPending && error && <h2 className="text-center mt-5">{error}</h2>}

          {!isPending && (
            <Layout className="p-0">
              <Row className="align-items-center justify-content-center">
                {!error &&
                  searchR.map((item, index) => (
                    <CountryCard
                      details={item}
                      type={ActionType.SAVE}
                      key={index}
                    />
                  ))}
              </Row>
            </Layout>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Countries;
