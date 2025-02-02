import { IPlanet, ISatellite} from "../../types";

export class Planet implements IPlanet {
  name: string;
  mass: number;
  type: "planet";
  distanceFromStar: number;
  orbitalSpeed: number;
  rotationSpeed: number;
  satellites: ISatellite[];
  constructor(props:IPlanet) {
    const {
      name,
      mass,
      type,
      distanceFromStar,
      orbitalSpeed,
      rotationSpeed,
      satellites,
    } = props;
    this.name = name;
    this.distanceFromStar = distanceFromStar;
    this.mass = mass;
    this.type = type;
    this.orbitalSpeed = orbitalSpeed;
    this.satellites = satellites;
    this.rotationSpeed = rotationSpeed;
  }
}
