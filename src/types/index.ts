export interface IPlanet {
  name: string;
  image: string;
  mass: number;
  orbitRadius: number;
  rotationSpeed: number;
  axialRotationPeriodHours: number;
  distanceFromStar: number;
  satellites?: ISatellite[];
}

export interface ISatellite {
  name: string;
  image: string;
  mass: number;
  orbitRadius: number;
  rotationSpeed: number;
  axialRotationPeriodHours: number;
  distanceFromPlanet: number;
}
export interface IStar {
  name: string;
  mass: number;
  image: string;
}
