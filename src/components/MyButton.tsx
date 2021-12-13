import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { Button } from "antd";
import { ActionType } from "../state/action-types";
import { PropsType } from "../state/interfaces/CountryPropsType";

const MyButton = (props: PropsType) => {
  const dispatch = useDispatch();
  const { type, details, id } = props;

  const { saveCountry, deleteCountry } = bindActionCreators(
    actionCreators,
    dispatch
  );

  if (type === ActionType.SAVE) {
    return (
      <Button type="primary" onClick={() => saveCountry(details)}>
        {type}
      </Button>
    );
  }

  if (type === ActionType.DELETE) {
    return (
      <Button type="primary" onClick={() => deleteCountry(id!)}>
        {type}
      </Button>
    );
  }
};

export default MyButton;
