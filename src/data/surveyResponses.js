const surveyResponses = [
  {
    timestamp: '2018-03-25T15:50:07.895Z',
    name: 'Shrav Mehta',
    rolecategory: 'Engineer/Marketer',
    role: 'Engineering and Marketing',
    specialties: 'Aviation, motorcycling, medical tech, marketing',
    learning: 'Lucid dreaming and meditation ',
    linkedin: 'https://www.linkedin.com/in/shravmehta/',
    facebook: 'https://www.facebook.com/100000078227649',
    twitter: 'https://twitter.com/shravvmehtaa',
    email: 'shravvmehtaa@gmail.com',
    cell: 4084100962
  },
  {
    timestamp: '2018-03-25T15:51:43.328Z',
    name: 'Gillian Morris',
    rolecategory: 'Founder',
    role: 'CEO/founder at Hitlist',
    specialties: 'Travel, communal living',
    learning: 'Battery technology, blockchaib',
    linkedin: 'Linkedin.com/in/gillianim',
    facebook: 'Facebook.com/gillianemorris',
    instagram: 'Instagram.com/gillianemorris',
    twitter: 'Twitter.com/gillianim',
    email: 'g@hitlistapp.com',
    cell: 2032493384
  },
  {
    timestamp: '2018-03-25T15:55:52.814Z',
    name: 'Ashwin Lalendran',
    rolecategory: 'Engineer/Founder',
    role: 'Embedded Software Engineer; Founder',
    specialties: 'Autonomous vehicles (aerial, ground, marine)',
    learning: 'Strategy for venture capital fundrising',
    linkedin: 'https://www.linkedin.com/in/ashwinl/',
    twitter: 'https://twitter.com/ashwinl',
    email: 'ashwin@lalendran.com',
    cell: 9379854706
  },
  {
    timestamp: '2018-03-25T16:21:00.827Z',
    name: 'Jules Walter',
    rolecategory: 'Product Manager',
    role: 'Product at Slack',
    specialties:
      'diversity in tech, nonprofit boards, product, growth, intentional dating',
    learning: 'seed investing, inner workings of vc, nonviolent communication ',
    linkedin: 'https://www.linkedin.com/in/juleswalter/',
    facebook: 'https://www.facebook.com/jdwalter',
    twitter: 'https://twitter.com/julesdwalt',
    email: 'jules.walter@gmail.com',
    cell: '917-371-5180'
  },
  {
    timestamp: '2018-03-25T16:45:00.456Z',
    name: 'Alex Halliday',
    rolecategory: 'Product Manager',
    role: 'Product @ MasterClass',
    specialties:
      'Growth tools, immersive Ed tech, gig economy education, ideation, starting something ',
    learning:
      'Ideation frameworks, blockchain, wellness/wellbeing, investing, relationships ',
    facebook: '/alhal',
    twitter: 'Alexhalliday',
    email: 'Amhalliday@gmail.com',
    cell: 4154818364
  },
  {
    timestamp: '2018-03-25T16:48:05.850Z',
    name: 'Andreas Klinger',
    rolecategory: 'Engineer',
    role: 'VPE Coinlist  (prev CTO ProductHunt)',
    specialties: 'Engineering, Management, Blockchain, Europe Network',
    learning: 'non violent comm',
    facebook: 'Facebook.com/andreasklinger',
    instagram: 'Instagram.com/andreasklinger',
    twitter: 'Twitter.com/andreasklinger',
    email: 'andreas@klinger.io',
    cell: 4155280378
  },
  {
    timestamp: '2018-03-25T18:24:57.068Z',
    name: 'Michael Lai',
    rolecategory: 'Founder',
    role: 'Entrepreneur-in-Residence focused on early childhood development',
    specialties:
      'Education, early childhood development, community, books, surfing, evolutionary psychology, recruiting / hiring, growth (sales / marketing / partnerships)',
    learning: 'Diversity & inclusion, HR tech',
    linkedin: 'Www.linkedin.com/in/michaellai7',
    facebook: 'Www.facebook.com/michaeltclai',
    twitter: '@mtclai',
    email: 'michaeltclai@gmail.com',
    cell: 9092860198
  },
  {
    timestamp: '2018-03-25T19:28:58.513Z',
    name: 'Artur Meyster',
    rolecategory: 'Engineer/Founder',
    role: 'Software Engineer / Founder of Career Karma',
    specialties:
      'Educatuon, Mentorship, learning new skills, crypto, fitness, growth hacking',
    learning:
      'Building engineering teams, crypto, empathy, building strong relationships, purpose of life...',
    linkedin: 'https://www.linkedin.com/in/meyster',
    facebook: 'https://m.facebook.com/meyster',
    instagram: 'https://www.instagram.com/ameyster/',
    twitter: 'https://twitter.com/arturmeyster',
    email: 'Meyster.artur@gmail.com',
    cell: 6463610938
  },
  {
    timestamp: '2018-03-25T19:35:47.968Z',
    name: 'Rubén Harris ',
    rolecategory: 'Founder',
    role: 'Startup Founder',
    specialties:
      'Workforce Development, Education, Barter Economy / Trade, Social Justice, Music, or Martial Arts',
    learning: 'How people would exchange value if money didn’t exist',
    linkedin: 'LinkedIn.com/in/rubenharris',
    facebook: 'Facebook.com/rubenharris ',
    instagram: '@rubenharris',
    twitter: '@rubenharris',
    email: 'Ruben.x.harris@gmail.com',
    cell: 6784670123
  },
  {
    timestamp: '2018-03-25T20:47:17.346Z',
    name: 'Terri Burns',
    rolecategory: 'Investor',
    role: 'Investor @ GV',
    instagram: 'Tcburning',
    twitter: 'Tcburning',
    email: 'Tcburning@gmail.com'
  },
  {
    timestamp: '2018-03-25T21:23:17.493Z',
    name: 'Stacy La',
    rolecategory: 'Designer',
    role: 'Director of Design @ Clover Health',
    specialties:
      'Any facet of design (interaction, visual, service, operational processes, life :); food, travel, Seattle, music',
    learning:
      "Building profitable businesses where design is core, career coaching, YOU (my favorite parts of Rise was getting to know other people's backgrounds and stories)",
    linkedin: 'linkedin.com/in/stacyla',
    facebook: 'facebook.com/staserz',
    instagram: '@staserz',
    twitter: '@staserz',
    email: 'stacy.h.la@gmail.com',
    cell: '206-753-7160'
  },
  {
    timestamp: '2018-03-25T22:38:49.974Z',
    name: 'Seth Rosenberg',
    rolecategory: 'Investor',
    role: 'VC @ Greylock ',
    specialties: 'Start ups',
    instagram: '@sethgrosenberg',
    twitter: '@sethgrosenberg',
    email: 'sethgrosenberg@gmail.com',
    cell: 9173401556
  },
  {
    timestamp: '2018-03-25T23:36:46.281Z',
    name: 'Asher King Abramson',
    rolecategory: 'Marketing',
    role: 'Growth marketing @ Bell Curve',
    specialties:
      'Avoiding horrible debt decisions, growth marketing, freestyle rapping, harmonizing, books you’re reading',
    learning: 'Stories that last a lifetime ',
    linkedin: 'https://www.linkedin.com/in/akingabramson',
    twitter: '@akingabramson',
    email: 'A.Kingabramson@gmail.com'
  },
  {
    timestamp: '2018-03-26T01:02:08.933Z',
    name: 'Luis “Lu” De Castro',
    rolecategory: 'Engineer',
    role: 'Software Engineer ',
    specialties:
      'Motorsports(cars & motorcyles), videography, how to break into tech',
    learning: 'Everything ',
    linkedin: '/holixsf',
    facebook: '/holixsf',
    instagram: '@holixsf',
    email: 'luisdecastro510@gmail.com',
    cell: 16508924274
  },
  {
    timestamp: '2018-03-26T01:14:03.967Z',
    name: 'Chris Gallello',
    rolecategory: 'Founder',
    role: 'Founder @ Purple.pm',
    specialties:
      'Design, PM, solo foundering, offshore work, remote teams, VR dev/design',
    learning: 'Other fun games for tiny saunas with 9 people in them',
    linkedin: 'https://www.linkedin.com/in/chrisgallello/',
    facebook: 'https://www.facebook.com/cgallello',
    instagram: 'https://www.instagram.com/cgallello/',
    twitter: 'https://twitter.com/cgallello',
    email: 'chris@purple.pm',
    cell: 7327319298
  },
  {
    timestamp: '2018-03-26T01:26:00.007Z',
    name: 'Casey Caruso',
    rolecategory: 'Engineer/Investor',
    role: 'Partner Tech Manager @ Google / Blockchain Investor',
    specialties: 'blockchain, evolution, robotics, psychology, consciousness',
    learning: 'goal-setting, vc, psychology ',
    linkedin: 'https://www.linkedin.com/in/casey-k-caruso/',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/caseykcaruso',
    email: 'caseykcaruso@gmail.com',
    cell: '203-520-7805'
  },
  {
    timestamp: '2018-03-26T02:57:43.475Z',
    name: 'Laura Thompson ',
    rolecategory: 'Product Manager/Founder/Investor',
    role: 'PM at Google x, founder, investor',
    specialties:
      'Crazy innovation, personal finance hacking, social entrepreneurship, social justice, women in tech',
    linkedin: 'LinkedIn.com/lauranicolethompson',
    facebook: 'Facebook.com/lauranicolethompson',
    instagram: 'Instagram.com/lauranthom',
    twitter: 'Twitter.com/lauranthompson',
    email: 'Lauranicolethompson@gmail.com',
    cell: 8476875087
  },
  {
    timestamp: '2018-03-26T03:24:26.481Z',
    name: 'Anand Sharma',
    rolecategory: 'Founder',
    role: 'Founder @ Gyroscope',
    specialties: 'Design, health, quantified self, react native',
    learning: 'growth, engineering, life',
    facebook: 'https://facebook.com/aprilzero ',
    instagram: 'https://instagram.com/aprilzero',
    twitter: 'https://twitter.com/aprilzero',
    email: 'anand@aprilzero.com',
    cell: 8187263467
  },
  {
    timestamp: '2018-03-26T03:37:47.423Z',
    name: 'Ina Herlihy',
    rolecategory: 'Product/Investor/Marketing',
    role: 'Investor, Product, Growth',
    linkedin: 'https://www.linkedin.com/in/inaherlihy/',
    facebook: 'https://www.facebook.com/inaherlihy',
    instagram: 'https://www.instagram.com/inaherlihy/',
    twitter: 'https://twitter.com/inaherlihy',
    email: 'inacatherine@gmail.com',
    cell: '415-272-7274'
  },
  {
    timestamp: '2018-03-26T04:43:52.092Z',
    name: 'Shriya Nevatia',
    rolecategory: 'Engineer/Designer',
    role: 'UX Engineer @ Glidr.io',
    specialties:
      "- UX Design, UX Research, Product development, Human-Computer Interaction, building User-centric technology\n- Education & the future of learning (Bootcamps, Online ed/MOOCs, competency-based learning / Khan Academy, hands-on learning / Dynamicland / Maker movement, Seymour Papert, more...)\n- Online communities, especially Facebook groups. Some I run include The Future of Learning, First Five Years, Women in Artificial Intelligence & Machine Learning, and (admin) Ladies Storm Hackathons\n- What is (& isn't) the role of Women in Tech orgs in the tech industry\n- Dance (Ballet, Tap, Jazz, Bollywood, Indian Classical, Hip Hop, etc.) and why it's so disconnected to tech while other art forms (music, visual art) have had an explosion of tech enhancements and changes\n- Visual design on paper (magazines, book covers) - awesome books, artistically beautiful paper things -- let's read graphic novels together and discuss their visual style",
    learning:
      "- How & why to be a great Front-End Engineer, UX Designer, and/or Product Manager\n- Starting a startup that begins as a community\n- Finding co-founders for your startup who complement your skills & who will actually contribute meaningfully\n- Finding a way to monetize ideas that don't seem easy to monetize\n- How to start advising startups & what you can learn from this experience\n- Growing a huge community without burning out\n- Growing your own network / mentoring / giving back without burning out \n- Creating a media product on the side while keeping your full-time job...without burning out (podcast? blog?)\n- Tech recruiting industry & HR & how to help people find or create awesome jobs\n- The history & future of artificial intelligence (learning from our mistakes in the past, or not)",
    linkedin: 'https://www.linkedin.com/in/shriyanevatia',
    facebook: 'https://www.facebook.com/snevatia',
    instagram: 'http://instagram.com/shriyakn',
    twitter: 'https://twitter.com/shriyanevatia',
    email: 'sneva831@gmail.com',
    cell: 5183388505
  },
  {
    timestamp: '2018-03-26T04:45:08.704Z',
    name: 'Timur Meyster',
    rolecategory: 'Engineer/Founder',
    role: 'Engineer, founder ',
    specialties:
      'Alternative education, blockchain & decentralization, dating life hacks, designing a balanced life, fitness (Muay Thai or juijitsu), self improvement / routines / prioritization strategies',
    learning: 'Building products, Peer networks, scaling blockchains ',
    facebook: 'https://www.facebook.com/1460447896',
    instagram: 'https://www.instagram.com/timurm',
    twitter: 'Twitter.com/timurmeyster',
    email: 'timur.meyster@gmail.com',
    cell: 7187047440
  },
  {
    timestamp: '2018-03-26T15:30:13.615Z',
    name: 'Jennifer Kaehms',
    rolecategory: 'Investor',
    role: 'Investor with Canvas Ventures',
    specialties:
      'Enterprise, Marketplace, Fintech, Emereging Tech, Triathlons, baking sweets, hiking, dogs, life skills, ',
    learning: 'all the things',
    linkedin: 'https://www.linkedin.com/in/jkaehms/',
    facebook: 'https://www.facebook.com/jennykaehms',
    twitter: 'https://twitter.com/jennykaehms?lang=en'
  },
  {
    timestamp: '2018-03-26T17:16:49.079Z',
    name: 'Sarah Brooks',
    rolecategory: 'Lawyer',
    role: 'Startup Law ',
    specialties:
      'Access to the legal system, blockchain, legal issues for startups',
    learning:
      'Self-improvement & mindfulness, investing, best adventure travel spots',
    linkedin: 'sarahbrooks3',
    facebook: 'Ssbrooks',
    instagram: 'ssbrooks',
    twitter: '@Ssbrooks5',
    email: 'ssbrooks5@gmail.com',
    cell: 9126602890
  },
  {
    timestamp: '2018-03-26T19:01:43.277Z',
    name: 'Raed Khawaja',
    rolecategory: 'Marketing',
    role: 'Former @Jyve @Pepsico ',
    linkedin: 'http://linkedin.com/in/raed-khawaja-27838327',
    facebook: 'https://www.facebook.com/194308711',
    instagram: 'rraedk ',
    email: 'raed.khawaja@gmail.com',
    cell: 6302343396
  },
  {
    timestamp: '2018-03-27T01:18:13.900Z',
    name: 'Shani Taylor',
    rolecategory: 'Marketing',
    role: 'Enterprise Customer Success @ Airtable',
    specialties:
      'Werewolf (jk), music, customer success, Airtable, VC (previously at CCV, Intel Capital), psychology/behavior change',
    learning: ' ',
    linkedin: 'https://www.linkedin.com/in/shanictaylor',
    facebook: 'https://www.facebook.com/shani.c.taylor',
    instagram: '@helloshani',
    twitter: '@shanictaylor',
    email: 'shani.c.taylor@gmail.com',
    cell: 2403050064
  },
  {
    name: 'Patrick Rivera',
    rolecategory: 'Engineer',
    role: 'Engineer',
    specialties:
      'Programming, Design, EdTech, EDM, Consciousness, and Meditation',
    learning:
      'How to cook, freestyle rap, martial arts, product management,  and blockchain',
    linkedin: 'https://urlgeni.us/linkedin/MAoC',
    facebook: 'https://urlgeni.us/facebook/Nd1E',
    instagram: 'https://urlgeni.us/instagram/LGQG',
    twitter: 'https://urlgeni.us/twitter/E0wt',
    email: 'patrick.x.rivera@gmail.com',
    cell: '(904) 562-0299'
  }
];

export default surveyResponses;
