import { Card, Col, Image } from "antd";
import components from ".";
import { PropsType } from "../state/interfaces/CountryPropsType";

const SavedCountryCard = (props: PropsType): JSX.Element => {
  const { SaveButton } = components;
  const { type, details, id } = props;

  return (
    <Col xs={20} sm={10} md={8} lg={6}>
      <Card className="text-center" key={details.area}>
        <Image src={details.flags.svg} />

        <div>{details.name.official}</div>

        <SaveButton details={details} id={id} type={type}>
          {type}
        </SaveButton>
      </Card>
    </Col>
  );
};

export default SavedCountryCard;
