import { SpaceObject } from "../base/SpaceObject";
import { Planet } from "./Planet";

export class Star extends SpaceObject {
  planets: Planet[] = [];

  constructor(starData: { name: string; mass: number; image: string }) {
    super(starData.name, starData.mass, 0, 0, 0, starData.image);
  }

  addPlanet(planet: Planet): void {
    this.planets.push(planet);
  }
}
