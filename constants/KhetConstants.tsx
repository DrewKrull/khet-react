export const serviceURL = process.env.NEXT_PUBLIC_KHET_ENDPOINT_URL;
console.log(serviceURL);
export const newGameEndpoint = serviceURL + "newGame";
export const loadGameEndpoint = serviceURL + "loadGame";
export const savedGamesEndpoint = serviceURL + "savedGames";
export const loginEndpoint = serviceURL + "login";
export const makeMoveEndpoint = serviceURL + "move";
export const registerUserEndpoint = serviceURL + "registerUser";
export const opponentsEndpoint = serviceURL + "getOpponents";
export const pollGameEndpoint = serviceURL + "gameRevision";
export const pollNotificationsEndpoint = serviceURL + "notifs";
export const rulesEndpoint = serviceURL + "rules";
console.log(rulesEndpoint);

export const PLAYER_GREY = "GREY";
export const PLAYER_RED = "RED";

// Config options
export const configurationOptions = [{ display: "Classic", value: "CLASSIC" }];

// Board directions
export const BOARD_DIR_SOUTH = "SOUTH";
export const BOARD_DIR_NORTH = "NORTH";
export const BOARD_DIR_EAST = "EAST";
export const BOARD_DIR_WEST = "WEST";

// Entity Types
export const ENTITY_TYPE_DJED = "Djed";
export const ENTITY_TYPE_OBELISK = "Obelisk";
export const ENTITY_TYPE_PHAROAH = "Pharoah";
export const ENTITY_TYPE_PYRAMID = "Pyramid";
export const ENTITY_TYPE_EMPTY = "Empty";
export const ENTITY_TYPE_EMITTER = "Emitter";

// Move options
export const MOVE_ROTATE = "ROTATE";
export const MOVE_ROTATE_COUNTER = "ROTATE_COUNTER";
export const MOVE_MOVE = "MOVE";

// Image base path
export const IMAGE_PATH = "/images/";
// Images
export const IMAGE_KHET_HEADER = "header.png";
export const IMAGE_EMPTY_RED = "redEmpty.png";
export const IMAGE_EMPTY_GREY = "greyEmpty.png";
export const IMAGE_EMPTY_DARK_GREY = "darkGreyEmpty.png";
export const IMAGE_DJED_GREY = "greyDjed.png";
export const IMAGE_OBELISK_GREY_DOUBLE = "greyDoubleObelisk.png";
export const IMAGE_EMITTER_GREY = "greyEmitter.png";
export const IMAGE_EMITTER_RED = "redEmitter.png";

export const IMAGE_OBELISK_GREY_SINGLE = "greySingleObelisk.png";
export const IMAGE_PHAROAH_GREY = "greyPharoah.png";
export const IMAGE_PYRAMID_GREY = "greyPyramid.png";
export const IMAGE_DJED_RED = "redDjed.png";
export const IMAGE_OBELISK_RED_DOUBLE = "redDoubleObelisk.png";
export const IMAGE_OBELISK_RED_SINGLE = "redSingleObelisk.png";
export const IMAGE_PHAROAH_RED = "redPharoah.png";
export const IMAGE_PYRAMID_RED = "redPyramid.png";
export const IMAGE_LASER_HOR = "laser-horizontal.png";
export const IMAGE_LASER_VER = "laser-vertical.png";
export const IMAGE_LASER_BENT_SE = "laser-bent-SE.png";
export const IMAGE_LASER_BENT_SW = "laser-bent-SW.png";
export const IMAGE_LASER_BENT_NW = "laser-bent-NW.png";
export const IMAGE_LASER_BENT_NE = "laser-bent-NE.png";
