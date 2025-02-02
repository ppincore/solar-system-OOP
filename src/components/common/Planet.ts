import { IPlanet, ISatellite } from "../../types";

export class Planet implements IPlanet {
  name: string;
  mass: number;
  type: "planet";
  image: string;
  distanceFromStar: number;
  distance: string;
  orbitalSpeed: number;
  rotationSpeed: number;
  satellites: ISatellite[];
  constructor(props: IPlanet) {
    const {
      name,
      mass,
      type,
      image,
      distanceFromStar,
      orbitalSpeed,
      rotationSpeed,
      satellites,
    } = props;
    this.name = name;
    this.distanceFromStar = distanceFromStar;
    this.mass = mass;
    this.type = type;
    this.distance = `Дистанция до звезды  ${this.distanceFromStar}`
    this.image = image;
    this.orbitalSpeed = orbitalSpeed;
    this.satellites = satellites;
    this.rotationSpeed = rotationSpeed;
  }
}
