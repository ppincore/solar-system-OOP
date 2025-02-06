export class SpaceObject {
  constructor(
    public name: string,
    public mass: number,
    public orbitRadius: number,
    public rotationSpeed: number,
    public axialRotationPeriodHours: number,
    public image: string = ""
  ) {}

  // Метод для вычисления периода вращения в днях
  rotationPeriodDays(): number {
    const rotationPeriodSeconds =
      (2 * Math.PI * this.orbitRadius) / this.rotationSpeed;
    return rotationPeriodSeconds / (24 * 3600); // Переводим секунды в дни
  }

  // Метод для получения продолжительности суток в часах
  dayDurationHours(): number {
    return this.axialRotationPeriodHours;
  }
}
