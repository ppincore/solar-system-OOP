import { Planet } from "./common/Planet";
import { IPlanet, ISatellite } from "../types";

interface IEarth {
  calculateOrbitalPeriod(): number;
  calculateDayLength(): number;
  addSatellite(satellite: ISatellite): void;
}

export class Earth extends Planet implements IEarth {
  constructor(param: IPlanet) {
    super(param);
    this.distance = `Дистанция до звезды Солнце: ${param.distanceFromStar.toLocaleString()} километров`;
    this.dayLength = `Длительность дня ~ ${this.calculateDayLength().toFixed(
      0
    )} секунд`;
    this.orbitalPeriod = `Орбитальный период ${
      (this.calculateOrbitalPeriod()/ 86400).toFixed(0)
    } дней`;
  }
  calculateOrbitalPeriod(): number {
    return (2 * Math.PI * this.distanceFromStar) / this.orbitalSpeed;
  }
  calculateDayLength(): number {
    return (2 * Math.PI) / this.rotationSpeed;
  }
  addSatellite(satellite: ISatellite): void {
    this.satellites.push(satellite);
  }
}
