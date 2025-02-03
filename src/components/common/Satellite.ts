import { ISatellite } from "../../types";

export class Satellite implements ISatellite {
  name: string;
  mass: number;
  type: "satellite";
  image: string;
  distance: string;
  dayLength: string
  orbitalPeriod:string
  distanceFromPlanet: number;
  orbitalSpeed: number;
  rotationSpeed: number;
  constructor(props:ISatellite)
   {
    const {
      name,
      mass,
      type,
      image,
      distanceFromPlanet,
      orbitalSpeed,
      rotationSpeed,
    } = props;
    this.name = name;
    this.mass = mass;
    this.type = type;
    this.image = image
    this.distanceFromPlanet = distanceFromPlanet;
    this.orbitalSpeed = orbitalSpeed;
    this.rotationSpeed = rotationSpeed;
  }
}
