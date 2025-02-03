import { IBaseSpaceObject, ISatellite, IPlanet } from "../types";
const moon: ISatellite = {
  name: "Moon",
  mass: 7.348e22,
  type: "satellite",
  image: "https://i.postimg.cc/cLPJkJXm/rb-51987.png",
  distanceFromPlanet: 3.844e8,
  orbitalSpeed: 1.022,
  rotationSpeed: 2.6617e-6,
};

const earth: IPlanet = {
  name: "Earth",
  mass: 5.972e24,
  type: "planet",
  image: "https://i.postimg.cc/ZqyWJNC2/rb-57523.png",
  distanceFromStar: 149.6e6,
  orbitalSpeed: 29.78,
  rotationSpeed: 7.2921159e-5,
  satellites: [moon],
};

const phobos: ISatellite = {
  name: "Phobos",
  mass: 1.0659e16,
  type: "satellite",
  image: "https://i.postimg.cc/8C71dvq9/phobos.png",
  distanceFromPlanet: 9377,
  orbitalSpeed: 2.138,
  rotationSpeed: 7.2921e-5,
};

const deimos: ISatellite = {
  name: "Deimos",
  mass: 1.4762e15,
  type: "satellite",
  image: "https://i.postimg.cc/4x1R4nY2/deimos.png",
  distanceFromPlanet: 23460,
  orbitalSpeed: 1.351,
  rotationSpeed: 7.2921e-5,
};

const mars: IPlanet = {
  name: "Mars",
  mass: 6.4171e23,
  type: "planet",
  image: "https://i.postimg.cc/76xvqHv4/mars.png",
  distanceFromStar: 227.9e6,
  orbitalSpeed: 24.077,
  rotationSpeed: 7.088e-5,
  satellites: [deimos, phobos],
};
export const spaceObjects: IBaseSpaceObject[] = [
  moon,
  earth,
];
