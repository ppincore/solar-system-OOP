import { IPlanet, ISatellite, IPlanetConfig } from "../../types";

export class Planet implements IPlanet {
  name: string;
  mass: number;
  distanceFromStar: number;
  orbitalSpeed: number;
  rotationSpeed: number;
  satellites: ISatellite[];
  constructor(props: IPlanetConfig) {
    const {
      name,
      mass,
      distanceFromStar,
      orbitalSpeed,
      rotationSpeed,
      satellites,
    } = props;
    this.name = name;
    this.distanceFromStar = distanceFromStar;
    this.mass = mass;
    this.orbitalSpeed = orbitalSpeed;
    this.satellites = satellites;
    this.rotationSpeed = rotationSpeed;
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
