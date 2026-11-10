import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ExperienceCard from "@/components/home/ExperienceCard";
import { experiences } from "@/data/experiences";

const aspects = [
  "aspect-[4/5]",
  "aspect-[4/3]",
  "aspect-[4/5]",
  "aspect-[4/3]",
  "aspect-[4/5]",
  "aspect-[4/3]",
];

export default function ExperiencesPreview() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Curated by our concierge"
          title={
            <>
              Experience New York
              <br />
              <span className="italic text-champagne">Differently</span>
            </>
          }
          description="A private car, a table above the skyline, the quiet hour before the city wakes — the city is best seen through someone else's front door. Ours is open to you."
          actions={
            <Button to="/experiences" variant="outline" arrow>
              View All Experiences
            </Button>
          }
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <Reveal key={experience.slug} delay={Math.min(index * 0.06, 0.3)}>
              <ExperienceCard
                experience={experience}
                aspectClass={aspects[index]}
                className={index % 2 === 1 ? "md:mt-10" : ""}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
