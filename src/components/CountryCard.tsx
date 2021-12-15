import styled from "styled-components";
import { Card } from "antd";

export const CountryCard = styled(Card)`
  padding: 10px 20px;
  transition: all 0.2s ease;
  background: transparent;
  border: none;

  &:hover {
    transform: scale(1.02);
    background-color: #fff;
  }
`;
