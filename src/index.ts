import { Earth } from "./components/Earth";
import { Moon } from "./components/Moon";
import { Card } from "./components/common/Card";
import { ensureElement, cloneTemplate } from "./utils/utils";
import { Page } from "./components/Page";
import { spaceObjects } from "./utils/constants";
const page = new Page(document.body);

const planetTemplate = ensureElement<HTMLTemplateElement>("#card__planet");
const satelliteTemplate =
  ensureElement<HTMLTemplateElement>("#card__satellite");

const clone = cloneTemplate(satelliteTemplate)
console.log(clone)
const card = new Card(clone)

page.catalog = spaceObjects.map((item) => {
  if (item.type === "satellite") {
    const cardSatellite = new Card(cloneTemplate(satelliteTemplate));
    console.log(cardSatellite)
    return cardSatellite.render(item);
  } else if (item.type === "planet") {
    const cardPlanet = new Card(cloneTemplate(planetTemplate));
    console.log(cardPlanet)
    return cardPlanet.render(item);
  }
});

// const card = new Card(clone)
// console.log(card)
// spaceObjects.forEach((item) => {
//   console.log(item.type);
// });


document.addEventListener('DOMContentLoaded', () => {
console.log('loaded')
});