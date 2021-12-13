import { useState } from "react";
import { Alert } from "antd";
import components from "../components";

const Error = () => {
  const [show, setShow] = useState(true);
  const { Countries } = components;

  return show ? (
    <Alert
      message="Oh snap! You got an error!"
      description="ERROR 404 - PAGE NOT FOUND"
      type="error"
      onClose={() => setShow(false)}
      showIcon
    />
  ) : (
    <Countries />
  );
};

export default Error;
