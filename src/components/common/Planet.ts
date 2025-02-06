import { SpaceObject } from "../base/SpaceObject";
import { Satellite } from "./Satellite";
export class Planet extends SpaceObject {
  satellites: Satellite[] = [];
  distanceFromStar: number;

  constructor(planetData: {
    name: string;
    mass: number;
    orbitRadius: number;
    rotationSpeed: number;
    axialRotationPeriodHours: number;
    image: string;
    distanceFromStar: number;
  }) {
    super(
      planetData.name,
      planetData.mass,
      planetData.orbitRadius,
      planetData.rotationSpeed,
      planetData.axialRotationPeriodHours,
      planetData.image
    );
    this.distanceFromStar = planetData.distanceFromStar;
  }

  addSatellite(satellite: Satellite): void {
    this.satellites.push(satellite);
  }
}
