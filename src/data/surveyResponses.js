const surveyResponses = [
  {
    timestamp: '2018-03-25T15:50:07.895Z',
    name: 'Shrav Mehta',
    preferredEmail: 'shravvmehtaa@gmail.com',
    cellNumber: 4084100962,
    role: 'Engineer/Marketer',
    whatDoYouDo: 'Engineering and Marketing',
    peopleShouldTalkToYouAbout:
      'Aviation, motorcycling, medical tech, marketing',
    youAreLookingToLearnMoreAbout: 'Lucid dreaming and meditation ',
    linkedin: 'https://www.linkedin.com/in/shravmehta/',
    facebook: 'https://www.facebook.com/100000078227649',
    twitter: 'https://twitter.com/shravvmehtaa'
  },
  {
    timestamp: '2018-03-25T15:51:43.328Z',
    name: 'Gillian Morris',
    preferredEmail: 'g@hitlistapp.com',
    cellNumber: 2032493384,
    role: 'Founder',
    whatDoYouDo: 'CEO/founder at Hitlist',
    peopleShouldTalkToYouAbout: 'Travel, communal living',
    youAreLookingToLearnMoreAbout: 'Battery technology, blockchaib',
    linkedin: 'Linkedin.com/in/gillianim',
    facebook: 'Facebook.com/gillianemorris',
    instagram: 'Instagram.com/gillianemorris',
    twitter: 'Twitter.com/gillianim'
  },
  {
    timestamp: '2018-03-25T15:55:52.814Z',
    name: 'Ashwin Lalendran',
    preferredEmail: 'ashwin@lalendran.com',
    cellNumber: 9379854706,
    role: 'Engineer/Founder',
    whatDoYouDo: 'Embedded Software Engineer; Founder',
    peopleShouldTalkToYouAbout: 'Autonomous vehicles (aerial, ground, marine)',
    youAreLookingToLearnMoreAbout: 'Strategy for venture capital fundrising',
    linkedin: 'https://www.linkedin.com/in/ashwinl/',
    twitter: 'https://twitter.com/ashwinl'
  },
  {
    timestamp: '2018-03-25T16:21:00.827Z',
    name: 'Jules Walter',
    preferredEmail: 'jules.walter@gmail.com',
    cellNumber: '917-371-5180',
    role: 'Product Manager',
    whatDoYouDo: 'Product at Slack',
    peopleShouldTalkToYouAbout:
      'diversity in tech, nonprofit boards, product, growth, intentional dating',
    youAreLookingToLearnMoreAbout:
      'seed investing, inner workings of vc, nonviolent communication ',
    linkedin: 'https://www.linkedin.com/in/juleswalter/',
    facebook: 'https://www.facebook.com/jdwalter',
    twitter: 'https://twitter.com/julesdwalt'
  },
  {
    timestamp: '2018-03-25T16:45:00.456Z',
    name: 'Alex Halliday',
    preferredEmail: 'Amhalliday@gmail.com',
    cellNumber: 4154818364,
    role: 'Product Manager',
    whatDoYouDo: 'Product @ MasterClass',
    peopleShouldTalkToYouAbout:
      'Growth tools, immersive Ed tech, gig economy education, ideation, starting something ',
    youAreLookingToLearnMoreAbout:
      'Ideation frameworks, blockchain, wellness/wellbeing, investing, relationships ',
    facebook: '/alhal',
    twitter: 'Alexhalliday'
  },
  {
    timestamp: '2018-03-25T16:48:05.850Z',
    name: 'Andreas Klinger',
    preferredEmail: 'andreas@klinger.io',
    cellNumber: 4155280378,
    role: 'Engineer',
    whatDoYouDo: 'VPE Coinlist  (prev CTO ProductHunt)',
    peopleShouldTalkToYouAbout:
      'Engineering, Management, Blockchain, Europe Network',
    youAreLookingToLearnMoreAbout: 'non violent comm',
    facebook: 'Facebook.com/andreasklinger',
    instagram: 'Instagram.com/andreasklinger',
    twitter: 'Twitter.com/andreasklinger'
  },
  {
    timestamp: '2018-03-25T18:24:57.068Z',
    name: 'Michael Lai',
    preferredEmail: 'michaeltclai@gmail.com',
    cellNumber: 9092860198,
    role: 'Founder',
    whatDoYouDo:
      'Entrepreneur-in-Residence focused on early childhood development',
    peopleShouldTalkToYouAbout:
      'Education, early childhood development, community, books, surfing, evolutionary psychology, recruiting / hiring, growth (sales / marketing / partnerships)',
    youAreLookingToLearnMoreAbout: 'Diversity & inclusion, HR tech',
    linkedin: 'Www.linkedin.com/in/michaellai7',
    facebook: 'Www.facebook.com/michaeltclai',
    twitter: '@mtclai'
  },
  {
    timestamp: '2018-03-25T19:28:58.513Z',
    name: 'Artur Meyster',
    preferredEmail: 'Meyster.artur@gmail.com',
    cellNumber: 6463610938,
    role: 'Engineer/Founder',
    whatDoYouDo: 'Software Engineer / Founder of Career Karma',
    peopleShouldTalkToYouAbout:
      'Educatuon, Mentorship, learning new skills, crypto, fitness, growth hacking',
    youAreLookingToLearnMoreAbout:
      'Building engineering teams, crypto, empathy, building strong relationships, purpose of life...',
    linkedin: 'https://www.linkedin.com/in/meyster',
    facebook: 'https://m.facebook.com/meyster',
    instagram: 'https://www.instagram.com/ameyster/',
    twitter: 'https://twitter.com/arturmeyster'
  },
  {
    timestamp: '2018-03-25T19:35:47.968Z',
    name: 'Rubén Harris ',
    preferredEmail: 'Ruben.x.harris@gmail.com',
    cellNumber: 6784670123,
    role: 'Founder',
    whatDoYouDo: 'Startup Founder',
    peopleShouldTalkToYouAbout:
      'Workforce Development, Education, Barter Economy / Trade, Social Justice, Music, or Martial Arts',
    youAreLookingToLearnMoreAbout:
      'How people would exchange value if money didn’t exist',
    linkedin: 'LinkedIn.com/in/rubenharris',
    facebook: 'Facebook.com/rubenharris ',
    instagram: '@rubenharris',
    twitter: '@rubenharris'
  },
  {
    timestamp: '2018-03-25T20:47:17.346Z',
    name: 'Terri Burns',
    preferredEmail: 'Tcburning@gmail.com',
    role: 'Investor',
    whatDoYouDo: 'Investor @ GV',
    instagram: 'Tcburning',
    twitter: 'Tcburning'
  },
  {
    timestamp: '2018-03-25T21:23:17.493Z',
    name: 'Stacy La',
    preferredEmail: 'stacy.h.la@gmail.com',
    cellNumber: '206-753-7160',
    role: 'Designer',
    whatDoYouDo: 'Director of Design @ Clover Health',
    peopleShouldTalkToYouAbout:
      'Any facet of design (interaction, visual, service, operational processes, life :); food, travel, Seattle, music',
    youAreLookingToLearnMoreAbout:
      "Building profitable businesses where design is core, career coaching, YOU (my favorite parts of Rise was getting to know other people's backgrounds and stories)",
    linkedin: 'linkedin.com/in/stacyla',
    facebook: 'facebook.com/staserz',
    instagram: '@staserz',
    twitter: '@staserz'
  },
  {
    timestamp: '2018-03-25T22:38:49.974Z',
    name: 'Seth Rosenberg',
    preferredEmail: 'sethgrosenberg@gmail.com',
    cellNumber: 9173401556,
    role: 'Investor',
    whatDoYouDo: 'VC @ Greylock ',
    peopleShouldTalkToYouAbout: 'Start ups',
    instagram: '@sethgrosenberg',
    twitter: '@sethgrosenberg'
  },
  {
    timestamp: '2018-03-25T23:36:46.281Z',
    name: 'Asher King Abramson',
    preferredEmail: 'A.Kingabramson@gmail.com',
    role: 'Marketing',
    whatDoYouDo: 'Growth marketing @ Bell Curve',
    peopleShouldTalkToYouAbout:
      'Avoiding horrible debt decisions, growth marketing, freestyle rapping, harmonizing, books you’re reading',
    youAreLookingToLearnMoreAbout: 'Stories that last a lifetime ',
    linkedin: 'https://www.linkedin.com/in/akingabramson',
    twitter: '@akingabramson'
  },
  {
    timestamp: '2018-03-26T01:02:08.933Z',
    name: 'Luis “Lu” De Castro',
    preferredEmail: 'luisdecastro510@gmail.com',
    cellNumber: 16508924274,
    role: 'Engineer',
    whatDoYouDo: 'Software Engineer ',
    peopleShouldTalkToYouAbout:
      'Motorsports(cars & motorcyles), videography, how to break into tech',
    youAreLookingToLearnMoreAbout: 'Everything ',
    linkedin: '/holixsf',
    facebook: '/holixsf',
    instagram: '@holixsf'
  },
  {
    timestamp: '2018-03-26T01:14:03.967Z',
    name: 'Chris Gallello',
    preferredEmail: 'chris@purple.pm',
    cellNumber: 7327319298,
    role: 'Founder',
    whatDoYouDo: 'Founder @ Purple.pm',
    peopleShouldTalkToYouAbout:
      'Design, PM, solo foundering, offshore work, remote teams, VR dev/design',
    youAreLookingToLearnMoreAbout:
      'Other fun games for tiny saunas with 9 people in them',
    linkedin: 'https://www.linkedin.com/in/chrisgallello/',
    facebook: 'https://www.facebook.com/cgallello',
    instagram: 'https://www.instagram.com/cgallello/',
    twitter: 'https://twitter.com/cgallello'
  },
  {
    timestamp: '2018-03-26T01:26:00.007Z',
    name: 'Casey Caruso',
    preferredEmail: 'caseykcaruso@gmail.com',
    cellNumber: '203-520-7805',
    role: 'Engineer/Investor',
    whatDoYouDo: 'Partner Tech Manager @ Google / Blockchain Investor',
    peopleShouldTalkToYouAbout:
      'blockchain, evolution, robotics, psychology, consciousness',
    youAreLookingToLearnMoreAbout: 'goal-setting, vc, psychology ',
    linkedin: 'https://www.linkedin.com/in/casey-k-caruso/',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/caseykcaruso'
  },
  {
    timestamp: '2018-03-26T02:57:43.475Z',
    name: 'Laura Thompson ',
    preferredEmail: 'Lauranicolethompson@gmail.com',
    cellNumber: 8476875087,
    role: 'Product Manager/Founder/Investor',
    whatDoYouDo: 'PM at Google x, founder, investor',
    peopleShouldTalkToYouAbout:
      'Crazy innovation, personal finance hacking, social entrepreneurship, social justice, women in tech',
    linkedin: 'LinkedIn.com/lauranicolethompson',
    facebook: 'Facebook.com/lauranicolethompson',
    instagram: 'Instagram.com/lauranthom',
    twitter: 'Twitter.com/lauranthompson'
  },
  {
    timestamp: '2018-03-26T03:24:26.481Z',
    name: 'Anand Sharma',
    preferredEmail: 'anand@aprilzero.com',
    cellNumber: 8187263467,
    role: 'Founder',
    whatDoYouDo: 'Founder @ Gyroscope',
    peopleShouldTalkToYouAbout: 'Design, health, quantified self, react native',
    youAreLookingToLearnMoreAbout: 'growth, engineering, life',
    facebook: 'https://facebook.com/aprilzero ',
    instagram: 'https://instagram.com/aprilzero',
    twitter: 'https://twitter.com/aprilzero'
  },
  {
    timestamp: '2018-03-26T03:37:47.423Z',
    name: 'Ina Herlihy',
    preferredEmail: 'inacatherine@gmail.com',
    cellNumber: '415-272-7274',
    role: 'Product/Investor/Marketing',
    whatDoYouDo: 'Investor, Product, Growth',
    linkedin: 'https://www.linkedin.com/in/inaherlihy/',
    facebook: 'https://www.facebook.com/inaherlihy',
    instagram: 'https://www.instagram.com/inaherlihy/',
    twitter: 'https://twitter.com/inaherlihy'
  },
  {
    timestamp: '2018-03-26T04:43:52.092Z',
    name: 'Shriya Nevatia',
    preferredEmail: 'sneva831@gmail.com',
    cellNumber: 5183388505,
    role: 'Engineer/Designer',
    whatDoYouDo: 'UX Engineer @ Glidr.io',
    peopleShouldTalkToYouAbout:
      "- UX Design, UX Research, Product development, Human-Computer Interaction, building User-centric technology\n- Education & the future of learning (Bootcamps, Online ed/MOOCs, competency-based learning / Khan Academy, hands-on learning / Dynamicland / Maker movement, Seymour Papert, more...)\n- Online communities, especially Facebook groups. Some I run include The Future of Learning, First Five Years, Women in Artificial Intelligence & Machine Learning, and (admin) Ladies Storm Hackathons\n- What is (& isn't) the role of Women in Tech orgs in the tech industry\n- Dance (Ballet, Tap, Jazz, Bollywood, Indian Classical, Hip Hop, etc.) and why it's so disconnected to tech while other art forms (music, visual art) have had an explosion of tech enhancements and changes\n- Visual design on paper (magazines, book covers) - awesome books, artistically beautiful paper things -- let's read graphic novels together and discuss their visual style",
    youAreLookingToLearnMoreAbout:
      "- How & why to be a great Front-End Engineer, UX Designer, and/or Product Manager\n- Starting a startup that begins as a community\n- Finding co-founders for your startup who complement your skills & who will actually contribute meaningfully\n- Finding a way to monetize ideas that don't seem easy to monetize\n- How to start advising startups & what you can learn from this experience\n- Growing a huge community without burning out\n- Growing your own network / mentoring / giving back without burning out \n- Creating a media product on the side while keeping your full-time job...without burning out (podcast? blog?)\n- Tech recruiting industry & HR & how to help people find or create awesome jobs\n- The history & future of artificial intelligence (learning from our mistakes in the past, or not)",
    linkedin: 'https://www.linkedin.com/in/shriyanevatia',
    facebook: 'https://www.facebook.com/snevatia',
    instagram: 'http://instagram.com/shriyakn',
    twitter: 'https://twitter.com/shriyanevatia'
  },
  {
    timestamp: '2018-03-26T04:45:08.704Z',
    name: 'Timur Meyster',
    preferredEmail: 'timur.meyster@gmail.com',
    cellNumber: 7187047440,
    role: 'Engineer/Founder',
    whatDoYouDo: 'Engineer, founder ',
    peopleShouldTalkToYouAbout:
      'Alternative education, blockchain & decentralization, dating life hacks, designing a balanced life, fitness (Muay Thai or juijitsu), self improvement / routines / prioritization strategies',
    youAreLookingToLearnMoreAbout:
      'Building products, Peer networks, scaling blockchains ',
    facebook: 'https://www.facebook.com/1460447896',
    instagram: 'https://www.instagram.com/timurm',
    twitter: 'Twitter.com/timurmeyster'
  },
  {
    timestamp: '2018-03-26T15:30:13.615Z',
    name: 'Jennifer Kaehms',
    role: 'Investor',
    whatDoYouDo: 'Investor with Canvas Ventures',
    peopleShouldTalkToYouAbout:
      'Enterprise, Marketplace, Fintech, Emereging Tech, Triathlons, baking sweets, hiking, dogs, life skills, ',
    youAreLookingToLearnMoreAbout: 'all the things',
    linkedin: 'https://www.linkedin.com/in/jkaehms/',
    facebook: 'https://www.facebook.com/jennykaehms',
    twitter: 'https://twitter.com/jennykaehms?lang=en'
  },
  {
    timestamp: '2018-03-26T17:16:49.079Z',
    name: 'Sarah Brooks',
    preferredEmail: 'ssbrooks5@gmail.com',
    cellNumber: 9126602890,
    role: 'Lawyer',
    whatDoYouDo: 'Startup Law ',
    peopleShouldTalkToYouAbout:
      'Access to the legal system, blockchain, legal issues for startups',
    youAreLookingToLearnMoreAbout:
      'Self-improvement & mindfulness, investing, best adventure travel spots',
    linkedin: 'sarahbrooks3',
    facebook: 'Ssbrooks',
    instagram: 'ssbrooks',
    twitter: '@Ssbrooks5'
  },
  {
    timestamp: '2018-03-26T19:01:43.277Z',
    name: 'Raed Khawaja',
    preferredEmail: 'raed.khawaja@gmail.com',
    cellNumber: 6302343396,
    role: 'Marketing',
    whatDoYouDo: 'Former @Jyve @Pepsico ',
    linkedin: 'http://linkedin.com/in/raed-khawaja-27838327',
    facebook: 'https://www.facebook.com/194308711',
    instagram: 'rraedk '
  },
  {
    timestamp: '2018-03-27T01:18:13.900Z',
    name: 'Shani Taylor',
    preferredEmail: 'shani.c.taylor@gmail.com',
    cellNumber: 2403050064,
    role: 'Marketing',
    whatDoYouDo: 'Enterprise Customer Success @ Airtable',
    peopleShouldTalkToYouAbout:
      'Werewolf (jk), music, customer success, Airtable, VC (previously at CCV, Intel Capital), psychology/behavior change',
    youAreLookingToLearnMoreAbout: ' ',
    linkedin: 'https://www.linkedin.com/in/shanictaylor',
    facebook: 'https://www.facebook.com/shani.c.taylor',
    instagram: '@helloshani',
    twitter: '@shanictaylor'
  },
  {
    name: 'Patrick Rivera',
    preferredEmail: 'patrick.x.rivera@gmail.com',
    cellNumber: '(904) 562-0299',
    role: 'Engineer',
    whatDoYouDo: 'Engineer',
    peopleShouldTalkToYouAbout:
      'Programming, Design, EdTech, EDM, Consciousness, and Meditation',
    youAreLookingToLearnMoreAbout:
      'How to cook, freestyle rap, martial arts, product management,  and blockchain',
    linkedin: 'https://www.linkedin.com/in/patrickxrivera/',
    facebook: 'https://www.facebook.com/patrickxrivera',
    instagram: '@priv16',
    twitter: '@priv16'
  }
];

export default surveyResponses;
