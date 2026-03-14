import { skillCategories } from "@/data/skills";

export function SkillGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skillCategories.map((category) => (
        <section
          key={category.category}
          className="rounded-xl border border-border bg-card p-5"
        >
          <h3 className="text-sm font-semibold text-foreground">{category.category}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-border/80 bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
