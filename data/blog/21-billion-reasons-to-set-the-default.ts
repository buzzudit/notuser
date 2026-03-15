import { BlogPost } from "../types/blog";

export const post: BlogPost = {
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
  };
