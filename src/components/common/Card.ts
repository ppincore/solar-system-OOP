import { Component } from "../base/Component";
import { IPlanet, ISatellite } from "../../types";
import { ensureElement } from "../../utils/utils";

export class Card extends Component<IPlanet | ISatellite> {
  protected _title: HTMLElement;
  protected _image: HTMLImageElement;
  protected _mass: HTMLElement;
  protected _distance: HTMLElement;
  protected _orbitalSpeed: HTMLElement;
  protected _rotatonSpeed: HTMLElement;
  protected _satellites: HTMLElement;

  constructor(container: HTMLElement) {
    super(container);
    this._title = ensureElement<HTMLElement>("card__title", container);
    this._image = ensureElement<HTMLImageElement>("card__image", container);
    this._mass = ensureElement<HTMLElement>("card__mass", container);
    this._distance = ensureElement<HTMLElement>("card__distance", container);
    this._orbitalSpeed = ensureElement<HTMLElement>(
      "card__orbitalSpeed",
      container
    );
    this._rotatonSpeed = ensureElement<HTMLElement>(
      "card__rotatonSpeed",
      container
    );
    this._satellites = ensureElement<HTMLElement>(
      "card__satellites",
      container
    );
  }

  set title(value: string) {
    this.setText(this._title, value);
  }
  set image(value: string) {
    this.setImage(this._image, value);
  }
  set mass(value: number) {
    this.setText(this._mass, value);
  }

  set distance(value: number) {
    this.setText(this._distance, value);
  }
  set orbitalSpeed(value: number) {
    this.setText(this._orbitalSpeed, value);
  }
  set rotationSpeed(value: number) {
    this.setText(this._rotatonSpeed, value);
  }
  set satellites(value: number) {
    this.setText(this._satellites, value);
  }
}
