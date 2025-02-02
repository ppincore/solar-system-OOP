import "./scss/styles.scss";
import { Earth } from "./components/Earth";
import { Moon } from "./components/Moon";
import { Card } from "./components/common/Card";
import { ensureElement, cloneTemplate } from "./utils/utils";
import { Page } from "./components/Page";
import { spaceObjects } from "./utils/constants";
import { IPlanet, ISatellite } from "./types";
const page = new Page(document.body);

const planetTemplate = ensureElement<HTMLTemplateElement>("#card__planet");
const satelliteTemplate =
  ensureElement<HTMLTemplateElement>("#card__satellite");

page.catalog = spaceObjects.map((item) => {
  if (item.name === "Moon" && item.type === "satellite") {
    const moon = new Moon(item as ISatellite);
    const cardSatellite = new Card(cloneTemplate(satelliteTemplate));
    return cardSatellite.render(moon);
  } else if (item.name === "Earth" && item.type === "planet") {
    const earth = new Earth(item as IPlanet);
    const cardPlanet = new Card(cloneTemplate(planetTemplate));
    return cardPlanet.render(earth);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
});
