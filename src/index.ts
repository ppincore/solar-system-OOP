import "./scss/styles.scss";
import { Card } from "./components/Card";
import { Planet } from "./components/common/Planet";
import { Satellite } from "./components/common/Satellite";
import { planets, starData } from "./utils/constants";
import { Page } from "./components/Page";
import { Star } from "./components/common/Star";


// // Создаем карточки для звезды, планет и спутников
// const starCardContainer = document.createElement("div");
// const starCard = new Card(starCardContainer, starData).render();

// const planetCards = planets.map((planetData) => {
//   const planetCardContainer = document.createElement("div");
//   return new Card(planetCardContainer, planetData).render();
// });

// const satelliteCards = planets.flatMap((planetData) =>
//   planetData.satellites.map((satelliteData) => {
//     const satelliteCardContainer = document.createElement("div");
//     return new Card(satelliteCardContainer, satelliteData).render();
//   })
// );

// // Добавляем карточки в галерею
// page.catalog = [starCardContainer, ...planetCards, ...satelliteCards];


const star = new Star(starData);

// Создаем объекты планет и спутников
const planetObjects = planets.map(planetData => {
    const planet = new Planet({
        name: planetData.name,
        image: planetData.image,
        mass: planetData.mass,
        orbitRadius: planetData.orbitRadius,
        rotationSpeed: planetData.rotationSpeed,
        axialRotationPeriodHours: planetData.axialRotationPeriodHours,
        distanceFromStar: planetData.distanceFromStar
    });

    const satellites = planetData.satellites.map(satelliteData =>
        new Satellite({
            name: satelliteData.name,
            image: satelliteData.image,
            mass: satelliteData.mass,
            orbitRadius: satelliteData.orbitRadius,
            rotationSpeed: satelliteData.rotationSpeed,
            axialRotationPeriodHours: satelliteData.axialRotationPeriodHours,
            distanceFromPlanet: satelliteData.distanceFromPlanet
        })
    );

    satellites.forEach(satellite => planet.addSatellite(satellite));
    star.addPlanet(planet);

    return planet;
});


const page = new Page(document.body);

// Создаем карточку для звезды
const starCardContainer = document.createElement('div');
const starCard = new Card(starCardContainer, star).render();

// Создаем карточки для планет
const planetCards = planetObjects.map(planet => {
    const planetCardContainer = document.createElement('div');
    return new Card(planetCardContainer, planet).render();
});

// Создаем карточки для спутников
const satelliteCards = planetObjects.flatMap(planet =>
    planet.satellites.map(satellite => {
        const satelliteCardContainer = document.createElement('div');
        return new Card(satelliteCardContainer, satellite).render();
    })
);

// Добавляем карточки в галерею
page.catalog = [starCardContainer, ...planetCards, ...satelliteCards];