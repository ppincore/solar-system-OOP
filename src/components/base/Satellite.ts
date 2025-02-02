import { ISatellite, ISatelliteConfig } from "../../types";

export class Satellite implements ISatellite {
  name: string;
  mass: number;
  distanceFromPlanet: number;
  orbitalSpeed: number;
  rotationSpeed: number;
  constructor(props: ISatelliteConfig) {
    const { name, mass, distanceFromPlanet, orbitalSpeed, rotationSpeed } = props;
    this.name = name;
    this.mass = mass;
    this.distanceFromPlanet = distanceFromPlanet;
    this.orbitalSpeed = orbitalSpeed;
    this.rotationSpeed = rotationSpeed;
  }
  calculateOrbitalPeriod(): number {
    return (2 * Math.PI * this.distanceFromPlanet) / this.orbitalSpeed;
  }
  calculateDayLength(): number {
    return (2 * Math.PI) / this.rotationSpeed;
  }
}
