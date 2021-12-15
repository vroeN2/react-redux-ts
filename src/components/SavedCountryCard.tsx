import { Card, Col, Image } from "antd";
import components from ".";
import { PropsType } from "../state/interfaces/CountryPropsType";
import { CountryCard } from "./CountryCard";

const SavedCountryCard = (props: PropsType): JSX.Element => {
  const { DeleteButton } = components;
  const { type, details, id } = props;

  return (
    <Col xs={20} sm={10} md={8} lg={6}>
      <CountryCard className="text-center" key={details.area}>
        <Image src={details.flags.svg} />

        <div>{details.name.official}</div>

        <DeleteButton details={details} id={id} type={type}>
          {type}
        </DeleteButton>
      </CountryCard>
    </Col>
  );
};

export default SavedCountryCard;
