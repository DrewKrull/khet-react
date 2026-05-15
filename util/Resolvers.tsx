import {
  BOARD_DIR_EAST,
  BOARD_DIR_NORTH,
  BOARD_DIR_SOUTH,
  BOARD_DIR_WEST,
  ENTITY_TYPE_DJED,
  ENTITY_TYPE_EMPTY,
  ENTITY_TYPE_OBELISK,
  ENTITY_TYPE_PHAROAH,
  ENTITY_TYPE_PYRAMID,
  IMAGE_DJED_GREY,
  IMAGE_DJED_RED,
  IMAGE_EMPTY_DARK_GREY,
  IMAGE_LASER_BENT_NE,
  IMAGE_LASER_BENT_NW,
  IMAGE_LASER_BENT_SE,
  IMAGE_LASER_BENT_SW,
  IMAGE_LASER_HOR,
  IMAGE_LASER_VER,
  IMAGE_OBELISK_GREY_DOUBLE,
  IMAGE_OBELISK_RED_DOUBLE,
  IMAGE_PATH,
  IMAGE_PHAROAH_GREY,
  IMAGE_PHAROAH_RED,
  IMAGE_PYRAMID_GREY,
  IMAGE_PYRAMID_RED,
  PLAYER_RED,
} from "@/constants/KhetConstants";

export function laserDataToImage(cell) {
  let imageFile = IMAGE_PATH;

  // Vertical path
  if (
    (cell.inHeading == BOARD_DIR_SOUTH || cell.inHeading == BOARD_DIR_NORTH) &&
    (cell.outHeading == BOARD_DIR_NORTH || cell.outHeading == BOARD_DIR_SOUTH)
  ) {
    imageFile += IMAGE_LASER_VER;
  }
  // Horizontal path
  else if (
    (cell.inHeading == BOARD_DIR_WEST || cell.inHeading == BOARD_DIR_EAST) &&
    (cell.outHeading == BOARD_DIR_WEST || cell.outHeading == BOARD_DIR_EAST)
  ) {
    imageFile += IMAGE_LASER_HOR;
  }
  // NE
  else if (
    (cell.inHeading == BOARD_DIR_SOUTH && cell.outHeading == BOARD_DIR_EAST) ||
    (cell.inHeading == BOARD_DIR_WEST && cell.outHeading == BOARD_DIR_NORTH)
  ) {
    imageFile += IMAGE_LASER_BENT_NE;
  }
  // SOUTH WEST
  else if (
    (cell.inHeading == BOARD_DIR_EAST && cell.outHeading == BOARD_DIR_SOUTH) ||
    (cell.inHeading == BOARD_DIR_NORTH && cell.outHeading == BOARD_DIR_WEST)
  ) {
    imageFile += IMAGE_LASER_BENT_SW;
  }
  // NORTH EAST
  else if (
    (cell.inHeading == BOARD_DIR_WEST && cell.outHeading == BOARD_DIR_NORTH) ||
    (cell.inHeading == BOARD_DIR_SOUTH && cell.outHeading == BOARD_DIR_EAST)
  ) {
    imageFile += IMAGE_LASER_BENT_NE;
  }
  // NORTH WEST
  else if (
    (cell.inHeading == BOARD_DIR_EAST && cell.outHeading == BOARD_DIR_NORTH) ||
    (cell.inHeading == BOARD_DIR_SOUTH && cell.outHeading == BOARD_DIR_WEST)
  ) {
    imageFile += IMAGE_LASER_BENT_SE;
  }
  return imageFile;
}

export function entityToImage(entityType, entityPlayer) {
  let imageFile = IMAGE_PATH;

  if (entityType == ENTITY_TYPE_DJED) {
    if (entityPlayer == PLAYER_RED) imageFile += IMAGE_DJED_RED;
    else imageFile += IMAGE_DJED_GREY;
  } else if (entityType == ENTITY_TYPE_OBELISK) {
    if (entityPlayer == PLAYER_RED) imageFile += IMAGE_OBELISK_RED_DOUBLE;
    else imageFile += IMAGE_OBELISK_GREY_DOUBLE;
  } else if (entityType == ENTITY_TYPE_PHAROAH) {
    if (entityPlayer == PLAYER_RED) imageFile += IMAGE_PHAROAH_RED;
    else imageFile += IMAGE_PHAROAH_GREY;
  } else if (entityType == ENTITY_TYPE_PYRAMID) {
    if (entityPlayer == PLAYER_RED) imageFile += IMAGE_PYRAMID_RED;
    else imageFile += IMAGE_PYRAMID_GREY;
  } else if (entityType == ENTITY_TYPE_EMPTY) {
    imageFile += IMAGE_EMPTY_DARK_GREY;
  }
  return imageFile;
}
