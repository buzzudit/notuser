export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  sourceUrl: string;
  thumbnail: string;
  author: string;
  category: string;
  tags: string[];
  date: string;
  updatedAt: string;
  readTime: string;
  sections: BlogSection[];
};

const legacyBlogSlugMap: Record<string, string> = {
  'designing-ai-workflows-that-people-trust': 'framework-first-design-a-scalable-approach-to-problem-solving',
  'from-prompting-to-operating-ai-systems': 'consistency-at-scale-with-systems-thinking',
  'how-ai-changes-roadmapping-for-product-teams': 'growth-a-designer-s-journey',
  'building-a-high-signal-portfolio-in-the-ai-era': 'how-i-groom-my-designers-at-athenahealth',
};

export const blogPosts: BlogPost[] = [
  {
    id: 'real-1',
    slug: 'how-i-almost-failed-at-modding',
    title: 'How I almost failed at modding',
    excerpt: 'Modding Fallout 4 wasn\'t just about creativity-it was about mastering tools, debugging chaos, and building a workflow that worked.',
    sourceUrl: 'https://www.notuser.com/post/how-i-almost-failed-at-modding',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_c9479fee1b7b4850b59496761f372ecc~mv2.jpg/v1/fit/w_960,h_532,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Blog',
    tags: [
      'Blog',
    ],
    date: '2025-02-11',
    updatedAt: '2025-02-11',
    readTime: '5 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Not Everything Needs to Be About Work. Life encompasses so much more.',
          'For years, my attention has been on work-design, strategy, and problem-solving. Each project had its own goal, purpose, and anticipated result. However, not everything in life needs to be centered around productivity or using time efficiently. In truth, some things are the complete opposite: enjoying time! Occasionally, you simply need to create for the joy it brings to your heart.',
          'I\'ve always wanted to make my own mods for Fallout 4. A couple of years ago, I took my first shot at it. I downloaded the Creation Kit , opened a few tutorials, and quickly realized I was in over my head. Too many systems, too many interdependent mechanics, too many ways to break the game. I gave up.',
          'I tried again last year, thinking maybe I just needed a fresh perspective. Same result-I got lost in the complexity and quit.',
          'Then, this winter, I tried again. But this time, I approached it differently. Instead of getting frustrated and walking away, I embraced learning the process, step by step. I watched countless videos, read articles, and leaned on gen AI whenever I got stuck. I took notes. I experimented. I made mistakes and actually debugged them instead of giving up. And eventually, I created something I\'m proud of: More Chems . Take a look:',
          'you\'re into games, especially into Fallout 4, give it a shot.',
        ],
      },
      {
        heading: 'Starting Small: The Birth of More Chems',
        paragraphs: [
          'At first, I kept searching for something meaningful to create-some grand idea that would redefine gameplay. But my ideas were too complex for my skill level. I wanted to create new AI behaviors, rework the combat system, and introduce new mechanics. I kept hitting a wall.',
          'That\'s when I realized: I needed to start small.',
          'I thought about modularity. Instead of building a massive overhaul mod, I could create something simple and expandable-something I could improve as I learned. That\'s how More Chems started.',
          'A single chem.',
          'Then three.',
          'Now, I have nine unique chems, each with distinct effects, from super speed to magnetizing weapons to summoning a friendly Deathclaw. And I can keep adding more.',
        ],
      },
      {
        heading: '1. The Learning Curve',
        paragraphs: [
          'When I first opened the Creation Kit, I felt like I was staring at an alien language. The interface was clunky, the errors were cryptic, and the documentation was outdated. But I learned to break it down.',
          'Instead of trying to understand everything at once, I focused on one small goal at a time.',
          '• How do I create an item',
          '• How do I apply a temporary effect',
          '• How do I script an event',
          'Each time I solved one problem, I moved on to the next.',
        ],
      },
      {
        heading: '2. Debugging the Chaos',
        paragraphs: [
          'Modding isn\'t just about adding cool things to a game. It\'s also about not breaking the game in the process.',
          'Some of my early chems had… unintended side effects. One of them crashed the game every time I used it. Another made NPCs start attacking each other for no reason. At one point, I managed to accidentally teleport all the enemies into the sky.',
          'I learned to use Papyrus scripting logs to track errors and figure out what went wrong. Every bug was a puzzle, and solving them felt just as rewarding as adding new features.',
        ],
      },
      {
        heading: '3. Making Effects Feel Good',
        paragraphs: [
          'It wasn\'t enough for my chems to just work-they had to feel good to use. A speed boost wasn\'t exciting unless it was fast enough to feel exhilarating but controlled enough to avoid breaking the game.',
          'I tweaked values, adjusted animations, and experimented with VFX. I wanted each chem to have gameplay impact, not just be a gimmick.',
          '• Punchaps makes melee combat feel powerful, sending enemies flying.',
          '• Jumpaps turns you into a super-powered kangaroo, letting you reach places you normally couldn\'t.',
          '• Dartaps lets you teleport-dash toward an enemy for a surprise attack.',
        ],
      },
      {
        heading: '4. Managing a Suite of Tools',
        paragraphs: [
          'One of the biggest hurdles in creating More Chems wasn\'t just learning one tool-it was learning an entire ecosystem of tools, each with its own quirks, bugs, and limitations.',
          'To bring my mod to life, I had to juggle multiple software applications, each serving a different purpose:',
          '• Creation Kit - The main tool for designing items, scripting behavior, and implementing mechanics.',
          '• NifSkope - Editing and optimizing 3D models for custom chem boxes.',
          '• Archive2 - Packing everything into a .ba2 archive so the game could load assets correctly.',
          '• Photoshop - Creating and editing textures for chem packaging.',
          '• ElevenLabs - AI-generated voice lines for chem descriptions and effects.',
          '• Audacity - Editing and cleaning up sound files.',
          '• Shell Commands - Filtering and analyzing logs to debug scripts efficiently.',
          '• GitHub - Version control, ensuring I didn\'t accidentally break something I couldn\'t undo.',
          '• xEdit (FO4Edit) - Cleaning and fine-tuning mod records to avoid conflicts.',
          '• OBS Studio - Recording footage for testing and showcasing changes.',
          'Each tool had a learning curve, and integrating them into a smooth workflow took time. At first, I was constantly jumping between programs, manually transferring files, and losing track of changes.',
          'Solution: Creating an Efficient Workflow',
          'To keep everything manageable, I established a structured workflow with automation and organization:',
          '1. Source Control with GitHub - Every major change was committed, so I could roll back if something broke.',
          '2. Batch Scripting - I wrote shell scripts to automate packaging, log filtering, and file management.',
          '3. Dedicated Workspaces - Organized assets in clearly labeled folders, preventing file conflicts.',
          '4. Standardized Naming - Every asset followed a consistent naming pattern to avoid confusion in Creation Kit.',
          '5. Pre-Testing Before Importing - Edited models in NifSkope, tested sounds in Audacity, and reviewed textures in Photoshop before adding them to the game.',
          '6. Incremental Testing - Instead of making tons of changes at once, I tested one new feature at a time.',
          '7. Modding Documentation & Notes - Kept a personal wiki with troubleshooting steps, useful console commands, and modding tips.',
          'Once I had a repeatable process, everything became faster and smoother.',
          'Now, when I add a new chem, it\'s no longer an unstructured mess-I have a clear system that lets me prototype, test, and refine efficiently. Managing multiple tools is no longer an obstacle-it\'s part of the fun.',
          'Each chem adds a new layer of fun to combat.',
        ],
      },
      {
        heading: 'Lessons Learned',
        paragraphs: [
          'The most important thing I\'ve learned Creativity requires persistence .',
          'I failed at modding twice. But the third time, I pushed through the frustration and learned how to tackle problems piece by piece.',
          'More than that, I learned that not everything has to be work. It\'s okay to create something just because it\'s fun. It\'s okay to experiment without a roadmap. And it\'s okay to take your time learning something new.',
          'I started this journey just trying to make one chem. Now, I\'ve built an entire system that I can expand indefinitely. And the best part',
          'I\'m still having fun.',
        ],
      },
    ],
  },
  {
    id: 'real-2',
    slug: 'growth-a-designer-s-journey',
    title: 'Growth: A Designer\'s Journey',
    excerpt: 'Explore the 7 stages of a designer\'s growth, from curious beginner to skilled leader. Discover how to navigate each phase with purpose.',
    sourceUrl: 'https://www.notuser.com/post/growth-a-designer-s-journey',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_b642951bcbbd46f295caad70e815ba96~mv2.png/v1/fit/w_992,h_557,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Leadership',
    tags: [
      'Design Mentorship',
      'Career Growth',
      'Career Development',
      'athenahealth',
    ],
    date: '2024-09-23',
    updatedAt: '2024-09-23',
    readTime: '3 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'This is not a well-researched piece; rather, it is a philosophical and opinionated take based on my personal experiences and observations.',
        ],
      },
      {
        heading: 'The Seven Stages',
        paragraphs: [
          'The growth of a designer is an evolving journey that can be broken down into seven unique stages. Each stage represents a distinct phase of development, from the initial curiosity of a beginner to the mastery and leadership of a seasoned professional. Understanding these stages can help both designers and their mentors navigate the path of growth more effectively. In this article, I\'ll describe each stage in detail, drawing from my personal experiences and insights, and offer guidance on how to foster growth at each level.',
        ],
      },
      {
        heading: 'Infancy: Birth of a Designer',
        paragraphs: [
          'Every designer, like a newborn, starts with a clean slate. At this stage, they are akin to a baby, curious about everything around them. Just as a child explores the world through taste and touch, a newbie designer explores the design world, absorbing everything they can. They need to be nurtured, guided, and allowed to imitate their mentors. As managers or mentors, it\'s crucial to support them through this phase, understanding that mistakes are part of their learning curve.',
        ],
      },
      {
        heading: 'Walking: The Learning Phase',
        paragraphs: [
          'As designers begin to "walk," they start experimenting. This is a critical phase where they are no longer just absorbing; they are beginning to find their passion. They start understanding the tools and processes and need guidance to navigate through the overwhelming possibilities. Introducing them to various design tools and methodologies can help them discover what they truly enjoy, be it research, problem-solving, or visual design.',
        ],
      },
      {
        heading: 'Playing: The Safe Playground',
        paragraphs: [
          'Once a designer is comfortable with the basics, they begin to "play." This is where they need a safe environment to experiment, take risks, and, yes, even fail. Just like children in a playground, they need to be allowed to take leaps of faith. As managers, providing this safe space and encouraging them to handle their own projects will foster growth. It\'s important to remember that failure is a stepping stone to success, and this freedom is essential for mid-career designers.',
        ],
      },
      {
        heading: 'Venturing: Into the Unknown',
        paragraphs: [
          'As designers gain confidence and skill, they start to master their craft. They juggle multiple tasks, collaborate with new people, and venture into uncharted territories. This is the stage where the safety net is removed. They are expected to handle high-stakes projects independently. Collaboration and learning from peers become crucial, as they need to acquire new skills and strategies to navigate this challenging phase.',
        ],
      },
      {
        heading: 'Sprinting: The Goal-Driven Stage',
        paragraphs: [
          'At this stage, designers are sprinting towards their goals. They become highly accountable for their work, focusing more on business outcomes than just design aesthetics. They are goal-oriented and deeply invested in achieving results that contribute to the company\'s success. Managers should set clear business goals and hold them accountable, shifting their mindset from user-centric to business-centric objectives.',
        ],
      },
      {
        heading: 'Cruising: Sharing Success',
        paragraphs: [
          'When designers reach the cruising phase, they have a good grasp of their skills and goals. Now, it\'s time for them to slow down a bit, share their success, and take others along the journey. At this stage, they transition from being nurtured to nurturing others. This is where they become mentors, helping the next generation of designers grow and succeed.',
        ],
      },
      {
        heading: 'Flying: Identity and Empowering Others',
        paragraphs: [
          'The final stage is when designers are truly "flying." They have mastered their craft, are recognized in their field, and play dual roles of being a leader and a doer. At this stage, maintaining their personal brand and identity becomes essential. They empower others to reach the same heights, balancing guidance and autonomy. This is where the real impact of their journey is seen, as they contribute significantly to the growth of their team and organization.',
        ],
      },
      {
        heading: 'Find Your Spot and Do Your Thing',
        paragraphs: [
          'Throughout these stages, it\'s crucial to find where you belong. Your designation doesn\'t necessarily define your stage of growth. It\'s more about your actions, context, and the impact you\'re making. For managers, recognizing where each team member stands and what they need to progress is vital.',
        ],
      },
      {
        heading: 'Reality Check: Life is Not Linear',
        paragraphs: [
          'Growth is not a linear process. It\'s messy and involves multiple stages happening simultaneously. You might be sprinting in one area while still playing in another. Being aware of this complexity and navigating it thoughtfully is key to effective growth conversations with your manager.',
        ],
      },
    ],
  },
  {
    id: 'real-3',
    slug: 'how-i-groom-my-designers-at-athenahealth',
    title: 'How I groom my designers at athenahealth',
    excerpt: 'Discover how I nurture my design team at athenahealth through personalized growth plans, fostering trust, and empowering them to thrive.',
    sourceUrl: 'https://www.notuser.com/post/how-i-groom-my-designers-at-athenahealth',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_14b15c57980143c88783d0a09fb65894~mv2.jpg/v1/fit/w_992,h_558,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Leadership',
    tags: [
      'Leadership',
    ],
    date: '2024-09-20',
    updatedAt: '2024-09-20',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'At athenahealth, grooming designers is a process that combines structured development with personalized feedback. As a design leader, this process is deeply personal for me. I don\'t just aim to guide my team toward achieving business goals-I nurture them, investing in their growth and ensuring they develop the skills and confidence needed to thrive. My leadership style is centered on fostering trust by genuinely caring about their success, which, in turn, keeps them motivated and improves their performance.',
          'Below, I\'ll walk through how this process unfolds, with examples of how I approach each stage of development for my team members.',
        ],
      },
      {
        heading: 'Design Responsibilities Framework: A Roadmap for Growth',
        paragraphs: [
          'At athenahealth, we utilize a design responsibilities framework that provides a structured path for our designers\' growth. This framework defines key responsibilities and skills mapped to each responsibility that align with different stages of a designer\'s career, from entry-level to senior leadership. It breaks down the expected proficiency across various areas-ranging from core design skills like interaction design and research to leadership and team management. Designers are not just measured by their technical abilities but also by how effectively they can mentor others, lead cross-functional teams, and influence larger strategic initiatives. This framework serves as both a development guide and a tool for setting clear, actionable growth goals.',
          'This framework is more than a set of expectations-it serves as a roadmap for a designer\'s professional journey. I take this structure and use it as a personal growth tool for my team.',
          'Below is an example of variation in role and scope for each responsibility by cohort',
          'And continuing, an example of how these responsibilities have skills and expectation specified for each cohort.',
          'The framework has about 52 skills defined across 11 responsibilities. Each of these skills can be rated on a scale of 0 to 4.',
          'The scale we use is as follows:',
          '0 No knowledge : Has awareness about the skill and some of its benefits but has not used it successfully on a project.',
          '1 Exploring : Actively learning about the skill and beginning to apply it to design challenges being faced on your team.',
          '2 Emerging : Successfully used the skill on a number of design projects to achieve good results for the team.',
          '3 Proficient : Capable of applying this skill to a range of problems and contexts. Understands when and how to apply techniques to quickly solve design challenges.',
          '4 Mastered : Can effectively mentor this skill to any cohort and apply this skill across the broadest context and any cohort.',
          'When guiding a designer through the cohort levels, I ensure they understand how their responsibilities evolve, not just in terms of workload, but in leadership, strategy, and the influence they can exert. For instance:',
          'Junior designers start by supporting smaller, well-defined projects like UI enhancements for specific workflows. I help them focus on mastering core skills, such as interaction design and research methods .',
          'Lead designers are expected to lead initiatives involving multiple teams. Here, I challenge them to develop cross-functional planning skills , encouraging them to own the coordination of design, product, and engineering efforts.',
          'Example: Helping a Senior Designer Grow',
          'Recently, I mentored a senior designer who was ready to take on more complex projects. Together, we identified that while they excelled at executing designs, they needed to enhance their stakeholder management skills to influence roadmaps. We built a development plan that included shadowing me in meetings with key stakeholders. This not only gave them the confidence to voice their ideas but also helped them gain a deeper understanding of aligning design decisions with business goals.',
        ],
      },
      {
        heading: 'Framework in Action',
        paragraphs: [
          'Self-Assessment: Building Trust Through Reflection',
          'The first step in grooming my team is having them self-assess across the various skills relevant to their cohort. This self-reflection is key to building trust-I encourage my designers to be open about their strengths and where they feel they need more support. My approach is not about critiquing but about understanding where they are on their journey and how I can support them.',
          'As we review their self-assessments, my goal is to validate their efforts while providing constructive feedback. If a designer feels they\'re struggling with a skill, I reassure them that this is part of the growth process and that I\'m here to guide them through it.',
          'Example: Guiding Through a Self-Assessment',
          'One of my junior designers recently rated themselves low in information architecture (IA) , despite having done good work in this area. I used this opportunity to help them see their progress, pointing out specific instances where their IA work had improved the overall user experience. This helped build their confidence, and we agreed on a plan to continue growing their skills through mentorship and targeted projects.',
          'Consensus and Feedback: Honest Conversations',
          'After self-assessment, I engage in open discussions with my team. My approach here is collaborative-I don\'t want to impose my evaluation but instead work together to come to a consensus. These conversations are honest but supportive. If there\'s a gap between how a designer views their performance and what I observe, we discuss why.',
          'I make it a point to frame these discussions around growth , not shortcomings. I\'ve found that this helps designers stay motivated and focused on improvement rather than feeling discouraged.',
          'Example: Honest Feedback and Alignment',
          'I had a Lead Designer who was excellent at delivering high-quality visual designs but struggled with project planning. In our discussion, I pointed out this gap, not as a failure but as an opportunity. We agreed on specific goals for improving project planning skills, including leading smaller initiatives where they could practice those abilities under my guidance.',
          'Addressing Gaps: Creating a Path for Development',
          'Once we identify gaps, I work with each designer to create a development plan . This is where my nurturing leadership comes into play-I want my team to feel empowered to grow. Whether it\'s offering opportunities for cross-functional leadership or giving them space to experiment with new methods, my goal is to provide them with the right tools and guidance.',
          'I also ensure they have access to mentorship-sometimes from me directly, and sometimes from others in the organization who have expertise in the areas they need to grow.',
          'Example: Tailored Development for Leadership Growth',
          'One of my Lead Designers was ready to step into a more strategic leadership role. We created a plan where they would gradually take over leading UX initiatives across zones. I gave them the autonomy to drive projects, but always made myself available for guidance when needed. Over time, their confidence grew, and they successfully transitioned into a Principal Designer role.',
          'Ongoing Reviews: Continuous Improvement',
          'The grooming process at athenahealth is not a one-time exercise. I periodically review each team member\'s progress and adjust their development plans as necessary. These reviews are not just about checking off goals but about ensuring that my designers feel supported and continue to have opportunities for growth.',
          'For me, leadership is about creating an environment where designers feel they can take risks, make mistakes, and grow. I emphasize continuous learning, and I celebrate every milestone along the way-no matter how small.',
          'Example: Celebrating Growth',
          'In one case, a Lead Designer I worked with had been struggling with facilitation skills. After months of practicing in smaller team meetings, they successfully led a major cross-functional workshop. We celebrated this win together, and it motivated them to keep improving other aspects of their leadership style.',
        ],
      },
      {
        heading: 'Conclusion: Why This Matters to Me',
        paragraphs: [
          'As a design leader, the growth of my team is my priority. I nurture them not just because it\'s good for business, but because I believe in their potential. I\'ve learned that when I show genuine investment in their success, it builds trust, motivates them, and ultimately leads to better performance.',
        ],
      },
    ],
  },
  {
    id: 'real-4',
    slug: 'framework-first-design-a-scalable-approach-to-problem-solving',
    title: 'Framework-First Design: A Scalable Approach to Problem Solving',
    excerpt: 'Framework-First Design offers a scalable method to tackle complex problems: start with a focused example, derive a framework, and iterate.',
    sourceUrl: 'https://www.notuser.com/post/framework-first-design-a-scalable-approach-to-problem-solving',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_6cf0340008ee4f23b5c593f3a58197b6~mv2.jpg/v1/fit/w_1000,h_558,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Blog',
    tags: [
      'Systems Thinking',
      'Scalable Design',
      'UX Research',
    ],
    date: '2023-10-25',
    updatedAt: '2023-10-25',
    readTime: '8 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'In the realm of design and problem-solving, various methodologies have been adopted over the years. One such approach that we have developed recently is the concept of \'Framework-First Design.\' Drawing inspiration from iterative methodologies and design principles, this method focuses on building a base framework based on a single piece or focused area of a larger problem, and then evolving the framework so it acts as a guide to address the remaining facets of the challenge. The flowchart below provides a visual representation of the process, which we\'ll delve into in this article.',
          'At its core, the Framework-First Design aims to break down a multifaceted problem into more manageable chunks. By starting with a single piece of the puzzle (referred to as "Subject Zero" in the image), designers can derive a foundational method or framework. This foundation then becomes the basis for addressing other elements of the problem.',
        ],
      },
      {
        heading: '1. Research',
        paragraphs: [
          'Begin by extensively researching the problem at hand, and ways to solve it. Gather data, insights, and understand the larger context. An effective research process can greatly inform and guide the subsequent steps of the design process.',
          'Understand the Objective: What are you hoping to achieve Are you looking for a broad understanding of the problem, or are you focusing on specific facets Define clear research objectives',
          'Review literature: Begin by exploring existing literature on the subject. This includes industry reports, articles, methodology and case studies. Establish what is already known and identifies any gaps in the existing knowledge.',
          'Interview Stakeholders: Engage with key stakeholders involved in the problem. Their insights can provide invaluable context, identify pain points, and highlight potential solutions. This could include users, business stakeholders, or anyone impacted by the problem.',
          'Collect Data: Depending on the nature of the problem, gather relevant data. This could be quantitative data (like analytics or statistics) or qualitative data (like user feedback or anecdotal evidence).',
          'Analyse Competitors: Examine how others, especially competitors or analogous industries, have addressed similar problems. This can uncover effective strategies, tools, or methodologies.',
          'Study ethnographically: Observing users or stakeholders in their natural environment can offer deep insights into their behaviors, challenges, and needs. This method is especially useful when designing for specific user experiences or processes.',
          'Document everything: As you gather information, it\'s essential to document your findings meticulously. This not only ensures that valuable insights aren\'t lost but also aids in analysis later on. Create Visual Representations like charts, graphs, or mind maps to visually represent complex data or relationships. This can make it easier to identify patterns or insights.',
          'The goal of the research phase isn\'t just to gather data but to achieve a holistic understanding of the problem in its larger context. This means recognizing the interconnectedness of various facets, understanding underlying causes, and anticipating potential ripple effects of solutions.',
        ],
      },
      {
        heading: '2. SME Review',
        paragraphs: [
          'Engage Subject Matter Experts (SMEs) to review the findings from the research phase. Their expertise can offer valuable insights and guide the initial design.',
        ],
      },
      {
        heading: '3.Tackle Subject Zero',
        paragraphs: [
          'With the knowledge acquired, embark on solving a specific piece of the larger problem. You can pick this piece based on priority, breadth of scope or ease of solving:',
          'Stakeholder Impact: Choose a piece that, when addressed, would have the most significant impact on key stakeholders. This could mean selecting a segment that affects the largest user base or a critical business process.',
          'Resource Availability: If certain resources - whether they are specific tools, skills, or team members - are readily available, it might make sense to select a piece that can best utilize these resources effectively.',
          'Urgency: Address a part of the problem that is time-critical. If there are deadlines or external factors at play, it might be practical to start with the piece that needs immediate attention.',
          'Visibility and Showcase Potential: Pick a piece that, once completed, can be showcased to gain buy-in from stakeholders or to demonstrate the value of the overall project. This might be a segment with a tangible or visible outcome.',
          'Dependencies: If some parts of the problem are foundational and other segments are dependent on them, it\'s logical to start with these foundational pieces.',
          'Feedback Potential: Start by solving a piece that can provide the most valuable feedback when prototyped or tested. This might be a segment with diverse user interactions or varied use-cases.',
          'Risk Mitigation: If there are parts of the problem that are deemed high-risk, it might be beneficial to address these early on. Early resolution can prevent potential roadblocks or setbacks later in the project.',
          'Alignment with Strategic Goals: Choose a piece that aligns closely with the organization\'s current strategic goals or vision. This ensures that the effort is in sync with broader organizational objectives.',
          'Complexity: This is a tricky one. Sometimes, starting with the most complex segment can provide a deep understanding that makes solving subsequent parts easier. Conversely, beginning with the simplest segment can provide quick wins and momentum.',
          'The chosen approach for selecting "Subject Zero" will largely depend on the specific context, goals, and constraints of the project. The key is to ensure that the chosen segment provides valuable insights and learnings that can inform the broader effort.',
          'The outcome of this phase is a reference design or prototype.',
        ],
      },
      {
        heading: '4.Derive Framework',
        paragraphs: [
          'Analyze the process, tools, and methods employed in addressing Subject Zero. From this, extract a framework or methodology that can potentially be applied to other facets of the problem.',
          'Document Everything: Start by meticulously documenting every step, tool, strategy, and decision made during the \'Subject Zero\' phase. This creates a repository of information that aids in the extraction process.',
          'Identify Patterns: Look for recurring themes, strategies, and solutions. Patterns indicate tried and tested methods that can potentially be generalized and applied across multiple contexts.',
          'Articulate the Framework: Begin to structure and outline the framework. This might involve grouping similar strategies, defining key principles, and establishing a sequential or modular approach.',
          'Test the Framework\'s Universality: While the framework is derived from a specific example, it should be adaptable. Test its flexibility by hypothetically applying it to another part of the problem or a different challenge altogether.',
          'Engage Stakeholders: Share the preliminary framework with key stakeholders, team members, and SMEs. Gather their input to ensure that the framework is comprehensive, adaptable, and robust.',
        ],
      },
      {
        heading: '5.Iteration & Feedback',
        paragraphs: [
          'As the framework is applied to other subjects or pieces, there\'s an opportunity to learn and refine. The initial framework may not be perfect, and as new challenges arise, there\'s a chance to iterate and improve upon it. With every iteration, feedback must be gathered, analyzed, and incorporated. This continuous improvement cycle ensures that the framework remains relevant and effective.',
        ],
      },
      {
        heading: 'See it in action: Gogul\'s Practical Application of Framework-First Design',
        paragraphs: [
          'Journey mapping is a complex task, and when faced with the challenge of creating multiple maps for the KYC initiative at Foundational Platform, Gogul, a designer on my team, took a systematic approach.',
          '​Gogul R G',
          'Lead Designer',
          'athenahealth',
        ],
      },
      {
        heading: 'The Beginning',
        paragraphs: [
          'Gogul started by researching existing methods for journey mapping. With a range of options available, he opted for an approach tailored to his needs, choosing a product he was familiar with for his first map.',
        ],
      },
      {
        heading: 'Feedback Loop',
        paragraphs: [
          'Before proceeding further, Gogul sought feedback on his chosen method. He discussed his preliminary approach with stakeholders and also consulted with Kristina, an expert researcher, to ensure he was on the right track.',
        ],
      },
      {
        heading: 'First Map Creation',
        paragraphs: [
          'Using the feedback and his initial research, Gogul developed his first journey map, ensuring he documented the process. This documentation later served as the foundational framework for his subsequent maps.',
        ],
      },
      {
        heading: 'Iteration and Refinement',
        paragraphs: [
          'As he proceeded to create journey maps for more products, Gogul encountered certain challenges. These became opportunities for him to iterate on and refine his initial framework.',
        ],
      },
      {
        heading: 'Sharing with the Org',
        paragraphs: [
          'After completing several journey maps and making adjustments to his framework, Gogul shared it with the organization, making it accessible for others to use. His journey map framework was approved and published on athenahealth\'s intranet section go/research maintained by DesignOps team.',
        ],
      },
      {
        heading: 'Community Contribution',
        paragraphs: [
          'A few months after publishing, Gogul noticed that other members of the organization had adopted and even made some enhancements to the framework, demonstrating its practicality and adaptability.',
          'Gogul\'s approach showcases the practical application of the Framework-First Design. By starting small, seeking feedback, and being open to iteration, he developed a tool that benefitted not just his projects, but also the wider organization.',
        ],
      },
      {
        heading: 'See It in Action: Vignesh\'s Approach to Streamlining Clinical Messaging',
        paragraphs: [
          'When tasked with the challenge of addressing fragmented communication in the clinical workflows of athenahealth clients, Vignesh adopted a methodical approach. Given the current scenario where multiple communication channels were being used inconsistently, his goal was to minimize this fragmentation across at least 20 workflows.',
          'Vignesh Prabhu Natarajan Rajasekara',
          'Principal Designer',
          'athenahealth',
        ],
      },
      {
        heading: 'Starting Point',
        paragraphs: [
          'Instead of diving headfirst into all the workflows, Vignesh strategically chose to focus on a single workflow: \'referral management\'. His objective was to deeply understand this workflow and derive foundational principles that could potentially be applied to others.',
        ],
      },
      {
        heading: 'Collaboration and Testing',
        paragraphs: [
          'Vignesh recognized the importance of collective wisdom. To ensure the relevancy and feasibility of his approach, he maintained ongoing collaboration between his team and the clinical team. Moreover, he incorporated feedback from end customers through regular testing sessions, validating the real-world applicability of his strategies.',
        ],
      },
      {
        heading: 'From One to Many',
        paragraphs: [
          'Once Vignesh felt confident about the principles derived from the \'referral management\' workflow, he began applying them to other workflows. This wasn\'t a static process. As he delved into different workflows, he found opportunities to refine and iterate upon his initial set of principles.',
        ],
      },
      {
        heading: 'Long-Term Vision',
        paragraphs: [
          'While the task at hand is substantial, Vignesh is committed to the long game. Over the next couple of years, he plans to methodically address multiple workflows, always iterating and refining his approach based on insights from each one.',
          'Vignesh\'s approach to the challenge at hand exemplifies the power of starting with a focused, singular effort and using the insights gained to address broader challenges. Through continuous collaboration, testing, and iteration, he\'s on a path to significantly enhance the efficiency and coherence of clinical messaging for athenahealth clients.',
        ],
      },
      {
        heading: 'Scalability',
        paragraphs: [
          'By establishing a foundational framework early on, it becomes easier to address new facets of the problem without starting from scratch.',
        ],
      },
      {
        heading: 'Consistency',
        paragraphs: [
          'A shared framework ensures uniformity in the design process and outcomes.',
        ],
      },
      {
        heading: 'Efficiency',
        paragraphs: [
          'Over time, as the framework gets refined, the design process becomes faster and more streamlined.',
        ],
      },
      {
        heading: 'Collaboration',
        paragraphs: [
          'The framework provides a common language and approach, fostering better teamwork and collaboration.',
        ],
      },
      {
        heading: 'Brand Building',
        paragraphs: [
          'By sharing your knowledge and publishing your framework, you build your personal brand as a subject matter expert.',
          'Here is the downloadable version for quick reference:',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'The Framework-First Design approach provides a systematic and scalable method for tackling complex problems. By starting with a single example, deriving a framework, and then applying it iteratively to other aspects of the challenge, designers can navigate the intricacies with clarity and consistency. As with any methodology, it\'s crucial to remain open to feedback and continuously refine the framework to ensure its effectiveness.',
        ],
      },
    ],
  },
  {
    id: 'real-5',
    slug: 'consistency-at-scale-with-systems-thinking',
    title: 'Consistency at Scale with Systems Thinking',
    excerpt: 'Scaling up is easy. Maintaining quality is not. A systems-thinking view of how to keep product quality coherent as teams and services multiply.',
    sourceUrl: 'https://www.notuser.com/post/consistency-at-scale-with-systems-thinking',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_cf62f236234c43518aa667d96c4eb472~mv2.png/v1/fit/w_1000,h_630,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Causal Loop Diagram',
      'Systems Thinking',
      'athenahealth Marketplace',
      'Fragmented Experience',
      'Problem Solving',
    ],
    date: '2020-12-08',
    updatedAt: '2020-12-08',
    readTime: '8 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Scaling up is easy. Maintaining quality is not. How to ensure UX consistency with growing number of teams How to scale up a design system cross functionally How to set higher standards dynamically to maintain quality',
          'Fast-paced organic growth of a company produces some adverse side-effects. Companies end up passing the burden of growth to the user. Experience across the portfolio of products or services offered by a same company becomes fragmented, resulting in immense intellectual load, memory load and frustration for the user. However, if we try to understand this organic growth, interaction between the various actors involved in this growth, we could come up with tweaks that can help us optimize the system. Loosely put, this is systems thinking.',
        ],
      },
      {
        heading: 'What is Systems Thinking',
        paragraphs: [
          'Systems thinking is all about seeing the relationship between the structure of those systems and the behavior that those systems exhibit, so we can:',
          'Understand how those systems work.',
          'Diagnose what makes them produce poor results',
          'Shift them into better behavior patterns to improve performance or achieve our goals.',
        ],
      },
      {
        heading: 'Causal Loop Diagram',
        paragraphs: [
          'Population Growth - Causal Loop Diagram',
          'Causal loop diagrams are commonly used to illustrate complex systems. Here, we are considering a population, which has a positive relationship with birth, which means if population goes up birth go up, as there are more people reproducing. And when births goes up, the population goes up as well. And, on the other hand, we have deaths, so when there are more people there will be more deaths and when there are more deaths there will be fewer people. So in this case, death has a negative relationship with population. So we are seeing two feedback loops here:',
          'On the left is a positive or a reinforcing loop. The loop\'s direction is clockwise in this case, and it\'s denoted by R for reinforcing.',
          'On the right is a negative or a balancing loop. The loop\'s direction is anti-clockwise in this case, and it\'s denoted by B for balancing.',
          'Let\'s try to add a little more complexity to this:',
          'Causal Loop Diagram - Population Growth Rate',
          'So on the right I have mortality rate. Mortality rate has a positive relationship with deaths, which means higher the mortality rate, higher will be the deaths. Similarly, on the left I have birth rate. Same positive relationship. Now let\'s consider a problem. How can you increase the population (or workforce) of a country Well, looking at our model, we have two main levers here: one birth rate, the other one mortality rate. So let\'s see how can we increase the birth rate, maybe incentivize the births. Or penalize abortions, make them illegal. Another way could be decrease mortality rate, by improving healthcare maybe.',
          'So let\'s try to consider a real world example next. Something that I have been working on for a couple of weeks:',
          'athenahealth Marketplace',
        ],
      },
      {
        heading: 'A Real-world Complex System',
        paragraphs: [
          'Let\'s consider a real-world complex system - an ecosystem. athenahealth Marketplace is a program where athenahealth\'s clients (hospitals) can easily shop for apps and services that will seamlessly optimize their experience to better address their specific needs. athenahealth partners (software development companies) build these apps are built on top of athenahealth Platform.',
          'So in the marketplace we have around 400 apps or plugins. More is the number of apps, more is the number of clients that are attracted to athenahealth. So apps have a positive relationship with clients. More clients to serve means more partners to attract for business, so clients and partners have positive relationship. More is the number of partners, more is the number of apps we will produce. And hence, we have got a reinforcing loop of growing network as show below:',
          'Causal Loop - Growing Network',
          'More partners, more apps, more apps, more clients, more clients will bring in more partners. Now this won\'t grow infinitely in a real world. But for the sake of simplicity, let\'s consider this model and let\'s continue working with it. Look at the next iteration:',
          'Causal Loop - Growing Usage and Services',
          'More apps and plugins would mean more usage, and more usage would bring in more revenue. More revenue would mean athenahealth can invest to spawn up more teams. Which means athenahealth Platform Services can start supporting more services. Services like SSO for example, or data view or API Access. So now athenahealth can provide more and more services, which are very useful for the partners. They can develop more and more apps and plugins using the advanced platform capabilities. So we have got a couple of more reinforcing loops running here, (i.e. Growing usage Loop, Growing Services Loop)',
          'So far so good, all looks green. Or does it I think we have a problem of scale here. When we have too many teams and when we are required to support many services, it will cause an inconsistent or a fragmented experience across services. Which means, the number of teams has negative relationship with consistent experience. However, consistent experience has a positive relationship with partner satisfaction, and partner satisfaction has positive relationship with partners. So overall we have got a balancing loop going on here because there is one negative.',
          'Causal Loop - Balancing Loop of Deteriorating Experience',
          'So more is the number of teams lesser is the consistency in experience. You have a fragmented experience and dissatisfied partners, which in the long term will reduce the number of partners that want to come to Athena, or that might cause attrition as well.',
        ],
      },
      {
        heading: 'Asking What If',
        paragraphs: [
          'So what do we do about it Well, here\'s the solution. What if we introduce standards and framework',
          'So I\'m asking, what if I introduce components and a robust framework. Look at the figure below:',
          'Causal Loop - Maturing Framework',
          'Let\'s say we have teams who start producing these components, and they are required to meet standards. So standards have positive relationship with components more. Like better standards would contribute to better components. Let\'s say those components would contribute to having a robust framework. And if we have a robust framework that a lot of teams can use, then the framework itself will support a lot of teams. Think of it as a design system, but with organisms instead of atoms. So now that we have a robust framework in place, it can actually give us consistent experience, partner satisfaction and larger number of partners. So by tweaking our model like this and by introducing standards, and framework could actually make it into reinforcing loops.',
          'Just to make things a bit more concrete for you, here is what I mean. Consider a console where all of these services produced by all the teams are hosted like Service X showcased below:',
          'Console Framework',
          'So all the stuff in teal boxes is basically owned by that particular team, product X team or product Y team Where is all the stuff in purple boxes is owned by a design systems team or a standard steam or the framework team The framework would define what the common widgets would look like, like the content management system or common integrations, whereas the individual teams would define their own specific integrations and their own workflows. Now sometimes, they will have a few non reusable components. But a lot of components would be reusable, some would be designed and developed by let\'s say this design system team, while others will be community contributed by the service X or service Y. Citing real-world scenario from athenahealth, let\'s say service X is API access and then there is interfaces team which has its own development in Chennai. And then there is Data View Team, which has its own development in Bangalore. So we have different geo-locations. Different teams are producing different artifacts, but all of them are being governed by this one particular framework. And, where majority of design or design governance is played by this design system team and this is what I\'m proposing. This is what I\'m trying to have conversations around.',
        ],
      },
      {
        heading: 'Challenges and How to Tackle Them',
        paragraphs: [
          'So going back to our model, everything looks green now. That isn\'t exactly the case. There are still problems and challenges to solve. With this model or any model for example, and I\'ll cover three over here.',
          'Policy Resistance - Arises when goals of actors (teams) are inconsistent with each other​',
          'Tragedy of Commons ​ - Abuse of shared resource (framework) without sharing responsibility',
          'Drift to Low Performance ​ - Eroding goals (design) influenced by past performance leading to a reinforcing loop​',
        ],
      },
      {
        heading: 'Policy resistance',
        paragraphs: [
          'We have different teams with different goals of micro goals and each one would be like why should they actually confirm to this model in the 1st place. So maybe a clear definition of larger and more important goals might help an. Establishing the ecosystem is already a part of athenahealth\'s vision, so that\'s helpful.',
        ],
      },
      {
        heading: 'Tragedy of Commons',
        paragraphs: [
          'This typically comes when there is an abuse of shared resource. In our case, for example, the shared resource would be the framework and abuse would be no one takes the responsibility to contribute back, which sometimes happens with Design Systems. So how about regulating access and terms of use of the resource How about saying that you can\'t use forge unless you contribute at least one Atom back',
        ],
      },
      {
        heading: 'Drift to low performance',
        paragraphs: [
          'Often, over a period, the goals erode. They get influenced by the past performance. One team sees that the other team is cutting corners and it\'s OK to cut corners for them as well. So over time it becomes a reinforcing loop where the performance keeps on drifting lower and lower. So a way to tackle this could be let standards be enhanced. By better performances rather than going the other way around. I have included it in next iteration of the model. What if better components contribute back to standards Make newer components of higher quality. So you\'ve got improving standards and this way you can take care of quality not going down.',
          'Causal Loop - Improving Standards',
        ],
      },
      {
        heading: 'Resources',
        paragraphs: [
          'All of the above that I learned was mainly from this course that I took in June 2020 - Understanding and solving complex business problems - MIT Sloan . Thanks to athenahealth\'s tuition assistance program!',
          'There are a couple of other resources. This book, Thinking and systems - a Primer, by Donna large Meadows. I love it as it covers all the basics. Then there is super interesting course on Systems Thinking on LinkedIn Learning - It\'s from a PhD faculty at Cornell University. It\'s a great course and you can run it at 1.5x speed. Happy Learning!',
          'Comment below if you have any feedback or questions.',
          '#CausalLoopDiagram #SystemsThinking #athenahealthMarketplace #FragmentedExperience #ProblemSolving #NetworkGrowth',
        ],
      },
    ],
  },
  {
    id: 'real-6',
    slug: 'why-athenahealth-rocks-for-designers',
    title: 'Why athenahealth rocks for designers',
    excerpt: 'A colleague from our engineering team asked me the other day why I am always so positive and optimistic even when it seems things are so...',
    sourceUrl: 'https://www.notuser.com/post/why-athenahealth-rocks-for-designers',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_ccf9e31598f14385a6deb96c3b135078~mv2.jpg/v1/fit/w_480,h_266,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
    ],
    date: '2019-06-25',
    updatedAt: '2019-06-25',
    readTime: '4 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'A colleague from our engineering team asked me the other day why I am always so positive and optimistic even when it seems things are so ambiguous It\'s easy - I love my team, I love where I am and as a designer I thrive in ambiguity. Because I love what I do, I can see beyond a tough day or an unexpected turn. Here are a few reasons why I think athenahealth is a great place for a designer, and I hope that some of these resonate with you:',
        ],
      },
      {
        heading: 'Access To Users',
        paragraphs: [
          'So far I have worked on 4 major and several minor projects in my 2+ years at athenahealth. None of the major releases went out without me talking to the users directly. Whether it is web design for athenahealth.com or a $50 million per month grossing payment portal called QuickPay, whether my customers are external or internal, whether they are in USA or in India, I always have access to users and ample opportunity to test the rubber before it hits the road.',
        ],
      },
      {
        heading: 'Learning Opportunities',
        paragraphs: [
          'It takes some time, effort, guidance from mentors, failures and success for you to up-skill. At athenahealth, I have been able to find the mentors in the right areas to guide me.',
          'That one statement from your leader, "It\'s ok to fail", makes all the difference. And I think the organizational support and infrastructure backs all of this. Our cute little UX library at Bangalore UX studio, the UX conferences that we sponsor and attend, our extensive knowledge hub on confluence are perfect examples of this.',
        ],
      },
      {
        heading: 'Optimum Challenge For A Designer',
        paragraphs: [
          'As a big fan of Mihaly Csikszentmihalyi\'s work in psychological concept of flow, I believe the balance of skill and challenge play key role in a person\'s state of happiness. In my last 2 years, I have noticed that the choices of work made available to me always hit this sweet spot. I was never asked to pull a Steve Jobs-like work, neither was I asked to "just paint the wireframes". My work on athenahealth.com is the biggest example of this.',
        ],
      },
      {
        heading: 'A Plan For Moving Up',
        paragraphs: [
          'At athenahealth, there is a very well-defined growth path both for individual contributors, and for managers. In a growing career, you jump through cohorts and keep growing to taking more responsibility, delivering more and drawing fatter pay-checks 😉.',
        ],
      },
      {
        heading: 'Security And Stability',
        paragraphs: [
          'I have worked for start-ups (like Zivame) as well as tech giants (like Cisco). I fully appreciate the power that a start-up gives you to go make a difference. But it comes at the cost security & stability. And while the giants give you the latter, they kill your freedom and constraint you heavily. Athenahealth is neither. With 6k employees and a billion dollars in annual revenue, it is optimally sized to be secure and stable enough for those who want to make a difference. It can afford to allow you a runway before you take a flight. And it can also be prepared for a crash landing.',
        ],
      },
      {
        heading: 'Technicality Over Creative Talent',
        paragraphs: [
          'See for yourself what I mean here.',
        ],
      },
      {
        heading: 'Design Briefs At My Previous Companies',
        paragraphs: [
          'PM: We need a new experience for our customers as our old product looks dated and we are getting bad feedback from our customers. Can you give me something refreshing and out-of-the box Me: That\'s great. I have a lot of questions though.',
        ],
      },
      {
        heading: 'About One Hundred Designers',
        paragraphs: [
          'Sounds too many Actually no. We\'re still under-staffed. athenahealth has 1400+ employees in the R&D org. That would mean 200+ scrum teams. So if you calculate, we\'re not even 1 designer per scrum team. And that means, we have to say \'no\' to a lot of things and we get to focus only on the pieces that matter the most for the business. On the same hand, a 100 member strong design team means you have a lot of support. You name it, we have it:',
          'Generalists & Specialists',
          'Strategists & Researchers',
          'Mentors & Managers',
          'Rockstars',
          'Just find your corner and settle in!',
        ],
      },
      {
        heading: 'Agile Rules Us All',
        paragraphs: [
          'Of all the benefits that being an agile scrum designer grants you, I think the most powerful one comes from the following mantra I keep throwing at my engineers:',
          'athenahealth by large follows an agile process. There\'s objectives, goals, initiatives, plans, releases and sprints. You get the luxury to work on bite-sized pieces and make incremental enhancements. You get to learn and iterate. You get to work together with you scrum team as an embedded designer. That teaches you a lot and gives you immense amount of control at all the stages of product design and implementation. You\'re always in the thick of things!',
        ],
      },
      {
        heading: 'There\'s Flexibility',
        paragraphs: [
          'Time, Place and Tools don\'t matter. Output does. We enjoy working flexible hours. George comes in late (more like 11am), where as I am generally the earliest one (like 8 am). Work from the UX studio, from your home or from your workstation, it doesn\'t really matter much, as long as you\'re sincere and responsible. Use Sketch or Adobe, Invision or Principle, or whatever, it doesn\'t really matter as long as you follow the process. athenahealth provides you a great deal of flexibility, and in my opinion, it really enhances our productivity.',
        ],
      },
      {
        heading: 'And There\'s Fun',
        paragraphs: [
          'As much as I love to talk about this topic, I\'ll restrain myself to talking about only a few examples:',
          'Ice-cream treats - Yeah, it has to be no. 1',
          'Netflix - of course in the UX Studio!',
          'Board Games - guess who wins all the time ¯\\_(ツ)_/¯',
          'Healthy Lunches - Blame it on Tara, our rockstar designer',
          'Work - of course our work is fun!',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Originally published on LinkedIn',
        ],
      },
    ],
  },
  {
    id: 'real-7',
    slug: 'think-about-the-users-of-your-prototype',
    title: 'Think About The Users of Your Prototype',
    excerpt: 'We put in all our efforts in designing, testing and iterating the prototypes for the end-users. But, has it occurred to you that it\'s not...',
    sourceUrl: 'https://www.notuser.com/post/think-about-the-users-of-your-prototype',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_f7c687f18f1f47949b46ff9c1f0e61e5~mv2.jpg/v1/fit/w_1000,h_630,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
      'Tools',
    ],
    date: '2019-01-12',
    updatedAt: '2019-01-12',
    readTime: '6 min read',
    sections: [
      {
        heading: 'So, who are the users of your prototype',
        paragraphs: [
          'At different stages during the process, prototype changes several hands. When you\'re trying to cover all the use cases, it is the Product and Engineering Managers. When validating a few concepts, it is the UX researcher. When you are being evaluated for your skills, it is your manager. A fellow designer might access it to draw some inspiration or to simply critique the design. And so on…',
          'I am pretty sure the list below is not exhaustive, but definitely covers most important users of design prototypes:',
          'Product Leadership',
          'Engineering Leadership',
          'Developers',
          'Fellow Designers',
          'UX Researchers',
          'Cross-functional Stakeholders',
          'Outsiders',
          'End-users',
        ],
      },
      {
        heading: 'What do these users want',
        paragraphs: [
          'While working for various products in different cross-functional teams, I realized that that are various stages at which we share prototypes with appropriate fidelity. The viewers of these prototypes have goals that are drastically different from the end-users, and hence they use it in a very different manner. They don\'t follow the usual workflow or the happy path. Instead, they keep going back and forth searching for the stuff, looking for minute details or looking at the bigger picture.',
          'See what they have to say about prototype goals and usage specific to their job roles:',
          'Nitin Gupta Product Management A prototype helps a business owner start to visualise his business requirements getting converted into features or set of features. It is the tipping point where a smaller and large number of abstract requirements start to take shape that not only helps validate requirements for business owners but customers too.',
          'Ratnesh Lal',
          'Engineering Management I would like to understand the complexity. I would like to evaluate the engineering feasibility, find how effectively the design could leverage existing design system library components and hence estimate the engineering effort required.',
          'Shruti Avalkar',
          'UX Design As a designer, my goal would be to see what is the next screen is and how it is designed. Why I am assuming that my fellow designer wants feedback from me… and I should go through the entire flow before commenting. So I would try to click on action items I feel are clickable',
          'Brandon Dobro',
          'Product Management A prototype is a critical early draft that has the purpose of aligning stakeholders on the basic layout and user experience of a page or module. Getting this early buy-in from the team allows them to move closer to the goal of a high-fidelity design that can be handed over to the development team.',
          'Manikandan Jayagopal',
          'Engineering First, I check whether all the scenarios/use cases are covered in it. Secondly, I check for feasibility, since we have forge (our design system library), I try to leverage it as much as possible. And try to understand a few new things like why are we doing so How it actually adds benefit to the user (user point of few).',
          'Kristina Krause',
          'UX Research To get more context, of course. I guess I would say I use the prototype as a conversation starter to learn more about what good UX will look like for the end user… and to understand the process what went into the making the design.',
          'Kim Marques',
          'Content Strategy When I receive a prototype the first thing I\'m looking for is: does it have the elements I requested or that are needed to support whatever content or business goals we\'re working on. The next thing I do is try to break it. I know that sounds ridiculous, but I try to think of any possible edge use-case that could break the convention put forth in the prototype. Better to catch it in that stage than right before or - god forbid - right after, launch.',
        ],
      },
      {
        heading: 'So, what should a prototype provide or facilitate',
        paragraphs: [
          'Engineering Manager needs to be able to break it down and plan for it',
          'Product Leadership needs to be able to zoom out and see the bigger picture',
          'Product Manager needs to be able to see smaller pieces coming together',
          'Fellow designer needs to be able to break it apart and critique it',
          'UX researcher needs to be able to find loopholes and ask questions',
          'Content strategist needs to be able to find placeholders that could be used',
          'An outsider needs to be able to play around and explore stuff',
          'All of above need to be able to provide feedback and contribute',
          'The list above does not even scratch the surface, as there is a lot more to be discovered. But, it should get the designers thinking. So many people are trying to achieve so much more with the prototype we design. Hence, I believe whenever we are delivering a prototype, we should think about how we\'re going to facilitate the discovery and exploration the following:',
          'Features',
          'Workflows',
          'Components',
          'Page-elements',
          'Buy-in',
          'Feedback',
          'Edge cases',
          'Vision',
        ],
      },
      {
        heading: 'Finally, how can you serve these needs',
        paragraphs: [
          'Provide an additional way to expose all the use cases',
          'Provide a video tour of the Prototype, covering all the use cases and product features',
          'Provide a cognitive-walkthrough video for High Value Scenario',
          'Highlight the components that are not part of your Design System Library',
          'Maintain a before/after version and a timeline, for comparative analysis',
          'Ditch lorem ipsum and always try to work with real data and real content',
          'Use the right tool to build and publish your prototype',
          'In the following sections, I have tried to cover examples of most of the point mentioned above. I hope these examples are helpful and give you enough insight into how each of these points results into a tangible outcome. I will not write about using the right tool, as there are a zillion articles about it out there!',
        ],
      },
      {
        heading: 'Prototype Navigator',
        paragraphs: [
          'As the number of use cases handled by a prototype increase, it becomes increasingly difficult for the users to find stuff they are looking for.',
          'As a result, overall breadth and depth of the prototype remain unknown or hidden deep inside nested JIRA tickets. An easy solution to all of this is prototype Navigator.',
          'Here is an example:',
          'This screen should be always 1 click away , so that folks can access it on-demand. Additionally, it could be the home-screen for the internally shared prototype. In my case, I provided little icon in the header, that brings this screen up. Of course, all the team members we informed about it. You can see it in action in the following Video.',
        ],
      },
      {
        heading: 'Prototype Tour Video',
        paragraphs: [
          'This video is recorded by going through each and every item in the prototype navigator and talking about how the UI handles every use case. The idea is to be exhaustive, covering all possible screen states and edge cases.',
          'The Prototype Tour Video is particularly appreciated by the leadership, as they can get a power-packed presentation within 10 minutes without having to do anything but just sit back and watch! Here is what my Product Leadership had to say when I shared one such video along with a Prototype.',
          '​Lana Cohen',
          'Product Leadership The tour video was a really awesome way to walk through this - would love to do like that again… I can provide comments in order of video.',
        ],
      },
      {
        heading: 'Cognitive Walkthrough Video',
        paragraphs: [
          'Cognitive Walkthrough Video focuses on primary system interactions and critical paths a user will perform in the workflow. Here, you record the video in the first person (acting as a user) communicating not only what the user is doing, but what they are thinking. Thoughts about the workflow should be task-focused, and should not include thoughts about how easy/difficult it is to complete a workflow. The cognitive walkthrough video is primarily targeted towards fellow designers and researchers. Remaining unbiased and focused is the key, unlike the prototype tour video. In prototype tour video, you can take the liberty to explore entire breadth & depth and to try & sell the concept to the stakeholders.',
          'Here is an example:',
        ],
      },
      {
        heading: 'Component Mapping Table',
        paragraphs: [
          'A map of all the major components present in the UI, and their availability (or extensibility) in the design system library. This table is genrally prepared in collaboration with engineering after UX can provide details regarding all the components used in the UI. The final output would look something like this:',
        ],
      },
      {
        heading: 'Before and After',
        paragraphs: [
          'This is an excellent tool if you want to highlight the stark difference between new and old approaches or if you want to paint the vision. Here is an example developed using JuxtaposeJS:',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'If you have any suggestions or comments, I\'d love to hear them!',
          '#Stakeholders #PrototypeNavigator #USers #ProductManagement #CognitiveWalkthrough #prototype #prototyping #Tool #Video',
        ],
      },
    ],
  },
  {
    id: 'real-8',
    slug: '21-billion-reasons-to-set-the-default',
    title: '21 Billion reasons to set the default',
    excerpt: 'Google will pay Apple $21 billion in 2 years to remain as Safari\'s default search engine, according to an article published on Fortune...',
    sourceUrl: 'https://www.notuser.com/post/21-billion-reasons-to-set-the-default',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_139d6b7c239f4846bdc96b5689849232~mv2.jpg/v1/fit/w_1000,h_630,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
    ],
    date: '2018-10-01',
    updatedAt: '2018-10-01',
    readTime: '3 min read',
    sections: [
      {
        heading: 'You think that\'s worth the money',
        paragraphs: [
          'So why would Google pay billions for just a setting If Google has a superior search engine anyway, can\'t it rely on the users to ultimately migrate to Google from other \'inferior\' products Or, on the other hand, if Google\'s product is inferior, then why pay 21 billion dollars to try and catch users who will ultimately move to other superior products If you\'re thinking the same, you\'re mistaken. Irrespective of the product quality, a majority of the users will not change their default settings. And that is because of the status-quo bias .',
        ],
      },
      {
        heading: 'What is status quo bias',
        paragraphs: [
          'For most people, the default setting is as warm and welcoming as a soft pillow into which they happily collapse. People cling to the standard options, and don\'t bother changing them. Negotiating an existing contract is very difficult, because each concession you make as part of negotiation, feels like a loss. Each trade-off you make feels like a loss, when you look at it from where you are. The default effect is at work even when no standard option is mentioned‚ and in such cases we prolong the status quo. People crave what they know, trying something new is risky and hard-work. Loss aversion and ambiguity aversion plays a role here. Sometimes, default sticks simply because of lack of attention.',
        ],
      },
      {
        heading: 'Here\'s a list of few questions for you:',
        paragraphs: [
          'Have you changed accessibility settings on your phone Do you unsubscribe for spam emails received from each and every website Do you change the brightness of your TV based on the time of the day or on the weather Do you adjust the margins of your word document before printing it',
        ],
      },
      {
        heading: 'Let me tell you what I do:',
        paragraphs: [
          'I use only one of many accessibility settings. I just ignore spams. I play my TV on auto-brightness and worry about brightness only on my laptop screen. I adjust margins only when I need more space to fit it all in. Everything remaining is left to default, maintaining the status quo.',
        ],
      },
      {
        heading: 'Is this effect for real',
        paragraphs: [
          'Several experiments have been conducted by Daniel Kahneman and Richard Thaler, which reliably proved this effect. The US states of New Jersey and Pennsylvania inadvertently ran a real-life experiment providing evidence of status quo bias in the early 1990s. As part of tort law reform programs, citizens were offered two options for their automotive insurance: an expensive option giving them full right to sue and a less expensive option with restricted rights to sue. In New Jersey the cheaper option was the default and most citizens selected it. Only a minority chose the cheaper option in Pennsylvania, where the more expensive option was the default.',
          'Yes, the effect is very much real.',
        ],
      },
      {
        heading: 'So what are the implications',
        paragraphs: [
          'As a choice architect, you have the responsibility for organizing the context in which people make decisions. If you are in the position where your design or decisions can affect people\'s choices, the default becomes pretty important. Defaults can be used to maintain the status quo or exactly opposite. For example, dead man\'s Switch for a chain-saw always defaults back to switching the chainsaw off, and hence ensuring safety.',
          'Possible options for choice architecture are as follows:',
          'No choice and a default option is picked',
          'A default is picked but its selection is discouraged',
          'A default is picked and its selection is encouraged',
          'A default is picked and its selection is neither encouraged nor discouraged',
          'Required choosing, with no default',
          'Proper option needs to be chosen based on target audience, task and scenario.',
          'A good example (for offering mutual funds to employees) would sound something like this: We have designed a program that has comprehensive set of options for you to choose from. If you do not feel comfortable making this decision on your own, you could consult with an expert, or you could choose the default option that has been designed by experts for \'people like you\'.',
        ],
      },
      {
        heading: 'Where can I read more about this',
        paragraphs: [
          'Nudge: Improving Decisions About Health, Wealth, and Happiness - by Thaler and Sunstein',
          'Thinking, Fast and Slow - by Daniel Kahneman',
          'The Art of Thinking Clearly - by Rolf Dobelli',
          '#statusquobias #Persuasion #endowmenteffect #default #choicearchitecture #defaulteffect',
        ],
      },
    ],
  },
  {
    id: 'real-9',
    slug: 'defensive-design-framework',
    title: 'Defensive Design Framework',
    excerpt: 'Murphy\'s law states that whatever can go wrong, will go wrong. And when things go wrogn, you better have a contingency plan, or your...',
    sourceUrl: 'https://www.notuser.com/post/defensive-design-framework',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_63e05fc6ae7b4786be11a8759fc58d5a~mv2.jpg/v1/fit/w_1000,h_630,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
    ],
    date: '2018-06-11',
    updatedAt: '2018-06-11',
    readTime: '5 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Read on to walk away with a framework that will help you design defensively against the inevitable points of failure.',
        ],
      },
      {
        heading: 'What is Defensive Design',
        paragraphs: [
          'When we design something, we generally assume that everything is going to be fine, users will go through a smooth journey, and will reach their goals. However, the fact is, without intentionally deploying defensive design, you will be able to avoid only a few crisis points-the points of failure-for your users, and they will inevitably hit crisis points, some big some small.',
          'Internet not working, accidental interaction or key-press, forgotten password or other details, environmental disaster, physical disability etc. are all examples of crisis points, which in one way or another, put throw the users off track and hinder progress towards goal. When these crisis points do occur, one of these two things will happen:',
          'Users will drop-off or fail in achieving their goal',
          'They will succeed, but with (great) difficulty, and hence end up frustrated .',
          'Of course, you don\'t want any of this to happen. So here is what can be done to better manage the crisis points:',
          'Systematically identify the possible crisis points, and do what you possibly can to prevent them.',
          'Prepare your users and let them know what to expect.',
          'Hand-hold your users when they need it, and direct them in the right direction.',
          'When things go wrong, help your users recover and correct their course.',
        ],
      },
      {
        heading: 'Possible Crisis Points',
        paragraphs: [
          'Here is a list of types of crisis points. Now this list is not exhaustive (can never be!), but it is a good starting point to get you started with thinking about the possible crisis points and listing them down systematically.',
          '​ Hardware',
          'Blocked',
          'Resolution',
          'Precision',
          'Network',
          'Internet',
          'Server',
          'Traffic',
          'Environment',
          'Light',
          'Noise',
          'Crowd',
          'Disaster',
          'Season',
          'Access',
          'Rights',
          'People',
          'Resource',
          'Plugin',
          'Knowledge',
          'Domain',
          'Tech',
          'Workflow',
          'Ability',
          'Physical',
          'Mental',
          'Emotional',
          'Usage',
          'Behavior',
          'Emotion',
          'Need',
          'Use Case',
          'Action',
          'Accident',
          'Error',
          'Monkey',
          'The crisis points above are elaborated below:',
          'Hardware',
          'Hardware used by user might be blocked',
          'Resolution might not be supported',
          'Precision of user device might be low',
          'Internet might be slow or dodgy',
          'Server might fail or crash',
          'Traffic might be too high or too low or highly variable',
          'Ambient brightness might be too high or too low or highly variable',
          'It might be too noisy or user might need silence',
          'It might be too crowded',
          'A natural disaster',
          'A seasonal change or spike',
          'Users may have different kinds of access rights (role-based)',
          'All the people may not have access to everything',
          'Access to resources might be limited',
          'OS based restrictions might apply',
          'Plugins might or might not be supported',
          'Users might not have the required domain expertise',
          'Users might not have the required tech expertise',
          'Users might not be aware of the workflow (real world scenario)',
          'People are differently abled physically',
          'Mental capability of people do vary',
          'People are emotional beings',
          'Behavior is idiosyncratic',
          'Behavior might be impacted by their emotions',
          'Usage varies widely based on user needs',
          'Usage varies widely based on business use case',
          'Accidental interactions might happen',
          'Users or system my commit errors',
          'Users might just be fooling around',
        ],
      },
      {
        heading: 'Correction',
        paragraphs: [
          'Accepting',
          'Allow for multiple correct input formats',
          'Correcting',
          'Provide smart defaults that reflect the best practice or aid the current task',
          'Error messages should be explicit, precise, and human',
          'Error messages should be constructive, not accusing, and offer a solution.',
          'Validating',
          'Auto check for errors in a timely manner',
        ],
      },
      {
        heading: 'Direction',
        paragraphs: [
          'Messaging',
          'Use language as expected by the user and stay away from jargons',
          'Hinting',
          'Make suggestions to help user navigate in the right direction',
          'Make required fields or tasks clear',
          'Provide appropriate guidance to the user to ensure he or she moves through desired path',
        ],
      },
      {
        heading: 'Navigation',
        paragraphs: [
          'Back',
          'Allows forward and backward navigation, while keeping the progress saved',
          'Exit',
          'Provide and explicit exit option at all workflow stages',
          'Next',
          'Provides clear calls to action',
          'Do not lead users to a dead-end',
          'Orienting',
          'Help user understand where they are',
        ],
      },
      {
        heading: 'Preparation',
        paragraphs: [
          'Telling',
          'Notify user of the wait time, progress and part remaining for the processes',
          'Ensure that your users are equipped with knowledge to make the right choices in the process',
          'Use the context and don\'t force the user to start from scratch',
          'Matching',
          'User actions should result in expected outcome',
        ],
      },
      {
        heading: 'Prevention',
        paragraphs: [
          'Prevalidating',
          'When user chooses between options, ensure that the content presented is a per expectation',
          'Remove all that is not required to accomplish the user goal',
          'Limit the choices for the user, in context to current task',
          'Limiting',
          'Limits available choices in context to the current task',
          'Masking',
          'Ensure that the interactive controls or elements follow expected interaction behaviour',
          'Allow for multiple correct input formats, with proper constraints to avoid errors',
          'Doing',
          'Automate work when required',
          'Asking',
          'Provides a review state before the final step',
          'Ask for confirmation before potentially destructive actions',
          'Telling',
          'Provides feedback when an action is complete',
          'Display user\'s selected choices, in current context',
          'Communicates wait time and progress for processes',
          'Saving',
          'Allows forward and backward navigation, while keeping the progress saved',
          'Once you have listed down your crisis points, you can start applying the techniques from the checklist below to help you better tackle these crisis points.',
        ],
      },
      {
        heading: 'Let\'s take an example',
        paragraphs: [
          'Every-time I visit IRCTC to book a railway ticket, I wonder why the website sucks I always knew that there were a bunch of things going wrong, but I lacked a framework to pin down the issues. While working on defensive design, I tried to apply this framework on the website to diagnose the issues, and to my surprise, the site failed on all the points highlighted in yellow below:',
          'Resolution : There is no mobile version',
          'Server : Server is poorly equipped to handle peak traffic',
          'Traffic : Traffic is highly varied',
          'Season : During holiday season, the site simply fails to load or doesn\'t take care of special user needs',
          'OS : The site behaves differently on different OS',
          'Domain : Not all the users are aware of internal terminology (e.g. Tatkal or Train Number)',
          'Emotion : User booking for tatkal or holiday are highly stressed',
          'Use Case : Multiple or Round trip journey use cases a poorly handled',
          'Accident : Accidental interactions (hover) result in server calls',
          'Error : Site throws unfriendly and technical error messages',
          'I now exactly know if were to fix 10 things with IRCTC website, what those are.',
          'I have tried my best to keep the list and framework exhaustive, but as I said earlier, you should use this as a starting point. Use my list to identify your crisis points and the framework above to tackle those. Feel free to add to it, and most importantly, to tell me about it.',
          '#defensivedesign #errorprevention #accesssibility #errorproofdesign #errorcorrection',
        ],
      },
    ],
  },
  {
    id: 'real-10',
    slug: 'story-of-a-5-years-old-kid-and-a-designer',
    title: 'Story of a 5 Years Old Kid And a Designer',
    excerpt: 'Sometimes what a 5 years old can teach you in a moment, can\'t be learnt from the most learned folks in a lifetime. This is Guru, an...',
    sourceUrl: 'https://www.notuser.com/post/story-of-a-5-years-old-kid-and-a-designer',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_e4012e3fe47d4e959d267a034ecc3e64~mv2.jpg/v1/fit/w_1000,h_630,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
      'Design Thinking',
    ],
    date: '2016-11-25',
    updatedAt: '2016-11-25',
    readTime: '3 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'This is Guru, an awesome buddy whom I met at Zivame. We have been working together for about a year now and the journey has been awesome. He is one guy who can teach you a lot about how to deal with people politely, how to stay calm and how to handle a team of 40! Just like him, his son was destined to teach me a lesson for a lifetime, a UX Lesson!',
          'This Diwali, I wanted to gift Guru with something nice. I was thinking maybe a mug or a painting would be nice. I was wondering what gift is most likely to make Guru happy And then, I remembered the chit-chat conversations we often used to have about our kids. And it struck me, what if I gifted him with a toy for his kid That was more likely to make him and his family happy! So there it was, a toy for a 5 year old.',
          'Easy right Of course not! I was back to square one. Anyways, I was running out of time and I started remembering whatever Guru had told me about that kid. Guru had told me he was very naughty and how he would make excuses to skip the school. He had told me his son was fond of playing with broken stuff. He would roam around the entire house with a broken juicer mixer. He had told me how he liked to swap batteries of mobile devices. He would go to the rooftop and find whatever junk he could (old transistor, old mobile charger, wires) and would play with it. So I thought, this guy loves to play with raw electronics, then let me gift him with something raw, something that he could mess around with, something that gives him a feeling of efficacy - the ability to produce a desired or intended result. That would give him a real kick! So I started looking for it on Amazon, and voila! I found it:',
          'I ordered it within a minute, and Amazon being Amazon, delivered it the very next day. I plugged an extra wire (to connect the 2 motors in a series), tested it and packed it in a box, and gave it to Guru. He was more than delighted, and told me his son was going to be very happy!',
          'Sure enough, next day he told me that his son didn\'t even let his grandfather play with it. He was super-excited. He wouldn\'t turn it on for too long for the fear of draining the battery. He went to the school in a hurry so he could come back quickly and play with the toy!',
          'After this entire episode, I began retrospecting, how was I able to make that kid happy without even meeting him That\'s because, I used my secondary knowledge to understand the deep desires of my \'user\' , and gift him the right \'experience\' that was tailored for him. This kid had left a deep impression on me, and had taught me the real value of secondary research and empathy. More than that, he changed my definition of user experience.',
          'So yes, knowing and understanding your users is all it takes to win the battle of delivering an awesome user experience. Always perform a secondary research (and primary as well), understand the deep needs of you users, empathise with them and then try and come up with something that\'s really useful, usable and desirable for them.',
          '#secondaryresearch #user #userexperience #userresearch',
        ],
      },
    ],
  },
  {
    id: 'real-11',
    slug: 'how-i-changed-the-way-women-buy-bras-online',
    title: 'How I Changed The Way Women Buy Bras Online',
    excerpt: 'How do you think women in India buy bras offline Is it based on any rationale Does the online world match the offline behaviour All of...',
    sourceUrl: 'https://www.notuser.com/post/how-i-changed-the-way-women-buy-bras-online',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_ba1b35648eec43bab883c31c1285a175~mv2.jpg/v1/fit/w_1000,h_630,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
      'Design Thinking',
    ],
    date: '2016-11-21',
    updatedAt: '2016-11-21',
    readTime: '3 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'All of these questions started popping in my mind when I was assigned the task of redesigning the online shopping experience at Zivame. As I didn\'t know answers to any of these questions, and I didn\'t want to assume any, the next step seemed pretty obvious - User Research. So here is what I did:',
        ],
      },
      {
        heading: 'Secondary Research',
        paragraphs: [
          'I did some secondary research:',
          'I spoke with the CEO, tried to understand broadly who she wants to target, and asked her about her interactions with the customers. She was able tell me a lot of stories and provided me insights.',
          'I spoke with the members of the brand team, went through their survey results, presentations and documents and tried to understand the target customer base.',
          'I spoke with the members of the digital marketing team, understood the demographics they target and the respective response they get from each segment.',
          'I spent a few hours listening to customer care calls. Got an idea of the problems faced by the customers and got a real touchpoint with the customers.',
          'One striking conclusion, that I could make from all of this research is that there were 4 need states of women that the organisation was focusing on. So, going forward, all of my research was revolving around these psychographics:',
          'View Detailed Persona - Mahi Agarwal',
        ],
      },
      {
        heading: 'Primary Research',
        paragraphs: [
          'Now that I understood my persona well enough, I had to specifically understand how she buys bra in real world. Now that\'s a tricky one. Not every woman would readily agree to talk to me on this subject. So I took a little lenient approach here. I selected a few girls from within Zivame who closely matched my persona and interviewed them on their lingerie shopping behaviour. A very interesting result followed.',
          'For example, one of them had recently purchased a strapless party gown which she wanted to wear to her spouse\'s office party. So, she wanted a bra that could go well along with her strapless dress. And hence, she went about shopping for that particular need.',
        ],
      },
      {
        heading: 'A New Idea!',
        paragraphs: [
          'This revelation triggered a thought in our minds, where we challenged our existing categorical and hierarchical navigation system, where we have classified all the products under various categories just like a typical e-commerce company would. We thought, what if we brought this exact behaviour (shop by needs) to lingerie shopping online What if we replace our primary categorical navigation with the need based navigation What if we re-imagine the catalog, trading need based shopping for the filters It was a crazy idea and we jumped into prototyping iterations. One of versions, which we rejected for the fear of going against the mental model is presented below:',
          'For the record, I still think this could have worked. Nonetheless, we went ahead and iterated over this one and came up with the current version shown below. It was a very long journey and very bold step. There was a heavy load on the merchandising team to come up with a relevant list of needs across different categories of products. We call them buckets and cues. For the example displayed below, the category is bras, buckets are outerwear, occasions, bra problems, trends and Zivame Signature.',
          'For every bucket, there are several cues (or possible options) you could select. These options (and the buckets as well) appear in a surface as shown below. Once you select and apply the cues, they work just like filters, but a lot of processing happens in the background mapping and fetching the right filters and attributes for your specified cues.',
          'Fascinating right That\'s what user research gives you!',
          'Once the interactive prototype was ready (we used Marvel & Invision), we tested it with a few real users. The concept seemed to work and the users were clearly able to discover and make use of "Shop By". We asked the users to put a few terms to the overall shopping experience, and here is what they said:',
          'Is the need based system better than the traditional categorical navigation Can the main navigation be replaced with this Will it lead to a higher conversion rate Will it enhance the overall shopping experience Only the much awaited data can give us this answer. Till then, I\'m off to designing the next new thing!',
        ],
      },
    ],
  },
  {
    id: 'real-12',
    slug: 'impact-of-ux-in-b2b-segments',
    title: 'Impact of UX in B2B Segments',
    excerpt: 'Excerpts from my chat with Nithin Babu, on LinkedIn Nithin: Hello Udit, Great presentation and huge take-aways from Upgrad event...',
    sourceUrl: 'https://www.notuser.com/post/impact-of-ux-in-b2b-segments',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_5d95d68733cb49adae6572f03b234230~mv2.jpg/v1/fit/w_1000,h_630,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Case Study',
    tags: [
      'Case Study',
      'Design',
    ],
    date: '2016-11-10',
    updatedAt: '2016-11-10',
    readTime: '2 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Nithin:',
          'Hello Udit, Great presentation and huge take-aways from Upgrad event yesterday, One question - Does UX/UI make similar impact in B2B segments How do you weigh the content or the product benefits versus the marketing efforts in final conversion/ sale',
          'Udit:',
          'Nithin, Thanks for attending the session yesterday. It was fun interacting with you.',
          'To answer your first question, \'yes\' in most of the cases, UX makes a big impact and even becomes a game changer in B2B scenarios. I can pull a couple of examples from my experience-',
          'When I was working with Cisco, I was a part of UI/UX team for the set-top boxes. Our business unit operated B2B and used to sell contracts to customers like Airtel, Tata Sky and so on. What\'s interesting here was Cisco never used to make a pitch based on the hardware or security features, instead, we used to create fully functional interactive prototypes. Then these prototypes were used during the sales pitch. So actually, we used to sell the UI (or the experience), not the product. Airtel would buy exclusive rights to the UI (and features thereof) and hence making the UI/UX team a direct contributor to revenue in a B2B setup.',
          'Another example is Kaseya, a B2B IT Management company. Kaseya sells IT management products that can be used by IT departments of SMEs to manage the IT infrastructure. IT departments receive 100s of tickets everyday and all what they care about is efficiency in resolving those tickets. Again, the entire sales pitch was made around the usability and efficiency of the product, targeting the IT Admins as the end users. The product was jam packed with features all crammed up on single screens with lot of persistent navigation bars. The product required training (of course), but once that hurdle is crossed, it used to reduce the time to resolve the tickets by a huge margin by the virtue of usability. And hence, directly impacting business.',
          'So yes, UX plays a great role in a B2B setup. But, the role depends heavily on the business goals, target audience and scenarios. Often, the impact is directly measurable by certain metrics (like revenue earned, or time saved).',
          'To answer your second question, I think we would need to use the lenses we talked about.',
          'Hope this helps. 🙂',
          'Hey, thanks very much for the detailed answers - truly appreciate it',
          '#UX #UXDesign #ROI #B2B #Business #Impact',
        ],
      },
    ],
  },
  {
    id: 'real-13',
    slug: 'designing-to-engage-convert-customers',
    title: 'Designing to Engage & Convert Customers',
    excerpt: 'Slides for my Product Management Workshop hosted by UpGrad on 8 Nov 2016 are attached below. More context, content and due attribution...',
    sourceUrl: 'https://www.notuser.com/post/designing-to-engage-convert-customers',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_37b6c7570cfc4e8ab623d67ba6b723e5~mv2.png/v1/fit/w_895,h_468,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
    ],
    date: '2016-11-08',
    updatedAt: '2016-11-08',
    readTime: '1 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Slides for my Product Management Workshop hosted by UpGrad on 8 Nov 2016 are attached below. More context, content and due attribution coming soon. If you attended this workshop, please feel free to contact me. I\'ll be more than happy to take our discussion forward.',
          'Contact Udit',
          'View this on SlideShare',
          '#Conversion #Engagement #Persuasion #Emotion #Usability #Trust #PersuasiveDesign',
        ],
      },
    ],
  },
  {
    id: 'real-14',
    slug: '10-key-takeaways-from-ux-india-conference-2016',
    title: '10 Key Takeaways from UX India Conference 2016',
    excerpt: 'UX India is the biggest annual UX Conference in India. This year, it was hosted in the beautiful city of Hyderabad and I was fortunate...',
    sourceUrl: 'https://www.notuser.com/post/10-key-takeaways-from-ux-india-conference-2016',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_ff88cf2b8813496f8aebf91d1f004a59~mv2.png/v1/fit/w_1000,h_630,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
      'Design Thinking',
    ],
    date: '2016-10-25',
    updatedAt: '2016-10-25',
    readTime: '12 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'UX India is the biggest annual UX Conference in India. This year, it was hosted in the beautiful city of Hyderabad and I was fortunate enough to be a part of it. It was packed with awesome speakers from all around the world and there was a lot to learn. For the benefit of those who missed it, I thought I\'d share my key takeaways.',
        ],
      },
      {
        heading: '#1 Design Responsibly',
        paragraphs: [
          'What should we keep in mind while designing experiences Jay Peters said, make sure your UX design is:',
          'Desirable (by the users)',
          'Viable (for the business)',
          'Feasible (technically)',
          'Responsible (for the society)',
          'I always thought that UX Design involves just Business + User + Technology. But adding responsibility to it gives a whole new meaning. Siraj quoted in his presentation, we should be aware of unintended consequences of our design. He argued Steve Harvey could have been saved that day, had his cue card been designed right. And that hit me hard. I had already read about it, and I thought it was just a bad design. But the responsibility angle to it made sense. And I think it is applicable not only to the designers, but also to the other stakeholders who choose to \'not design\' an experience.',
          'So when you choose not to design something (as a designer or a stakeholder), you\'re leaving user at the mercy of fate, which is cruel. We should make sure the entire user journey is designed responsibly, keeping the overall human welfare in mind. IF every designer does this, the world can definitely become a better place to live in. While designing responsibly was somewhere in the back of my mind, I never used to give it a front-seat. These 2 talks from Jay Peters and Siraj changed my perspective altogether. Here is what I will be using going forward:',
          'Design Responsibly',
          'Concluded from the talks by:',
        ],
      },
      {
        heading: '#2 True North - The Tie Breaker',
        paragraphs: [
          'It\'s very easy to get caught up into subjective evaluations while making some design decisions when you have multiple options to choose from. Weighing pros and cons of various options can make it really difficult for us to make the right call. It could either end up in a guess-work or a very time consuming data-driven approach. At these tricky situations, a tie breaker could come in handy. If right from the beginning, we have one focused goal, a true north, a single parameter to evaluate our options, then making decisions becomes much more faster and easier.',
          'This is often referred to as opinionated design, where we already have a strong opinion about how the best experience is defined for targeted audience. eg. While designing for Zivame website, we had a single goal in mind - EFFECTIVENESS. And, whenever it came to a point where we were having difficulty deciding whether or not to use a particular option, we would use our ultimate tie breaker - Will this option help user make a purchase In other words, Will this option motivate the customer move further down into the funnel And that gets us out of the dilemma!',
          'Concluded from the talk by:',
        ],
      },
      {
        heading: '#3 Hiring The Right Talent',
        paragraphs: [
          'What to look out for when hiring talent for UX design',
          'Portfolio: The portfolio of a UX Designer should talk about business problems and solutions, rather than just pretty screens. It should tell stories about how the designer created value for the organizations and the users.',
          'Approach: The approach of the designer should be scientific. He should be applying design principles and methodologies to solve design problems rather than going by gut feeling or hunch.',
          'Thinkers First: Watch out for the designers who jump to solutions as soon as you give them a problem. Make sure he is a good listener. He should take his time to analyse the possible solutions and then come back with a response.',
          'Curiosity: Make sure he is curious and he challenges stuff. A designer who has nothing to ask to you or who doesn\'t talk about a problem or two in your current system is not wired to be a good designer.',
          'Learnability: He should be ready to learn new stuff. Make sure he knows when he is wrong, and more than correcting his mistake, he should be interested in figuring what went wrong and how not to make the same mistake again.',
          'No Jargons: Don\'t be impressed with the design terms he uses. If he actually uses these concepts in his design process, then these terms are his vocabulary, else it\'s just Jargons. You should stay away from these pretenders.',
          'While talking about these points Prasadd insisted that we should add to this list and help him build this list, as the brand UX is deteriorating because of these fake designers, which is not healthy for the growth of design industry. So here I am, contributing my 2 cents:',
          'While hiring a designer, we should go deep into one particular project that he has worked on and argue against his design until he reaches a breakdown point. It is at this point you\'ll know his true attitude towards the 6 points mentioned above. If he still keeps defending his design and does not come up with alternate solutions, then you know he can\'t identify his mistakes, he can\'t take feedback positively and he won\'t be able to make incremental improvements to the design and to his own skill-set. On the other hand, if he is genuinely curious about his mistakes and is interested in learning more, then you are looking at a potentially good designer!',
          'Concluded from the talk by:',
        ],
      },
      {
        heading: '#4 Design for Evolutionary Behaviour',
        paragraphs: [
          'Human behavior is determined by a combination of inherited traits, experience, and the environment. Some behavior, called innate, comes from your genes, but other behavior is learned, either from interacting with the world or by being taught.',
          'Innate BehaviorLearnt Behavior EvolutionaryAcquiredNeeds to accommodate to very slow changesNeeds to accommodate to rapid changesUniversalEnvironmentally sensitiveDifficult to unlearnEasy to unlearn',
          'If you take a look at history, design has always moved from learnt behaviour to innate behaviour. Early age phones had a circular dial, which needed a good amount of learning curve. As keypads evolved, the punching keypad was for more easier and came more naturally. And then, the gesture based touch screens are even more closer to innate gestures.',
          'Evolution of Phones',
          'So Rajib argued, that rather than designing for learnt behaviors, we should be designing for innate behaviors, so there is a least amount of learning curve and the usage comes naturally. This, he says, is the key concept behind Zero UIs.',
          'Concluded from the talk by:',
        ],
      },
      {
        heading: '#5 How Might We …',
        paragraphs: [
          '"How Might We …" is a design thinking technique that can be used for scoping projects. The technique is to fill in the statement below with the right words:',
        ],
      },
      {
        heading: 'HOW MIGHT WE do something FOR someone in context IN ORDER TO change something',
        paragraphs: [
          'The goal of this method is to find the right problem to solve. A good example of the statement could be "How might we help students easily get to their pencils so they are always ready for classwork." A step by step process, conducted in a team, that could help you arrive at this statement is as follows:',
          'Discuss with your team and come up with a broad problem area',
          'Each member (individually) should list down all the key players',
          'After a discussion, the team should shortlist the top 3 most relevant players',
          'Each member (individually) should list down issues for each key player',
          'After a discussion, the team should shortlist the top 3 most severe issues for each player',
          'Each member (individually) should come up with possible solutions',
          'Broadly discuss possible solutions with your team',
          'Now keeping the problem area, key players and possible solutions in mind, try to come up with How might we statements for top issues',
          'The problem that we worked upon in our workshop was Chikungunya. And finally, this is what we came up with:',
          'My key learning from this session, apart from the method, was that I realised doing this as a team enabled me to see through the holes in my approach which I\'d have missed otherwise. Also, every team member brought a unique aspect from his life, which I was totally unaware of. Design thinking in a team rocks!',
          'Concluded from the workshop by:',
        ],
      },
      {
        heading: '#6 Rapid Method To Assess Sentiment',
        paragraphs: [
          'I need not emphasise the need of doing stuff rapidly in an agile setup. More than often, we don\'t have enough time to research and validate assumptions using conventional research methods. Thus, unfortunately, we choose to go by our gut feeling, dropping the research step and eventually risking everything. In such situations, rapid research and test methods might come in handy. Steve Fadden explained one such method during his workshop which particularly made sense to me. It\'s called Semantic Differential Process and allows us to quickly assess the user sentiment on a semantic scale.',
          'A research paper from Johnson F (EuroHCIR2012) says, semantic differential can be used as a technique for assessing the user experience during information interactions in exploratory search tasks. This can be done on the 7 point scale of 20 bipolar adjectives, as follows:',
          'attractive-unattractiveimpersonal-personaldull-funpowerful-simplisticdisconnected-connectedvaluable-not valuablehigh quality-low qualityirrelevant-relevanteffective-ineffectiveincomprehensible-meaningfulstimulating-confusingboring-inspiringintimidating-empoweringstressful-engagingsatisfying-frustratingfast-slowpredictable-unpredictablecontrollable-uncontrollableintuitive-rigiddifficult-easy',
          'The results from this test may be interpreted to figure how people feel about your concept, interface and experience. It can be used to determine your alignment to intended goals. Steve says, for a rapid validation, you can perform a first impression test by simply using a 3 adjective scale marked on 5 points. Show the screen to user for just 5 seconds, and ask him/her How did he felt about the interface he/she just saw The interface is:',
          'very attractive-very unattractivevery easy-very hardvery efficient-very inefficient',
          'You can do this test with say 10 users (per user group) and analyse to results to find the gaps in experience. You\'ll realise that people who mark the screen as very attractive, perceive it as highly usable even after facing quite a few usability issues. This happens due to halo effect. And hence, first impression is very critical. You may use the above technique, in a task based scenario as well and simply ask the user to mark his feelings on the scale (choose your adjectives from the list of 20 above).',
          'Concluded from the workshop by:',
        ],
      },
      {
        heading: '#7 The Wanting Hormone',
        paragraphs: [
          'The feeling of happiness is related to release of certain chemicals in the brain called neurotransmitters. The most popular ones are dopamine and serotonin. When something unexpected happens, it stimulates the dopamine system. Having information show up unexpectedly with an auditory or visual alert makes people want to engage in the behavior. Dopamine causes us to want , desire, seek out, and search. It increases our level of arousal. On the other hand, opioid system is involved in the feeling of pleasure. These "wanting" (dopamine) and "liking" (opioid) systems are complimentary. The wanting system propels us to action, and the liking system makes us feel satisfied. The dopamine system is stronger than the opioid system, hence we seek more than we are satisfied.',
          'The Dopamine Cycle',
          'Now, the flip-side is, these systems are being used to exploit the human beings. The desire for information is being used to keep humans over-engaged by stimulating information seeking behavior and by triggering dopamine system beyond healthy levels. And hence, while we can use this science to keep our users engaged, we should make sure we\'re not over-doing this.',
          'Concluded from the talk by:',
          'and the book \'How to get people to do stuff\' by:',
        ],
      },
      {
        heading: '#8 Research - Don\'t Just Assume',
        paragraphs: [
          'We are often pressed for time and hence we take shortcuts. We are quick to draw seemingly obvious conclusions. However, if we do research, the data and insights tell a different story altogether. This talk by Neha reinforces the same. She was walking us through an entertainment app designed for tier 2 cities in India. She was explaining how they had designed certain features in the app which specifically aligned to data-pack usage behavior of the users, which of-course they figured during research. And then, in the QnA section, someone asked: If the app is targeting tier 2 cities in India, then why is it in English, why not Hindi or other local languages Most of the users in tier 2 cities can\'t even speak English. The question made absolute sense. All the eyeballs turned towards her, and here is how she replied:',
          '"We did research and interviewed with a lot of users. Turns out that they don\'t wanna let their friends know that they have apps in local language. Using an entertainment app on a smartphone is an aspirational thing for them, and they would like to show-off the apps in English, which again is a status symbol in tier 2 cities in India."',
          'Mind-blowing, isn\'t it This was the moment, when I realised, we should never take even the most obvious facts for granted. Research always helps understanding user\'s perspective!',
          'Concluded from the talk by:',
        ],
      },
      {
        heading: '#9 Finding Good Mentors',
        paragraphs: [
          'I had these very interesting one-on-one conversations with two of the speakers, and I asked them this question: How do I find good mentor for me Here is what they had to say:',
          'Make sure the mentor is interested in mentoring you. Even if he is a big shot, unless he is really interested in grooming you, you won\'t be able to get much from him. Mentor for a namesake does not work. A big shot, who doesn\'t have time or intent to mentor you, may be your role model or aspiration, but not a mentor.',
          'Make sure the mentor is able to connect with you as a person. "My mentor is always able to bring a smile to my face" says Satish. Unless the mentor can make that personal connect with you, the mentorship will reduce down to QnA.',
          'Make sure the mentor knows your skill set. And, needless to say, it won\'t happen unless you take care of #2 . He should be able to help you with your development goals, should be able to help you set a future path for you!',
          'Here are a few obvious ones:',
          'Make sure the mentor is more than a year senior to you. Just a friend cannot be your mentor.',
          'Your current boss would be a bad choice. There would be conflicts of interest and he wouldn\'t be able to make a relationship with you. (But there might be exceptions)',
          'Your x-boss could be a good choice 😉',
          'And my own view on this: If you expect others to be your mentor, be ready to give it back to the community. Always be open to mentoring your juniors 🙂',
          'Concluded from one-on-ones with:',
        ],
      },
      {
        heading: '#10 Characteristics of a Good Designer',
        paragraphs: [
          'This is a very interesting one. While I was having a one-one-one with Pablo, one of the attendees jumped in and asked a question: What do you think are the characteristics of a good designer What a stupid question, I thought, only to discover a very lovely answer. Pablo replied, a good designer always questions the way things are. He always challenges the status quo. He always spots what\'s wrong with the current system and then goes about finding design solutions for improving the same. He solves real problems. He is like kids, who always keep questioning. Pablo gave an example of his 9 year old, who asked him, "Why do we have to keep checking the mailbox in the winter Shouldn\'t the mail directly come to us" And if you think deeply about it, he was right! So, as a designer, all what you need to do is look around, and find problems worth solving. Don\'t wait for an idea to come, just get out there and find problems. Solutions will follow if you deploy proper methodology and team work!',
          'Concluded from a group discussion with:',
          '#uxindia #2016 #workshops #conference #takeaways #speakers',
        ],
      },
    ],
  },
  {
    id: 'real-15',
    slug: '7-things-yappily-should-do-for-better-ux',
    title: '7 Things Yappily Should Do For Better UX',
    excerpt: 'I recently installed the Yappily App on my friend\'s Android Phone. While overall it seems to be scoring good on usability, there are...',
    sourceUrl: 'https://www.notuser.com/post/7-things-yappily-should-do-for-better-ux',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_0fc0dc174bb64a28908f5e9cb77dad13~mv2.png/v1/fit/w_1000,h_630,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Case Study',
    tags: [
      'Case Study',
      'Design',
    ],
    date: '2016-10-07',
    updatedAt: '2016-10-07',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'I recently installed the Yappily App on my friend\'s Android Phone. While overall it seems to be scoring good on usability, there are certain quick fixes that could take the user experience from good to great. I couldn\'t stop myself from listing them down. I hope the folks at Yappily find this useful. I have looked at this app from 3 lenses:',
          'New vs Returning users',
          'Domain experts vs novices (how familiar are they with shopping online)',
          'Explorers vs Navigators. Explorers don\'t know what they want. Navigators know exactly what they\'re looking for.',
        ],
      },
      {
        heading: '#1 Provide Onboarding',
        paragraphs: [
          'Problem: Users don\'t know what to do here.',
          'Victims: New Users, Novices',
          'No Onborading',
          'Lack of onboarding experience makes it difficult for the users to understand what the app is about. The landing fails to set the expectation right. Not all the users are aware of the concept of "social shopping".',
        ],
      },
      {
        heading: 'How To Fix',
        paragraphs: [
          'Provide a simple 3 slides onboarding experience which tells the user what to expect and how it works.',
          'Use real images instead of vectors. It\'ll work better for the genre.',
        ],
      },
      {
        heading: '#2 Provide Clear Login & Register',
        paragraphs: [
          'Problem: Login and Register are confusing',
          'Victims: New Users, Novices',
          'Missing Register',
          'The login area is confusing. The labels used are heterogeneous - One is a question, another an action. The button label is missing the use-case of Register. I feel, there is also a feature missing, there should be a login option using email, as not everyone is comfortable logging in using Facebook.',
        ],
      },
      {
        heading: 'How To Fix',
        paragraphs: [
          'Provide homogeneous labels eg. Already have an account New to Yappily',
          'Enable login via email as well.',
          'Provide clear distinction between login and register.',
        ],
      },
      {
        heading: '#3 Do Hand-holding',
        paragraphs: [
          'Problem: User does not know where to go from homepage.',
          'Victims: New Users, Novices, Navigators',
          'Feeling Lost on Homepage',
          'There are way too many options here and user might start wandering aimlessly. The entire 2 level navigation, Filter and Sell are exposed to the user. The cards look bulky and there\'s an information overload on the cards. The hierarchy of information is not right. What user would be most interested in is the count & type of items, not the name and image of the user. There are 2 primary actions on the screen. Giving same priority to filter and sell sounds like an afterthought.',
        ],
      },
      {
        heading: 'How To Fix',
        paragraphs: [
          'Don\'t expose the entire navigation upfront. use progressive disclosure, keep it a tap away (at least the second level).',
          'Declutter the cards. Take some stuff out, put it a tap away.',
          'Maintain Hierarchy. Bring most important things up.',
          'Use only 1 primary action: Sell. Figure another placement for filter.',
          'Create an obvious path for user, hand-hold him/her virtually.',
          'Either hide 0 likes, or say "Be the first one to like this!"',
        ],
      },
      {
        heading: '#4 Get Rid of Dead-Ends',
        paragraphs: [
          'Problem: There are several screens where user hits a dead end.',
          'Victims: New Users, Novices, Explorers',
          'Hearts: Dead-end',
          'Posts: Dead-end',
          'Comments: Dead-end',
          'The screens above don\'t provide any path for the user to go forward from here. The small help-text does not help much. User won\'t even be able to find the buttons you\'re talking about here.',
        ],
      },
      {
        heading: 'How To Fix',
        paragraphs: [
          'Take a look at the example from Zivame. Messaging is clear and the broken heart icon helps set the tone. The you "might like widget" gives the users something to go ahead with. Here empty screens are tackled in away where user does not hit a dead end. He/She can go about continuing his journey.',
          'Zivame\'s Empty Wishlist: No Dead-end',
        ],
      },
      {
        heading: 'Late Discovery (Sorry)',
        paragraphs: [
          'There is another way of handling this which I discovered in my second visit to the app. The my feed section has a "Get Started" button, which has a pretty decent and straight forward flow. The wizard is good and progress towards the goal is depicted clearly. Why not use this at other places as well',
          'My Feed - Get Started',
          'My Feed - Step 1',
          'My Feed - Step 2',
        ],
      },
      {
        heading: '#5 Get The Missing Hygiene',
        paragraphs: [
          'Problem: Poor formatting and labelling on screens that need to be usable.',
          'Victims: Everyone',
          'Tabs: Hygiene Missing',
          'Buttons: Hygiene Missing',
          'In the screens above, basic controls are either poorly selected or poorly formatted:',
          'In the filters screen above, the selected tab is barely visible.',
          'Black text on orange background is a poor contrast.',
          'Filter screen, title as well are CTA both read \'filter\'. Cancel is missing.',
          'Location and Area are confusion. Which one is which',
          'Poor choice of icons - earth for area',
        ],
      },
      {
        heading: 'How To Fix',
        paragraphs: [
          'Give highlight color and border-bottom to selected tab.',
          'Use proper contrast. White on Orange.',
          'Make button labels action based, unambiguous.eg . \'Apply Filter\' instead of \'filter\'',
          'Always provide an obvious way to cancel and clear.',
          'Area can be renamed to availability, with a \'check\' icon.',
        ],
      },
      {
        heading: '#6 Simplify Complex Flows',
        paragraphs: [
          'Problem: Certain flows a pretty complicated and difficult to complete.',
          'Victims: Everyone',
          'Take a look at some screenshots from sell workflow:',
          'Sell - Part 1',
          'This screen opens up on click of sell button. There is a huge inconsistency here:',
          'Some buttons have icons, others don\'t. Not sure why',
          'The main icon is camera, which sets the expectation that the first step will be camera, but it is not.',
          'FAB expands into multiple option buttons, which is an overkill, as every button leads to the same screen anyway.',
          'Multicolor buttons don\'t serve any purpose.',
          'Sell - Part 2',
          'I discovered later that this screen comes only for the first time seller. Nonetheless:',
          'It has confusing labels.',
          'By the time user comes here, he has no sense of progress towards goal.',
          'Poorly labeled button does not tell me what\'s next',
          'Mentioning that this is one time setup only (or these values will be used as defaults) might be a good idea.',
          'Sell - Part 3',
          'I didn\'t go further than this, but this looks like the final step.',
          'However, there is still no indicator that my process is gonna end here.',
          'The entire page looks like a big form, designed for desktop.',
          'Compulsory and Optional things are marked separately, that\'s good!',
          '"Optional +" has a bad label, as I already see some optional stuff.',
          'Sell - Part 4',
          'On this screen I was stuck for like 5 seconds and didn\'t know what to do.',
          'There\'s no reason mentioned why going back requires confirmation.',
          'User does not know what would happen if he clicks yes.',
        ],
      },
      {
        heading: 'How To Fix',
        paragraphs: [
          'Use wizards for complex flows.',
          'Always let the user knows how many steps are required, and where he is.',
          'Use progressive disclosure. One thing at a time.',
          'Let the user traverse back and forth.',
          'Make CTAs with clear labels, not just \'submit\'. eg. \'Next\' or \'Confirm\'',
          'Error messages should state what\'s wrong and what to expect when you select one of the options.',
        ],
      },
      {
        heading: '#7 Layout With a Goal',
        paragraphs: [
          'Problem: The product page of the app seems to lack a direction.',
          'Victim: Business Owner.',
          'This is the screen which is supposed to give you, as a business owner, the conversion. But I think it has the following issues:',
          'There is not motivation for the users to buy this product.',
          'No sure, why "Your location is unavailable" is required at the product page',
          'The user card is way too cluttered. Lots of icons and just a default text "I Love Shopping on Yappily". It does not help.',
          'Some count labels are orange, some are grey, none is clickable. It\'s confusing.',
          'The upvote button (triangle) is unconventional. Why is it required when you already have a heart Over-engineering.',
        ],
      },
      {
        heading: 'How To Fix',
        paragraphs: [
          'Give enough emphasis to the product itself.',
          'Declutter the user card, the seller picture repeats way too many times.',
          'Again, use progressive disclosure, keep unimportant things a tap away.',
          'Make sure your products get better descriptions. User would like to read that before going ahead for a chat.',
        ],
      },
      {
        heading: '#8 Bonus Point!',
        paragraphs: [
          'The entire app flow has not been thought through from a new vs. returning user point of view. We need to make the purchase flow super easy considering each and every step:',
          'Trust in the platform',
          'Discoverability of the shops and products',
          'Interest and Desire',
          'Motivation to Buy',
          'Final Action',
          'All the features of the app, need to be weaved together, rather than presenting them as sections. Redundancies need to be removed (too many inactive social icons, zero likes and comments, upvote vs heart, repeating profile images). The app has a strong potential and definitely a lot of scope for improvement.',
          '#koove #uxaudit #uxdesign #yappily',
        ],
      },
    ],
  },
  {
    id: 'real-16',
    slug: 'layout-design-inspiration-from-music',
    title: 'Layout Design Inspiration From Music',
    excerpt: 'Nothing is original. Steal from anywhere that resonates with inspiration or fuels your imagination. Devour old films, new films, music,...',
    sourceUrl: 'https://www.notuser.com/post/layout-design-inspiration-from-music',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_1a7d0e1a2acc4a3ba2b07a43b5618e75~mv2.jpg/v1/fit/w_1000,h_630,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
      'Design Thinking',
    ],
    date: '2016-10-01',
    updatedAt: '2016-10-01',
    readTime: '4 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Arijit Singh - With His Soulful Performance - Mirchi Music Awards',
          'I and at least 50,000 other folks love this performance by Arijit Singh. I keep revisiting this video every now and then to draw inspiration for my layout design. Here is a quick 3-pointer list that I can relate to:',
        ],
      },
      {
        heading: '#1 Crisp Hero',
        paragraphs: [
          'See how the performance starts - slow, minimal music (almost vocals only), famous song. It\'s a song which people have heard over a 1000 times, yet the crowd welcomes it with an applause! Why is that Well, we as humans, always feel safe and comfortable when we encounter something familiar. There is always a slight fear, when we encounter unknown or strange things. Yet, we\'re always curious to find out something new. That\'s how our brains have been wired. What Arijit does here is he starts with his hit song, but at a very slow pace. People applaud with anticipation of finding something new in the familiar song. There it is. That\'s how hero banners need to be :',
          'Go Minimal, cut the noise',
          'Communicate most relevant offer only, be precise',
          'Catch eye, use familiarity',
          'Build curiosity, use anticipation',
          'Take a look at new vs old hero banner of Zivame. While the old one shouts at you and text is all over the place, the new one has a very soothing image and communicates one single thing: contrast bras. I bet this banner will convert better, and I\'ll be publishing the numbers very soon.',
          'Old Hero Banner - Zivame',
          'New Hero Banner - Zivame',
          'Takeaway: Go for a minimal, precise and crisp hero banner.',
        ],
      },
      {
        heading: '#2 Seamless Flow',
        paragraphs: [
          'See how the singer uses the Sargam (pardon my limited knowledge in music), to transition from one song to another. Before you know, a song ends and another one starts. And you\'re caught by surprise - delight of unexpected. He never makes a sudden jump during this transition, it\'s always a ramp. See how the crowd applauds at the beginning of every song. The applaud doesn\'t start unless he has already sung 3-4 words. That\'s how the page flow needs to be:',
          'Go seamless across sections, use conjoining or overflowing elements',
          'Break monotony across sections, use alternate layouts',
          'Use fillers wherever necessary',
          'See the example below. Here we are using the common background color across 2 sections to give the feel of continuity. So your eyes are guided from video to the collection section. The inclined pseudo-line created by difference in background serves 2 purposes here:',
          'It further guides the eye downwards',
          'It breaks the monotony .',
          'Flow Across Sections',
          'Takeaway: Make page-flow seamless, but break monotony.',
        ],
      },
      {
        heading: '#3 Earned Differences',
        paragraphs: [
          'If you have watched the entire video, you\'ll realize that in second half, he has taken the tempo to an altogether different level. This breaks the so-called rules set by the original songs. Yet, the audience seem to like it. I think he was able to do it so beautifully because he knew exactly which songs to choose for this to be done and how to do it. Similarly, we as designers must learn to this. Sometimes, blindly following the consistency might result in confusion or monotony. As Steve Krug puts it:',
          'There will always be places in our design, where breaking away from consistency yields better clarity. At such places, we should go ahead and do that rather than beating around the bush. Also, sometime, just for visual respite or to bring in a little drama, we can move away from the rules laid out by us, and bring a little freshness. My friend tells me that at Microsoft, such deviations are called earned differences . Fancy term right there, but remember, it is a two-sided sword and could hurt you easily if you end up breaking the wrong rules at the wrong place!',
          'Take a look at the example below. The new Zivame design has all the contextual stuff including navigation implemented in left hand side or right hand side vertical slider (or surfaces) as shown. Eg. Shop by surface looks like what\'s shown below:',
          'Left Hand Side Surface',
          'However, the styles surface has an earned difference. It is not vertical, it is horizontal and it comes in the center. This was a very major deviation for us and we argued that this was okay because our users need to see and compare all the styles side by side in a single view, plus we needed to show the styles gloriously. Our creative team had put a significant amount of effort and money in the photoshoot of this and we had to do some justice to that as well. Moreover, when we tried it out, the surface turned out to be beautiful and passed our usability tests. Bingo!',
          'Center Aligned Surface for Styles',
          'Takeaway: Break rules to break monotony, or achieve clarity.',
          '#Inspiration #Music #UX #UXDesign',
        ],
      },
    ],
  },
  {
    id: 'real-17',
    slug: '10-ways-to-screw-up-your-ux-design',
    title: '10 Ways to Screw-up Your UX Design',
    excerpt: 'In my design and development career of about a decade, I have made several mistakes, across several companies. I have learnt from my...',
    sourceUrl: 'https://www.notuser.com/post/10-ways-to-screw-up-your-ux-design',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_5c5345f6da1b4d9fb7b6b365579cf0f7~mv2.png/v1/fit/w_480,h_266,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
      'Design Thinking',
    ],
    date: '2016-09-22',
    updatedAt: '2016-09-22',
    readTime: '11 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'In my design and development career of about a decade, I have made several mistakes, across several companies. I have learnt from my mistakes the hard way, and I thought it might be useful to add them to my crime list. While I hope you learn from this, I know you will not, unless you make these mistakes yourselves. Try them at your own risk, they are fun!',
        ],
      },
      {
        heading: '#1 Forget the users',
        paragraphs: [
          'Most of us are in a hurry to churn out the design as soon as we get requirements or the design brief. We tend to get either over-confident or assumptuous. We have done it a million times before, and we can do it one more time. We think we know everything about the web-users and it\'s safe to assume they will use it this way or that. And we do nothing to validate those assumptions. But we are terribly wrong:',
          'We are on a suicide mission if we choose to ignore learning about our users, their requirements, constraints, mental model and environment.',
          'If you don\'t know users\' requirements, you don\'t know what they need, and hence don\'t know what to offer.',
          'If you don\'t know users\' constraints, you don\'t know what they can or cannot do, and hence you don\'t know how to serve.',
          'If you don\'t know users\' mental model, you don\'t know their thought process, and hence you don\'t know how they perceive.',
          'If you don\'t know users\' environment, you don\'t know where and how they operate, and hence you don\'t know how they consume.',
          'What we need to do, is spend some time understanding this stuff about our users, build persona(s) around it, and then design for the persona(s). Make sure you include user demographics, requirements, mental model (psychographics) and environment in your persona. Contact your marketing and business development teams, and they should be able to feed you with enough data to build these personas. And remember, personas are not etched in stone, they evolve as your understanding about your users evolve.',
          'Don\'t forget who the target audience is.',
          'Do: Spend time understanding your users. Build Personas.',
        ],
      },
      {
        heading: '#2 Ditch the numbers',
        paragraphs: [
          'Just designing for a so-called "better experience" can be misleading. It could result into an endless process where you keep making endless (and probably senseless) enhancements to your design or it could fall too short of where it ought to be. Whenever we take up a design exercise, we should always have certain measurable goals in mind, which ensure that experience can be quantified. Without these goals, we would not know where we\'re headed to and how to figure whether we\'ve reached our destination:',
          'These goals could be around traffic, engagement, conversion, retention or whatever your business is targeting. You should talk to your business folks to figure out the broader business goals, measure the current state, target a desired state and then design for it. Your design decisions should be highly influenced by these goals. For instance, if you are designing to increase conversion for an e-commerce website, then you would measure conversion metrics (eg. % of visitors placing an order), focus on keeping distractions minimal, and narrowing down the funnel while a user moves from category page to product page to cart. On the other hand, if you are designing to increase engagement for a content website, you\'d focus on engagement metrics (eg. time spent on website), you\'d try and provide multiple pathways to the users, keeping them exposed to enough options and allowing them to spend longer time on the pages interacting with certain elements. You\'d continue monitoring respective metrics, giving you a clear idea of performance of your design.',
          'Don\'t design for abstract goal.',
          'Do: Identify and advance towards quantifiable goals aligned to business.',
        ],
      },
      {
        heading: '#3 Be technology-agnostic',
        paragraphs: [
          'Working as a designer in silos invariably leads to a situation where you end up designing something that is either too advanced to be implemented, and hence you end up downscaling, or it is too primitive and you are not leveraging what technology has to offer. Sometimes, there also could be a case, where your design is technically competent and feasible, but it does not match the current technology platform being used by the system you\'re designing for.',
          'UX Design is a multi-disciplinary field and you, as a designer, can optimize your contribution only when you collaborate. Try to understand what technology is the system on, what are its constraints and advantages. How often and to what extent is it upgraded. Then, while respecting the constraints, try to develop a scalable design, considering future enhancements.',
          'Don\'t work in silos.',
          'Do: Get involved with tech, marketing and business; design to align.',
        ],
      },
      {
        heading: '#4 Eject from the ecosystem',
        paragraphs: [
          'It is said that the design is in the details, and it is true. However, it\'s very easy to lose the sight of the bigger picture while looking at the minute details and trying to achieve pixel perfection. UX design, is not about pixel perfection, it is about how all your pieces fit together to make a larger ecosystem.Let me tell you my interpretation of this famous quote:',
          'To me, it means how my design aids the entire system to achieve the intended end-result. For instance, when I design a page for zivame.com , it shouldn\'t just be about how the page looks and feel, it should be about how it fits into the entire workflow of the user, how the page and the controls on the page function, and how the page reflects Brand Zivame. Moreover, how the page helps users draw a connection between brick-and-mortar stores and the online store.',
          'Don\'t just focus on the details.',
          'Do: Look at the bigger picture.',
        ],
      },
      {
        heading: '#5 Ditch the grid',
        paragraphs: [
          'Designing without grid and guidelines would be like sailing without a compass - there\'s no sense of direction! When all your containers are of different proportions and are not perfectly aligned to guides, the layout is likely to look a little unbalanced. Using proportional guides gets you thinking proportionally and hence decision making becomes much easier.',
          'It must be noted that most of the frameworks on web use a 12, 16 or 24 column grid system. If you\'re not using the grid, and your tech team is using a framework, you\'re design will anyway get converted to some twisted form of grid during implementation. So, you might rather want to use the grid to avoid the same. Once you\'re on grid, it\'s easier for your tech team to translate the design and you\'ll end up getting a cleaner and closer implementation.',
          'If I have convinced you to use the grid, the next step would be to decide the right grid for you. I think there are 2 scenarios you need to consider:',
          'For designing existing system, use the grid system already being used by your platform.',
          'Otherwise, go for a 12-column grid, unless you are working for a very complex layout that has way too many elements on screen.',
          'Don\'t ditch the grid.',
          'Do: Go for a grid that suits platform and granularity required.',
        ],
      },
      {
        heading: '#6 Re-invent the wheel',
        paragraphs: [
          'Sometimes we try to solve problems that have already been elegantly solved over a thousand times. As I said earlier, I have learnt it the hard way. Recently, I tried to reinvent the \'title bar\' on overlay surfaces. Here is what I thought was a good design:',
          'Bad Design for Title Bar',
          'I was convinced that a separate row for \'x\' button would make it easier to access and an annotated back button (on right) would clearly tell the user where back would take him. So far so good, right Even though my money was bang on usability, I got screwed-up by the varying screen sizes and string sizes. On mobile, I lost precious real estate to \'x\' button row and I didn\'t know what to do when "Back to main menu" was a larger string eg. "Back to My Favorite Bridal Collection". I ran out of space.',
          'And hence, I decided to fallback to good old design.',
          'Improved Design For Title Bar',
          'Now this is what I came up with after a round of usability testing. Here you could see reminiscent of good old title bar. I just gave a button-ish look to the back and close. This design passed my usability tests both on the desktop and on the mobile. Hence I concluded, sometimes its better to trust the well established design paradigms rather than trying to reinvent the wheel.',
          'Another recent example from industry leaders would further reinforce this point. Google recently launched Allo. It is a WhatsApp rival. Now designers at Google copied stuff like blue ticks for delivered and double for read directly from WhatsApp. I think it\'s a good move as WhatsApp users are already used to this design paradigm and when they move to Allo, they won\'t find it difficult to understand on Allo as well!',
          'Don\'t try to reinvent the wheel just for the heck of it.',
          'Do: Leverage existing design paradigms and adapt them when required.',
        ],
      },
      {
        heading: '#7 Squeeze and Fit',
        paragraphs: [
          'Designers often find themselves in a situation where they have to cram a lot of stuff in a very small screen space. And hence they try to find elegant ways to do the same. While doing that, they chuck off some white space, reduce font sizes by a bit and cram up some extra elements. End result: either everything starts shouting at you or everything gets lost in the crowd. There is visual and intellectual overload and the end user ultimately gives up.',
          'This is where the designers should leverage various techniques to solve this issues:',
          'Chuck it off - A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away - Antoine de Saint-Exupery. Take away stuff while you can. De-clutter.',
          'Progressive Disclosure - Present the information only when user asks for it. Limit initial choices.',
          'Broad and Shallow - Use a navigation that is broad and covers the breadth of the topics and then let the user explore each one by one.',
          'Go Contextua l - Hide relevant information a click away and maintain user\'s context while presenting it.',
          'Don\'t try to cram everything on a single screen.',
          'Do: Leverage navigation and presentation techniques to stagger information.',
        ],
      },
      {
        heading: '#8 Copy, because you can!',
        paragraphs: [
          'Earlier I said that we should use the existing design paradigms rather than reinventing the wheel. While that holds good, copying the entire design from nicely designed systems is not going to help, never in the long run. The reasons are simple:',
          'Your target audience might be different',
          'Your business goals might be different',
          'You\'re not making any incremental improvements',
          'Some day, some smart ass is gonna figure that you copied!',
          'So the question is how do you leverage the design paradigms or how to draw the right inspiration The answer is, if you like a design or you know for a fact that a particular design works, try and understand the principles applied by that design. Try and understand why it works. Then keeping your problems and target audience in mind, try and analyse how to make the same principles work for you. Apply those principles to come up with your own design solution, and 8 out of 10 times, it will work!',
          'Don\'t copy blindly.',
          'Do: Get inspired. Analyse. Deduce. Apply.',
        ],
      },
      {
        heading: '#9 Just deliver the screenshots',
        paragraphs: [
          'So you are a designer, who has been briefed about the requirements. You go to your studio (or desk in my case), do your research, design something, test it, iterate over it, re-test it and bring back an awesome design! That\'s it right Not quite. Here is what you didn\'t do and what could hurt you:',
          'Not explaining the philosophy. Unless you socialise the idea amongst your cross-functional teams, folks working along with you (graphic designers for example) will never understand why they are doing what they are doing, and hence they won\'t be able to make any incremental changes. Moreover, they would often tread off in a tangential direction that would not align to the overall design philosophy.',
          'Not aligning the teams. If your teams are not aligned to achieving common goals, everyone will have their own ideas about success. You need to go an extra mile to ensure, your cross-functional teams and your design philosophy are aligned to achieving the same goals. eg. If the goal is to churn out MVP asap, and if certain teams are trying to push for superset of features, then it\'s all gonna fall apart.',
          'Not establishing the pipeline. So you are aligned, your philosophy is aligned, your teams are aligned to business goals, but unless you have an input/output pipeline established, it\'s all gonna fall apart. Say you are designing for an e-commerce website, then you need to manage (or adhere to) the cross-functional timelines. eg. Unless graphic design team and content team get the exact page design, asset dimensions and word limits required, they won\'t be able to work on the banner design and copywriting. And if your page has 180 instances and there are 180 banners to be designed, you can\'t leave that for the last day.',
          'Not prototyping. Tech team is the one who delivers the final output. You can\'t wait for that for your tests to be conducted or for iterations to be performed. You need to go agile, work with what you have, and make incremental changes quickly. For that, you need to iterate and test on the prototypes. If you don\'t, you are putting a lot on stake, increasing the risk of failure.',
          'Not following through. If you do not act as a bridge between different developers working on different screens, they will end up in duplicate implementation of same stuff, and hence hindering achievement of consistency. They might also tread off from design. You need to ensure common classes are being used for common stuff, style-guide is being leveraged and consistency is maintained.',
          'Not gatekeeping. You might end up in situation where UI developers focus entirely on functionality, ignoring the design details altogether. Unless you establish yourself as the final gatekeeper, checking each and every screen against the design, your design will be worthless, as it will not be realised as is.',
          'Don\'t stop at just delivering screenshots.',
          'Do: Work cross-functionally, align the teams, be vigilant.',
        ],
      },
      {
        heading: '#10 Move on, because it\'s over',
        paragraphs: [
          'This is a pitfall which looks very tempting. Once a project is over, we tend to move on to the next one. We\'re designers, and we want to keep doing something new, something creative, right Avoid it. Remember, we had quantifiable goals, and these goals are upgradable. There is always a scope of improvement and thus, adding value to the business. We should have a plan for future, for phase 2, ready! Developing a roadmap along with product managers and then following it through is what ensures the long term success of a good product.',
          'Don\'t stop at phase 1.',
          'Do: Have a roadmap ready and follow it.',
          '#DesignIssues #UXDesign #InteractionDesign #WebDesign #Mistakes',
        ],
      },
    ],
  },
  {
    id: 'real-18',
    slug: 'preparing-for-your-next-ux-interview',
    title: 'Preparing for your next UX Interview',
    excerpt: 'After having interviewed numerous candidates for the position of UX Designer, I discovered that most of the candidates misjudged what\'s...',
    sourceUrl: 'https://www.notuser.com/post/preparing-for-your-next-ux-interview',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_340f9f2b01854ebc9e14b7880d21e2d8~mv2.png/v1/fit/w_480,h_266,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
    ],
    date: '2016-09-17',
    updatedAt: '2016-09-17',
    readTime: '4 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'After having interviewed numerous candidates for the position of UX Designer, I discovered that most of the candidates misjudged what\'s expected out of a UX Designer. It looked like they had a very vague idea of what we look for while hiring for a UX Designer. While this is not a skill-set that you could develop overnight, there are a few things that could certainly help you rise over the edge, and hence I thought of listing them down.',
        ],
      },
      {
        heading: 'Develop your own definition of User Experience Design',
        paragraphs: [
          'Definition of UX can be very abstract, yet very concrete. Defining it in your own words would give a great insight into where you\'re coming from, and what\'s your perspective about design. It is a two sided sword and could easily hurt you if your definition is too abstract or too shallow. So beware! Sometimes your definition might go too technical, which would defeat the purpose of defining it in your own words. So I\'d say, try to explain it in a way you\'d explain it to a 50 years old woman (or your mom!) that what is it that you do for a living Every now and then I keep revisiting my definition, as my understanding evolves, and I keep rephrasing it.',
          'Takeaway: Develop an understanding, put it in words.',
          'In interview: You\'ll be able to answer "How do you define User Experience"',
        ],
      },
      {
        heading: 'Detach yourself from your tools',
        paragraphs: [
          'Everyone can hold a flute, but only a few can actually produce a melody, others just produce noise! To become a good musician, you must be able to produce (and reproduce) melodies! Mastering Photoshop or Sketch won\'t make you a good designer. What tool you use is irrelevant, but what you do with your tool is what makes the difference. Let the tools just be the tools to achieve your end goals, and be ready to embrace the changes that come your way. Not all the organisations for instance, are a big fan of Sketch, and they won\'t even provide you license to use Sketch. Being flexible will always help you adapt to the need of the hour.',
          'Takeaway: Stop saying "I\'m a Photoshop Guy".',
          'In interview: You\'ll be able to project yourself as a designer, rather than merely a tool operator.',
        ],
      },
      {
        heading: 'Play your part in the big picture',
        paragraphs: [
          'We know they want unicorns and mermaids ! An all-in-one guy. A Jack of all trades. And so, we start running around, acquiring every skill-set that is even remotely linked to a designer - from graphic design to coding. Well, we need to stop right here! Take a step back and analyse what\'s going on in the big picture. Take a good look at your current setup. Who owns what in the team and start owning and disowning stuff. If you are being asked to do everything, trust me, you are going to be in a soup! It\'s time to focus, own something solid in the team, be responsible for connecting the input and output for same. eg. Own visual design, be responsible for driving on time delivery of wires to yourself, be responsible for your visual design, be responsible for providing output to the next guy (say interaction designer). Make your position solid, and start clearly identifying your contribution to every project. Become indispensable.',
          'Takeaway: Focus on one thing, and own it completely.',
          'In interview: You\'ll be able to define your role and contribution.',
        ],
      },
      {
        heading: 'Step up your game',
        paragraphs: [
          'There are two ways you could step up: be disruptive, or be incremental. Being disruptive would mean something like this: Today you are a graphic designer who creates banners using Photoshop, tomorrow you learn how to code in PHP and become a developer who writes the backend code for an e-commerce website. To me, it sounds pretty scary! When it comes to my career, I like to minimise risks, assess competition, assess my caliber and then make a move! Hence I like to go incremental: 1 new thing in every new job! This is how my timeline looks, that has helped me rise from an individual contributor to something more than that:',
          'I suggest you should spend some time figuring out what you want to take up next and start preparing for same. I have always found lynda.com useful and have been a premium subscriber for past 9 years.',
          'Takeaway: Identify your next step. Prepare for it.',
          'In interview: You\'ll find yourself ready for the challenge.',
        ],
      },
      {
        heading: 'Do your homework',
        paragraphs: [
          'I specifically remember this incident when I interviewed this guy from Amazon (for the role of a Graphic Designer) who turned up for the interview without his portfolio. My bad, I shortlisted him just based on the resume and didn\'t think taking a look at his portfolio was necessary at that stage. Poor guy ended up wasting his time and a trip from and to the other end of the city. No matter how good a designer you are, going unprepared is the best way to ensure that you don\'t get the job. I\'d suggest you spend time building a good resume that stands out, and a portfolio that showcases the breadth and depth of your work.',
          'Following resources are useful:',
          'Building a Design Portfolio - Invision',
          'Create an Awesome Design Portfolio - Canva',
          'Creative Resume Design Tips - TutsPlus',
          'Create the Perfect Designer Resume - Creative Bloq',
          'When going for a job interview, I always like to carry a color print of my resume printed on a thick sheet with a glossy finish 🙂',
          'Takeaway: Prepare your resume and portfolio.',
          'In interview: You\'ll know what you want to talk about.',
        ],
      },
    ],
  },
  {
    id: 'real-19',
    slug: 'lining-and-oldstyle-numbers-for-webfonts',
    title: 'Lining and Oldstyle Numbers for Webfonts',
    excerpt: 'Oldstyle Numbers - The Necessary Evil Numbers (or figures) in most of the typefaces are sized, positioned and treated equal to the...',
    sourceUrl: 'https://www.notuser.com/post/lining-and-oldstyle-numbers-for-webfonts',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_f6f507770ee34a608282c96b3683c727~mv2.png/v1/fit/w_480,h_266,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
    ],
    date: '2016-04-23',
    updatedAt: '2016-04-23',
    readTime: '3 min read',
    sections: [
      {
        heading: 'Oldstyle Numbers - The Necessary Evil',
        paragraphs: [
          'Numbers (or figures) in most of the typefaces are sized, positioned and treated equal to the uppercase letters. Because of this, they stand-out and look ugly when used in paragraphs, as paragraphs are mostly in a mixed case. Look at how 4,23,498 stands out from rest of the characters here dues to it\'s height.',
          'So, a lot of typefaces, take special care to provide an alternate set of numbers, that blend in nicely in paragraphs. These are called oldstyle figures, and they have varying heights and alignments, as opposed to lining figures, which are of uniform height and alignment. They blend in with lowercase, as they have the same x-height, and also have ascenders and descenders. Example below shows the stark difference between lining and oldstyle figures of the typeface \'Playfair Display\'.',
        ],
      },
      {
        heading: 'The Design Problem: Oldstyle Doesn\'t Work Everywhere',
        paragraphs: [
          'So now, you\'ve got a great typeface that gives you amazing oldstyle numbers. But the problem is, oldstyle isn\'t appropriate at all places. Places where numbers stand alone or where you needs them to be aligned, oldstyle looks jarring and ugly. Take a look at the examples below. In version A, I\'m using oldstyle only (which is default). While that works for the title, it looks a bit too distracting for the price and sizes. Hence, in version B, while I retained the oldstyle for title, I switched to lining for price and sizes, getting perfect alignment.',
          'A. Oldstyle Only',
          'B. Oldstyle + Lining',
        ],
      },
      {
        heading: 'The Wrong Implementation: CSS',
        paragraphs: [
          'Now in typefaces like Playfair Display, oldstyle figures are default, which would mean you\'d need an overriding CSS to be able to use lining numbers. That should be easy, right Right. And it would work on all the browsers, right Wrong! Let\'s take a look at the CSS which is supposed to solve this:',
          '.lnum { font-variant-numeric: lining-nums; -moz-font-feature-settings: "lnum" 1; -moz-font-feature-settings: "lnum=1"; -ms-font-feature-settings: "lnum" 1; -o-font-feature-settings: "lnum" 1; -webkit-font-feature-settings: "lnum" 1; font-feature-settings: "lnum" 1; } Apply this class to elements you wish to show lining numbers for. And this is what you\'d expect to see on all the browsers (at least I did, while I was looking for a solution):',
          'But, to break your heart, it doesn\'t work on a lot of platforms. Here is a list of supported browsers for lining numbers . It\'s a shame, I know. So what do you do Modify the font file, provided you have the license to do so.',
        ],
      },
      {
        heading: 'The Right Solution: Modify The Font File',
        paragraphs: [
          'Fontsquirrel provides this amazing tool called Webfont Generator that allows you to modify licensed webfonts and create your own font files from them. So what I\'m suggesting here is, use this tool to strip off the oldstyle numbers and keep lining numbers as default. Then download the font and use it as a webfont hosted on a CDN or on your own server. Here is a step by step process to do this:',
          'Open Webfont Generator',
          'Select expert mode',
          'Upload your Webfonts',
          'Override the following attributes to set them as follows',
          'Truetype Hinting: TTFAutoHint',
          'Opentype Flattening: Check Lining Numerals',
          'Provide desired font name suffix (eg. oldstyle or lining)',
          'Download the fonts',
          'Upload the downloaded webfonts to your server',
          'Use them as demonstrated in downloaded demo files',
          'I know, that\'s a lot of work just to get aligned numbers, but trust me, it pays back well!',
        ],
      },
      {
        heading: 'Resources',
        paragraphs: [
          'Read more about Oldstyle Figures on Fonts.com',
          'CSS solution (not corss-browser compatible) for Lining Numbers',
          'Cross-browser support for font variant on caniuse.com',
          'Webfont Generator on Font Squirrel',
        ],
      },
    ],
  },
  {
    id: 'real-20',
    slug: 'naked-mermaids-without-fins',
    title: 'Naked mermaids without fins',
    excerpt: 'While analysing the trends in UX, I recently stumbled upon a lot of UX jobs (or so-called) and job titles. Sad but true, a majority of...',
    sourceUrl: 'https://www.notuser.com/post/naked-mermaids-without-fins',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_95d8d4e1cb284e298e3bd4ec079f6d38~mv2.jpg/v1/fit/w_480,h_266,al_c,q_80/file.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
    ],
    date: '2015-10-24',
    updatedAt: '2015-10-24',
    readTime: '3 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'While analysing the trends in UX, I recently stumbled upon a lot of UX jobs (or so-called) and job titles. Sad but true, a majority of the hiring managers out there have no idea what they should be looking for.',
        ],
      },
      {
        heading: 'The Good',
        paragraphs: [
          'The good part is people have started realising that UX is a key requirement in order to be successful in whatever product os service business you\'re in. With the recent success of companies that purely differentiate themselves based on the User Experience, UX has become the buzzword. UX market is hot (if I can call it a market), and everyone\'s talking about it. I heard one of my friends quoting her head of business:',
          'Well, that\'s a good spirit, and even though they have reduced delivering good experience to simply being Apple, I\'m happy that at least the industry has started thinking about it at the top level.',
        ],
      },
      {
        heading: 'The Bad',
        paragraphs: [
          'The bad part is UX has become an over-used and abused term, often mentioned out of context, in a very shallow sense. It is used interchangeably with UI, and for the most it is limited to UI. I often end up educating folks about the difference between visual design and interaction design, between usability and usefulness, between wireframes and visuals, between UI and UX, between users and target users. But this doesn\'t worry me as much as the ugly part does, because the bad part can be simply taken care of by a couple of conversations, but the ugly is sticky, nasty.',
        ],
      },
      {
        heading: 'The Ugly',
        paragraphs: [
          'Credit - Gareth Beynon',
          'The ugly part is, the good and bad coming together and giving rise to an ecosystem (or a planet hell), where there is a huge requirement for folks who can deliver what twisted definition of UX is, and who can do it fast, cheap and good-enough. This gives rise to the jobs where being a designer means you\'re skilled at UCD, Photoshop, HTML5, CSS, Javascript and a couple of web-design frameworks; JQuery is a Plus. Now this imaginary person is what I refer to as a mermaid, because it exists only in fairy tales. What makes it even uglier is, they expect this poor fellow to do some rapid prototyping (with A/B testing of course) so you can claim to follow the User Centred Design process. That\'s where you start taking the clothes off the poor mermaid, leaving it naked, ready to be f**ked. If that wasn\'t enough on final blow is yet to come, tearing off the fins of the mermaid, leaving ugly scars. If this poor guy happens to be from a design background, who happens to be skilled in HTML as well, you put an end to all of his creativity by giving him a title of UI/UX Developer, reporting to a product manager. So that\'s where UX resides now, behind a slash, between a UI developer.',
        ],
      },
      {
        heading: 'Healing the Scars',
        paragraphs: [
          'Rome was not built in a day. It ill take time. Since we know it will take time, me and a couple of folks have planned an initiative where we would implant the seed of design thinking in the early startups of today. So 5 years from now, we\'ll have Ubers and Airbnbs of future, bleeding design. That\'s when folks will start understanding design needs to be in the roots, in the blood, needs to be done right and is not Photoshop. We will come out with details on the initiative very soon, and we hope to get support from you guys in this novel cause.',
        ],
      },
      {
        heading: 'Take one last look at the scars:',
        paragraphs: [
          'Credit - Gareth Beynon',
          'PS: I love Photoshop.',
          '#UXJobDescriptions #UXJobs',
        ],
      },
    ],
  },
  {
    id: 'real-21',
    slug: '15-design-issues-hiree-could-fix-today',
    title: '15 design issues Hiree could fix today!',
    excerpt: 'If there\'s a \'trick\' to it, the UI is broken.Douglas AndersonHiree.com has a beautiful website, and when you look at it from a distance, every page looks minimal, uncluttered. But as you go deeper, as you start using it, you realise that there are flaws. Some of them very obvious. I am writing this post hoping that someone at Hiree reads this, and makes the improvements to make the lives of users easy!This is the homepage:1. The primary CTA says Upload Profile Now! And the primary messaging is t',
    sourceUrl: 'https://www.notuser.com/post/15-design-issues-hiree-could-fix-today',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_7d86300bd6c74d78aab765dee1fdbaa3~mv2.png/v1/fill/w_672,h_372,al_c,lg_1,q_85/bc4f65_7d86300bd6c74d78aab765dee1fdbaa3~mv2.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
    ],
    date: '2015-10-20',
    updatedAt: '2023-10-05',
    readTime: '3 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Hiree.com has a beautiful website, and when you look at it from a distance, every page looks minimal, uncluttered. But as you go deeper, as you start using it, you realise that there are flaws. Some of them very obvious. I am writing this post hoping that someone at Hiree reads this, and makes the improvements to make the lives of users easy!',
          'This is the homepage:',
          '1. The primary CTA says Upload Profile Now! And the primary messaging is targeted for Job seekers as well. So I take it that primary target user group is the job seekers. So is the search for job seekers Maybe, because I can search jobs based on my skillset. Bummer! The search is for recruiters. A clear label should take care of it.',
          '2. When When do I want to hire Or When did the candidate resign When is the candidate available Again, poor label. A clear label is required.',
          '3. Do you see the sign in link Well, I\'m sure a lot of users would fail to see it. A quick UT should reveal it for you. More contrast required.',
          'Next, you start doing the most tiresome task - Filling the forms. Though Hiree has a nice wizard based approach which seems non-daunting, but there are numerous issue here:',
          '4. Once you start adding achievements (or anything similar that could have multiple entries), the fields keep getting appended at the bottom. Eventually, the left bar is not visible anymore. You have no idea where you are.',
          '5. Certification and Publication are placed under achievements. Doesn\'t really fit the user\'s mental model. Poor categorisation.',
          '6. If you have to add another achievement, you have to scroll all the way up (which of-course is easy to lose track of), and say add achievement. Come all the way down to fill it. All of this, without performing save!',
          '7. Save and Add is missing. Could save you from a lot of trouble. Plus, save takes you to next item in the wizard. Poor label again (It\'s actually performing \'save and next\').',
          'Once you\'re done filling all the forms, this is the profile you get. Though it\'s pretty and minimal, but is missing a lot of information and heavily depends on poor icons, abbreviations and hover effects:',
          '8. There\'s no tagline. It\'s against the user\'s mental model. All the other portals out there provide a tagline feature. Trying to be different Or beyond minimal Bad Idea! Give me my tagline, I love it!',
          '9. Current job: Other. Really UX designer has no identity. Please update your database, or let me enter my designation. You can\'t take that away from me!',
          '10. I\'m seeing the recruiter\'s view. That\'s great, because I see a progress bar and an improve profile link. Plus, I\'m also seeing the stats. Will my recruiters see them too Not sure. IA is messed up here.',
          '11. Oh, about those icons. You could hover on them to see more details. Yes, even on tablet and mobile :-).',
          '12. So all of these cup icons, are really one of 4 things: certification, publication, patent, award. What you need is at least 3 parallel rows of icons, with proper iconography. Please don\'t represent my CXA certification with a cup.',
          '13. Poor iconography again. www is my portfolio. What would work better is \'see portfolio\' button.',
          'Lastly, if you scroll below, you\'d see some summary:',
          '14. Any guesses for what does E stand for Expert! Poor iconography again. Please replace these things with solid and hollow stars. You should be just fine.',
          '15. Lot\'s of whitespace. Actually a waste of real estate, while all the information is cramped on left.',
          'BONUS POINT 16. Remember the yellow and black homepage Where did that come from if the brand colors are blue and green Why doesn\'t the homepage reflect the brand Reminds me of \'mera wala pink\'',
          'If you are from hiree.com , please don\'t take this personally. My intention here is not to make fun of this design, but to point out that even beautiful looking webpages have usability issues and design flaws. Please feel free to take these points and make improvements. Happy hiring!',
          '#CaseStudy #DesignIssues #Hiree #InteractionDesign',
        ],
      },
    ],
  },
  {
    id: 'real-22',
    slug: 'three-mantras-behind-notuser-com',
    title: 'Three Mantras Behind notuser.com',
    excerpt: 'We, as designers, have our lives revolving around the users. But that\'s a tricky situation to be in and I want to emphasise on the three wrong places we give to the users at different points in our journey towards maturity. And maybe, I am still wrong, and on acquiring further maturity I might go ahead and add a fourth one as well!Let\'s agree, all of us designers with engineering background have a very technical mindset where we tend to think everything based on technology. When we get started w',
    sourceUrl: 'https://www.notuser.com/post/three-mantras-behind-notuser-com',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_d8b08cf4ba584549bbe2000255470459~mv2.png/v1/fill/w_672,h_372,al_c,lg_1,q_85/bc4f65_d8b08cf4ba584549bbe2000255470459~mv2.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
    ],
    date: '2015-10-14',
    updatedAt: '2023-10-05',
    readTime: '2 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'We, as designers, have our lives revolving around the users. But that\'s a tricky situation to be in and I want to emphasise on the three wrong places we give to the users at different points in our journey towards maturity. And maybe, I am still wrong, and on acquiring further maturity I might go ahead and add a fourth one as well!',
          'Let\'s agree, all of us designers with engineering background have a very technical mindset where we tend to think everything based on technology. When we get started with design, we tend to think design is Photoshop or CSS. The very first step in User Centered Design Process is design considering Users, Business and Technology. So my first message for all my wannabe-designer friends out there is, we must design design it for the users.',
        ],
      },
      {
        heading: 'Not designing it for the users - Bad Idea!',
        paragraphs: [
          'The next thing is, when we start designing for the users, we start making the mistake of thinking of ourselves as the User. Epic Fail! The moment we make the mistake of thinking that \'I am the user\' we fall into a vicious circle of thinking that all the users are like us. But the fact is web-usage and mobile-usage behavior is idiosyncratic and all the users are unique. Instead, what we need to do is, make certain assumptions about the users after figuring the right target user group. Then do proper user-research to validate and rectify your assumptions. Then finally design for them.',
        ],
      },
      {
        heading: 'You are not the User.',
        paragraphs: [
          'And finally, we have to stop thinking of our users as only the \'users\' and start thinking about them as \'humans\'. We need to know them in true sense. We need figure out their drives, blocks and behaviors. And finally design for their well-being and for their motivation. We need to empathise with our users, and what we design must be like a gift to them!',
        ],
      },
      {
        heading: 'They are not just users, they are humans.',
        paragraphs: [
          'It takes time to understand the meaning of these 3 mantras and it eventually comes to you with experience. But I hope, this helps. I also hope to discover a fourth point as my journey continues as a designer!',
        ],
      },
    ],
  },
  {
    id: 'real-23',
    slug: 'paradox-of-choice',
    title: 'Paradox of Choice',
    excerpt: 'Exposing your users to too many choices could prove catastrophic. We have to hit that sweet spot to optimize the experience.Barry Schwartz explains in his TED Talk The Paradox of Choice. He says, having too many options or choices available to choose from have 2 negative effects:1. Paralysis, rather than liberation With a lot of choices available, it is so hard to make a decision, that the users pass up for the next time, or don\'t make a choice at all (for the fear of making the wrong choice).2',
    sourceUrl: 'https://www.notuser.com/post/paradox-of-choice',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_b269a2ad11e1433ab40f245106717ce9~mv2.png/v1/fill/w_672,h_372,al_c,lg_1,q_85/bc4f65_b269a2ad11e1433ab40f245106717ce9~mv2.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
    ],
    date: '2015-09-10',
    updatedAt: '2023-10-05',
    readTime: '1 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Barry Schwartz explains in his TED Talk The Paradox of Choice . He says, having too many options or choices available to choose from have 2 negative effects:',
          '1. Paralysis, rather than liberation With a lot of choices available, it is so hard to make a decision, that the users pass up for the next time, or don\'t make a choice at all (for the fear of making the wrong choice).',
          '2. Decreased satisfaction after making the choice With a menagerie of options that were available before you made your choice, its easy to imagine that you could have made a different choice that could have been better. This leads to regret that subtracts from the satisfaction you got from your choice. With a large number choices available, it is easy to imagine that you have rejected attractive features of the other options in order to get what you chose, hence there was an opportunity cost , which leads to dissatisfaction.',
          'With all the options available, our expectation about how the final choice would be goes up, leading to so called escalation of expectation. This leads to a degradation in satisfaction when the final choice does not meet our expectation. So, in this scenario, we will never be pleasantly surprised.',
          'People ending up blaming themselves ( self-blame) for not being able to make the right choice, even when they do which further leads to unrest.',
          'We can leverage this knowledge in providing a good user experience:',
          'Provide limited number of options to the users. Not too many, not too less. Just the right balance .',
          'Make sure your options exceed the user expectation giving them a pleasant surprise.',
          'Make the users feel good about the choice they made. Let them share it, let them get social proof.',
          'Hitting that sweet spot (of perfect balance) might be tricky, and only user testing or research would give you the right numbers. So go, research, test, get it right!',
          '#choice',
        ],
      },
    ],
  },
  {
    id: 'real-24',
    slug: 'a-serene-world-based-on-balance',
    title: 'A serene world based on balance',
    excerpt: 'What I dream of is an art of balance, of purity and serenity devoid of troubling or depressing subject matter - a soothing, calming influence on the mind, rather like a good armchair which provides relaxation from physical fatigue.Henri Matisse A lovely quote! Obviously, I googled for it. But why Today, we have created an ecosystem around us, where we are in a constant state of unrest, loneliness and unhappiness. We have probably reached the peak of narcissism and individualism, at the cost of',
    sourceUrl: 'https://www.notuser.com/post/a-serene-world-based-on-balance',
    thumbnail: 'https://static.wixstatic.com/media/bc4f65_901a4de29c71453bbae7e47f30b52f7c~mv2.png/v1/fill/w_672,h_372,al_c,lg_1,q_85/bc4f65_901a4de29c71453bbae7e47f30b52f7c~mv2.png',
    author: 'Udit Khandelwal',
    category: 'Design',
    tags: [
      'Design',
    ],
    date: '2015-09-08',
    updatedAt: '2023-10-05',
    readTime: '3 min read',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'A lovely quote! Obviously, I googled for it. But why Today, we have created an ecosystem around us, where we are in a constant state of unrest, loneliness and unhappiness. We have probably reached the peak of narcissism and individualism, at the cost of our soul, relationships and humanity. To blow your mind off, watch Shimi Cohen\'s innovation of loneliness where he talks about I share, so I am. Human being is a social creature, unable to cope with the feeling of loneliness. But today\'s culture has nurtured individuality into us based on career, wealth, self-image and consumerism.',
          'But who is to blame for building this ecosystem Well, I think its us, the designers, the engineers and the professionals of today. The time has come, when we must build to attain the balance between loneliness and togetherness, balance between identity and relation. We must design to bring people closer together, rather than making them self-centric and further apart. Design against ego, against narcissism. I pulled out an example to explain this better :',
          'NOT SO GOOD:',
          'AWESOME:',
          'When we allow things around us to direct us in the individualism, they will start dictating our behavior, the way we feel and the way we see things. Airtel ad above does that, which is not an evil thing to do, but does not do good to humanity in any way. Take inspiration from Vodafone on other hand, putting it nicely for togetherness, in a better way, promoting relations and positive emotions. When we start incorporating these small changes in our design, we head towards building a better world.',
          'Next thing that we need to move away from is excess of human-machine interaction. Today\'s technology is pushing us away from what we are supposed to do to what we are not. We are becoming more and more dependent and addicted to the technology, overuse of which is leading to serious mental and physical health issues. We are losing the balance, the personal touch and the much needed human to human interaction. It is high time we realised that we are on a verge of becoming the humans from the movie WALL-E.',
          'So this big talk about balance is all fine, but what\'s the motivation What\'s the anchor I think it is doing all of this for the family, friends and hence, at large for humanity. In our lives, well-being of family, taking care of it, proving your worth to it (esteem) is a big motivation to do anything. Speaking of the Maslow\'s hierarchy of needs, most of us today fall in the bands where our needs and aspirations are Love, Belongingness and Esteem. Our ecosystem already takes care of physiological and the safety part of it, well almost. Rather than jumping to hollow self-actualisation, which today\'s world is doing at the cost of other things, we should stick to more basic needs.',
          'So whatever I design, should ultimately lead to mental and physical well-being, calmness and tranquility. Serenity. It could be through health, through harmony, through collaboration, through intimacy, through efficiency, through identity or through machines.',
          'But the final piece of the puzzle still remains, how could a single designer change the world The answer is pretty simple. Cultivate. Cultivate this vision, this culture. And yes, I am working towards it, propagating this thinking and continuously refining it.',
          'Putting all the pieces together:',
          'Serenity is the fundamental goal. Balance is the key.',
          'Limit individualism, give importance to relationships.',
          'Promote human to human interaction, belongingness.',
          'Use machines and automation conservatively, wisely.',
          'Family, friends and humanity at large, must be end-beneficiaries.',
          'Scale it up to the entire world by cultivating this culture.',
          'In coming days, I will be starting an initiative that is very much around cultivation!',
        ],
      },
    ],
  },
];

export function resolveBlogSlug(slug: string) {
  return legacyBlogSlugMap[slug] ?? slug;
}

export function getBlogPostBySlug(slug: string) {
  const resolved = resolveBlogSlug(slug);
  return blogPosts.find((post) => post.slug === resolved);
}
