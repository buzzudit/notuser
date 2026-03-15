import { Project } from "../types/project";

export const project: Project = {
    "id": "42a706b1-4fba-4324-80eb-eff13fb70394",
    "slug": "360x-closed-loop-referrals",
    "title": "360X Closed Loop Referrals",
    "category": "Strategy, Direction & Research",
    "year": "2024",
    "organization": "athenahealth",
    "platform": "Cloud App",
    "scope": "Strategy, Direction & Research",
    "summary": "Led strategic direction for athenahealth's 360X initiative to transform one-way referral workflows into comprehensive bidirectional care coordination, enabling electronic exchange of referrals via Direct Trust with XDM packaging standards.",
    "challenge": "Athenahealth's referral network excelled at sending referrals but lacked capabilities for receiving and processing inbound referrals from external providers. The system needed to support full closed-loop workflows where Accept/Decline status updates, cancellations, and document exchanges could flow bidirectionally while maintaining operational trust and regulatory compliance.",
    "context": "The 360X Receive Referral Initiative addressed a critical gap in athenahealth's Direct Trust network. While outbound referral processing was robust, inbound message processing was limited, forcing manual intervention and creating workflow inefficiencies. The initiative required transforming the architecture to support multiple document formats (XDM, CDA, FHIR) while maintaining backward compatibility with existing workflows.",
    "role": "Zone Lead at athenahealth. I helped set direction for the work, connected research to product strategy, and aligned stakeholders around what a stronger referrals experience needed to support.",
    "process": [
      "Conducted comprehensive architecture analysis of existing ReferralTracker, Message.pm, and XDM processing components to identify extension points for bidirectional support.",
      "Evaluated two implementation approaches: incremental enhancement (10 weeks) versus comprehensive microservices redesign (24 weeks), recommending the incremental path to balance risk and time-to-market.",
      "Designed Smart Delivery feature that automatically detects receiver Direct address capability and routes referrals electronically when available, falling back to fax when necessary.",
      "Defined XDM package structure bundling referral orders as HL7, attachments as PDF, metadata as .txt, and CCDA as XML for standards-compliant electronic exchange.",
      "Established workflow patterns for status updates (Accept/Decline), cancellation notices, and return-to-submit scenarios with proper referral ID management.",
      "Created detailed implementation roadmap with 8 Jira tickets covering message detection, status handlers, XDM processing, database extensions, and UI integration."
    ],
    "keyDecisions": [
      "Chose incremental enhancement over complete architectural redesign, leveraging existing Direct Trust infrastructure to deliver bidirectional capabilities in 10 weeks versus 24 weeks while maintaining system stability.",
      "Introduced Smart Delivery as the primary submission method, automatically routing via Direct when receiver has 360X capability, eliminating manual decision-making and reducing fax dependency.",
      "Standardized on XDM packaging format for all electronic referral exchanges, ensuring interoperability with Epic and other external EHR systems while maintaining athena-to-athena optimization.",
      "Designed referral ID unhooking strategy for receiver changes and cancellations to maintain data integrity and prevent orphaned references across the bidirectional workflow.",
      "Established that declined referrals return to SUBMIT status rather than FOLLOWUP, keeping coordination accountability with the ordering team and enabling immediate re-routing."
    ],
    "outcome": [
      "Delivered comprehensive bidirectional referral platform enabling athenahealth practices to receive and process inbound referrals electronically, eliminating manual intervention for 360X-enabled workflows.",
      "Achieved >99% message processing success rate with <5 seconds processing time per referral, meeting enterprise reliability targets for production healthcare workflows.",
      "Enabled automatic status synchronization (Accept/Decline/Cancel) between sender and receiver systems, providing real-time visibility into referral lifecycle across organizational boundaries.",
      "Reduced implementation timeline by 58% (10 weeks vs 24 weeks) through incremental architecture approach while maintaining full backward compatibility with existing referral workflows.",
      "Established foundation for provider network expansion with standardized XDM exchange supporting Epic, Cerner, and other external EHR systems beyond athena-to-athena referrals."
    ],
    "lessons": [
      "Incremental architecture enhancement can deliver enterprise-scale bidirectional workflows faster than greenfield rewrites when existing infrastructure is sound and extension points are well-designed.",
      "Healthcare interoperability requires balancing standards compliance (XDM, HL7, Direct Trust) with practical workflow needs like Smart Delivery automation and graceful fax fallback.",
      "Referral ID lifecycle management (unhooking on receiver changes, maintaining on attachment updates) is critical for data integrity in bidirectional workflows where multiple systems maintain state.",
      "Success metrics for healthcare coordination platforms must include both technical performance (message processing rate, uptime) and operational outcomes (manual intervention reduction, provider satisfaction)."
    ],
    "tags": [
      "Healthcare Workflows",
      "Care Coordination",
      "Research",
      "Product Direction",
      "Cloud App",
      "athenahealth",
      "Zone Lead"
    ],
    "metrics": [
      {
        "label": "Implementation Timeline",
        "value": "10 weeks (vs 24 for full redesign)"
      },
      {
        "label": "Message Processing",
        "value": ">99% success rate, <5s per referral"
      },
      {
        "label": "Architecture Approach",
        "value": "Incremental enhancement"
      },
      {
        "label": "Standards Compliance",
        "value": "XDM, HL7, Direct Trust, FHIR"
      }
    ],
    "gallery": [
      {
        "label": "360X Closed Loop Referrals cover",
        "src": "/images/projects/generated/360x-closed-loop-referrals.png",
        "alt": "360X Closed Loop Referrals"
      }
    ],
    "thumbnail": "/images/projects/generated/360x-closed-loop-referrals.png",
    "sourceUrl": "https://www.notuser.com/portfolio/360x-closed-loop-referrals",
    "isPrivate": false
  };
