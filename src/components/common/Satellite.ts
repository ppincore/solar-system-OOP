import { SpaceObject } from "../base/SpaceObject";
export class Satellite extends SpaceObject {
  distanceFromPlanet: number;

  constructor(satelliteData: {
    name: string;
    mass: number;
    orbitRadius: number;
    rotationSpeed: number;
    axialRotationPeriodHours: number;
    image: string;
    distanceFromPlanet: number;
  }) {
    super(
      satelliteData.name,
      satelliteData.mass,
      satelliteData.orbitRadius,
      satelliteData.rotationSpeed,
      satelliteData.axialRotationPeriodHours,
      satelliteData.image
    );
    this.distanceFromPlanet = satelliteData.distanceFromPlanet;
  }
}
