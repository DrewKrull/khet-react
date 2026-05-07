import {
  ENTITY_TYPE_DJED,
  ENTITY_TYPE_EMPTY,
  ENTITY_TYPE_OBELISK,
  ENTITY_TYPE_PHAROAH,
  ENTITY_TYPE_PYRAMID,
  IMAGE_DJED_GREY,
  IMAGE_DJED_RED,
  IMAGE_EMPTY_DARK_GREY,
  IMAGE_OBELISK_GREY_DOUBLE,
  IMAGE_OBELISK_RED_DOUBLE,
  IMAGE_PATH,
  IMAGE_PHAROAH_GREY,
  IMAGE_PHAROAH_RED,
  IMAGE_PYRAMID_GREY,
  IMAGE_PYRAMID_RED,
  PLAYER_GREY,
  PLAYER_RED,
} from "@/constants/KhetConstants";

function entityToImage(entityType, entityPlayer) {
  let imageFile = IMAGE_PATH;

  if (entityType == ENTITY_TYPE_DJED) {
    if (entityPlayer == PLAYER_RED) imageFile += IMAGE_DJED_GREY;
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

export default entityToImage;
