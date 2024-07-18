import { Status } from './status.enum';

export interface ReactorModel {
  id: string;
  name: string;
  status: ReactorStatus;
  description?: string;
  reactorPowerProduction?: { time: number; value: number; status: Status }[];
  reactorCoreTemperature?: { time: number; value: number; status: Status }[];
}

export interface ReactorStatus{
  coreTempStatus: Status;
  powerProdStatus: Status;

}
