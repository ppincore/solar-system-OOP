import { Component } from './base/Component';
import { ensureElement } from '../utils/utils';

interface IPage {
	catalog: HTMLElement[];
}

export class Page extends Component<IPage> {
	protected _catalog: HTMLElement;
	constructor(contaier: HTMLElement) {
		super(contaier);
		this._catalog = ensureElement<HTMLElement>('.gallery');
	}
	set catalog(items: HTMLElement[]) {
		this._catalog.replaceChildren(...items);
	}
}