const materials = {
    Aluminum: 0xaaaaaa, // Light gray color for Aluminum
    Titanium: 0x555555, // Darker gray for Titanium
  };
  
  export const initialRocket = {
    stages: [
      { name: "S1 Lox cylinder", diameter: 2, length: 5, material: "Aluminum", mass: 500, color: materials.Aluminum },
      { name: "S2 Lox cylinder", diameter: 1.5, length: 3, material: "Aluminum", mass: 300, color: materials.Aluminum },
    ],
  };
  
  export const optimizedRocket = {
    stages: [
      { name: "S1 Lox cylinder optimized", diameter: 1.8, length: 6, material: "Titanium", mass: 450, color: materials.Titanium },
      { name: "S2 Lox cylinder optimized", diameter: 1.4, length: 4, material: "Titanium", mass: 280, color: materials.Titanium },
    ],
  };