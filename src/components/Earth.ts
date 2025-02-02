import { Planet } from "./common/Planet";
import { IPlanet,ISatellite} from "../types";

interface IEarth{
  calculateOrbitalPeriod():number
  calculateDayLength():number
  addSatellite(satellite:ISatellite):void
}

export class Earth extends Planet implements IEarth{
    constructor(param:IPlanet){
        super(param)
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