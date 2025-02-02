import { IBaseSpaceObject, ISatellite, IPlanet } from "../types";
const moon: ISatellite = {
  name: "Moon",
  mass: 7.348e22,
  type: "satellite",
  image:'https://i.postimg.cc/SK7ynNkQ/moon.jpg',
  distanceFromPlanet: 3.844e8,
  orbitalSpeed: 1.022,
  rotationSpeed: 2.6617e-6,
};

const earth: IPlanet = {
  name: "Earth",
  mass: 5.972e24,
  type: "planet",
  image:'https://i.postimg.cc/dtLt5Ymn/earth.jpg',
  distanceFromStar: 149.6e6,
  orbitalSpeed: 29.78,
  rotationSpeed: 7.2921159e-5,
  satellites: [moon],
};

export const spaceObjects: IBaseSpaceObject[] = [moon, earth];
