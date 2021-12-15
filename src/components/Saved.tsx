import { useSelector } from "react-redux";
import { Space, Row } from "antd";
import components from "../components";
import { ActionType } from "../state/action-types";
import { Key } from "react";
import { CountriesDataType } from "../state/interfaces/CountriesDataType";
import { ReducerType } from "../state/reducers";

const Saved = () => {
  const { SavedCountryCard } = components;

  const state = useSelector((store: ReducerType) => store);

  if (state.saved.length > 0) {
    return (
      <Space className="saved__wrapper">
        <Row gutter={[8, 8]}>
          {state.saved.map(
            (
              item: { details: CountriesDataType; id: number | undefined },
              index: Key | null | undefined
            ) => (
              <SavedCountryCard
                details={item.details}
                type={ActionType.DELETE}
                id={item.id}
                key={index}
              />
            )
          )}
        </Row>
      </Space>
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
