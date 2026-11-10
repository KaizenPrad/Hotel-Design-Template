import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { rooms } from "../data/rooms";
import { addDays, isValidStay, nightsBetween, toISODate } from "../utils/date";
import { bookingTotals } from "../utils/pricing";

const BookingContext = createContext(null);
const SEARCH_KEY = "luxe-haven.search";
const ROOM_KEY = "luxe-haven.room";
const RESERVATION_KEY = "luxe-haven.reservation";

function createDefaultSearch() {
  const start = addDays(new Date(), 14);
  return {
    checkIn: toISODate(start),
    checkOut: toISODate(addDays(start, 3)),
    guests: 2,
    rooms: 1,
    roomType: "all",
  };
}

function loadSearch() {
  try {
    const raw = window.localStorage.getItem(SEARCH_KEY);
    if (!raw) return createDefaultSearch();
    const parsed = JSON.parse(raw);
    if (!parsed?.checkIn || !parsed?.checkOut) return createDefaultSearch();
    if (!isValidStay(parsed.checkIn, parsed.checkOut)) return createDefaultSearch();
    return {
      ...createDefaultSearch(),
      ...parsed,
      guests: Number(parsed.guests) || 2,
      rooms: Number(parsed.rooms) || 1,
    };
  } catch {
    return createDefaultSearch();
  }
}

function loadRoomId() {
  try {
    const slug = window.localStorage.getItem(ROOM_KEY);
    return rooms.some((room) => room.slug === slug) ? slug : null;
  } catch {
    return null;
  }
}

function loadReservation() {
  try {
    const raw = window.localStorage.getItem(RESERVATION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function BookingProvider({ children }) {
  const [search, setSearchState] = useState(loadSearch);
  const [selectedRoomId, setSelectedRoomId] = useState(loadRoomId);
  const [confirmation, setConfirmation] = useState(loadReservation);

  useEffect(() => {
    try {
      window.localStorage.setItem(SEARCH_KEY, JSON.stringify(search));
    } catch {
      /* storage unavailable */
    }
  }, [search]);

  useEffect(() => {
    try {
      if (selectedRoomId) window.localStorage.setItem(ROOM_KEY, selectedRoomId);
      else window.localStorage.removeItem(ROOM_KEY);
    } catch {
      /* storage unavailable */
    }
  }, [selectedRoomId]);

  const updateSearch = useCallback((patch) => {
    setSearchState((current) => ({ ...current, ...patch }));
  }, []);

  const setSearch = useCallback((next) => {
    setSearchState((current) => ({ ...current, ...next }));
  }, []);

  const selectRoom = useCallback((slug) => {
    setSelectedRoomId(slug);
  }, []);

  const selectedRoom = useMemo(
    () => rooms.find((room) => room.slug === selectedRoomId) ?? null,
    [selectedRoomId],
  );

  const nights = useMemo(
    () => nightsBetween(search.checkIn, search.checkOut),
    [search.checkIn, search.checkOut],
  );

  const totals = useMemo(() => {
    if (!selectedRoom || nights <= 0) return { subtotal: 0, taxes: 0, total: 0 };
    return bookingTotals(selectedRoom.price, nights, search.rooms);
  }, [selectedRoom, nights, search.rooms]);

  const confirmBooking = useCallback(
    (guest) => {
      if (!selectedRoom) return null;
      const reservation = {
        code: `LH-${Date.now().toString(36).toUpperCase().slice(-6)}`,
        guest,
        search,
        roomSlug: selectedRoom.slug,
        roomName: selectedRoom.name,
        roomImage: selectedRoom.image,
        pricePerNight: selectedRoom.price,
        nights,
        ...totals,
        createdAt: new Date().toISOString(),
      };
      setConfirmation(reservation);
      try {
        window.localStorage.setItem(RESERVATION_KEY, JSON.stringify(reservation));
      } catch {
        /* storage unavailable */
      }
      return reservation;
    },
    [selectedRoom, search, nights, totals],
  );

  const clearConfirmation = useCallback(() => {
    setConfirmation(null);
    setSelectedRoomId(null);
    try {
      window.localStorage.removeItem(RESERVATION_KEY);
      window.localStorage.removeItem(ROOM_KEY);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const resetSearch = useCallback(() => {
    setSearchState(createDefaultSearch());
  }, []);

  const value = useMemo(
    () => ({
      search,
      setSearch,
      updateSearch,
      resetSearch,
      nights,
      selectedRoom,
      selectRoom,
      totals,
      confirmation,
      confirmBooking,
      clearConfirmation,
    }),
    [
      search,
      setSearch,
      updateSearch,
      resetSearch,
      nights,
      selectedRoom,
      selectRoom,
      totals,
      confirmation,
      confirmBooking,
      clearConfirmation,
    ],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used within a BookingProvider");
  return context;
}
