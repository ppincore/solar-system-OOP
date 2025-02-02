export interface IBaseSpaceObject {
	name: string;
	mass: number;
	image:string;
	type: 'planet' | 'satellite'
	orbitalSpeed: number;
	rotationSpeed: number;
  }

  export interface ISatellite extends IBaseSpaceObject{
	type: 'satellite',
	distanceFromPlanet: number,

  }
  export interface IPlanet extends IBaseSpaceObject {
	type: 'planet';
	distanceFromStar: number;
	satellites: ISatellite[];
  }