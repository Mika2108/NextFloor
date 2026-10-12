// Roof sections: the plain geometry of a section and the proposal of sections from the rooms, split into modules in roof/.

export { sectionFrame, sectionProfile, sectionUV, ridgeHeight, type SectionFrame, type SectionProfile } from "./roof/frame.ts";
export { offsetPolygon, sectionPolygon, polygonBox, floorOutline } from "./roof/polygons.ts";
export { sectionGeometry, sectionHeightAt, cutHole, sectionOverhang, type Q, type SectionGeometry, type SectionOverhang } from "./roof/geometry.ts";
export { dormerParent, dormerHole, dormerHoles, proposeDormer, effectiveDormer } from "./roof/dormers.ts";
export { ROOF_THICK, headroomLines, roofRider, roofSectionsFromRooms, roofUnderAt, sectionCutsBelow, sectionFloor, wallTopUnder, type RoofHolder } from "./roof/proposal.ts";
