import { Project } from "../types/project";

export const project: Project = {
  id: "42a706b1-4fba-4324-80eb-eff13fb70394",
  slug: "360x-closed-loop-referrals",
  title: "360X Closed Loop Referrals",
  category: "Strategy, Direction & Research",
  year: "2024",
  organization: "athenahealth",
  platform: "Cloud App",
  scope: "Strategy, Direction & Research",
  summary: "Thousands of referrals left athenahealth's network every day. Most of them disappeared. This is the story of closing that loop.",
  challenge: "Athenahealth's referral network excelled at sending but had no mechanism for receiving. Accept, decline, cancel — none of it came back. Care coordinators filled the gap with phone calls. Patients fell through silences the software couldn't see.",
  context: "The 360X Receive Referral Initiative addressed a structural gap in athenahealth's Direct Trust network. The outbound path was robust. The inbound path didn't exist. Fixing it meant extending the architecture to support bidirectional XDM/HL7/FHIR exchange while keeping the thousands of practices already live on the outbound flow completely unaffected.",
  role: "Zone Lead at athenahealth. I set product direction, made the architecture recommendation, designed the Smart Delivery experience, and owned the workflow decisions that determined how the system behaved across a dozen edge cases most teams never map.",
  process: [
    "Mapped the full referral lifecycle — sent, received, accepted, declined, cancelled, re-routed — to understand every state transition and where the current system had no answer.",
    "Audited ReferralTracker.pm, Message.pm, and XDM processing to identify where inbound detection could be added without architectural risk.",
    "Evaluated two implementation paths head-to-head across development effort, risk profile, delivery timeline, and long-term maintainability.",
    "Designed Smart Delivery: a routing layer that makes the technology decision invisible to the care coordinator.",
    "Defined XDM package structure — HL7 order, PDF attachments, .txt metadata, XML CCDA — for standards-compliant exchange with Epic, Cerner, and any Direct Trust endpoint.",
    "Mapped five return-to-submit scenarios to determine correct referral ID lifecycle behavior for each, preventing orphaned records across bidirectional systems.",
    "Built and sequenced an 8-ticket roadmap covering message detection, status handlers, database schema extensions, and UI integration."
  ],
  keyDecisions: [
    "Recommended incremental enhancement over microservices redesign — 10 weeks to delivery instead of 24, with the long-term architecture documented as a Phase 2 north star.",
    "Made Smart Delivery the default submission path, removing the routing decision from care coordinators entirely.",
    "Standardized on XDM packaging for all electronic exchange to ensure interoperability beyond the athena network.",
    "Designed referral ID unhooking as an explicit pattern — receiver changes trigger cancellation to the prior recipient and a clean transmission to the new one.",
    "Established that declined referrals return to SUBMIT rather than FOLLOWUP, keeping coordination accountability with the ordering team."
  ],
  outcome: [
    "Delivered the first bidirectional referral capability in athenahealth's Direct Trust network — inbound referrals now process electronically without manual intervention.",
    "Message processing success rate above 99%, with under 5 seconds per referral in production.",
    "Automatic status synchronization (Accept/Decline/Cancel) across sender and receiver systems, giving practices real-time visibility for the first time.",
    "Implementation delivered in 10 weeks — 58% faster than the alternative path — without disrupting any existing workflows.",
    "Interoperability foundation now covers Epic, Cerner, and any EHR that speaks Direct Trust."
  ],
  lessons: [
    "The right architectural decision and the right product decision are not always the same. Know which one you're making.",
    "In healthcare workflows, the edge cases are not edge cases. Map every state transition explicitly — the ones that feel unlikely are exactly the ones that cause real harm.",
    "Interoperability products succeed when the technology becomes invisible. Smart Delivery's best feature is that care coordinators don't think about it.",
    "Measure what the product does to the workflow, not just what the system does technically. Success here wasn't 99% uptime — it was coordinators who stopped picking up the phone."
  ],
  tags: [
    "Healthcare Workflows",
    "Care Coordination",
    "Product Direction",
    "Interoperability",
    "Cloud App",
    "athenahealth",
    "Zone Lead"
  ],
  metrics: [
    { label: "Delivery timeline", value: "10 wks (58% faster)" },
    { label: "Message processing", value: ">99% success, <5s" },
    { label: "Interop coverage", value: "Epic, Cerner + Direct Trust" },
    { label: "Standards", value: "XDM · HL7 · FHIR · Direct" }
  ],
  gallery: [
    {
      label: "360X Closed Loop Referrals",
      src: "/images/projects/generated/360x-closed-loop-referrals.png",
      alt: "360X Closed Loop Referrals"
    }
  ],
  thumbnail: "/images/projects/generated/360x-closed-loop-referrals.png",
  sourceUrl: "https://www.notuser.com/portfolio/360x-closed-loop-referrals",
  isPrivate: false,
  narrative: {
    hook: "Thousands of referrals left athenahealth's network every day. Most of them disappeared.",
    acts: [
      {
        id: "broken-loop",
        chapter: "Act 1 · The Network That Could Only Shout",
        title: "A system built to send, with nothing built to receive",
        prose: [
          "When a physician at an athenahealth practice submitted a referral to a specialist, the system did something remarkable. It assembled a complete, standards-compliant electronic package — the order as HL7, clinical attachments as PDF, a CCDA summary — and transmitted it via Direct Trust to the receiving EHR. Fast. Reliable. Interoperable.",
          "Then nothing.",
          "The sending practice had no idea whether the referral arrived. Whether it was accepted or declined. Whether the patient ever showed up to the appointment. Care coordinators filled the silence with phone calls. Specialists' offices faxed back. Patients fell through gaps that weren't tracked by anyone's software, because the software had been designed to push, not to listen.",
          "I joined the 360X initiative as Zone Lead in 2024 with one mandate: close the loop."
        ],
        callout: {
          label: "What was at stake",
          text: "Every lost referral is a patient whose specialist visit never happened. At athenahealth's network scale, this wasn't an edge case — it was a daily clinical reality playing out across thousands of practices."
        }
      },
      {
        id: "architecture-crossroads",
        chapter: "Act 2 · Two Paths, One Decision",
        title: "The choice that determined everything downstream",
        prose: [
          "Before any design work could begin, the team faced an architecture decision that would set the scope, timeline, and risk profile of everything that followed.",
          "Path One: build on what existed. Extend ReferralTracker.pm, teach Message.pm to detect inbound 360X packets, add new status types to the processing handler. Surgical. Low risk. Ten weeks.",
          "Path Two: rebuild for the long term. Microservices. A new document exchange service. An API gateway. A provider directory integration. The right architecture for the next decade — in twenty-four weeks, with considerably more delivery uncertainty.",
          "This is the kind of decision that feels obvious until you're sitting with the engineering team and the product roadmap simultaneously. The architecturally correct choice and the product-strategically correct choice are not always the same thing. Here, they diverged."
        ],
        callout: {
          label: "The principle I operated on",
          text: "Design the incremental solution so it doesn't foreclose the comprehensive one. Ship relief now. Document the north star. Build the bridge, not the bypass."
        },
        options: [
          {
            label: "Path One: Incremental Enhancement",
            detail: "10 weeks · Extend existing ReferralTracker + Message.pm · Low risk · Maintains backward compatibility · Recommended"
          },
          {
            label: "Path Two: Microservices Redesign",
            detail: "24 weeks · New service architecture + API gateway + provider directory · Higher scale ceiling · Phase 2 north star"
          }
        ]
      },
      {
        id: "edge-cases",
        chapter: "Act 3 · The Detail That Almost Broke Everything",
        title: "Why the happy path is never the hard part",
        prose: [
          "The happy path was straightforward: receiver accepts, sender sees Accepted, patient care continues. The edge cases were where the real design work lived.",
          "What happens when a care coordinator changes the receiving provider after the referral is already in flight? The original recipient is holding a referral ID. The new recipient doesn't know one exists. Without explicit lifecycle management, you end up with orphaned references — two systems with different beliefs about the state of the same patient's care.",
          "The answer was referral ID unhooking: a deliberate pattern where changing the receiver triggers a cancellation notice to the original recipient and generates a clean transmission to the new one. Five distinct scenarios required individual mapping — changing receiver alone, updating attachments, updating information, combinations thereof, and re-opening from a closed state. Each had a different correct answer for what the system should do.",
          "This is the kind of work that doesn't appear in release notes. It determines whether the product actually functions in the practices using it on day one."
        ]
      }
    ],
    pivot: {
      chapter: "The Pivot · Smart Delivery",
      title: "Making the technology decision invisible",
      prose: [
        "The most visible piece of the initiative was also the one that most directly changed how care coordinators worked: Smart Delivery.",
        "The old model required staff to know which specialists were 360X-capable and which still needed fax. That knowledge lived in people's heads, went home when people went home, and created inconsistency at exactly the moment when consistency mattered most.",
        "Smart Delivery removed the decision entirely. The system checked whether the receiver had a Direct address. If yes: electronic, standards-compliant, 360X. If no: graceful fallback to fax, invisible to the user. The subscript copy we landed on captures it cleanly: 'athena sends via Direct if available, falling back to fax.'",
        "The best interoperability feature is one the user doesn't have to think about. That became the north star for the entire UX layer of this initiative."
      ],
      callout: {
        label: "Design principle",
        text: "The user's job is to coordinate patient care, not to manage protocol routing. Every decision we could automate was one less cognitive load on a coordinator managing a full inbox."
      }
    },
    resolution: {
      prose: [
        "The initiative shipped. Practices began receiving inbound referrals electronically for the first time. Status updates — accepted, declined, cancelled — started flowing back to senders automatically. Care coordinators stopped calling to confirm receipt.",
        "Message processing success rate held above 99%. Processing time per referral stayed under five seconds. The interoperability foundation extended to Epic, Cerner, and any EHR operating on Direct Trust — expanding the network of practices that could participate in closed-loop coordination.",
        "We delivered in 10 weeks. The alternative path would have taken 24. Practices experiencing broken referral loops got relief within a single quarter — not the following year."
      ],
      highlight: "The measure of success wasn't uptime. It was care coordinators who stopped picking up the phone."
    }
  }
};
