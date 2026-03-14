import { experienceTimeline } from "@/data/experience";
import { Timeline, TimelineItem } from "@/components/site/Timeline";

export function ExperienceTimeline() {
  return (
    <Timeline>
      {experienceTimeline.map((item) => (
        <TimelineItem
          key={`${item.company}-${item.period}`}
          period={item.period}
          title={item.role}
          subtitle={`${item.company} - ${item.location}`}
        >
          <ul className="space-y-1.5">
            {item.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {highlight}
              </li>
            ))}
          </ul>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
