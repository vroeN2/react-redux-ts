import { Card, Col, Image } from "antd";
import components from ".";

const CountryCard = ({ country, type, id = 0 }) => {
  const { MyButton } = components;

  return (
    <Col xs={20} sm={10} md={8} lg={6}>
      <Card className="text-center" key={country.callingCodes}>
        <Image src={country.flags.svg} />

        <div>{country.name.official}</div>

        <MyButton type={type} id={id} details={country}>
          {type}
        </MyButton>
      </Card>
    </Col>
  );
};

export default CountryCard;
