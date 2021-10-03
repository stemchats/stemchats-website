//data structures
let membersObj = [
  //executives
  {
    name: "Nicole Felix-Tovar",
    position: "Chief Executive Officer",
    linkedIn: "nfelixtovar/",
    home: "Saint Cloud, FL",
    team: "Leadership",
    src: "NicoleFelixTovar.jpg",
    bio: "Nicole is a driven advocate for equitable opportunity and is a rising second-year student majoring in Anthropology & Human Biology at Emory University in Atlanta, Georgia. She joined STEMchats to help make opportunities in various STEM disciplines attainable to low income, first-generation youth such as herself. She is proudly Colombian-Ecuadorian and wants to inspire and expose minority communities everywhere to STEM research and immersion pursuits. In her free time, Nicole loves to play tennis, watch and critique movies, nap, and travel."
  }, {
    name: "Amel Saied-Hassan",
    position: "VP of Programming",
    linkedIn: "amel-hassan-895615192/",
    home: "Paterson, NJ",
    team: "Leadership",
    src: "AmelSaiedHassan.jpg",
    bio: "Amel is an advocate for opportunities for low-income & minority students and a rising third-year student majoring in Anthropology and Human Biology at Emory University in Atlanta, GA. She joined STEMchats to work to solve the issue of access and representation that many FGLI students and under-represented communities face when looking at research and STEM opportunities.  Outside of STEMchats, Amel enjoys watching shows, listening to all types of music, messing with her five siblings and parents, and cooking new foods!"
  }, {
    name: "Jasmine Li",
    position: "VP of Programming",
    linkedIn: "jasmine-li-66821596/",
    home: "Philadelphia, PA",
    team: "Leadership",
    src: "JasmineLi.jpg",
    bio: "Jasmine is an advocate for equitable education and a rising first-year at Dartmouth College. She joined STEMchats because everyone deserves the opportunity to thrive in STEM regardless of their individual backgrounds. In her free time, she enjoys singing, playing the ukulele, and spending way too long clicking through the endless void that is Youtube."
  }, {
    name: "Mahir Rahman",
    position: "VP of Programming",
    linkedIn: "mahir-rahman-8605201a7/",
    home: "Kissimmee, FL",
    team: "Leadership",
    src: "MahirRahman.jpg",
    bio: "Mahir is a proponent advocate for equitable educational and medicinal opportunities and is an IB senior at Gateway High School in Kissimmee, Florida. He aspires to study Public Health and joined STEMchats to introduce medicinal aspects to the program, to provide awareness towards, and include underprivileged, FGLI (first-generation, low-income), women, & minorities, in a global manner. In his free time, he enjoys reading about politics, exploring fashion and makeup, and listening to music."
  }, {
    name: "Snoe Castillo",
    position: "VP of Biz-Development",
    linkedIn: "snoe-castillo/",
    home: "San Jose, CA",
    team: "Leadership",
    src: "SnoeCastillo.jpg",
    bio: "Snoe is a rising second-year majoring in Film/Cinema/Video Studies at San Jose State University. She joined STEMchats because she wanted to help provide the same support and opportunities to minorities and show the potential of the younger generations. In her free time, she enjoys watching animation, editing graphics/videos, and eating asian cuisine."
  },
  //leads
  {
    name: "Joseph Chiang",
    position: "Technology Lead",
    linkedIn: "joseph-chiang/",
    home: "Vancouver, Canada",
    team: "Technology",
    src: "JosephChiang.jpg",
    bio: "Joseph is an aspiring computer developer and a rising sophomore at University of British Columbia. He joined STEMchats to support and prepare the next generation, especially low-income youth, for practical real world opportunities through immersive and relevant experiences in STEM. When he is not learning about technology, he enjoys writing poetry, exploring hiking trails, and relaxing to lofi beats."
  }, {
    name: "MyCo Le",
    position: "Technology Lead",
    linkedIn: "myco-le/",
    home: "Baltimore, MD",
    team: "Technology",
    src: "MyCoLe.jpg",
    bio: "MyCo is a rising freshman at Rice University in Houston, Texas and an avid believer in self love and individuality. She wants to fight for equitable opportunities so that everyone, no matter their background and especially FGLI and minority students, may be able to find their true passions and pursue happiness. She joined STEMchats to indulge in her own love for STEM and help others do the same. In her free time, she likes to draw, watch anime, listen to J-rock and lo-fi, and browse YouTube for hours on end."
  }, {
    name: "Alexa Ramirez",
    position: "Funding Lead",
    linkedIn: null,
    home: "El Paso, TX",
    team: "Funding",
    src: "AlexaRamirez.jpg",
    bio: "Alexa is an aspiring tech entrepreneur/aerospace engineer who has a passion for space, and is currently a junior at Clint Early College Academy, TX. She joined STEMchats because as a fellow Latina, she would love to see, and inspire other latinas to pursue engineering and become business owners. In her free time she enjoys learning about space and physics, horseback riding, archery, and dancing."
  }, {
    name: "Chloe Kim",
    position: "STEMlights Lead",
    linkedIn: "chloekim-8a158919a/",
    home: "Las Vegas, NV",
    team: ["STEMlights", "Speaker Series"],
    src: "ChloeKim.jpg",
    bio: "Chloe is a dedicated proponent of equity in healthcare and is a rising first year at Brown University, working to pursue a career in public health and/or medicine. She joined STEMchats to help support other students and break the glass ceiling that prevents many historically disadvantaged groups from receiving opportunities in STEM. In her free time, she loves to listen to/create music, philosophize, and chill with her friends and family."
  }, {
    name: "Marian Caballo",
    position: "STEMlights Lead",
    linkedIn: null,
    home: "Queens, NY",
    team: "STEMlights",
    src: "MarianCaballo.jpg",
    bio: "Marian, a high school senior from Queens, New York, is a science and writing aficionado who aims to pursue biotechnology. She joined STEMchats to explore the intersections of media and STEM while also increasing accessibility for underrepresented youth. Outside of STEMchats, Marian enjoys writing, watching sci-fi movies, taking dance classes, working at a science museum, and exploring!"
  }, {
    name: "Alexej Latimer",
    position: "STEMchats Institute Lead",
    linkedIn: "alexejlatimer/",
    home: "Sumner, WA",
    team: "STEMchats Institute",
    src: "AlexejLatimer.jpg",
    bio: "Alexej is an enthusiastic high school senior with big ideas for education and social reform to increase the quality of life for all world citizens. He enjoys running a digital media lab that focuses on teaching elementary and middle schoolers about technology and bridges the gap between STEM and artistic expression. He’s excited to use STEM to improve the living conditions for people all around the world and while also helping provide educational resources for unrepresented peoples. In his free time, he can be found developing film, exploring (with a camera), spending too much time at coffee or boba cafés, or riding his bike dangerously fast."
  }, {
    name: "Maxximo Ibarra",
    position: "STEMchats Institute Lead",
    linkedIn: null,
    home: "Oklahoma City, OK",
    team: "STEMchats Institute",
    src: "MaxximoIbarra.jpg",
    bio: "Maxx is a rising sophomore studying applied physics at the California Institute of Technology in Pasadena, California. Maxx is a Questbridge college match scholar who is very interested in contributing to a culture of excellence in STEM, and by joining STEMchats he hopes to offer a helping hand to his first-generation or low income peers. Maxx comes from a family with Mexican, White, and Choctaw heritage and hopes to help other minorities gain access to advanced programs in STEM. When he isn't working for educational equity, Maxx likes to play bass guitar, work with wood or other building media, or experiment with CAD and additive manufacturing techniques."
  }, {
    name: "Karla Gonzalez",
    position: "STEMchats Institute Lead",
    linkedIn: "karla-gonzalez-a378841b2/",
    home: "San Diego, CA",
    team: "STEMchats Institute",
    src: "KarlaGonzalez.jpg",
    bio: "Karla is a hardworking Latina and is an incoming freshman at the University of California Davis. She joined STEMchats to help break educational barriers in STEM for low-income and minority students as she has faced these challenges herself. She believes everyone, no matter their ethnicity/culture/background, should have an equal opportunity to attain quality education. During her free time, she loves hanging out with friends and family, watching Netflix, listening to music, reading, and playing the violin."
  }, {
    name: "Ekta Singh",
    position: "United Engineers Lead",
    linkedIn: "ekta-singh-106180147/",
    home: "Edison, NJ",
    team: "United Engineers",
    src: "EktaSingh.jpg",
    bio: "Ekta is a passionate advocate for equal opportunities among all and is a rising third-year student pursuing biological engineering with a minor in biotechnology at Purdue University in West Lafayette, Indiana. She wanted to join STEMchats because as a woman and person of color in STEM, she finds that there needs to be a higher representation of those groups leading in STEM, through increased awareness and literacy of STEM. Outside of STEMchats, you will find her watching documentaries, being a social butterfly, volunteering in her community, and traveling to explore new cultures and hidden artifacts around the world."
  }, {
    name: "Haoren Wen",
    position: "United Engineers Lead",
    linkedIn: null,
    home: "Guangzhou, China",
    team: "United Engineers",
    src: "HaorenWen.jpg",
    bio: "Haoran is an enthusiast in engineering and is a rising first year student at the Massachusetts Institute of Technology. He joined STEMchats in hopes of providing greater opportunities to first generation, low income students and help inspire a new wave of future engineers. In his free time, he enjoys exercising, playing the piano, and learning about new technologies."
  }, {
    name: "Lola Rustamova",
    position: "United Engineers Lead",
    linkedIn: "lolarustamova/",
    home: "Brooklyn, NY",
    team: ["United Engineers", "Speaker Series"],
    src: "LolaRustamova.jpg",
    bio: "Lola is a rising second-year student at Baruch College in New York City. She joined STEMchats because she's passionate about helping disadvantaged students discover and learn more about STEM and provide more opportunities to them. In her spare time she loves spending time with kids, reading, baking, and exploring New York City."
  }, {
    name: "Abigail Jiang",
    position: "i-STEM Scholars Lead",
    linkedIn: "abigailyjiang/",
    home: "Camas, WA",
    team: ["i-STEM Scholars", "Speaker Series"],
    src: "AbigailJiang.jpg",
    bio: "Abigail is a scientist, activist, and a junior at Caltech studying Materials Science and History/Ethnic Studies. She joined STEMchats to provide underserved students with accessible opportunities for education, mentorship, and inspiration. Abigail is passionate about diversity and inclusion-related advocacy, and they aim to bring an equity-centered lens to the higher education landscape. In her free time, she loves hiking, photographing the world, and exploring museums."
  }, {
    name: "Anusha Puri",
    position: "Blueprint Lead",
    linkedIn: "anusha-p-04bb59190/",
    home: "Richmond, VA",
    team: "Blueprint",
    src: "AnushaPuri.jpg",
    bio: "Anusha is a driven researcher and second-year student at the Massachusetts Institute of Technology majoring in Biological Engineering. She joined STEMchats to help others discover the potential of research and to further conversation on real-world scientific issues and their solutions. In her free time, she enjoys playing the piano, writing comedy, and doing trivia."
  }, {
    name: "Gina Lee",
    position: "Blueprint Lead",
    linkedIn: "ginalee2/",
    home: "Great Neck, NY",
    team: "Blueprint",
    src: "GinaLee.jpg",
    bio: "Gina is an advocate for equal educational opportunity and is a rising freshman at Yale University in New Haven, CT. She joined STEMchats because she wants to inspire students from underrepresented backgrounds to discover their passion in STEM. She hopes to help make research and education in the STEM fields attainable for everyone. In her free time, Gina likes fencing, baking sweets, reading new books, and relaxing at coffee shops."
  }, {
    name: "Manvir Bhandal",
    position: "Internal Development Lead",
    linkedIn: null,
    home: "Astoria, NY",
    team: ["Development", "Speaker Series"],
    src: "ManvirBhandal.jpg",
    bio: "Manvir is a passionate entrepreneur and a rising second-year student majoring in Financial Economics at Columbia University in NYC. He joined STEMchats to help provide underprivileged students, such as low income, first generation youth, with more opportunities in STEM and to help connect the STEM world with underrepresented groups. In his free time, he enjoys listening to rap, buying and reselling streetwear, and playing basketball."
  }, {
    name: "Sristi Palimar",
    position: "External Development Lead",
    linkedIn: "sristi-palimar-238397188/",
    home: "Irvine, CA",
    team: ["Development", "Speaker Series"],
    src: "SristiPalimar.jpg",
    bio: "Sristi is a rising senior at Woodbridge High School in southern California. As an ally to underrepresented minorities, Sristi strives to uplift marginalized youth in her community. She strongly believes that all students deserve the opportunity to extend their learning outside of the classroom, and is committed to supporting those who lack the resources to fulfill their educational potential. Sristi joined STEMchats to broaden the scope of her advocacy, and support underserved students in pursuing STEM opportunities across the nation. She hopes that her impact will inspire young women of color to find confidence in challenging adversity. In her free time, Sristi enjoys volunteering, painting, journaling, and trying new foods!"
  },
  //senior advisors
  {
    name: "Sanja Kirova",
    position: "Senior Advisor",
    linkedIn: "sanja-kirova-cur10u5/",
    home: "Portage, IN",
    team: "Senior Advisors",
    src: "SanjaKirova.jpg",
    bio: "Sanja is a robotics enthusiast and rising second-year student majoring in Mechanical Engineering at Columbia University in New York, NY. In her junior year of high school, Sanja started She Can Tech, a local computer science and technology program for middle school girls. As part of STEMchats, she is excited about sharing STEM with students from underserved communities. Sanja has been competing in robotics for the past 5 years, and she is part of Columbia’s motorsports (Formula SAE) team. Fun fact: Sanja is vegetarian and does not watch TV. She also enjoys photography, biking, travel, and reading."
  }, {
    name: "Tatum Wilhelm",
    position: "Senior Advisor",
    linkedIn: "tatum-wilhelm-203340177/",
    home: "Orange County, CA",
    team: "Senior Advisors",
    src: "TatumWilhelm.jpg",
    bio: "Tatum is a rising sophomore at the Massachusetts Institute of Technology majoring in Chemical Engineering and minoring in Biomedical Engineering. She joined STEMchats to help inspire and provide equal opportunity to fellow first-generation, low income students through mentorship and leadership. Outside of STEMchats, she is heavily involved in research, rowing, and being outdoors."
  }, {
    name: "Sasha Kolesnikov",
    position: "Senior Advisor",
    linkedIn: "sasha-kolesnikov-profile/",
    home: "Santa Cruz, CA",
    team: "Senior Advisors",
    src: "SashaKolesnikov.jpg",
    bio: "Sasha is a social justice advocate and a rising second-year student majoring in Environmental Economics & Policy at UC Berkeley in the Bay Area. She joined STEMchats as a first generation, low-income student with a goal of supporting historically disadvantaged groups in STEM and socially responsible organizations. In her free time, she enjoys finding unusual books to read, exploring new places with friends, listening to a variety of podcasts in an attempt to feel smart, and trying anything matcha flavored."
  }, {
    name: "Katrina Orevillo",
    position: "Senior Advisor",
    linkedIn: "korevillo/",
    home: "Las Vegas, NV",
    team: "Senior Advisors",
    src: "KatrinaOverillo.jpg",
    bio: "Katrina is a coder/designer/project manager with a passion for accessibility in tech. A third-year CS + American Studies student at CSU Long Beach, she enjoys working at the intersection of code and culture to create products with accessibility and mindfulness at the forefront. Katrina joined STEMchats in 2019 to have an active role in pushing for for equitable education while engaging her love for STEM. In her free time, Katrina enjoys going on scenic hikes, attempting new recipes, playing music, and indulging her sudoku obsession."
  }, {
    name: "Kanokwan Tungkitkancharoen",
    position: "Senior Advisor",
    linkedIn: "kanotung/",
    home: "Las Vegas, NV",
    team: "Senior Advisors",
    src: "KanokwanTungkitkancharoen.jpg",
    bio: "Kanokwan is an avid maker and a rising 1st-year mechanical engineering student attending the Massachusetts Institute of Technology. She joined STEMchats to be proactive in the fight for social equity for low-income minority students, such as herself. On the usual, you can find her meditating, eating Thai red chili peppers, or on the hunt for writing nooks in the city."
  }, {
    name: "Hana Memon",
    position: "Senior Advisor",
    linkedIn: "hanamemon/",
    home: "Yardley, PA",
    team: "Senior Advisors",
    src: "HanaMemon.jpg",
    bio: "Hana is a rising freshman at the College of New Jersey where she plans to study Computer Science, Business, and Arabic. Hana actively uses her technical skills to empower marginalized communities through technology. Hana first joined STEMchats to give FGLI students a platform to creatively express their scientific interests. Outside of STEMchats, Hana is involved with various other student run nonprofits dedicated towards making the tech industry more inclusive. In her free time, you can find Hana drinking iced coffee and discovering new music on Spotify."
  },
  //coords
  {
    name: "Vivienne Nguyen",
    position: "Marketing Coordinator",
    linkedIn: "vivienne-nguyen-7703b6163/",
    home: "Las Vegas, NV",
    team: "Marketing",
    src: "VivienneNguyen.jpg",
    bio: "Vivienne is a rising third-year student majoring in Business Administration at the University of Southern California. She was eager to join STEMchats because she believes in its mission and wants to use her business experience to help expand it to the next level! In her spare time, she enjoys traveling and spending time with her mom and friends."
  }, {
    name: "Lucy Cheng",
    position: "Marketing Coordinator",
    linkedIn: "lucindacheng/",
    home: "Concord, CA",
    team: "Marketing",
    src: "LucyCheng.jpg",
    bio: "Lucy is a rising second-year at UC Berkeley double-majoring in Computer Science and Business Administration. She joined STEMchats to drive its vision towards making STEM accessible for underrepresented communities and low-income, first generation students. She is excited to see the impact she can create! In her free time she loves to make videos, try new recipes, and find new music."
  }, {
    name: "Jenna Tran",
    position: "Marketing Coordinator",
    linkedIn: null,
    home: "Houston, TX",
    team: "Marketing",
    src: "JennaTran.jpg",
    bio: "Jenna, a rising senior at Klein Collins HS in Spring, TX, is a passionate advocate for equitable opportunities, particularly in the STEM field. As a first-gen Vietnamese-American student, she aspires to pursue mechanical engineering in the future, hoping to foreground and dispel the gender disparities in the engineering workforce, which is why she joined STEMchats. In her free time, she can be found watching TikToks, playing violin, taking photos, experimenting with makeup, or savoring some good boba tea."
  }, {
    name: "Caitlyn Widjaja",
    position: "Marketing Coordinator",
    linkedIn: "caitlyn-widjaja-762172192/",
    home: "Bothell, WA",
    team: "Marketing",
    src: "CaitlynWidjaja.jpg",
    bio: "Caitlyn is an advocate for those underrepresented in fields such as STEM, she believes in equitable education for all and joined STEMchats to help break down barriers in STEM for youth in underserved communities. She is a rising senior at North Creek High School in Bothell, Washington and competes in business competitions through DECA, is a Consultant at JUV Consulting, leads the student led organization Girl STEMinist, and empowers young women to achieve their own version of success with Miss CEO. In her free time, Caitlyn enjoys spending time with friends and family, trying new foods, finding new movies to watch, and drinking boba."
  }, {
    name: "Haylie Jones",
    position: "Funding Coordinator",
    linkedIn: null,
    home: "Houston, TX",
    team: "Funding",
    src: "HaylieJones.jpg",
    bio: "Haylie Jones is a high school senior, a student leader, and a community volunteer residing in the city of Houston, Texas. Haylie is currently pursuing a career in pathology for her passion for discovering various mechanisms of illnesses and diseases. She aspires to create an impact in the world with her medical expertise and knowledge, to help those who are in need of care and treatment. In her free time, she loves playing volleyball, gardening, blogging, and fitness."
  }, {
    name: "Tiffany Hoang",
    position: "Funding Coordinator",
    linkedIn: null,
    home: "Garden Grove, CA",
    team: "Funding",
    src: "TiffanyHoang.jpg",
    bio: "Tiffany is an upcoming senior at Garden Grove High School, serving on her Associated Student Body and California Scholarship Federation board. She has an interest in Business and STEM, and hoping to pursue them in higher education. She is excited to be apart of STEMchats to push her passion of making STEM accessible to other girls and low-income, first generation students like herself. She is a proud Vietnamese-American, loves to spend time on TikTok, and try new foods."
  }, {
    name: "Audrey Chu",
    position: "Funding Coordinator",
    linkedIn: "audrey-vargas-314-av",
    home: "New York City, NY",
    team: "Funding",
    src: "AudreyChu.jpg",
    bio: "Audrey is a sophomore at Brooklyn Technical High School in New York with a strong interest in STEM. She joined STEMchats because she supports its mission and hopes to help make STEM educational opportunities accessible to students from underrepresented and underserved communities. In her free time, Audrey enjoys sewing her designs, playing cards, baking, and going on long walks with her dog."
  }, {
    name: "Zainab AlRamlawi",
    position: "External Development Coordinator",
    linkedIn: "zainab-al-ramlawi-25201a12b/",
    home: "Gaza, Palestine",
    team: ["Development", "Speaker Series"],
    src: "ZainabAlRamlawi.jpg",
    bio: "Zainab is a youth advocate and a rising third-year student majoring in business administration. Zainab has taken part in many leadership positions and run many initiatives & campaigns to empower youth in education, STEM, and entrepreneurship fields. She joined STEMchats because she believes in its mission and wants to empower more people to pursue their career in STEM fields, especially the one who is living in the underserved communities. In her free time, she enjoys watching movies, reading books, and debating."
  }, {
    name: "Sai Hruthika Naraharisetti",
    position: "External Development Coordinator",
    linkedIn: "sai-h-naraharisetti-5a2084195/",
    home: "Woodstock, MD",
    team: ["Development", "Speaker Series"],
    src: "SaiNaraharisetti.jpg",
    bio: "Sai is a motivated and hardworking senior at Marriotts Ridge High School. She hopes to double major in computer science and business. She joined STEMchats to help break barriers for monitories in STEM and make more opportunities available to them. In her free time, Sai likes to play volleyball, paint, quill, and watch tv shows."
  },
  {
    name: "Esha Sharma",
    position: "External Development Coordinator",
    linkedIn: "esha-sharma-83bb21207/",
    home: "Glen Allen, VA",
    team: "Development",
    src: "EshaSharma.jpg",
    bio: "Esha is an aspiring researcher, environmental advocate, and current senior at Mills E. Godwin High School. She joined STEMchats to help extend opportunities to youth that have had minimal exposure to the many worlds of STEM, learn to create equitable educational experiences for underserved students, and expand the scope of impactful scientific research upon real-world issues. In her free time, Esha enjoys writing short stories, growing new plants, hunting for new books to read, and, of course, catnapping every now and then. "
  },
  {
    name: "Princess Thompson",
    position: "External Development Coordinator",
    linkedIn: "princess-thompson-7906001b0/",
    home: "Greensboro, NC",
    team: "Development",
    src: "PrincessThompson.jpg",
    bio: "Princess is a current high school senior at the Middle College at UNCG. She is interested in  Environmental Engineering and Public Policy and joined STEMchats to help make STEM opportunities and education easily accessible to FGLI students. She is passionate about Environmental research and loves sharing STEM activities with children at her local Science Center as an Robotic Ambassador. In her free time, Princess loves read, practice ASL, and listen to podcasts."
  },
  {
    name: "Anam Ali",
    position: "Internal Development Coordinator",
    linkedIn: null,
    home: "Orefield, PA",
    team: "Development",
    src: "AnamAli.jpg",
    bio: "Anam is a rising senior at Parkland High School in Allentown, Pennsylvania with academic interests in biology (specifically, molecular biology and genetics) and Spanish. She joined STEMchats to support the mission of expanding STEM opportunities in underprivileged backgrounds and join a community of like-minded individuals with a common goal. In her free time, she enjoys making desserts (especially cakes and cupcakes), playing violin, expanding on her Spanish vocabulary, and improving her (rather poor) calligraphy skills."
  }, {
    name: "Anika Xi",
    position: "Internal Development Coordinator",
    linkedIn: null,
    home: "Philadelphia, PA",
    team: "Development",
    src: "AnikaXi.jpg",
    bio: "Anika is a rising junior at Lower Merion High School with a passion for STEM. She joined STEMchats to be able to help others explore their own love for STEM without having to worry about potential barriers preventing them from achieving their goals. In her free time, Anika can be seen playing her viola, practicing calligraphy, watching birds, painting, and taking photos."
  }, {
    name: "James Chu",
    position: "Internal Development Coordinator",
    linkedIn: "jamesdchu/",
    home: "New York City, NY",
    team: "Development",
    src: "JamesChu.jpg",
    bio: "James is a rising first-year student at the University of Michigan majoring in Computer Science and minoring in Business. He joined STEMchats because he is passionate about combatting STEM educational inequality and he hopes to help provide STEM opportunities to those from underserved communities. In his free time, he enjoys spending time outdoors, reading, participating in and organizing hackathons, and exploring new cultures, places, and foods."
  }, {
    name: "Anastasia Dunca",
    position: "Technology Coordinator",
    linkedIn: "anastasia-dunca-267a4b1a8/",
    home: "Salt Lake City, UT",
    team: "Technology",
    src: "AnastasiaDunca.jpg",
    bio: "Anastasia is a determined student who has a goal of eliminating the digital divide and educational disparity within minority communities around her. She attends West High School as a rising junior and is especially interested in computer science; she plans to major in that in college. Her reason for joining STEMchats is to work with a team that shares the same goal of achieving educational equity globally through providing opportunities in STEM in creative ways! In her free time, she loves to play tennis, watch Netflix, code, and get bubble tea with friends."
  }, {
    name: "Sabrina Chang",
    position: "Technology Coordinator",
    linkedIn: null,
    home: "Plainsboro, NJ",
    team: "Technology",
    src: "SabrinaChang.jpg",
    bio: "Sabrina is a rising Junior in high school from Princeton, New Jersey, and is passionate about computer science. She joined STEMchats to help provide opportunities and resources to minorities and underrepresented groups to encourage them to pursue careers in STEM. She aims to close the gender gap and broaden the demographics in STEM. Besides computer science, she loves playing tennis and lacrosse, skiing in the winters, and is a huge boba enthusiast! She also loves traveling and hopes to one day be able to visit Greece, Spain, and Thailand!"
  }, {
    name: "Arjun Bhamra",
    position: "Technology Coordinator",
    linkedIn: null,
    home: "Malvern, PA",
    team: "Technology",
    src: "ArjunBhamra.jpg",
    bio: "Arjun is an avid supporter of giving minority communities access to and experience with STEM topics, and is a rising highschool junior interested in Physics, Chemistry, and Computer Science. He joined STEMchats to help bring interesting STEM concepts and ideas that he enjoyed to the table for those who haven’t been exposed to it, and wants to support the teaching of STEM for all. Having lived in India and the US, he’s well equipped to understand the struggles of others. In his spare time, Arjun likes to cycle, read, and play videogames."
  }, {
    name: "Bianca Chan",
    position: "Blueprint Coordinator",
    linkedIn: "bianca-chan-1260071a7/",
    home: "Brooklyn, NY",
    team: "Blueprint",
    src: "BiancaChan.jpg",
    bio: "Bianca is a rising first-year student majoring in Neuroscience & Medical Anthropology at Case Western Reserve University in Ohio, Cleveland. She joined STEMchats to inspire and provide more opportunities in the STEM field for minorities and low income youths like her and hopes to mentor students in academic and college related work. Her parents are from Hong Kong and she hopes she can expand STEMchats to include more students from Hong Kong. In her free time, Bianca loves to go skiing, watch and listen to Kpop and Kdramas, and travel."
  }, {
    name: "April Zhang",
    position: "Blueprint Coordinator",
    linkedIn: "april-zhang-39922a13/",
    home: "Tucson, AZ",
    team: "Blueprint",
    src: "AprilZhang.jpg",
    bio: "April is an advocate for equitable opportunity and environmentalism. She is a freshman at University of California, Berkeley as an Electrical Engineering and Computer Science major. She joined STEMchats to help provide transformative and educational opportunities to low-income, underprivileged, minority students. A driven opponent of animal cruelty, April has been lacto-vegetarian for 6 years and counting. In her free time, she loves to practice piano, meditate with family, play tennis with friends, or be found with a large cup of rose-flavored boba tea."
  }, {
    name: "Audrey Vargas",
    position: "Blueprint Coordinator",
    linkedIn: null,
    home: "San Diego, CA",
    team: "Blueprint",
    src: "AudreyVargas.jpg",
    bio: "Audrey is an incoming first-year student at MIT where she intends to major in computational biology. She joined STEMchats to help make STEM opportunities more accessible to students coming from under-resourced communities. In her free time, Audrey enjoys being outdoors and spending time with her loved ones."
  }, {
    name: "Sakshi Garg",
    position: "Blueprint Coordinator",
    linkedIn: null,
    home: "Little Rock, AR",
    team: "Blueprint",
    src: "SakshiGarg.jpg",
    bio: "Sakshi is a rising freshman at Harvard College where she will be studying History & Science with a focus in Medicine & Society. She joined STEMchats to help address the racial, economic, and gender inequities that pervade STEM while making research more accessible to underrepresented youth. In her free time, Sakshi loves to cook, watch sitcoms, and go on road trips!"
  }, {
    name: "Isabel Ramos",
    position: "STEMlights Coordinator",
    linkedIn: null,
    home: "Los Angeles, CA",
    team: "STEMlights",
    src: "IsabelRamos.jpg",
    bio: "Isabel is a second generation Mexican-American who has recently decided to take a gap year but plans on enrolling at Pomona College in Claremont, California next year. Though somewhat undecided on her college major, she is interested in Cognitive Science, Biology, and Computer Science. She joined STEMchats because she recognized the vast inequities in STEM education within her own community and also wanted to raise awareness between the intersection of science and society. A fun fact about her is in elementary school she conducted an 'experiment' testing her hypothesis that energy drinks would make plants grow faster: spoiler they don't. Since then her love of science has only continued to grow."
  }, {
    name: "Amberley Martinez",
    position: "STEMlights Coordinator",
    linkedIn: null,
    home: "Irvine, CA",
    team: "STEMlights",
    src: "AmberleyMartinez.jpg",
    bio: "Amberley is an aspiring local activist and a rising senior at University High School. As a staff writer for a literary magazine and member of robotics, satellite, and aviation STEM teams, Amberley hopes to combine her love for science and the humanities as well as her passion for social justice so she can simultaneously expose technology to underrepresented students and use it to improve others' lives. In her free time, Amberley enjoys reading (and crying over) books, watching and creating films, playing soccer, exploring the night sky with a telescope, and debating with her conservative parents."
  }, {
    name: "Eric Bebenov",
    position: "STEMlights Coordinator",
    linkedIn: null,
    home: "Bolingbrook, IL",
    team: "STEMlights",
    src: "EricBebenov.jpg",
    bio: "Eric is a rising senior at Bolingbrook High School, IL, and is passionate and motivated to expand the presence of STEM in his school and community. Through STEMchats, he hopes to achieve these aspirations and help immerse others within STEM. Eric has had the opportunity to live in Bulgaria for over three years, which allowed him to experience a different viewpoint on academic equity, specifically surrounding the fields of STEM. In his leisure time, he enjoys surfing the web for any opportunities he could lay his hands on in addition to spending time outside and allowing his mind to digest."
  }, {
    name: "Faline Le",
    position: "STEMlights Coordinator",
    linkedIn: null,
    home: "Saigon, VN / Westminster, CA",
    team: "STEMlights",
    src: "FalineLe.jpg",
    bio: "Faline is a rising high school junior who is interested in pursuing a STEM related career. She is passionate about spreading STEM opportunities because she believes any person should be able to have the chance to explore STEM regardless of their background. In her free time, she enjoys watching Criminal Minds, walking her dog, and listening to podcasts or TedTalks."
  }, {
    name: "Tyler Vazquez",
    position: "STEMlights Coordinator",
    linkedIn: "tyler-vazquez-314a361b3/",
    home: "Colonie, NY",
    team: "STEMlights",
    src: "TylerVazquez.jpg",
    bio: "Tyler (he/they) is a rising senior at Colonie Central High School in Albany, New York. They are a program coordinator for the STEMLights Newsletter, curating the History x STEM section. He is passionate about theatrical direction, singing, medicine, and social justice."
  }, {
    name: "Dorcas Gadri",
    position: "STEMlights Coordinator",
    linkedIn: "dorcas-gadri-840683175/",
    home: "Jonesboro, GA",
    team: "STEMlights",
    src: "DorcasGadri.jpg",
    bio: "Dorcas is an advocate for climate action and is concerned about the impact of climate change on human health. She is an AP student at Elite Scholars Academy Magnet School and a part-time college student. As a minority and FGLI student, she believes that her voice is a powerful tool that can bring about positive change. She joined the STEMlights program to educate and empower underserved students in various communities to engage in STEM projects. Besides being a leader in a STEM-focused club at her high school, she loves spending quality time with her family, teaching in her church's children's department, traveling, and watching French movies."
  }, {
    name: "Iris Li",
    position: "STEMlights Coordinator",
    linkedIn: null,
    home: "Knoxville, TN",
    team: "STEMlights",
    src: "IrisLi.jpg",
    bio: "Iris is a rising senior dedicated in making the most of her high school experience. She joined STEMchats to find opportunities to talk to more people while learning about the various careers and disciplines in STEM. In particular, she helps in STEMlights in producing newsletters for many readers. She is a proud Asian-American and identifies as asexual. Iris aims towards a future career in aerospace engineering and enjoys playing video games in her free time."
  }, {
    name: "Karthik Iyer",
    position: "STEMchats Institute Coordinator",
    linkedIn: "karthik-raghu-iyer/",
    home: "Sunnyvale, CA",
    team: "STEMchats Institute",
    src: "KarthikIyer.jpg",
    bio: "Karthik is a strong proponent for creating equity within education, an aspiring data scientist, and is a rising senior at Fremont High School in Sunnyvale, California. He joined STEMchats in order to help bridge the gap in STEM education and work with a community of like-minded individuals. In his free time, he loves binge-watching Netflix, satisfying his love for chocolate, and looking up new places to travel."
  }, {
    name: "Sonali Joshi",
    position: "STEMchats Institute Coordinator",
    linkedIn: null,
    home: "Cerritos, CA",
    team: "STEMchats Institute",
    src: "SonaliJoshi.jpg",
    bio: "Sonali is a second year student at the University of San Francisco majoring in Biology. She joined STEMchats because it combined her love of science with her love of service, especially since the program works with underserved populations. Besides these passions, she loves dancing, binging the latest Netflix show, and spending time with friends and family."
  }, {
    name: "Estrella Popoca",
    position: "STEMchats Institute Coordinator",
    linkedIn: "Estrella-2021/",
    home: "Chicago, IL",
    team: "STEMchats Institute",
    src: "EstrellaPopoca.jpg",
    bio: "Estrella Popoca is currently a 12th grade student attending Proviso Math and Science Academy, and is an aspiring aerospace engineer and CS major! She joined STEMchats to be involved in the movement of providing STEM exposure to minorities, and her personal passion of encouraging women to join STEM and Tech fields. One of her main passions is leading her FRC Robotics Team as a Co-Captain, and working on outreach events in Chicago! Outside of school she loves to hang out with her robotics team, listen to music, and drink boba with her friends!"
  }, {
    name: "David Zhou",
    position: "STEMchats Institute Coordinator",
    linkedIn: "david-zhou-5a8162181/",
    home: "Chicago, IL",
    team: "STEMchats Institute",
    src: "DavidZhou.jpg",
    bio: "David is an aspiring activist and a rising sophomore majoring in Computer Engineering at the University of Illinois at Chicago. He joined STEMchats to advocate for STEM equity and give students of all backgrounds access to meaningful and impactful experiences within many STEM disciplines. As an FGLI student, David has always felt deeply connected with the fight for STEM equity. In his free time, David volunteers for the Sunrise Movement, plays video games, jogs, and sings."
  }, {
    name: "Maheen Mohammed",
    position: "STEMchats Institute Coordinator",
    linkedIn: null,
    home: "Bolingbrook, IL",
    team: "STEMchats Institute",
    src: "MaheenMohammed.jpg",
    bio: "Maheen is a rising senior at Bolingbrook high school interested in the intersection of technology and social good. She volunteers much of her time uplifting her local Muslim community. In school, she actively participates in her Model Un club and her dance club. Through STEMchats, Maheen hopes to inspire and spark interest in STEM in young students of the Chicago area. In her free time, you can find Maheen cuddling with her cat Lyla and cooking new recipes she finds."
  }, {
    name: "Swan Yee Aung",
    position: "United Engineers Coordinator",
    linkedIn: null,
    home: "Yangon, Burma",
    team: "United Engineers",
    src: "SwanYeeAung.jpg",
    bio: "Swanyee is a rising first year student at New York University, pursuing his passion in computer science and engineering. He joined STEMchats in hopes of teaching younger students more about STEM and how fun it can be. In his free time, Swanyee likes to read books, meditate, do martial arts, or spend time with his family."
  }, {
    name: "Ayo Bravo",
    position: "United Engineers Coordinator",
    linkedIn: "ayotzin-bravo/",
    home: "Salem, OR",
    team: "United Engineers",
    src: "AyoBravo.jpg",
    bio: "Ayotzin, better known as Ayo, is a first-year student at the University of Pennsylvania who enjoys giving back to the community and is always willing to take on challenges. When asked about why he joined STEMchats, his response was simple \"because I believe in their goals and I'd like to help make this organization's vision a reality\". Ayo enjoys playing and watching soccer, spending time with his loved ones, and expanding his culinary palate."
  }, {
    name: "Teddy Smith",
    position: "United Engineers Coordinator",
    linkedIn: null,
    home: "Stratford, CT",
    team: "United Engineers",
    src: "TeddySmith.jpg",
    bio: "Teddy Smith is an aspiring rocket scientist and current senior at St Joseph High School in Trumbull, Connecticut. He joined STEMchats so he could share his passion for engineering with others and inspire those with interests in STEM. In his spare time, he enjoys building and flying racing drones, RC airplanes, launching model rockets, and snowboarding."
  }, {
    name: "Amy Xi",
    position: "United Engineers Coordinator",
    linkedIn: null,
    home: "Philadelphia, PA",
    team: "United Engineers",
    src: "AmyXi.jpg",
    bio: "Amy is a rising second-year student studying Biology at New York University. She joined STEMchats in order to inspire others to have a passion for learning about STEM and using it to help others. When she's not doing STEM-related things, she's probably listening to music or watching and analyzing figure skating and artistic gymnastics."
  }, {
    name: "Sarah Young",
    position: "United Engineers Coordinator",
    linkedIn: "sarah-young-955b451a1/",
    home: "Philadelphia, PA",
    team: "United Engineers",
    src: "SarahYoung.jpg",
    bio: "Sarah is a freshman at Cornell University interested in Computer and Information Science. She is passionate about equitable education and programming. She joined STEMchats to help others develop knowledge in STEM and to share her passion for these fields. In her free time, Sarah enjoys traveling, trying new foods, and dancing."
  }, {
    name: "Emily Shang",
    position: "United Engineers Coordinator",
    linkedIn: "emily-shang-b70a351b3/",
    home: "Philadelphia, PA",
    team: "United Engineers",
    src: "EmilyShang.jpg",
    bio: "Emily is passionate about advocating for equitable access to resources and educational opportunities both locally and globally. She hails from the suburbs of Philadelphia and is a freshman at Yale University. At STEMchats, she hopes to aid in evening out available educational STEM opportunities which are highly clustered amongst people traditionally represented in STEM and promote a habit of curiosity in learning STEM. In her free time, Emily likes to listen to music, compete with her friends in the NYTimes mini crossword, and fence."
  }, {
    name: "Justin Yoo",
    position: "United Engineers Coordinator",
    linkedIn: null,
    home: "East Rutherford, NJ",
    team: "United Engineers",
    src: "JustinYoo.jpg",
    bio: "Justin is a rising junior at the Bergen County Academies and is constantly striving for opportunities within STEM. He is a proud Korean and is trying to encourage those with minority backgrounds to pursue their passions, especially inside the engineering field. In his free time, he loves to play the guitar, watch or play sports such as football and basketball, and nap with his dog. "
  }, {
    name: "Kiara Ortiz",
    position: "United Engineers Coordinator",
    linkedIn: "kiara-ortiz/",
    home: "Bronx, NY",
    team: "United Engineers",
    src: "KiaraOrtiz.jpg",
    bio: "Kiara is a rising freshman at Dartmouth College, aspiring to study Neuroscience and Public Policy. She is passionate about combating healthcare and education inequalities. She was a delegate at the 2018 Y20 summit, advocating for the Sustainable Development Goals. She has also conducted neuroscience research at Rockefeller University and mental health research at Baruch college. Through STEMchats, she aims to help create methods to promote accessibility to STEM education and open opportunities to deserving students. In her free time, Kiara likes to read sci-fi and create STEM raps."
  }, {
    name: "Carson Bohl",
    position: "i-STEM Scholars Coordinator",
    linkedIn: null,
    home: "Lake Tapps, WA",
    team: "i-STEM Scholars",
    src: "CarsonBohl.jpg",
    bio: "Carson is a rising second-year student at Emory University pursuing degrees in Chemistry and Global Health. He plans on pursuing a research career in public health, where he wants to study how education, mental health, and socioeconomic environments impact adolescent development. He is an activist for equity and wants to encourage all students to feel empowered to pursue their dreams. He joined STEMchats to provide students of all backgrounds with the educational resources to make a positive difference in this world. In his free time, he enjoys exploring new restaurants, taking pictures, reading books, and playing basketball."
  }, {
    name: "Angela Easterling",
    position: "i-STEM Scholars Coordinator",
    linkedIn: null,
    home: "Melbourne, FL",
    team: "i-STEM Scholars",
    src: "AngelaEasterling.jpg",
    bio: "Angela is a passionate neuroscience \"interdisciplinary\" researcher and is a rising second-year student at the Harriet L. Wilkes Honors College in Jupiter, Florida. She joined STEMchats because as a former high school student, she experienced first-hand stem inequities in both her education and the opportunities she was able to pursue due to geographic and economic barriers. She is passionate about inclusivity and mentorship in STEM, encouraging undergraduate student research and volunteer involvement in her college community.  In her free time, she enjoys listening to lofi and podcasts, meeting new people and learning about new things, and yes, drinking tea."
  }, {
    name: "Daniel Low",
    position: "i-STEM Scholars Coordinator",
    linkedIn: null,
    home: "Marion, IA",
    team: "i-STEM Scholars",
    src: "DanielLow.jpg",
    bio: "Daniel is a rising third-year student at Centre College in Danville, Kentucky, pursuing a major in biochemistry and a minor in anthropology. He joined STEMchats to work towards reducing the disparity in quality of education for students of particular demographic groups. In his free time, Daniel enjoys exploring new artists on Spotify, playing the cello, hitting the tennis courts, and the occasional backwoods excursion."
  }, {
    name: "Grace Pluemacher",
    position: "i-STEM Scholars Coordinator",
    linkedIn: "grace-pluemacher-42aa96186/",
    home: "Point Pleasant Beach, NJ",
    team: "i-STEM Scholars",
    src: "GracePluemacher.jpg",
    bio: "Grace is a passionate researcher and an advocate for equitable STEM opportunities. She is a rising freshman at Fordham University studying Engineering Physics in the Bronx. She joined STEMchats to join a driven community working to change the world of STEM. Grace specifically strives to intersect her passion of service and research, in which she creates technologies for those with physical disabilities to assist in everyday life. In her free time, she loves meeting new people, surfing, hanging with friends, and playing all kinds of sports."
  }, {
    name: "Sophia Lin",
    position: "i-STEM Scholars Coordinator",
    linkedIn: "sophiajlin/",
    home: "Boston, MA",
    team: "i-STEM Scholars",
    src: "SophiaLin.jpg",
    bio: "Sophia is a rising freshman at the University of Pennsylvania who is passionate about advocacy, healthcare, and social justice. While undecided about her major, she is interested in computer science, cognitive science, and public health. Sophia joined STEMchats to utilize her interests in science to help connect underserved students to enriching opportunities in STEM. In her free time, Sophia enjoys running, swimming, playing the piano, and discovering new music!"
  }, {
    name: "Sophia Tran",
    position: "i-STEM Scholars Coordinator",
    linkedIn: "sophia-tran-6670611b1/",
    home: "San Jose, CA",
    team: "i-STEM Scholars",
    src: "SophiaTran.jpg",
    bio: "Sophia is a rising sophomore majoring in neuroscience at UCLA. She is passionate about humanitarian aid and biomedical research, driven to help the disadvantaged in communities worldwide. She joined STEMchats to help disadvantaged STEM students achieve their aspirations, knowing first-hand how challenging the obstacles in the education system can be for FGLI and underrepresented students. In her free time, Sophia enjoys painting, playing with her dogs, making iced lattes, and spending time with friends and family."
  }, {
    name: "Vijeta Revankar",
    position: "i-STEM Scholars Coordinator",
    linkedIn: "vijeta-revankar/",
    home: "Seabrook, TX",
    team: "i-STEM Scholars",
    src: "VijetaRevankar.jpg",
    bio: "Vijeta Revankar is a rising sophomore at the University of Houston that is majoring in Business Administration on a pre-med track. Having worked with organizations like Codeucate and STEMchats, she is passionate about increasing the diversity within the STEM field by empowering students with the tools they need to pursue their desired career path. As a proud Indian American, Vijeta aspires to attend medical school in Texas and become a physician in the Houston area. In her free time, Vijeta enjoys programming, learning new languages, and listening to political podcasts. "
  }, {
    name: "Sneha Jaikumar",
    position: "i-STEM Scholars Coordinator",
    linkedIn: "sneha-jaikumar/",
    home: "Charlotte, NC",
    team: "i-STEM Scholars",
    src: "SnehaJaikumar.jpg",
    bio: "Sneha is a second year student at the University of North Carolina at Chapel Hill majoring in Computer Science. She joined STEMchats to encourage underrepresented students to pursue a STEM education and engage in research opportunities through impactful and immersive programs. Sneha is passionate about uplifting minorities in computer science, peer mentoring, and research. She enjoys traveling, listening to music, and dancing."
  }
];

//load all at onload
window.onload = createMembers(membersObj);
window.onload = animateOnload();
