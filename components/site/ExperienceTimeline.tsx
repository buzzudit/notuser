import { companyProfiles, experienceTimeline } from "@/data/experience";
import { Timeline, TimelineItem } from "@/components/site/Timeline";
import { CompanyLogo } from "@/components/site/CompanyLogo";
import { CompanyHoverCard } from "@/components/site/CompanyHoverCard";

export function ExperienceTimeline() {
  return (
    <Timeline>
      {experienceTimeline.map((item) => (
        <TimelineItem
          key={`${item.company}-${item.period}`}
          period={item.period}
          title={item.role}
          subtitle={
            <>
              <CompanyHoverCard
                company={item.company}
                profile={companyProfiles[item.company]}
                logo={item.logo}
                align="start"
              >
                <span className="underline decoration-dotted decoration-border underline-offset-4 transition-colors hover:text-foreground">
                  {item.company}
                </span>
              </CompanyHoverCard>
              {` - ${item.location}`}
            </>
          }
          mark={
            <CompanyHoverCard
              company={item.company}
              profile={companyProfiles[item.company]}
              logo={item.logo}
              align="start"
            >
              <CompanyLogo company={item.company} logo={item.logo} />
            </CompanyHoverCard>
          }
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
