import { Status } from '../enums/status.enum';

export interface ReactorModel {
  id: string;
  name: string;
  status: ReactorStatus;
  description?: string;
  reactorPowerProduction?: ChartDataModel[];
  reactorCoreTemperature?: ChartDataModel[];
  links?: { label: string; href: string }[];
}

export interface ReactorStatus {
  coreTempStatus: Status;
  powerProdStatus: Status;
}

export interface ChartDataModel {
  time: number;
  value: number;
  status: Status;
}
export interface ReactorModelDTO {
  id: string;
  name: string;
  status: ReactorStatus;
  description?: string;
  reactorPowerProduction?: ChartDataModelDTO[];
  reactorCoreTemperature?: ChartDataModelDTO[];
  links?: { label: string; href: string }[];
}

export interface ReactorStatusDTO {
  coreTempStatus: string;
  powerProdStatus: string;
}

export interface ChartDataModelDTO {
  time: number;
  value: number;
  status: string;
}
