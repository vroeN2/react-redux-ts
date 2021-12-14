import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { Button } from "antd";
import { PropsType } from "../state/interfaces/CountryPropsType";

export const SaveButton = (props: PropsType) => {
  const dispatch = useDispatch();
  const { type, details } = props;

  const { saveCountry } = bindActionCreators(actionCreators, dispatch);
  return (
    <Button type="primary" onClick={() => saveCountry(details)}>
      {type}
    </Button>
  );
};

export const DeleteButton = (props: PropsType) => {
  const dispatch = useDispatch();
  const { type, id } = props;

  const { deleteCountry } = bindActionCreators(actionCreators, dispatch);
  return (
    <Button type="primary" onClick={() => deleteCountry(id!)}>
      {type}
    </Button>
  );
};
