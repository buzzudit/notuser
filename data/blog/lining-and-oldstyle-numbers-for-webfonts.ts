import { BlogPost } from "../types/blog";

export const post: BlogPost = {
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
  };
