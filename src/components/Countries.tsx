import { useState, useRef, useEffect } from "react";
import components from ".";
import { Space, Row, Input } from "antd";
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
          // setError(err.message);
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
      <Space direction="vertical">
        <Row className="search__wrapper">
          <Search
            addonBefore="🔍"
            enterButton="Search"
            size="large"
            className="searchbox"
            placeholder="start typing "
            value={searchTerm}
            onChange={(e) => handleChange(e)}
          />

          <div className="response__wrapper">
            <div className="heading">
              <div className="heading__text text-center display-3">
                Countries
              </div>
            </div>
          </div>
        </Row>
        {isPending && <p className="lead p-4">loading...</p>}

        {!isPending && error && <h2 className="text-center mt-5">{error}</h2>}

        {!isPending && (
          <Space className="p-0">
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
          </Space>
        )}
      </Space>
    </div>
  );
};

export default Countries;
