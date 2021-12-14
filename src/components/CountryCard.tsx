import { Card, Col, Image } from "antd";
import components from ".";
import { PropsType } from "../state/interfaces/CountryPropsType";
import { ActionType } from "../state/action-types";
import { useState } from "react";

const CountryCard = (props: PropsType): JSX.Element => {
  const { SaveButton, DeleteButton } = components;
  const { type, details, id } = props;
  const [isSave, setIsSave] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  if (type === ActionType.SAVE) {
    setIsSave(true);
  } else if (type === ActionType.DELETE) {
    setIsDelete(true);
  }

  return (
    <Col xs={20} sm={10} md={8} lg={6}>
      <Card className="text-center" key={details.area}>
        <Image src={details.flags.svg} />

        <div>{details.name.official}</div>

        {isSave && (
          <SaveButton details={details} id={id} type={type}>
            {type}
          </SaveButton>
        )}

        {isDelete && (
          <DeleteButton details={details} id={id} type={type}>
            {type}
          </DeleteButton>
        )}
      </Card>
    </Col>
  );
};

export default CountryCard;
