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

export const getColumns = ( width: number | undefined ) => {
  if ( !width ) return COLNUMS.DEFAULT;

  if ( width <= SIZES.SMALL ) return COLNUMS.SMALL;
  if ( width <= SIZES.MEDIUM ) return COLNUMS.MEDIUM;
  if ( width <= SIZES.LARGE ) return COLNUMS.LARGE;
  if ( width <= SIZES.EXTRA_LARGE ) return COLNUMS.EXTRA_LARGE;
  return COLNUMS.DEFAULT;
}
