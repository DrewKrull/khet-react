import {
  ENTITY_TYPE_DJED,
  ENTITY_TYPE_EMPTY,
  ENTITY_TYPE_OBELISK,
  ENTITY_TYPE_PHAROAH,
  ENTITY_TYPE_PYRAMID,
  IMAGE_DJED_GREY,
  IMAGE_EMPTY_DARK_GREY,
  IMAGE_OBELISK_GREY_DOUBLE,
  IMAGE_PATH,
  IMAGE_PHAROAH_GREY,
  IMAGE_PYRAMID_GREY,
} from "@/constants/KhetConstants";

function entityTypeToImage(entityType) {
  let imageFile = IMAGE_PATH;
  switch (entityType) {
    // All grey to start
    case ENTITY_TYPE_DJED:
      imageFile += IMAGE_DJED_GREY;
      break;
    case ENTITY_TYPE_OBELISK:
      imageFile += IMAGE_OBELISK_GREY_DOUBLE;
      break;
    case ENTITY_TYPE_PHAROAH:
      imageFile += IMAGE_PHAROAH_GREY;
      break;
    case ENTITY_TYPE_PYRAMID:
      imageFile += IMAGE_PYRAMID_GREY;
      break;
    case ENTITY_TYPE_EMPTY:
      imageFile += IMAGE_EMPTY_DARK_GREY;
      break;
    default:
      imageFile = "";
  }
  return imageFile;
  // Chose;
}

export default entityTypeToImage;
