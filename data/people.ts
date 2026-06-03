export type PersonStrength = "High" | "Med" | "Low";

export type PeopleCategory = "Leadership" | "Product" | "Design" | "Engineering" | "Other";

export type PersonGalleryItem = {
  src: string;
  title: string | null;
  description: string | null;
  alt: string | null;
};

export type Person = {
  id: string;
  slug: string;
  name: string;
  firstName: string;
  role: string;
  linkedIn: string;
  image: string | null;
  strength: PersonStrength;
  relationshipText: string | null;
  relationship: string | null;
  fondMemory: string | null;
  gallery: PersonGalleryItem[];
  testimonial: string | null;
  concurrentDesignation: string | null;
  relatedProjectIds: string[];
  relatedPostSlugs: string[];
};

export const people: Person[] = [
    {
        "id":  "5db7f9ff-4916-4455-9444-0920e6f1a895",
        "slug":  "nikki-davis",
        "name":  "Nikki Davis",
        "firstName":  "Nikki",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/nikkidavis1",
        "image":  "wix:image://v1/bc4f65_7da0eae4726e4fdaa4907a913cb5fd92~mv2.jpeg/nikki.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "High",
        "relationshipText":  "I met Nikki through our time together at:",
        "relationship":  "My relationship with Nikki is built on deep mutual respect and collaboration. I recognized her multiple times for her dedication, enthusiasm, and ability to tackle complex challenges with grace and determination. Her work on ecosystem IA and OOUX was exceptional, and I always appreciated her commitment to quality and team support. She consistently went above and beyond, contributing valuable insights and fostering a collaborative environment.\n\nNikki’s recognitions for me reflects her appreciation for the partnership we shared. She valued the guidance and feedback I provided, which helped her navigate challenging projects and grow as a professional. Our relationship is based on a strong foundation of trust, support, and a shared drive to push boundaries and achieve excellence together. It is always a pleasure working with someone as dedicated and passionate as Nikki.",
        "fondMemory":  "One fond memory I have with Nikki is when we collaborated on revitalizing the Ecosystem Hub Navigation. She brought a fresh perspective and innovative ideas, which transformed a challenging project into a successful and rewarding experience. Watching her take ownership of the project and seeing her hard work come to fruition was incredibly fulfilling. It highlighted her determination and passion for her work, making it a memorable moment in our collaboration.",
        "gallery":  [],
        "testimonial":  "Udit, thank you for your unwavering support and guidance. Your design knowledge and business understanding have been invaluable to me. I always knew I could count on you for insightful feedback and honest advice, which helped me grow as a professional. It was a pleasure working with you!",
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "1eb75715-5fef-4dcd-87b7-5a38c04cfd95",
                                  "c5ca3d13-5ed8-4eaf-81c7-9c439bce11a6"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "57c594d3-48cb-4c2e-b994-4bbcbeace849",
        "slug":  "vignesh-prabhu-nr",
        "name":  "Vignesh Prabhu NR",
        "firstName":  "Vignesh",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/vignesh-prabhu-90391429/",
        "image":  "wix:image://v1/bc4f65_88b32f7fe2a94393bdd598a82a10b68c~mv2.jpg/vignesh.jpg#originWidth=413\u0026originHeight=413",
        "strength":  "High",
        "relationshipText":  "I met Vignesh through our time together at:",
        "relationship":  "Vignesh has been a consistent collaborator, demonstrating leadership and commitment across various projects. I have recognized him multiple times for his significant contributions, particularly in achieving \"love it\" moments from leadership on key initiatives like Referrals 360X and athenaConnect. His work has been instrumental in driving UX maturity and engagement within our zones, showcasing his depth and dedication to delivering impactful solutions.\n\nVignesh's recognitions for me reflect a mutual respect and appreciation for mentorship and support. He values the guidance and encouragement I provide, which has helped him grow as a designer and a person. He often acknowledges how my feedback and motivation have been pivotal in his professional development. Our relationship is built on a foundation of trust, collaboration, and a shared commitment to excellence, making our partnership highly productive and fulfilling.",
        "fondMemory":  "One fond memory I have of Vignesh is when we worked together to achieve \"love it\" moments from leadership on the Referrals 360X project. Seeing the impact of our collaboration and the positive recognition from leadership made it a rewarding experience. It highlighted the synergy we share and our ability to deliver high-quality outcomes as a team.",
        "gallery":  [
            {
              "src":  "wix:image://v1/bc4f65_3a102075410840f18ce7a9c9cb9485ca~mv2.jpeg/_.jpeg#originWidth=1800&originHeight=1350",
              "title":  null,
              "description":  null,
              "alt":  null
            },
            {
              "src":  "wix:image://v1/bc4f65_503fd433c7f34386bdf1cab99d58db09~mv2.jpeg/_.jpeg#originWidth=1350&originHeight=1800",
              "title":  null,
              "description":  null,
              "alt":  null
            },
            {
              "src":  "wix:image://v1/bc4f65_55699d781c1843dea37f862874f267b4~mv2.jpeg/_.jpeg#originWidth=1800&originHeight=1350",
              "title":  null,
              "description":  null,
              "alt":  null
            },
            {
              "src":  "wix:image://v1/bc4f65_effba45ab37248f0a7c737856a3cba39~mv2.jpeg/_.jpeg#originWidth=1800&originHeight=1350",
              "title":  null,
              "description":  null,
              "alt":  null
            },
            {
              "src":  "wix:image://v1/bc4f65_22d51feb7aab4a53b5b1f085e79eacd2~mv2.jpeg/_.jpeg#originWidth=1800&originHeight=1350",
              "title":  null,
              "description":  null,
              "alt":  null
            }
          ],
        "testimonial":  "It feels like a dream to have accomplished so much in the last five days; none of it would have been possible without your mentoring, support, and encouragement, from planning zone meetings to driving impactful outcomes together.",
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "1eb75715-5fef-4dcd-87b7-5a38c04cfd95",
                                  "42a706b1-4fba-4324-80eb-eff13fb70394"
                              ],
        "relatedPostSlugs":  [
                                 "framework-first-design-a-scalable-approach-to-problem-solving"
                             ]
    },
    {
        "id":  "678d311a-d8ed-47cc-9337-68f1d481e67a",
        "slug":  "amanda-mander",
        "name":  "Amanda Mander",
        "firstName":  "Amanda",
        "role":  "Leader, UX Design",
        "linkedIn":  "https://www.linkedin.com/in/amandamander",
        "image":  "wix:image://v1/bc4f65_0acf8ecdeaa54e038781133c2d3bc81a~mv2.jpeg/amanda.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "High",
        "relationshipText":  "I met Amanda through our time together at:",
        "relationship":  "Amanda has been my manager at athena for about 4 years. I am very fond of her and share a special bond with her. I admire her leadership skills and have learnt a lot from her, and have grown under her (Senior Manager to Director).",
        "fondMemory":  "Amanda, my manager, really gets what motivates her team. I went through a period where I just wasn't feeling as driven. Instead of overlooking it, Amanda realized I needed a bigger challenge. Knowing how I thrive, she gave me a meaningful task: creating a vision story for our whole subdivision, the Platform. At first, I was a bit unsure, but this project got me back on track. I'm grateful for Amanda's understanding and her ongoing support in my growth.",
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "1eb75715-5fef-4dcd-87b7-5a38c04cfd95"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "639aae71-fe09-4c11-8e1f-6747123d40f3",
        "slug":  "guruprasad-baskaran",
        "name":  "Guruprasad Baskaran",
        "firstName":  "Guru",
        "role":  "Leader, Engineering",
        "linkedIn":  "https://www.linkedin.com/in/guruprasadbaskaran/",
        "image":  "wix:image://v1/bc4f65_0c5e467c22ef4d1792814306123d0126~mv2.jpeg/guru.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "High",
        "relationshipText":  "I met Guru through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  "Udit is not just excellent at design but also understands the nuances of requirements from the viewpoint of a product manager / business person.",
        "concurrentDesignation":  "Director Engineering, Zivame",
        "relatedProjectIds":  [
                                  "5aaedb90-b06a-4e34-8fee-a81c53883790",
                                  "15734054-db02-4230-8f8c-2b09d7f9107c",
                                  "2faf8e22-2844-474c-a0ca-561ae78a7f3c",
                                  "de7aa3f7-0c66-46c5-8b7d-d48bb5bed0f5"
                              ],
        "relatedPostSlugs":  [
                                 "story-of-a-5-years-old-kid-and-a-designer"
                             ]
    },
    {
        "id":  "4b9e79e3-3de2-4ae5-aabd-38831ac85daa",
        "slug":  "christie-flanagan",
        "name":  "Christie Flanagan",
        "firstName":  "Christie",
        "role":  "Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/christieflanagan/",
        "image":  "wix:image://v1/bc4f65_779e339e01b142fcb2be2a120b06d80f~mv2.jpeg/christie.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "High",
        "relationshipText":  "I met Christie through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  "Quick turn around. Very happy with his creative work. He manages the process as well which makes things very easy for me.",
        "concurrentDesignation":  "VP Corp Mktg, Kaseya",
        "relatedProjectIds":  [
                                  "8321bb2e-a0ea-4ddc-afd2-7e45e1a6179b"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "41234622-9fc6-41ac-9eeb-e6582e6a6d70",
        "slug":  "leah-foerster",
        "name":  "Leah Foerster",
        "firstName":  "Leah",
        "role":  "Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/leahfoerster/",
        "image":  "wix:image://v1/bc4f65_032bb53ebf4d4f04a61248fd5cf866d5~mv2.jpeg/leah.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "High",
        "relationshipText":  "I met Leah through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  "What an incredible impact you have! With every new team I\u0027ve taken on, you have been essential to its success.",
        "concurrentDesignation":  "Director Product Mgmt, athenahealth",
        "relatedProjectIds":  [
                                  "1eb75715-5fef-4dcd-87b7-5a38c04cfd95"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "33200261-bc2a-46dc-a221-1f54c42f36bc",
        "slug":  "nambi-dhandapani",
        "name":  "Nambi Dhandapani",
        "firstName":  "Nambi",
        "role":  "Product Management",
        "linkedIn":  "https://www.linkedin.com/in/nambi-dhandapani-4784611/",
        "image":  "wix:image://v1/bc4f65_961c45ccb592446ba1b8631b5c01d173~mv2.jpeg/Nambi.jpeg#originWidth=100\u0026originHeight=100",
        "strength":  "High",
        "relationshipText":  "I met Nambi through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "1eb75715-5fef-4dcd-87b7-5a38c04cfd95",
                                  "a3dfe746-9c4d-4e49-9389-98d410181854"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "4324078c-5eff-4808-8f18-1d827c8d3533",
        "slug":  "scott-mackie",
        "name":  "Scott Mackie",
        "firstName":  "Scott",
        "role":  "Leader, UX Design",
        "linkedIn":  "https://www.linkedin.com/in/srmackie/",
        "image":  "wix:image://v1/bc4f65_515c68520c684703a040064ccd0e3488~mv2.jpeg/scott.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "High",
        "relationshipText":  "I met Scott through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "e70e2f02-6d49-4cdb-b538-8f364a5c7a93"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "41f9c37e-8c39-4aca-9cfd-1678aef13f90",
        "slug":  "haraneesh-reddy",
        "name":  "Haraneesh Reddy",
        "firstName":  "Haraneesh",
        "role":  "Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/haraneesh-reddy-16760513",
        "image":  "wix:image://v1/bc4f65_33ef7e4a6e4344098dab6ff1637c38f3~mv2.jpg/haraneesh.jpg#originWidth=585\u0026originHeight=585",
        "strength":  "High",
        "relationshipText":  "I met Haraneesh through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "1eb75715-5fef-4dcd-87b7-5a38c04cfd95",
                                  "42a706b1-4fba-4324-80eb-eff13fb70394"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "fe60280a-f4ac-4f8d-aec2-bf9ee02fd588",
        "slug":  "rajeev-soin",
        "name":  "Rajeev Soin",
        "firstName":  "Rajeev",
        "role":  "Leader, UX Design",
        "linkedIn":  "https://www.linkedin.com/in/rajeevsoin",
        "image":  "wix:image://v1/bc4f65_7449d38acf914a4b8bc2bcd4a94dc096~mv2.jpeg/rajeev.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "High",
        "relationshipText":  "I met Rajeev through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "8b4956ed-a62a-4890-9b73-c844bb8810a7",
                                  "f2bd21fc-5e31-47f2-b902-b34f5736bd74",
                                  "61d4a3f3-3497-4288-8318-8420427c4e0a",
                                  "aec8eca8-6239-4595-86bb-dec0cc9342d6",
                                  "ee6ac60e-e16a-4ac4-89ef-f0e94a8f05d2",
                                  "190f8108-b015-4a96-b6e7-7e13b8c595c2"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "a688b008-118a-4f66-a6b8-a40726dc4807",
        "slug":  "chris-schmitt",
        "name":  "Chris Schmitt",
        "firstName":  "Chris",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/profile-cschmitt",
        "image":  "wix:image://v1/bc4f65_59c67c86151f47ba82997114b2993c50~mv2.jpg/chris.jpg#originWidth=200\u0026originHeight=200",
        "strength":  "High",
        "relationshipText":  "I met Chris through our time together at:",
        "relationship":  null,
        "fondMemory":  "Chris and I share a bond formed through common interests and countless interactions. Our conversations would meander from daily life to his passion for gardening, a hobby that intrigued me. When he invited me to his community plot in Cambridge, it wasn’t just about tomatoes. It was an insight into a part of his life he held dear. That day, as I picked tomatoes under his perceptive guidance, I realized that friendships aren't just built on big moments, but also in these quiet, shared experiences. Later, enjoying the fruits of our day in a fresh salad, I was reminded of the simplicity and depth of our connection.",
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "a2b41f45-17f8-4b29-a791-743696a69cd5",
        "slug":  "satish-kumar",
        "name":  "Satish Kumar",
        "firstName":  "Satish",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/satishkumar4u/",
        "image":  "wix:image://v1/bc4f65_e19b3d2faa4343018f33ff2581b0e068~mv2.jpeg/Satish%20Kumar.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "High",
        "relationshipText":  "I met Satish through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  "Udit is a key player in the team. His work is on the forefront of all our Team\u0027s showcases.",
        "concurrentDesignation":  "Senior Visualizer, Cisco",
        "relatedProjectIds":  [
                                  "190f8108-b015-4a96-b6e7-7e13b8c595c2",
                                  "ee6ac60e-e16a-4ac4-89ef-f0e94a8f05d2",
                                  "aec8eca8-6239-4595-86bb-dec0cc9342d6",
                                  "61d4a3f3-3497-4288-8318-8420427c4e0a",
                                  "f2bd21fc-5e31-47f2-b902-b34f5736bd74",
                                  "8b4956ed-a62a-4890-9b73-c844bb8810a7"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "ec02d37f-c91c-4a4f-8dd6-12604c3e66e3",
        "slug":  "ren-whiting",
        "name":  "Ren Whiting",
        "firstName":  "Ren",
        "role":  "Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/renwhiting/",
        "image":  "wix:image://v1/bc4f65_6c7e1d2a03d04650a42feb5b8b7e9db6~mv2.jpeg/ren.jpeg#originWidth=397\u0026originHeight=397",
        "strength":  "High",
        "relationshipText":  "I met Ren through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "e70e2f02-6d49-4cdb-b538-8f364a5c7a93"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "bdb746e4-3ed1-459d-b998-c567586903ce",
        "slug":  "liz-dunn",
        "name":  "Liz Dunn",
        "firstName":  "Liz",
        "role":  "Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/liz-dunn-61a8817",
        "image":  "wix:image://v1/bc4f65_d30fe141a45b4a4185de58d7db370273~mv2.jpeg/lizd.jpeg#originWidth=400\u0026originHeight=399",
        "strength":  "High",
        "relationshipText":  "I met Liz through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  "Udit is clear in his presentation, able to pivot as circumstances change, open to feedback, collaborative in his approach, thoughtful and considerate with his colleagues, empathetic and positive",
        "concurrentDesignation":  "Director Product Mgmt, athenahealth",
        "relatedProjectIds":  [
                                  "1eb75715-5fef-4dcd-87b7-5a38c04cfd95",
                                  "c5ca3d13-5ed8-4eaf-81c7-9c439bce11a6"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "a1db7055-bb92-461f-bb67-d609b92d5db7",
        "slug":  "shruti-avalkar",
        "name":  "Shruti Avalkar",
        "firstName":  "Shruti",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/shruti-avalkar-aa42b661/",
        "image":  "wix:image://v1/bc4f65_dcc4b253efee4468baae51f9af62c924~mv2.jpeg/shruti.jpeg#originWidth=387\u0026originHeight=387",
        "strength":  "High",
        "relationshipText":  "I met Shruti through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "e70e2f02-6d49-4cdb-b538-8f364a5c7a93"
                              ],
        "relatedPostSlugs":  [
                                 "how-i-groom-my-designers-at-athenahealth",
                                 "think-about-the-users-of-your-prototype"
                             ]
    },
    {
        "id":  "78fa5f4a-f719-44b0-b6be-66d42b24cae6",
        "slug":  "michael-palantoni",
        "name":  "Michael Palantoni",
        "firstName":  "Michael",
        "role":  "Senior Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/michaelpalantoni",
        "image":  "wix:image://v1/bc4f65_5aee29e4ce7c4da2a1d8b47adda258c1~mv2.jpeg/mp.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "High",
        "relationshipText":  "I met Michael through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "1eb75715-5fef-4dcd-87b7-5a38c04cfd95",
                                  "c5ca3d13-5ed8-4eaf-81c7-9c439bce11a6"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "6a8c0f1a-e3e4-49c6-883e-ec20b1c2dae5",
        "slug":  "shalom-truman",
        "name":  "Shalom Truman",
        "firstName":  "Shalom",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/shalomtruman",
        "image":  "wix:image://v1/bc4f65_5c937d81ba934d669411b4c8410f72d0~mv2.jpeg/shalom.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "High",
        "relationshipText":  "I met Shalom through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "2faf8e22-2844-474c-a0ca-561ae78a7f3c",
                                  "de7aa3f7-0c66-46c5-8b7d-d48bb5bed0f5",
                                  "5aaedb90-b06a-4e34-8fee-a81c53883790"
                              ],
        "relatedPostSlugs":  [
                                 "10-key-takeaways-from-ux-india-conference-2016"
                             ]
    },
    {
        "id":  "9cdbb493-6b46-487f-8934-3abf1fb34dbe",
        "slug":  "jen-magathan",
        "name":  "Jen Magathan",
        "firstName":  "Jen",
        "role":  "Visual Design",
        "linkedIn":  "https://www.linkedin.com/in/jen-magathan-9b6b3020/",
        "image":  "wix:image://v1/bc4f65_d3de6f1d1e424287abee8e53d86342ca~mv2.jpeg/jen%20magathan.jpeg#originWidth=100\u0026originHeight=100",
        "strength":  "High",
        "relationshipText":  "I met Jen through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "e70e2f02-6d49-4cdb-b538-8f364a5c7a93"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "8f1935ca-44a8-4b73-a902-bb8a5246cec4",
        "slug":  "gogul-r-g",
        "name":  "Gogul R G",
        "firstName":  "Gogul",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/gogulrg",
        "image":  "wix:image://v1/bc4f65_6db684a14d904584b4aafc442d85acad~mv2.jpeg/gogul.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "High",
        "relationshipText":  "I met Gogul through our time together at:",
        "relationship":  "My relationship with Gogul is built on strong collaboration and mutual respect. I’ve recognized him many times for his outstanding contributions, particularly in the areas of UX leadership and innovation. He’s stepped up in challenging situations, such as driving the UX maturity of the Foundational Platform and creatively working with constraints to deliver high-impact results. His work on Launch Darkly workflows and user journey mapping has set a high bar for the team, and I always appreciate his dedication and depth of thought.\n\nGogul’s recognitions for me highlight his appreciation for the support and guidance I provide. He acknowledges how I’ve helped streamline processes, improve team collaboration, and elevate the quality of our work. His feedback often reflects gratitude for the partnership we share, where we challenge and inspire each other to achieve more. Overall, our relationship is marked by a shared commitment to pushing boundaries, nurturing a culture of excellence, and driving meaningful impact together.",
        "fondMemory":  "One of my fond memories with Gogul is when he took on the challenge of advancing UX maturity within the Foundational Platform zone. Despite the constraints, he managed to redefine the approach and deliver impactful results. His creativity and perseverance in navigating tough situations were truly inspiring. It was a moment that showcased our strong partnership and shared commitment to pushing boundaries and delivering exceptional outcomes together.",
        "gallery":  [],
        "testimonial":  "Thanks Udit for your great support and motivation in my work. There have been a lot of learnings from you! It\u0027s been a wonderful experience working with you, and I look forward to continuing this collaboration.",
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "1eb75715-5fef-4dcd-87b7-5a38c04cfd95"
                              ],
        "relatedPostSlugs":  [
                                 "framework-first-design-a-scalable-approach-to-problem-solving"
                             ]
    },
    {
        "id":  "68d64117-0fc5-4856-9098-d02da7b40616",
        "slug":  "richa-kar",
        "name":  "Richa Kar",
        "firstName":  "Richa",
        "role":  "CEO",
        "linkedIn":  "https://www.linkedin.com/in/richa-kar-5653845/",
        "image":  "wix:image://v1/bc4f65_7baf6e1989904f629a6a9e00632ab18c~mv2.jpeg/richa.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "High",
        "relationshipText":  "I met Richa through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "de7aa3f7-0c66-46c5-8b7d-d48bb5bed0f5",
                                  "2faf8e22-2844-474c-a0ca-561ae78a7f3c",
                                  "5aaedb90-b06a-4e34-8fee-a81c53883790"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "1c62c103-fa99-44a0-a8fb-8f7c29e2a835",
        "slug":  "vishrut-shukla",
        "name":  "Vishrut Shukla",
        "firstName":  "Vishrut",
        "role":  "Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/vishrutshukla/",
        "image":  "wix:image://v1/bc4f65_d7bbb9a7c2c04ae4b9e7bfbf919f478e~mv2.jpg/vishrut.jpg#originWidth=200\u0026originHeight=200",
        "strength":  "High",
        "relationshipText":  "I met Vishrut through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "5aaedb90-b06a-4e34-8fee-a81c53883790",
                                  "15734054-db02-4230-8f8c-2b09d7f9107c",
                                  "2faf8e22-2844-474c-a0ca-561ae78a7f3c",
                                  "de7aa3f7-0c66-46c5-8b7d-d48bb5bed0f5"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "8dc030d7-fbef-4fba-ad11-ab91637dbd57",
        "slug":  "uday-khatua",
        "name":  "Uday Khatua",
        "firstName":  "Uday",
        "role":  "Senior Leader, Engineering",
        "linkedIn":  "https://www.linkedin.com/in/uday-khatua-3b21711/",
        "image":  "wix:image://v1/bc4f65_3cf53e9d764e46898720a3215d9edfe6~mv2.jpeg/uday.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Med",
        "relationshipText":  "I met Uday through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "8321bb2e-a0ea-4ddc-afd2-7e45e1a6179b",
                                  "e0fbb326-4979-4d7a-93ef-b29506201468"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "9a4f516c-bfe8-4ddd-ae60-26b538e07277",
        "slug":  "mike-ellis",
        "name":  "Mike Ellis",
        "firstName":  "Mike",
        "role":  "Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/ellismichael1",
        "image":  "wix:image://v1/bc4f65_a266696fbb454b789cefb5c79c99e202~mv2.jpeg/mike.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Med",
        "relationshipText":  "I met Mike through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "1eb75715-5fef-4dcd-87b7-5a38c04cfd95"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "a796a4f7-cedb-4103-84e9-4291651bf231",
        "slug":  "bridget-burdick",
        "name":  "Bridget Burdick",
        "firstName":  "Bridget",
        "role":  "Product Management",
        "linkedIn":  "https://www.linkedin.com/in/bridget-burdick-6510b535",
        "image":  "wix:image://v1/bc4f65_e65995fa20da452fbf493fc963a8c294~mv2.jpeg/bridget.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Med",
        "relationshipText":  "I met Bridget through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "84b540e7-9001-4d9b-b7b6-78577cbca9bc",
        "slug":  "neha-paranjpe",
        "name":  "Neha Paranjpe",
        "firstName":  "Neha",
        "role":  "Content Strategy",
        "linkedIn":  "https://www.linkedin.com/in/neha-paranjpe-32323416/",
        "image":  "wix:image://v1/bc4f65_be803b3eb6364c75bf4165e66f9976ab~mv2.jpeg/neha.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Med",
        "relationshipText":  "I met Neha through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "15734054-db02-4230-8f8c-2b09d7f9107c"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "f8c74d1f-6921-465f-87cc-aa8a3c6d4efa",
        "slug":  "riddhi-maniar-doda",
        "name":  "Riddhi Maniar Doda",
        "firstName":  "Riddhi",
        "role":  "Leader, Content Strategy",
        "linkedIn":  "https://www.linkedin.com/in/riddhimaniar/",
        "image":  "wix:image://v1/bc4f65_01a6f57d04dd4bbbad64916a9c48156e~mv2.jpeg/riddhi.jpeg#originWidth=351\u0026originHeight=351",
        "strength":  "Med",
        "relationshipText":  "I met Riddhi through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "de7aa3f7-0c66-46c5-8b7d-d48bb5bed0f5",
                                  "2faf8e22-2844-474c-a0ca-561ae78a7f3c",
                                  "15734054-db02-4230-8f8c-2b09d7f9107c",
                                  "5aaedb90-b06a-4e34-8fee-a81c53883790"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "661e4e5b-1c74-4c21-a963-a8fd2af926a1",
        "slug":  "george-chiramal-davis",
        "name":  "George Chiramal Davis",
        "firstName":  "George",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/georgeuxd/",
        "image":  "wix:image://v1/bc4f65_3a7b8e899b6844a7bbf4d2566be117a3~mv2.jpeg/george.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Med",
        "relationshipText":  "I met George through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "e70e2f02-6d49-4cdb-b538-8f364a5c7a93"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "02c1fd88-2475-463a-9f64-4593bd0bbd2c",
        "slug":  "ishira-bhattacharya",
        "name":  "Ishira Bhattacharya",
        "firstName":  "Ishira",
        "role":  "Merchandising",
        "linkedIn":  "https://www.linkedin.com/in/ishira-bhattacharya-974a7743/",
        "image":  "wix:image://v1/bc4f65_cfcd7bcd96eb4719a82414f42cbb1430~mv2.jpeg/ishira.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Med",
        "relationshipText":  "I met Ishira through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "de7aa3f7-0c66-46c5-8b7d-d48bb5bed0f5",
                                  "2faf8e22-2844-474c-a0ca-561ae78a7f3c"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "c9e843dc-a5db-48a5-bb88-9f642b1abb3c",
        "slug":  "barkha-jangde",
        "name":  "Barkha Jangde",
        "firstName":  "Barkha",
        "role":  "Quality Assurance",
        "linkedIn":  "https://www.linkedin.com/in/barkha-jangde-81351443/",
        "image":  "wix:image://v1/bc4f65_e663ab42ed0b4bb4926c535d79d6b41c~mv2.jpg/barkha.jpg#originWidth=323\u0026originHeight=323",
        "strength":  "Med",
        "relationshipText":  "I met Barkha through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "2faf8e22-2844-474c-a0ca-561ae78a7f3c"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "e28c2e22-7b2f-429b-b92b-bc13b98815c2",
        "slug":  "bharath-paturi",
        "name":  "Bharath Paturi",
        "firstName":  "Bharath",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/bharath-paturi-40996448/",
        "image":  "wix:image://v1/bc4f65_5d3bfd2bf5c947dc9e09e70b0a197c79~mv2.jpg/bharath.jpg#originWidth=516\u0026originHeight=516",
        "strength":  "Med",
        "relationshipText":  "I met Bharath through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "a4168cb6-9246-4881-8fec-4d1b5eacc68a",
                                  "41ab1a86-7673-428f-86db-96201f004a6e"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "ea1853a4-0edb-4673-91d0-38aee297e5cf",
        "slug":  "naman-gupta",
        "name":  "Naman Gupta",
        "firstName":  "Naman",
        "role":  "Digital Marketing",
        "linkedIn":  "https://www.linkedin.com/in/namangupta86/",
        "image":  "wix:image://v1/bc4f65_f93f4f8e200545fca620420a14d8e299~mv2.jpeg/naman.jpeg#originWidth=345\u0026originHeight=345",
        "strength":  "Med",
        "relationshipText":  "I met Naman through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "de7aa3f7-0c66-46c5-8b7d-d48bb5bed0f5",
                                  "2faf8e22-2844-474c-a0ca-561ae78a7f3c"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "c581d91a-a9d4-403f-8280-6a5b8ff0622a",
        "slug":  "brian-murphy",
        "name":  "Brian Murphy",
        "firstName":  "Brian",
        "role":  "Leader - Sales",
        "linkedIn":  "https://www.crunchbase.com/person/brian-murphy-3",
        "image":  "wix:image://v1/bc4f65_22030d6b4af0470a905b6f8eb13e1a97~mv2.jpg/brian%20murphy%20-%20kaseya.jpg#originWidth=200\u0026originHeight=200",
        "strength":  "Med",
        "relationshipText":  "I met Brian through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  "Udit\u0027s attention to detail is excellent, his intuitiveness is incredible and his skills are extremely excellent.",
        "concurrentDesignation":  "CSO, Kaseya",
        "relatedProjectIds":  [
                                  "8321bb2e-a0ea-4ddc-afd2-7e45e1a6179b"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "b862826c-d03d-44b1-be5a-6ea3905b87f4",
        "slug":  "elizabeth-kelly",
        "name":  "Elizabeth Kelly",
        "firstName":  "Elizabeth",
        "role":  "Leader, UX Design",
        "linkedIn":  "https://www.linkedin.com/in/ekelly3",
        "image":  "wix:image://v1/bc4f65_7c2c0799118a4048bd90228451139bf6~mv2.jpeg/lizk.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Med",
        "relationshipText":  "I met Elizabeth through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "c5ca3d13-5ed8-4eaf-81c7-9c439bce11a6",
                                  "4ace0bd2-8b5f-49da-bc47-51adca3eb9d1"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "c4c55895-4513-4855-af8d-104f976d023d",
        "slug":  "loren-jarrett",
        "name":  "Loren Jarrett",
        "firstName":  "Loren",
        "role":  "Senior Leader, Marketing",
        "linkedIn":  "https://www.linkedin.com/in/loren-jarrett-a416a66/",
        "image":  "wix:image://v1/bc4f65_4ebde9157a6b4e5a9f0528803c97bd15~mv2.jpeg/Loren.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Med",
        "relationshipText":  "I met Loren through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "8321bb2e-a0ea-4ddc-afd2-7e45e1a6179b",
                                  "e07c7462-f1d8-49f4-938c-01b4f09434db"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "c5012c91-cc57-47e7-b871-8b89f013d05b",
        "slug":  "kim-marques",
        "name":  "Kim Marques",
        "firstName":  "Kim",
        "role":  "Web Strategy",
        "linkedIn":  "https://www.linkedin.com/in/kimberlyamarques/",
        "image":  "wix:image://v1/bc4f65_4f5faef707394d4bab3c918a8268e023~mv2.jpeg/kim.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Med",
        "relationshipText":  "I met Kim through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "e70e2f02-6d49-4cdb-b538-8f364a5c7a93"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "21103154-b9bc-4087-9b08-347f1b78b28c",
        "slug":  "anna-brody",
        "name":  "Anna Brody",
        "firstName":  "Anna",
        "role":  "Research",
        "linkedIn":  "https://www.linkedin.com/in/anna-brody-45079938/",
        "image":  "wix:image://v1/bc4f65_93f86a270f9d436ba288ffcb976cc70a~mv2.jpeg/Anna.jpeg#originWidth=389\u0026originHeight=389",
        "strength":  "Med",
        "relationshipText":  "I met Anna through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "e70e2f02-6d49-4cdb-b538-8f364a5c7a93"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "33785e1d-342d-491b-a3f8-0ee2241ffa06",
        "slug":  "micah-whitson",
        "name":  "Micah Whitson",
        "firstName":  "Micah",
        "role":  "Leader, Brand",
        "linkedIn":  "https://www.linkedin.com/in/micahwhitson/",
        "image":  "wix:image://v1/bc4f65_14b33762e90a4e84900680770e3e607f~mv2.jpeg/micah.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Med",
        "relationshipText":  "I met Micah through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "e70e2f02-6d49-4cdb-b538-8f364a5c7a93"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "2bbaf4c0-062b-4ab7-928d-4acba4370126",
        "slug":  "anirudh-koul",
        "name":  "Anirudh Koul",
        "firstName":  "Anirudh",
        "role":  "Leader, Engineering",
        "linkedIn":  "https://www.linkedin.com/in/anirudhkoul/",
        "image":  "wix:image://v1/bc4f65_a5db77d502dd46b1868f9ee426fdcd68~mv2.jpg/anirudh.jpg#originWidth=400\u0026originHeight=400",
        "strength":  "Med",
        "relationshipText":  "I met Anirudh through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "3c0a2a4c-e4c8-48ab-a78f-5c2d47b91a53",
        "slug":  "mary-rose-mathew",
        "name":  "Mary Rose Mathew",
        "firstName":  "Mary",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/mrosem",
        "image":  "wix:image://v1/bc4f65_c773fad166ea4df09f65c3535d7daba7~mv2.jpeg/mary.jpeg#originWidth=248\u0026originHeight=248",
        "strength":  "Med",
        "relationshipText":  "I met Mary through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "e70e2f02-6d49-4cdb-b538-8f364a5c7a93"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "44d4bfab-369e-4a3e-a53c-ec243fc8266f",
        "slug":  "tom-hayes",
        "name":  "Tom Hayes",
        "firstName":  "Tom",
        "role":  "Leader, Product Marketing",
        "linkedIn":  "https://www.linkedin.com/in/tomhayes17/",
        "image":  "wix:image://v1/bc4f65_44a9d99c8bff47aabff5385ddaa07411~mv2.jpeg/tom.jpeg#originWidth=299\u0026originHeight=299",
        "strength":  "Med",
        "relationshipText":  "I met Tom through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  "Udit\u0027s work was on time and of the highest quality. He offered excellent insight on the task, \u0026 was a pleasure to work with.",
        "concurrentDesignation":  "VP Product Mktg, Kaseya",
        "relatedProjectIds":  [
                                  "8321bb2e-a0ea-4ddc-afd2-7e45e1a6179b"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "7c340d52-572c-42c0-88a8-f7c6bba8fb88",
        "slug":  "shaleen-sinha",
        "name":  "Shaleen Sinha",
        "firstName":  "Shaleen",
        "role":  "COO",
        "linkedIn":  "https://www.linkedin.com/in/shaleen-sinha-6414b3/",
        "image":  "wix:image://v1/bc4f65_4fcd631fe5744a919a91fbb3543aef78~mv2.jpeg/shaleen.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Med",
        "relationshipText":  "I met Shaleen through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "de7aa3f7-0c66-46c5-8b7d-d48bb5bed0f5",
                                  "2faf8e22-2844-474c-a0ca-561ae78a7f3c",
                                  "5aaedb90-b06a-4e34-8fee-a81c53883790"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "aa6583ed-6d6e-4e24-8faf-cee7bdd2aba2",
        "slug":  "tamali-roy",
        "name":  "Tamali Roy",
        "firstName":  "Tamali",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/tamali-roy",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Tamali through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "ad11955c-b3f8-4c79-8176-034058e233f6",
        "slug":  "sachin-arvind",
        "name":  "Sachin Arvind",
        "firstName":  "Sachin",
        "role":  "HR",
        "linkedIn":  "https://www.linkedin.com/in/sachin-arvind-b819b775",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Sachin through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "bcd5241c-0b5a-436b-9e26-b9dfb7367672",
        "slug":  "jyothish-sebastian",
        "name":  "Jyothish Sebastian",
        "firstName":  "Jyothish",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/jyodsh",
        "image":  "wix:image://v1/bc4f65_64d0d50100c24e01a2f5b9da7153923e~mv2.jpeg/jyothish.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Jyothish through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "bd3a77be-4168-4fc0-838a-0b5b2089a983",
        "slug":  "dani-nordin",
        "name":  "Dani Nordin",
        "firstName":  "Dani",
        "role":  "Leader, UX Design",
        "linkedIn":  "https://www.linkedin.com/in/daninordin",
        "image":  "wix:image://v1/bc4f65_878358db3efc4900b3e31c1e47c2d736~mv2.jpeg/dani.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Dani through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "ae21edb2-5682-406b-b166-8ec217ac1105",
        "slug":  "yogesh-gupta",
        "name":  "Yogesh Gupta",
        "firstName":  "Yogesh",
        "role":  "CEO",
        "linkedIn":  "https://www.linkedin.com/in/ygupta/",
        "image":  "wix:image://v1/bc4f65_95aef35f953849d38bdce741afe079c0~mv2.jpeg/yogesh.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Yogesh through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "e07c7462-f1d8-49f4-938c-01b4f09434db"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "b3f79252-493d-4883-91ac-ff2109fee4e7",
        "slug":  "sofya-zeylikman",
        "name":  "Sofya Zeylikman",
        "firstName":  "Sofya",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/sofyazeylikman",
        "image":  "wix:image://v1/bc4f65_532050b61199472f9aa4c098a1e9d30c~mv2.jpeg/sofya.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Sofya through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "a883167b-0b9c-4088-97ff-c37e84225915",
        "slug":  "prabhjot-singh",
        "name":  "Prabhjot Singh",
        "firstName":  "Prabhjot",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/prabhjot-singh-bb710996",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Prabhjot through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "a1077324-99bb-4481-9359-02d84619d4a9",
        "slug":  "sujini-h-a",
        "name":  "Sujini H A",
        "firstName":  "Sujini",
        "role":  "HR",
        "linkedIn":  "https://www.linkedin.com/in/sujiniha",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Sujini through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "0ecc4cc1-5886-4f23-9a9d-f67f1c36ca5c",
        "slug":  "sandesh-aravind",
        "name":  "Sandesh Aravind",
        "firstName":  "Sandesh",
        "role":  "Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/sandesh-aravind",
        "image":  "wix:image://v1/bc4f65_ae6bb60b24b5415c82722877c9cfa5ef~mv2.jpeg/sandesh.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Sandesh through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "0f1f72e8-d81e-4879-b093-b0b9e4e6a0e6",
        "slug":  "mukundan-chandra",
        "name":  "Mukundan Chandra",
        "firstName":  "Mukundan",
        "role":  "Leader, UX Design",
        "linkedIn":  "https://www.linkedin.com/in/mukundanchandra",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Mukundan through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "9e6872f9-6f5a-41e6-a6e5-2ae4a2635697",
        "slug":  "ratnesh-lal",
        "name":  "Ratnesh Lal",
        "firstName":  "Ratnesh",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/ratnesh-lal-3b20356",
        "image":  "wix:image://v1/bc4f65_efd102852d714b15badcf79ad9c7da93~mv2.jpeg/ratnesh.jpeg#originWidth=182\u0026originHeight=182",
        "strength":  "Low",
        "relationshipText":  "I met Ratnesh through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "09f754b1-07be-442d-953f-fd77bbfc3b34",
        "slug":  "julia-lang",
        "name":  "Julia Lang",
        "firstName":  "Julia",
        "role":  "Product Management",
        "linkedIn":  "https://www.linkedin.com/in/julialang04",
        "image":  "wix:image://v1/bc4f65_a7e977e711df467dabec6a27cfc82671~mv2.jpeg/julia.jpeg#originWidth=285\u0026originHeight=285",
        "strength":  "Low",
        "relationshipText":  "I met Julia through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "c5ca3d13-5ed8-4eaf-81c7-9c439bce11a6"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "3db012dd-7c75-4304-8019-afdbad744491",
        "slug":  "stefan-maryniak",
        "name":  "Stefan Maryniak",
        "firstName":  "Stefan",
        "role":  "Product Management",
        "linkedIn":  "https://www.linkedin.com/in/stefanmaryniak/",
        "image":  "wix:image://v1/bc4f65_39e80e8550704acd93fc5a1cbd041af8~mv2.jpeg/stefan%20maryniak.jpeg#originWidth=337\u0026originHeight=337",
        "strength":  "Low",
        "relationshipText":  "I met Stefan through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "e70e2f02-6d49-4cdb-b538-8f364a5c7a93"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "0d11358e-c6d6-4ced-933d-2591cb37be99",
        "slug":  "brian-manning",
        "name":  "Brian Manning",
        "firstName":  "Brian",
        "role":  "Leader, UX Design",
        "linkedIn":  "https://www.linkedin.com/in/brianmanning",
        "image":  "wix:image://v1/bc4f65_00d44b4d8dce4115929f54317a923aa1~mv2.jpeg/brian.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Brian through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "a32a07fa-2d4a-4487-9246-18339d85c889",
        "slug":  "denise-lyn-shue",
        "name":  "Denise Lyn-Shue",
        "firstName":  "Denise",
        "role":  "Leader, UX Design",
        "linkedIn":  "https://www.linkedin.com/in/deniselynshue",
        "image":  "wix:image://v1/bc4f65_f41e47aa2f874eb38a2bfaaea02dd715~mv2.jpeg/denise.jpeg#originWidth=329\u0026originHeight=329",
        "strength":  "Low",
        "relationshipText":  "I met Denise through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "08fe1437-32d0-439c-9c84-475e0479a45d",
        "slug":  "rajadurai-sam-stephen",
        "name":  "Rajadurai Sam Stephen",
        "firstName":  "Rajadurai",
        "role":  "Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/rajadurai-sam-stephen",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Rajadurai through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "2685c79d-78a2-4e2c-926d-f7d93d73d549",
        "slug":  "juhee-hans",
        "name":  "Juhee Hans",
        "firstName":  "Juhee",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/juheekimhans",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Juhee through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "f3d5521c-a91b-4681-a304-dd6294352e06",
        "slug":  "manoj-kumar",
        "name":  "Manoj Kumar",
        "firstName":  "Manoj",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/manojapare",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Manoj through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "e125239a-1553-42f7-9537-4bdcf80ef6cd",
        "slug":  "shyam-palani",
        "name":  "Shyam Palani",
        "firstName":  "Shyam",
        "role":  "HR",
        "linkedIn":  "https://www.linkedin.com/in/shyam-palani-54368716",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Shyam through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "e4353f71-343a-4ecb-b127-f4e672092963",
        "slug":  "vamsi-krishna-veligatla",
        "name":  "Vamsi Krishna Veligatla",
        "firstName":  "Vamsi",
        "role":  "Leader, Engineering",
        "linkedIn":  "https://www.linkedin.com/in/vamsi-krishna-veligatla-91ab447",
        "image":  "wix:image://v1/bc4f65_679b4a9038d34db5a5c90ec0941c2a11~mv2.jpeg/vamsi.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Vamsi through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "fd3efa30-20ad-43f7-861a-42373297ad3f",
        "slug":  "kenny-rosenberg",
        "name":  "Kenny Rosenberg",
        "firstName":  "Kenny",
        "role":  "Leader, UX Design",
        "linkedIn":  "https://www.linkedin.com/in/kennyrosenberg",
        "image":  "wix:image://v1/bc4f65_f09ad15e82ff48e494da18188b53736c~mv2.jpeg/kenny.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Kenny through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "26a89ca4-8197-4049-9d73-06025bde5b81",
        "slug":  "vijay-rajagopal",
        "name":  "Vijay Rajagopal",
        "firstName":  "Vijay",
        "role":  "Product Management",
        "linkedIn":  "https://www.linkedin.com/in/vijay-rajagopal-23042b16",
        "image":  "wix:image://v1/bc4f65_d86ec4c1955e4bbcacd36832aeb825ce~mv2.jpeg/vijayr.jpeg#originWidth=202\u0026originHeight=202",
        "strength":  "Low",
        "relationshipText":  "I met Vijay through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "f5b31722-167f-4272-bfd9-aa29baf88f49",
        "slug":  "nitesh-gandhi",
        "name":  "Nitesh Gandhi",
        "firstName":  "Nitesh",
        "role":  "Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/niteshmgandhi",
        "image":  "wix:image://v1/bc4f65_9b93f7330636412188909398c3ef7e9e~mv2.jpeg/nitesh.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Nitesh through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "f8bb9428-bc2f-45dc-97a1-177b6ad5ae96",
        "slug":  "kristina-krause",
        "name":  "Kristina Krause",
        "firstName":  "Kristina",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/kristinakrause11",
        "image":  "wix:image://v1/bc4f65_cad529619c5f4f968f0e5b7634b3e180~mv2.jpeg/kristina.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Kristina through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "df4b5ce3-d2cb-4fe9-aef8-d6b8d30ccdfb",
        "slug":  "roderick-medina",
        "name":  "Roderick Medina",
        "firstName":  "Roderick",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/roderickmedina",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Roderick through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "372bfe92-ffa2-435a-85c2-5c0907d069b7",
        "slug":  "matthew-hendrix",
        "name":  "Matthew Hendrix",
        "firstName":  "Matthew",
        "role":  "Leader, Engineering",
        "linkedIn":  "https://www.linkedin.com/in/matthew-h-66614725",
        "image":  "wix:image://v1/bc4f65_4a204e53f15d42cda4b7ca7f5b9565f7~mv2.jpeg/matt.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Matthew through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "349cc8b2-c48d-4314-b73a-8cf0eef277fa",
        "slug":  "leonard-ning",
        "name":  "Leonard Ning",
        "firstName":  "Leonard",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/lning",
        "image":  "wix:image://v1/bc4f65_de4ed73a37904982b9f5d2d1e70fdd13~mv2.jpeg/len.jpeg#originWidth=160\u0026originHeight=160",
        "strength":  "Low",
        "relationshipText":  "I met Leonard through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "3b2becc9-7988-450d-a7cd-8e1be2f8d945",
        "slug":  "lana-cohen",
        "name":  "Lana Cohen",
        "firstName":  "Lana",
        "role":  "Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/lanavcohen/",
        "image":  "wix:image://v1/bc4f65_c31406b694a348698403ee108842ab92~mv2.jpeg/lana.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Lana through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [
                                 "think-about-the-users-of-your-prototype"
                             ]
    },
    {
        "id":  "390176c8-212f-4a50-aae2-63f4b24564dc",
        "slug":  "karthik-urs",
        "name":  "Karthik Urs",
        "firstName":  "Karthik",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/karthikurs",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Karthik through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "d9625692-0bea-4d7f-a99f-f9ff6c47f297",
        "slug":  "meagan-day",
        "name":  "Meagan Day",
        "firstName":  "Meagan",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/meagan-day-a7606a45",
        "image":  "wix:image://v1/bc4f65_609fcd4540f9479c887c2145532f722b~mv2.jpeg/meagan.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Meagan through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "dca2993a-2707-4a55-8c73-94ae102ccf96",
        "slug":  "suresh-kannan",
        "name":  "Suresh Kannan",
        "firstName":  "Suresh",
        "role":  "Leader, Engineering",
        "linkedIn":  "https://www.linkedin.com/in/suresh-kannan-profile",
        "image":  "wix:image://v1/bc4f65_933cbb8f0f31457c913f01be6aa90250~mv2.jpeg/suresh.jpeg#originWidth=339\u0026originHeight=339",
        "strength":  "Low",
        "relationshipText":  "I met Suresh through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "1eb75715-5fef-4dcd-87b7-5a38c04cfd95"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "cb98edd9-e9d2-4dfe-8c5a-135c205a667a",
        "slug":  "komal-maliekal",
        "name":  "Komal Maliekal",
        "firstName":  "Komal",
        "role":  "Leader, Engineering",
        "linkedIn":  "https://www.linkedin.com/in/komal-maliekal-4553b38",
        "image":  "wix:image://v1/bc4f65_4408417358ce4117acfdbd4325476a6b~mv2.jpeg/komal.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Komal through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "d295f784-1ab7-4d44-b061-7805824703ca",
        "slug":  "patrick-hursen",
        "name":  "Patrick Hursen",
        "firstName":  "Patrick",
        "role":  "Leader, Engineering",
        "linkedIn":  "https://www.linkedin.com/in/patrick-hursen-7212491",
        "image":  "wix:image://v1/bc4f65_c441498d484a43f1b48fa890b6218de5~mv2.jpeg/patrick.jpeg#originWidth=151\u0026originHeight=151",
        "strength":  "Low",
        "relationshipText":  "I met Patrick through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "c5ca3d13-5ed8-4eaf-81c7-9c439bce11a6"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "1c709a8d-9f2d-478b-a79e-55eb915d93df",
        "slug":  "jamie-simpson",
        "name":  "Jamie Simpson",
        "firstName":  "Jamie",
        "role":  "Leader - Product",
        "linkedIn":  "https://www.linkedin.com/in/jamiesimpson",
        "image":  "wix:image://v1/bc4f65_26aa1572436f41478bfddb0886bb2e72~mv2.jpg/jamie%20simpson%20-%20adobe.jpg#originWidth=200\u0026originHeight=200",
        "strength":  "Low",
        "relationshipText":  "I met Jamie through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  "Udit is a very committed individual. I can always count on Udit to go that extra mile to ensure customer satisfaction.",
        "concurrentDesignation":  "Sr Manager, Adobe",
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "5fd420ea-4f94-4e1c-adf0-f8ad66893fa0",
        "slug":  "aly-callahan",
        "name":  "Aly Callahan",
        "firstName":  "Aly",
        "role":  "Leader, Product Strategy",
        "linkedIn":  "https://www.linkedin.com/in/aly-callahan",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Aly through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "1d0e8a82-71bc-4670-bcc8-c72fdda7f6a6",
        "slug":  "amanda-queene",
        "name":  "Amanda Queene",
        "firstName":  "Amanda Q",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/amanda-queene-b3008613b",
        "image":  "wix:image://v1/bc4f65_85cbe430d3f845c98328dcd6f3911b9b~mv2.jpg/amandaq.JPG#originWidth=200\u0026originHeight=200",
        "strength":  "Low",
        "relationshipText":  "I met Amanda Q through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "594d9edd-5cff-4f46-ad15-dfbed1c34dbb",
        "slug":  "meeta-mathur",
        "name":  "Meeta Mathur",
        "firstName":  "Meeta",
        "role":  "Leader, UX Design",
        "linkedIn":  "https://www.linkedin.com/in/meetamathur",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Meeta through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "633e0808-f5fa-4e68-b7ac-4cffaa5ad3a4",
        "slug":  "vijay-kumar-m-a",
        "name":  "Vijay Kumar M A",
        "firstName":  "Vijay",
        "role":  "Product Management",
        "linkedIn":  "https://www.linkedin.com/in/vijay-kumar-m-a-00602729",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Vijay through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "6581b86b-2e6f-44e6-a506-cdf516f31b90",
        "slug":  "sundar-subramanian",
        "name":  "Sundar Subramanian",
        "firstName":  "Sundar",
        "role":  "Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/sundarsubramanian/",
        "image":  "wix:image://v1/bc4f65_91990be592b543f09e4e54a03ca5dba9~mv2.jpeg/sundar.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Sundar through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "8321bb2e-a0ea-4ddc-afd2-7e45e1a6179b",
                                  "e0fbb326-4979-4d7a-93ef-b29506201468"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "1fcc2294-3d55-4734-a665-06d043596dd9",
        "slug":  "santosh-rao",
        "name":  "Santosh Rao",
        "firstName":  "Santosh",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/santosh-rao-1970b766",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Santosh through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "64a6ed0f-e8d1-47bf-a9e9-b2646a721d23",
        "slug":  "aishwarya-jagannathan",
        "name":  "Aishwarya Jagannathan",
        "firstName":  "Aishwarya",
        "role":  "Product Management",
        "linkedIn":  "https://www.linkedin.com/in/aishwaryamj",
        "image":  "wix:image://v1/bc4f65_f1a5e97b05514408b78efc1c7af23f34~mv2.jpeg/aishwaryaj.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Aishwarya through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "65325076-81fe-4984-877c-3af05d112693",
        "slug":  "samit-sasan",
        "name":  "Samit Sasan",
        "firstName":  "Samit",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/samit-sasan-1355421",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Samit through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "45f26ac0-3ebe-448f-bc39-795641de48e0",
        "slug":  "chandra-bajpai",
        "name":  "Chandra Bajpai",
        "firstName":  "Chandra",
        "role":  "Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/chandrabajpai",
        "image":  "wix:image://v1/bc4f65_c9b1d0f68e3c4ef498f54b24b2aee4ba~mv2.jpeg/chandra.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Chandra through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "4adf2335-e380-4cbd-8d47-25bf06368719",
        "slug":  "barathan-kannan",
        "name":  "Barathan Kannan",
        "firstName":  "Barathan",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/barathankannan",
        "image":  "wix:image://v1/bc4f65_91d7186c86e1462c9b60d71beb47ba21~mv2.jpeg/barathan.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Barathan through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "452e1198-9f70-42fc-b83f-1a9f546e3430",
        "slug":  "sivaprasad-balamara",
        "name":  "Sivaprasad Balamara",
        "firstName":  "Sivaprasad",
        "role":  "Leader, Engineering",
        "linkedIn":  "https://www.linkedin.com/in/sivaprasad-balamara/",
        "image":  "wix:image://v1/bc4f65_bcc024d268424643bd3a680bfe57f5a5~mv2.jpeg/sivaprasad.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Sivaprasad through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "e70e2f02-6d49-4cdb-b538-8f364a5c7a93"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "45b660f2-a3e9-41d7-865a-3760cd3cc5f4",
        "slug":  "k.c.-teis",
        "name":  "K.C. Teis",
        "firstName":  "K.C.",
        "role":  "Leader, UX Design",
        "linkedIn":  "https://www.linkedin.com/in/kcteis",
        "image":  "wix:image://v1/bc4f65_040029b20c5e4afd93dadfce894c96eb~mv2.jpeg/kc.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met K.C. through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "1f2bba41-9d61-42b2-90ea-494d44235e37",
        "slug":  "vaishakh-unnithan",
        "name":  "Vaishakh Unnithan",
        "firstName":  "Vaishakh",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/yshakh",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Vaishakh through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "55f1f289-417a-4f96-a4d4-fc9f36cc1052",
        "slug":  "vidya-sagar-katta",
        "name":  "Vidya Sagar Katta",
        "firstName":  "Vidya",
        "role":  "Product Management",
        "linkedIn":  "https://www.linkedin.com/in/vidyasagark",
        "image":  "wix:image://v1/bc4f65_3d2e627fe2bb45529b5050bffad4e324~mv2.jpeg/vidya.jpeg#originWidth=324\u0026originHeight=324",
        "strength":  "Low",
        "relationshipText":  "I met Vidya through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "56b8a57d-48e0-4315-97e9-622e3a026c3c",
        "slug":  "sara-wells",
        "name":  "Sara Wells",
        "firstName":  "Sara",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/sara-wells-7281065",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Sara through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "4eb4625d-cd4b-45f6-9122-29b9ced30da4",
        "slug":  "gabriela-de-oliveira-castro",
        "name":  "Gabriela de Oliveira Castro",
        "firstName":  "Gabi",
        "role":  "Leader, UX Design",
        "linkedIn":  "https://www.linkedin.com/in/gabriela-de-oliveira-castro-33489a41",
        "image":  "wix:image://v1/bc4f65_3c2e9b298f2241c7b79b2204e2cc65c7~mv2.jpeg/gabi.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Gabi through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "4ace0bd2-8b5f-49da-bc47-51adca3eb9d1"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "544a3543-df11-4d90-869d-9cbf2f57d981",
        "slug":  "deepak-kumar",
        "name":  "Deepak Kumar",
        "firstName":  "Deepak",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/go4deepak",
        "image":  "wix:image://v1/bc4f65_7db899d9511e42edbc6b9dfcd21d11bc~mv2.jpeg/deepak.jpeg#originWidth=191\u0026originHeight=191",
        "strength":  "Low",
        "relationshipText":  "I met Deepak through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "1aea057a-4ac2-42ce-915d-9f8b7118ac81",
        "slug":  "mohideen-aswar",
        "name":  "Mohideen Aswar",
        "firstName":  "Mohideen",
        "role":  "Product Management",
        "linkedIn":  "https://www.linkedin.com/in/mohideenaswar",
        "image":  "wix:image://v1/bc4f65_606ab6d5677f467baee71d5d2979ad07~mv2.jpeg/mohideen.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Mohideen through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "42a706b1-4fba-4324-80eb-eff13fb70394"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "4212e470-ab06-4800-bfc5-377b9c71b170",
        "slug":  "teena-jose",
        "name":  "Teena Jose",
        "firstName":  "Teena",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/teenajose",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Teena through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "8d87d66a-0ef7-4481-8780-8eded7e2f0c9",
        "slug":  "siva-nandivada",
        "name":  "Siva Nandivada",
        "firstName":  "Siva",
        "role":  "Senior Leader, Leader, Engineering",
        "linkedIn":  "https://www.linkedin.com/in/siva-nandivada-43b1241",
        "image":  "wix:image://v1/bc4f65_2d20870b83794f54a96fd6d95f6ee610~mv2.jpeg/siva.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Siva through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "1eb75715-5fef-4dcd-87b7-5a38c04cfd95"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "43116190-1c1b-4a62-af40-6bde080502dd",
        "slug":  "mariya-soniya",
        "name":  "Mariya Soniya",
        "firstName":  "Mariya",
        "role":  "Leader, Engineering",
        "linkedIn":  "https://www.linkedin.com/in/mariya-soniya",
        "image":  "wix:image://v1/bc4f65_6942d951aa7b487a9ca0f49b996df7e0~mv2.jpeg/mariya.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Mariya through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "80f2b0fc-7a79-4188-bc07-33e284c64d04",
        "slug":  "chandra-shekhar-yadav",
        "name":  "Chandra Shekhar Yadav",
        "firstName":  "Chandra",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/chandra-shekhar-yadav-4446a155",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Chandra through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "102af951-a31c-4971-8ffa-1575ea854b10",
        "slug":  "prakash-khot",
        "name":  "Prakash Khot",
        "firstName":  "Prakash",
        "role":  "CTO",
        "linkedIn":  "https://www.linkedin.com/in/prkhot/",
        "image":  "wix:image://v1/bc4f65_7f72eaffcf8e4b59acf45e5e92d7d3dc~mv2.jpeg/prakash.jpeg#originWidth=135\u0026originHeight=135",
        "strength":  "Low",
        "relationshipText":  "I met Prakash through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "e07c7462-f1d8-49f4-938c-01b4f09434db"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "9a787c4d-62cc-4b54-b065-d0546370aff3",
        "slug":  "joe-hunstock",
        "name":  "Joe Hunstock",
        "firstName":  "Joe",
        "role":  "Product Management",
        "linkedIn":  "https://www.linkedin.com/in/joehunstock/",
        "image":  "wix:image://v1/bc4f65_137366605d76475d936c78f41a3a5620~mv2.png/joe%20hunstock%20-%20athenahealth.png#originWidth=200\u0026originHeight=200",
        "strength":  "Low",
        "relationshipText":  "I met Joe through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  "Udit has been fantastic. He has a lot of great ideas and is very open to feedback. Everything Udit delivers is polished and incorporates all best practices.",
        "concurrentDesignation":  "Product Manager, athenahealth",
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "9c533492-c71e-4e00-812b-8c62eb325552",
        "slug":  "nora-iluri",
        "name":  "Nora Iluri",
        "firstName":  "Nora",
        "role":  "Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/norailuri",
        "image":  "wix:image://v1/bc4f65_7388992eac25410eba608d3db5465704~mv2.jpeg/nora.jpeg#originWidth=125\u0026originHeight=125",
        "strength":  "Low",
        "relationshipText":  "I met Nora through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "95569a7d-ea6c-4db0-a032-c4bbc3d1910c",
        "slug":  "meenakshi-saravanan",
        "name":  "Meenakshi Saravanan",
        "firstName":  "Meenakshi",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/meenakshi-saravanan-1436a71b0",
        "image":  "wix:image://v1/bc4f65_49d3d333bd654cab985af49ed6061c6d~mv2.jpeg/meenakshis.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Meenakshi through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "2335f571-0d63-4f42-9a4d-1cdaf2cf74e0",
        "slug":  "catherine-leamy",
        "name":  "Catherine Leamy",
        "firstName":  "Catherine",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/catherineleamy",
        "image":  "wix:image://v1/bc4f65_c04d3c9882f14752832e31688d3ec531~mv2.jpeg/cathy.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Catherine through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "198de013-f7f3-484e-a908-5f0c0557b141",
        "slug":  "ari-parnes",
        "name":  "Ari Parnes",
        "firstName":  "Ari",
        "role":  "Leader, UX Design",
        "linkedIn":  "https://www.linkedin.com/in/aparnes",
        "image":  "wix:image://v1/bc4f65_0760cb21023a4d80bb031f3552969114~mv2.jpeg/ari.jpeg#originWidth=170\u0026originHeight=170",
        "strength":  "Low",
        "relationshipText":  "I met Ari through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "6cf31a2f-4059-454a-905d-daa6ad38cd40",
        "slug":  "kanchen-rajanna",
        "name":  "Kanchen Rajanna",
        "firstName":  "Kanchen",
        "role":  "Leader, UX Design",
        "linkedIn":  "https://www.linkedin.com/in/kanchenrajanna",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Kanchen through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "1a8e5e2b-8f17-47cd-b470-065c8734eb1a",
        "slug":  "anu-ramakrishnan",
        "name":  "Anu Ramakrishnan",
        "firstName":  "Anu",
        "role":  "Product Management",
        "linkedIn":  "https://www.linkedin.com/in/anuramakrishnan",
        "image":  "wix:image://v1/bc4f65_a5f76cce991a421a9e316d96c3e1a879~mv2.jpeg/anu.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Anu through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "69b34781-ec1a-4170-9d7c-e6d05a8915d2",
        "slug":  "rachana--tathed",
        "name":  "Rachana Tathed",
        "firstName":  "Rachana",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/rachana-tathed-5355a317b",
        "image":  "wix:image://v1/bc4f65_770157b0d6e2435497be20c1be919b01~mv2.jpeg/rachana.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Rachana through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "707a9ae0-6a38-45e4-9c3c-47cdb76ec552",
        "slug":  "nemika-hagre",
        "name":  "Nemika Hagre",
        "firstName":  "Nemika",
        "role":  "HR",
        "linkedIn":  "https://www.linkedin.com/in/nemika-hagre-1a31ba112",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Nemika through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "78f4bce2-ae5d-4f61-b43c-11df913746ee",
        "slug":  "melissa-ledoux",
        "name":  "Melissa Ledoux",
        "firstName":  "Melissa",
        "role":  "UX Design",
        "linkedIn":  "https://www.linkedin.com/in/melissaledoux/",
        "image":  "wix:image://v1/bc4f65_5fc320cc8369458a96aa40995429afec~mv2.jpg/melissa_edited.jpg#originWidth=486\u0026originHeight=486",
        "strength":  "Low",
        "relationshipText":  "I met Melissa through our time together at:",
        "relationship":  "My relationship with Melissa is one of strong partnership and mutual respect. I often recognized her for her exceptional mentorship and leadership, especially in guiding her team members to achieve their goals. Her ability to create a supportive and inclusive environment allowed her team to thrive and deliver exceptional results. I admire how she always provides a safe space for open dialogue and collaboration, which makes a significant impact on the team's overall success.\n\nMelissa’s feedback for me highlighted her appreciation for the support and collaboration we shared. She values the partnership and the strategic direction I provide, which helped us navigate complex projects together. Our relationship is built on trust, open communication, and a shared commitment to excellence. Working with Melissa was always a rewarding experience, as her dedication and passion are truly inspiring.",
        "fondMemory":  "One fond memory I have with Melissa is when we worked closely on mentoring Mary and Meenakshi. She was not only a mentor but also a pillar of support, creating a nurturing environment that allowed them to grow and excel. Witnessing her genuine care and dedication to their development was truly inspiring. It was a moment that reinforced the impact of effective leadership and collaboration, and I felt proud to be part of that journey with her.",
        "gallery":  [],
        "testimonial":  "Udit, thank you for your exceptional guidance and support. Your strategic direction and partnership have been invaluable in helping me mentor and guide my team. I truly appreciate the positive impact you\u0027ve made on our collaboration.",
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "177646bf-b306-473e-81c5-c809d02bc2bd",
        "slug":  "regina-haynes",
        "name":  "Regina Haynes",
        "firstName":  "Regina",
        "role":  "Leader, Product Strategy",
        "linkedIn":  "https://www.linkedin.com/in/regina-haynes-54014632",
        "image":  "wix:image://v1/bc4f65_1542d25d59fa4105a02fa4eb8f86b50c~mv2.jpeg/regina.jpeg#originWidth=400\u0026originHeight=400",
        "strength":  "Low",
        "relationshipText":  "I met Regina through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "72e4ba0a-c57b-4532-bbc0-b2b5868d5a0b",
        "slug":  "sangeeta-wakhale",
        "name":  "Sangeeta Wakhale",
        "firstName":  "Sangeeta",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/sangeeta-wakhale-92701383",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Sangeeta through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "74b010fa-333b-4e39-8f3c-f774413a87ed",
        "slug":  "michael-swain",
        "name":  "Michael Swain",
        "firstName":  "Michael",
        "role":  "Leader, Engineering",
        "linkedIn":  "https://www.linkedin.com/in/michael-swain-8aaa742",
        "image":  null,
        "strength":  "Low",
        "relationshipText":  "I met Michael through our time together at:",
        "relationship":  null,
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "635ca237-86da-4f0c-a79e-28507effc0c6",
        "slug":  "mariam-chahine",
        "name":  "Mariam Chahine",
        "firstName":  "Mariam",
        "role":  "Lead Experience Designer",
        "linkedIn":  "https://www.linkedin.com/in/mariamchahine",
        "image":  "/images/people/mariam-chahine.jpg",
        "strength":  "Med",
        "relationshipText":  "I met Mariam through our time together at:",
        "relationship":  "Mariam and I have been collaborating around current Data and Ecosystem Platform experience work, especially where interoperability, AI, and clinical workflows need to feel more cohesive. I appreciate the way she brings human-centered design judgment into ambiguous problem spaces and helps translate broad strategy into practical experience decisions.\n\nOur work together is still taking shape, but the signal is already clear: Mariam is the kind of collaborator who can hold complexity without losing sight of the people who need the experience to work.",
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "51813423-0644-48ea-b421-1203b4451c13",
        "slug":  "hunter-johnstone",
        "name":  "Hunter Johnstone",
        "firstName":  "Hunter",
        "role":  "Product Management",
        "linkedIn":  "https://www.linkedin.com/in/hunter-johnstone-2a6053113",
        "image":  "/images/people/hunter-johnstone.jpg",
        "strength":  "Med",
        "relationshipText":  "I met Hunter through our time together at:",
        "relationship":  "Hunter and I have worked together through AI Spine and Data and Ecosystem Platform collaboration, where product judgment, technical systems, and operating-model decisions all meet. I value the way he stays connected to both the strategic intent and the concrete steps needed to make new capabilities real.\n\nThat kind of partnership matters in AI-enabled product work: the best outcomes come from people who can move between vision, delivery, and adoption without treating any one of them as someone else's problem.",
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "eebb6b68-b920-42c7-b34a-386ce2ed67bd",
                                  "4ace0bd2-8b5f-49da-bc47-51adca3eb9d1"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "f6f4bc53-b611-40d5-b8e2-1917fd828613",
        "slug":  "kat-chiluiza",
        "name":  "Kat Chiluiza",
        "firstName":  "Kat",
        "role":  "UX Research",
        "linkedIn":  "https://www.linkedin.com/in/kat-chiluiza",
        "image":  "/images/people/kat-chiluiza.png",
        "strength":  "Med",
        "relationshipText":  "I met Kat through our time together at:",
        "relationship":  "Kat and I have been connected through AI Spine and UX research collaboration, where the work depends on pairing strong product instincts with careful learning from users and teams. Her research perspective helps keep fast-moving AI work grounded in evidence, context, and adoption realities.\n\nI appreciate collaborators like Kat because they make the work sharper without making it heavier: questions become clearer, assumptions become visible, and the product direction gets more honest.",
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "4ace0bd2-8b5f-49da-bc47-51adca3eb9d1"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "1d1287a7-76b6-4d34-960a-e67ec0ee4f6c",
        "slug":  "jessy-kurien",
        "name":  "Jessy Kurien",
        "firstName":  "Jessy",
        "role":  "Leader, Engineering",
        "linkedIn":  "https://www.linkedin.com/in/jessy-kurien-7b593bb",
        "image":  "/images/people/jessy-kurien.jpg",
        "strength":  "Med",
        "relationshipText":  "I met Jessy through our time together at:",
        "relationship":  "Jessy and I have collaborated through Claude enablement and engineering adoption work, where the challenge is not just introducing a new tool but helping teams understand how it changes their day-to-day practice. I value the way Jessy brings engineering leadership, operational clarity, and a practical read on what teams need to move with confidence.\n\nOur collaboration is a good example of the kind of cross-functional partnership AI work needs: design and product can shape the experience, but engineering leadership turns that intent into durable behavior across teams.",
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "4ace0bd2-8b5f-49da-bc47-51adca3eb9d1"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "1702ae90-8850-4e70-9b67-ce19a41e6022",
        "slug":  "supraja-sampath",
        "name":  "Supraja Sampath",
        "firstName":  "Supraja",
        "role":  "Engineering",
        "linkedIn":  "https://www.linkedin.com/in/suprajasampath42",
        "image":  "/images/people/supraja-sampath.jpg",
        "strength":  "Med",
        "relationshipText":  "I met Supraja through our time together at:",
        "relationship":  "Supraja and I have crossed paths through Claude training and AI enablement work, especially in the moments where new practices need to become understandable, repeatable, and useful for teams. I appreciate her steady engineering perspective and her willingness to help make emerging ways of working real for a broader group.\n\nThe collaboration stands out because enablement only works when it is grounded in the people who will actually use the tools. Supraja helps bring that grounding into the work.",
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "4ace0bd2-8b5f-49da-bc47-51adca3eb9d1"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "d77749ef-ab71-412f-b5d8-01c430c9732e",
        "slug":  "jaanhavi-sp",
        "name":  "Jaanhavi SP",
        "firstName":  "Jaanhavi",
        "role":  "UX Design",
        "linkedIn":  "https://in.linkedin.com/in/jaanhavi-subhapanneer-2a60a8163",
        "image":  "/images/people/jaanhavi-sp.png",
        "strength":  "Med",
        "relationshipText":  "I met Jaanhavi through our time together at:",
        "relationship":  "Jaanhavi and I have collaborated around AI setup and experience-design enablement, where newer workflows need both design craft and practical onboarding support. I appreciate the way she brings interaction-design thinking into conversations that can otherwise become mostly about tooling.\n\nThat balance matters: the goal is not just to get people set up, but to help them see how better workflows can change the quality and pace of the work itself.",
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "4ace0bd2-8b5f-49da-bc47-51adca3eb9d1"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "47f0f217-91f0-4468-b527-03ad5b27c13d",
        "slug":  "malavika-ng",
        "name":  "Malavika NG",
        "firstName":  "Malavika",
        "role":  "Lead Experience Designer",
        "linkedIn":  "https://in.linkedin.com/in/malavika-ng-27bb7a222",
        "image":  "/images/people/malavika-ng.png",
        "strength":  "Med",
        "relationshipText":  "I met Malavika through our time together at:",
        "relationship":  "Malavika and I have collaborated around integration, AI setup, and Data and Ecosystem Platform experience work. Her design perspective sits in a space I care deeply about: making complicated healthcare workflows feel coherent enough that people can make progress without carrying the system in their heads.\n\nI value that kind of collaboration because it connects craft to consequence. The work is not only about a cleaner interface; it is about giving teams and clinicians more confidence in the moments that matter.",
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "4ace0bd2-8b5f-49da-bc47-51adca3eb9d1",
                                  "a3dfe746-9c4d-4e49-9389-98d410181854"
                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "e2c6b570-ee36-4652-b6b0-231656529cdd",
        "slug":  "sam-lambson",
        "name":  "Sam Lambson",
        "firstName":  "Sam",
        "role":  "Senior Leader, Product Management",
        "linkedIn":  "https://www.linkedin.com/in/samlambson",
        "image":  "/images/people/sam-lambson.png",
        "strength":  "Med",
        "relationshipText":  "I met Sam through our time together at:",
        "relationship":  "Sam and I have worked through Data and Ecosystem Platform leadership conversations where interoperability, data strategy, product direction, and AI-readiness all connect. I appreciate the way he frames healthcare technology as an ecosystem problem rather than a single-feature problem.\n\nThat perspective has shaped how I think about the work: the strongest product experiences are not isolated screens, but connected systems that make care delivery easier, more trustworthy, and more humane.",
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  "Vice President, Product Management, Data and Ecosystem, athenahealth",
        "relatedProjectIds":  [

                              ],
        "relatedPostSlugs":  [

                             ]
    },
    {
        "id":  "a1ec2a8d-d3ea-4555-b26f-0b1c98925a3d",
        "slug":  "senthil-rajamanickam",
        "name":  "Senthil Rajamanickam",
        "firstName":  "Senthil",
        "role":  "Engineering",
        "linkedIn":  "https://in.linkedin.com/in/senthil-rajamanickam-156249173",
        "image":  "/images/people/senthil-rajamanickam.jpg",
        "strength":  "Med",
        "relationshipText":  "I met Senthil through our time together at:",
        "relationship":  "Senthil and I have been connected through AI Spine and DEP Nervous System work, where engineering leadership, contribution models, and responsible AI adoption all need to come together. I appreciate the way he helps keep the system grounded in how teams actually build, contribute, and support shared capabilities.\n\nThat kind of collaboration matters because AI enablement only works when it becomes practical operating behavior: clear source-of-truth choices, useful workflows, and enough structure for teams to move quickly without losing accountability.",
        "fondMemory":  null,
        "gallery":  [],
        "testimonial":  null,
        "concurrentDesignation":  null,
        "relatedProjectIds":  [
                                  "eebb6b68-b920-42c7-b34a-386ce2ed67bd",
                                  "4ace0bd2-8b5f-49da-bc47-51adca3eb9d1"
                              ],
        "relatedPostSlugs":  [

                             ]
    }
];

export const peopleCategories: PeopleCategory[] = [
  "Leadership",
  "Product",
  "Design",
  "Engineering",
  "Other",
];

export function getPeopleCategory(person: Pick<Person, "role">): PeopleCategory {
  const role = person.role.toLowerCase();

  if (role.includes("leader") || role.includes("ceo") || role.includes("cto")) {
    return "Leadership";
  }

  if (role.includes("product")) {
    return "Product";
  }

  if (role.includes("design") || role.includes("research")) {
    return "Design";
  }

  if (role.includes("engineering") || role.includes("quality")) {
    return "Engineering";
  }

  return "Other";
}

export function getPersonBySlug(slug: string) {
  return people.find((person) => person.slug === slug);
}

export function getPeopleForProject(projectId: string) {
  return people.filter((person) => person.relatedProjectIds.includes(projectId));
}
