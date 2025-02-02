import { Satellite } from "./common/Satellite";
import { ISatellite } from "../types";

interface IMoon {
  calculateOrbitalPeriod(): number;
  calculateDayLength(): number;
}

export class Moon extends Satellite implements IMoon {
  constructor(param: ISatellite) {
    super(param);
    this.distance = `Дистанция до планеты Земля: ${param.distanceFromPlanet.toLocaleString()} километров`
  }
  calculateOrbitalPeriod(): number {
    return (2 * Math.PI * this.distanceFromPlanet) / this.orbitalSpeed;
  }
  calculateDayLength(): number {
    return (2 * Math.PI) / this.rotationSpeed;
  }

}
