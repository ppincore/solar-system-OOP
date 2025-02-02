import { Planet } from "./components/base/Planet";
import { Star } from "./components/base/Star";
import { Satellite } from "./components/base/Satellite";
import { IPlanetConfig, ISatelliteConfig } from "./types";

const moonConfig: ISatelliteConfig = {
  name: "Moon",
  mass: 7.348e22,
  distanceFromPlanet: 3.844e8,
  orbitalSpeed: 1022,
  rotationSpeed: 2.6617e-6,
};

const moon = new Satellite(moonConfig);

const earthConfig: IPlanetConfig = {
  name: "Earth",
  mass: 5.972e24,
  distanceFromStar: 149.6e6, // расстояние в километрах
  orbitalSpeed: 29.78, // скорость в км/с
  rotationSpeed: 7.2921159e-5, // скорость в радианах/с
  satellites: [moon],
};
const earth = new Planet(earthConfig);

console.log("Длина дня в секундах",earth.calculateDayLength())
console.log("Орбитальный период",earth.calculateOrbitalPeriod())
console.log("Длина дня в секундах",moon.calculateDayLength())
console.log("Орбитальный период",moon.calculateOrbitalPeriod())