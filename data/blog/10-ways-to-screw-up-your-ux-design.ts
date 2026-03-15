import { BlogPost } from "../types/blog";

export const post: BlogPost = {
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
  };
