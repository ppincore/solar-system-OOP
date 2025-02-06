export const starData = {
  name: "Sun",
  mass: 1.989e30,
  image: "https://i.postimg.cc/FFwgVqFb/pngwing-com.png",
};

export const planets = [
  {
    name: "Earth",
    image: "https://i.postimg.cc/ZqyWJNC2/rb-57523.png",
    mass: 5.972e24,
    orbitRadius: 1.496e8,
    rotationSpeed: 29.78,
    axialRotationPeriodHours: 24,
    distanceFromStar: 1.496e8,
    satellites: [
      {
        name: "Moon",
        image: "https://i.postimg.cc/cLPJkJXm/rb-51987.png",
        mass: 7.34767309e22,
        orbitRadius: 3.844e5,
        rotationSpeed: 1.022,
        axialRotationPeriodHours: 655.7,
        distanceFromPlanet: 3.844e5,
      },
    ],
  },
  {
    name: "Mars",
    image:
      "https://i.postimg.cc/rpqd5VVp/stunning-detailed-image-plutos-surface-celestial-view.png",
    mass: 6.39e23,
    orbitRadius: 2.279e8,
    rotationSpeed: 24.077,
    axialRotationPeriodHours: 24.62,
    distanceFromStar: 2.279e8,
    satellites: [
      {
        name: "Phobos",
        image: "https://i.postimg.cc/8cNXp0Fr/phobos-1.png",
        mass: 1.0659e16,
        orbitRadius: 9.377e3,
        rotationSpeed: 2.138,
        axialRotationPeriodHours: 7.66,
        distanceFromPlanet: 9.377e3,
      },
      {
        name: "Deimos",
        image: "https://i.postimg.cc/NMhPVMBD/deimos.png",
        mass: 1.4762e15,
        orbitRadius: 2.346e4,
        rotationSpeed: 1.351,
        axialRotationPeriodHours: 30.35,
        distanceFromPlanet: 2.346e4,
      },
    ],
  },
];
