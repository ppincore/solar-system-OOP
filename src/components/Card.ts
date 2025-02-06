import { Component } from "./base/Component";
import { IPlanet, ISatellite, IStar } from "../types";
import { ensureElement, createElement } from "../utils/utils";
import { SpaceObject } from "./base/SpaceObject";

export class Card extends Component<IStar | IPlanet | ISatellite> {
  private _name: HTMLElement;
  private _image: HTMLImageElement;
  private _mass: HTMLElement;
  private _orbitRadius?: HTMLElement;
  private _rotationSpeed?: HTMLElement;
  private _axialRotationPeriod?: HTMLElement;
  private _rotationPeriod?: HTMLElement;
  private _dayDuration?: HTMLElement;

  constructor(
    container: HTMLElement,
    private data: IStar | IPlanet | ISatellite
  ) {
    super(container);

    // Клонируем шаблон и добавляем его в контейнер
    const template = document.getElementById(
      "card__planet"
    ) as HTMLTemplateElement;
    const cardContent = template.content.cloneNode(true) as DocumentFragment;
    container.appendChild(cardContent);

    this._name = ensureElement<HTMLElement>(".card__title", container);
    this._image = container.querySelector(".card__image") as HTMLImageElement;
    this._mass = ensureElement<HTMLElement>(".card__mass", container);

    if ("orbitRadius" in data) {
      this._orbitRadius = ensureElement<HTMLElement>(
        ".card__orbitRadius",
        container
      );
      this._rotationSpeed = ensureElement<HTMLElement>(
        ".card__rotationSpeed",
        container
      );
      this._axialRotationPeriod = ensureElement<HTMLElement>(
        ".card__axialRotationPeriod",
        container
      );
      this._rotationPeriod = ensureElement<HTMLElement>(
        ".card__rotationPeriod",
        container
      );
      this._dayDuration = ensureElement<HTMLElement>(
        ".card__dayDuration",
        container
      );
    }
  }

  render(): HTMLElement {
    this.setText(this._name, this.data.name);
    this.setImage(this._image, this.data.image, this.data.name);
    this.setText(this._mass, `Масса: ${this.data.mass} кг`);

    if ("orbitRadius" in this.data) {
      this.setText(
        this._orbitRadius!,
        `Орбитальный радиус: ${this.data.orbitRadius} км`
      );
      this.setText(
        this._rotationSpeed!,
        `Скорость вращения: ${this.data.rotationSpeed} км/с`
      );
      this.setText(
        this._axialRotationPeriod!,
        `Период осевого вращения: ${this.data.axialRotationPeriodHours} часов`
      );
      const celestialBody = new SpaceObject(
        this.data.name,
        this.data.mass,
        this.data.orbitRadius,
        this.data.rotationSpeed,
        this.data.axialRotationPeriodHours,
        this.data.image
      );

      this.setText(
        this._rotationPeriod!,
        `Период вращения: ${celestialBody.rotationPeriodDays().toFixed()} дней`
      );
      this.setText(
        this._dayDuration!,
        `Продолжительность дня: ${celestialBody.dayDurationHours()} часа`
      );
    }

    return this.container;
  }
}
