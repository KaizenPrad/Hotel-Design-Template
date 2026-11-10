import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import RoomCard from "@/components/rooms/RoomCard";
import { getFeaturedRooms } from "@/data/rooms";

export default function RoomsPreview() {
  const featured = getFeaturedRooms();

  return (
    <section className="border-t border-line bg-ink pb-24 pt-20 sm:pb-28 sm:pt-24 lg:pb-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Discover refined accommodation"
          title="Rooms & Suites"
          description="Thoughtfully designed spaces where timeless elegance meets modern comfort."
          actions={
            <Button to="/rooms" variant="outline" arrow>
              View All Rooms
            </Button>
          }
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {featured.map((room, index) => (
            <RoomCard key={room.slug} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
