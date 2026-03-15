import { BlogPost } from "../types/blog";
import { legacyBlogSlugMap } from "../legacy-slug-maps";

export type { BlogPost };

import { post as how_i_almost_failed_at_modding } from "./how-i-almost-failed-at-modding";
import { post as growth_a_designer_s_journey } from "./growth-a-designer-s-journey";
import { post as how_i_groom_my_designers_at_athenahealth } from "./how-i-groom-my-designers-at-athenahealth";
import { post as framework_first_design_a_scalable_approach_to_problem_solving } from "./framework-first-design-a-scalable-approach-to-problem-solving";
import { post as consistency_at_scale_with_systems_thinking } from "./consistency-at-scale-with-systems-thinking";
import { post as why_athenahealth_rocks_for_designers } from "./why-athenahealth-rocks-for-designers";
import { post as think_about_the_users_of_your_prototype } from "./think-about-the-users-of-your-prototype";
import { post as _21_billion_reasons_to_set_the_default } from "./21-billion-reasons-to-set-the-default";
import { post as defensive_design_framework } from "./defensive-design-framework";
import { post as story_of_a_5_years_old_kid_and_a_designer } from "./story-of-a-5-years-old-kid-and-a-designer";
import { post as how_i_changed_the_way_women_buy_bras_online } from "./how-i-changed-the-way-women-buy-bras-online";
import { post as impact_of_ux_in_b2b_segments } from "./impact-of-ux-in-b2b-segments";
import { post as designing_to_engage_convert_customers } from "./designing-to-engage-convert-customers";
import { post as _10_key_takeaways_from_ux_india_conference_2016 } from "./10-key-takeaways-from-ux-india-conference-2016";
import { post as _7_things_yappily_should_do_for_better_ux } from "./7-things-yappily-should-do-for-better-ux";
import { post as layout_design_inspiration_from_music } from "./layout-design-inspiration-from-music";
import { post as _10_ways_to_screw_up_your_ux_design } from "./10-ways-to-screw-up-your-ux-design";
import { post as preparing_for_your_next_ux_interview } from "./preparing-for-your-next-ux-interview";
import { post as lining_and_oldstyle_numbers_for_webfonts } from "./lining-and-oldstyle-numbers-for-webfonts";
import { post as naked_mermaids_without_fins } from "./naked-mermaids-without-fins";
import { post as _15_design_issues_hiree_could_fix_today } from "./15-design-issues-hiree-could-fix-today";
import { post as three_mantras_behind_notuser_com } from "./three-mantras-behind-notuser-com";
import { post as paradox_of_choice } from "./paradox-of-choice";
import { post as a_serene_world_based_on_balance } from "./a-serene-world-based-on-balance";

export const blogPosts: BlogPost[] = [
  how_i_almost_failed_at_modding,
  growth_a_designer_s_journey,
  how_i_groom_my_designers_at_athenahealth,
  framework_first_design_a_scalable_approach_to_problem_solving,
  consistency_at_scale_with_systems_thinking,
  why_athenahealth_rocks_for_designers,
  think_about_the_users_of_your_prototype,
  _21_billion_reasons_to_set_the_default,
  defensive_design_framework,
  story_of_a_5_years_old_kid_and_a_designer,
  how_i_changed_the_way_women_buy_bras_online,
  impact_of_ux_in_b2b_segments,
  designing_to_engage_convert_customers,
  _10_key_takeaways_from_ux_india_conference_2016,
  _7_things_yappily_should_do_for_better_ux,
  layout_design_inspiration_from_music,
  _10_ways_to_screw_up_your_ux_design,
  preparing_for_your_next_ux_interview,
  lining_and_oldstyle_numbers_for_webfonts,
  naked_mermaids_without_fins,
  _15_design_issues_hiree_could_fix_today,
  three_mantras_behind_notuser_com,
  paradox_of_choice,
  a_serene_world_based_on_balance,
];

export function resolveBlogSlug(slug: string) {
  return legacyBlogSlugMap[slug] ?? slug;
}

export function getBlogPostBySlug(slug: string) {
  const resolved = resolveBlogSlug(slug);
  return blogPosts.find((post) => post.slug === resolved);
}
