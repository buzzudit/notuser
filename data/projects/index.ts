import { Project, ProjectMetric, ProjectGalleryItem } from "../types/project";

export type { Project, ProjectMetric, ProjectGalleryItem };

import { project as _360x_closed_loop_referrals } from "./360x-closed-loop-referrals";
import { project as data_exports } from "./data-exports";
import { project as data_imports_self_service } from "./data-imports-self-service";
import { project as insights_and_reporting } from "./insights-and-reporting";
import { project as payer_solutions } from "./payer-solutions";
import { project as unified_rollout_flags } from "./unified-rollout-flags";
import { project as user_journey_framework } from "./user-journey-framework";
import { project as vision_platform_and_data_services } from "./vision-platform-and-data-services";
import { project as design_quality } from "./design-quality";
import { project as data_migration_mapping_self_service } from "./data-migration-mapping-self-service";
import { project as developer_portal } from "./developer-portal";
import { project as marketplace } from "./marketplace";
import { project as athenanet_device_manager } from "./athenanet-device-manager";
import { project as athenahealth_corporate_website } from "./athenahealth-corporate-website";
import { project as fine_grained_access_control } from "./fine-grained-access-control";
import { project as go_quality } from "./go-quality";
import { project as quick_pay } from "./quick-pay";
import { project as content_led_commerce_at_zivame } from "./content-led-commerce-at-zivame";
import { project as old_developer_portal } from "./old-developer-portal";
import { project as zivame_apps_for_android_and_ios } from "./zivame-apps-for-android-and-ios";
import { project as zivame_champions_b2b_trade_portal } from "./zivame-champions-b2b-trade-portal";
import { project as zivame_com_ecommerce_store } from "./zivame-com-ecommerce-store";
import { project as ceos_keynote_2015 } from "./ceos-keynote-2015";
import { project as kaseya_corporate_website } from "./kaseya-corporate-website";
import { project as enterprise_mobility_management } from "./enterprise-mobility-management";
import { project as video_on_demand_catalog } from "./video-on-demand-catalog";
import { project as evo_12_for_television } from "./evo-12-for-television";
import { project as evo_3d_for_television } from "./evo-3d-for-television";
import { project as evo_lite_for_television } from "./evo-lite-for-television";
import { project as express_branding_tool } from "./express-branding-tool";
import { project as free_hand_animation_tool } from "./free-hand-animation-tool";
import { project as hungry_lion_game } from "./hungry-lion-game";
import { project as slidemaker_app } from "./slidemaker-app";

import { legacyProjectSlugMap } from "../legacy-slug-maps";

export const projects: Project[] = [
  _360x_closed_loop_referrals,
  data_exports,
  data_imports_self_service,
  insights_and_reporting,
  payer_solutions,
  unified_rollout_flags,
  user_journey_framework,
  vision_platform_and_data_services,
  design_quality,
  data_migration_mapping_self_service,
  developer_portal,
  marketplace,
  athenanet_device_manager,
  athenahealth_corporate_website,
  fine_grained_access_control,
  go_quality,
  quick_pay,
  content_led_commerce_at_zivame,
  old_developer_portal,
  zivame_apps_for_android_and_ios,
  zivame_champions_b2b_trade_portal,
  zivame_com_ecommerce_store,
  ceos_keynote_2015,
  kaseya_corporate_website,
  enterprise_mobility_management,
  video_on_demand_catalog,
  evo_12_for_television,
  evo_3d_for_television,
  evo_lite_for_television,
  express_branding_tool,
  free_hand_animation_tool,
  hungry_lion_game,
  slidemaker_app,
];

export function resolveProjectSlug(slug: string) {
  return legacyProjectSlugMap[slug] ?? slug;
}

export function getProjectBySlug(slug: string) {
  const resolved = resolveProjectSlug(slug);
  return projects.find((project) => project.slug === resolved);
}
