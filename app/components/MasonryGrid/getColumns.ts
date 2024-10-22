// Evitar usar magic numbers y magic strings
enum SIZES {
  SMALL = 380,
  MEDIUM = 640,
  LARGE = 1024,
  EXTRA_LARGE = 1280,
}
enum COLNUMS {
  SMALL = 1,
  MEDIUM = 2,
  LARGE = 3,
  EXTRA_LARGE = 4,
  DEFAULT = 5,
}

// MANTENER LA S DE SOLID, SINGLE RESPONSABILITY
// Si se tiene junto al componente, se rompe la responsabilidad unica del fichero.
export const getColumns = (width: number | undefined) => {
  // if (width <= 380) return 1; //Columnas pantallas pequeñas
  // if (width <= 640) return 2;
  // if (width <= 1024) return 3;
  // if (width <= 1280) return 4;
  // return 5; // Columnas pantallas grandes
  if (!width) return COLNUMS.DEFAULT;

  if (width <= SIZES.SMALL) return COLNUMS.SMALL;
  if (width <= SIZES.MEDIUM) return COLNUMS.MEDIUM;
  if (width <= SIZES.LARGE) return COLNUMS.LARGE;
  if (width <= SIZES.EXTRA_LARGE) return COLNUMS.EXTRA_LARGE;
  return COLNUMS.DEFAULT;
};
