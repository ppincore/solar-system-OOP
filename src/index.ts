import "./scss/styles.scss";
import { Satellite } from "./components/common/Satellite";
import { Planet } from "./components/common/Planet";
import { Star } from "./components/common/Star";
import { Card } from "./components/Card";
import { planets, starData } from "./utils/constants";
import { Page } from "./components/Page";

const page = new Page(document.body);

// Создаем карточки для звезды, планет и спутников
const starCardContainer = document.createElement("div");
const starCard = new Card(starCardContainer, starData).render();

const planetCards = planets.map((planetData) => {
  const planetCardContainer = document.createElement("div");
  return new Card(planetCardContainer, planetData).render();
});

const satelliteCards = planets.flatMap((planetData) =>
  planetData.satellites.map((satelliteData) => {
    const satelliteCardContainer = document.createElement("div");
    return new Card(satelliteCardContainer, satelliteData).render();
  })
);

// Добавляем карточки в галерею
page.catalog = [starCardContainer, ...planetCards, ...satelliteCards];
