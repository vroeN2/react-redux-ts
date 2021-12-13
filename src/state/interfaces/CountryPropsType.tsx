import { CountriesDataType } from "./CountriesDataType";

export type PropsType = {
  details: CountriesDataType;
  type: string;
  id?: number;
  children?: string;
};
