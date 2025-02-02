export interface IStar {
	name:string
	mass:number
}

export interface IPlanet {
	name:string
	mass:number
	distanceFromStar:number
	orbitalSpeed:number
	rotationSpeed:number
	satellites:ISatellite[]
	calculateOrbitalPeriod(): number 
	calculateDayLength():number
	addSatellite(items:ISatellite):void
}

export type IPlanetConfig = Omit<IPlanet,'calculateOrbitalPeriod' | 'calculateDayLength' | 'addSatellite'>
export type ISatelliteConfig = Omit<ISatellite,'calculateOrbitalPeriod' | 'calculateDayLength'>

export interface ISatellite{
	name:string
	mass:number
	distanceFromPlanet:number
	orbitalSpeed:number
	rotationSpeed:number
	calculateOrbitalPeriod(): number 
	calculateDayLength():number
}