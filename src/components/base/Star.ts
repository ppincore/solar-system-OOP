import { IStar } from "../../types";

export class Star implements IStar {
  name: string;
  mass: number;
  constructor(name:string,mass:number){
    this.mass = mass
    this.name = name
  }
}
