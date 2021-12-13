import { Card, Col, Image } from "antd";
import components from ".";
import { PropsType } from "../state/interfaces/CountryPropsType";

const CountryCard = (props: PropsType): JSX.Element => {
  const { MyButton } = components;
  const { type, details, id } = props;

  return (
    <Col xs={20} sm={10} md={8} lg={6}>
      <Card className="text-center" key={details.area}>
        <Image src={details.flags.svg} />

        <div>{details.name.official}</div>

        <MyButton type={type} id={id} details={details}>
          {type}
        </MyButton>
      </Card>
    </Col>
  );
};

export default CountryCard;
