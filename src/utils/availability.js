import { rooms } from "../data/rooms";

export function roomsForSearch(search, list = rooms) {
  return list.filter((room) => {
    if (search.roomType && search.roomType !== "all" && room.category !== search.roomType) {
      return false;
    }
    const capacity = room.guests * (Number(search.rooms) || 1);
    return capacity >= (Number(search.guests) || 1);
  });
}

export function unitsLeft(room, search) {
  const seed = `${room.slug}-${search.checkIn}-${search.checkOut}`;
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) % 997;
  }
  return 1 + (hash % 4);
}
