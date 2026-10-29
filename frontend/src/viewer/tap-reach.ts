// tap_in_room: which devices a tap may switch, by where they stand and what is opened.

/** Where a device stands, or what is opened in the view (null: the whole house, or the whole floor). */
export interface Place {
  floorId: string | null;
  roomId: string | null;
}

/** A device in a room can be switched once that room is open; one outside any room once its floor is open. */
export function inReach(device: Place, opened: Place): boolean {
  return device.roomId ? device.roomId === opened.roomId : device.floorId === opened.floorId;
}
