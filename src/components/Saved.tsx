import { useSelector } from "react-redux";
import { Layout, Row } from "antd";
import components from "../components";
import { ActionType } from "../state/action-types";
import { Key } from "react";
import { CountriesDataType } from "../state/interfaces/CountriesDataType";
import { ReducerType } from "../state/reducers";

const Saved = () => {
  const { CountryCard } = components;

  const state = useSelector((store: ReducerType) => store);

  if (state.saved.length > 0) {
    return (
      <Layout className="p-0">
        <Row className="align-items-center justify-content-center">
          {state.saved.map(
            (
              item: { details: CountriesDataType; id: number | undefined },
              index: Key | null | undefined
            ) => (
              <CountryCard
                details={item.details}
                type={ActionType.DELETE}
                id={item.id}
                key={index}
              />
            )
          )}
        </Row>
      </Layout>
    );
  } else {
    return (
      <div className="mt-4 container text-center">
        <h2 className="text">No saved items!</h2>
      </div>
    );
  }
};

export default Saved;
