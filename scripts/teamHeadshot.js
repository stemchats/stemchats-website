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
	bio: "Joseph is an aspiring computer scientist and a rising college freshman in Canada. He joined STEMchats to support and prepare the next and current generation, especially low-income students, for impactful real world opportunities through immersive and relevant programs in STEM. When he is not learning about technology, he enjoys playing chess, writing poetry, and chilling to lofi beats."
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
	name: "Nikitha Sam",
	position: "Marketing Lead",
	linkedIn: "nikithasam/",
	home: "Collierville, TN",
	team: "Marketing",
	src: "NikithaSam.jpg",
	bio: "Nikitha is a dedicated advocate of social justice and a senior at Collierville High School. She joined STEMchats to help to promote a diverse and healthy environment where students from all backgrounds can learn the beauty of STEM and its intersections with creative fields. Outside of STEMchats, she is involved with robotics, theatre set production and various model government programs. In her free time, she likes to read fantasy novels, watch sci-fi shows, play piano and build her stationery collection."
}, {
	name: "Chloe Kim",
	position: "STEMlights Lead",
	linkedIn: "chloe-kim-8a158919a/",
	home: "Las Vegas, NV",
	team: ["STEMlights", "Speaker Series"],
	src: "ChloeKim.jpg",
	bio: "Chloe is a dedicated proponent of equity in healthcare and is a rising senior at Ed W Clark High School in Las Vegas, Nevada, working to pursue a career in public health. She joined STEMchats to help support other students and break the glass ceiling that prevents many historically disadvantaged groups from receiving opportunities in STEM. In her free time, she loves to listen/create music, philosophize, and chill with her friends and family."
}, {
	name: "Marian Caballo",
	position: "STEMlights Lead",
	linkedIn: null,
	home: "Queens, NY",
	team: "STEMlights",
	src: "MarianCaballo.jpg",
	bio: "Marian, a rising junior from Queens, New York, is both a science and writing aficionado. She joined STEMchats to help bridge the gaps in STEM and increase accessibility for underrepresented youth. Outside of STEMchats, Marian enjoys writing, watching sci-fi movies, taking dance classes, and working as an Explainer at the New York Hall of Science."
}, {
	name: "Alexej Latimer",
	position: "STEMchats Institute Lead",
	linkedIn: "alexejlatimer/",
	home: "Sumner, WA",
	team: "STEMchats Institute",
	src: "AlexejLatimer.jpg",
	bio: "Alexej is an enthusiastic high school senior with big ideas for education and social reform to increase the quality of life for all world citizens. He enjoys running a digital media lab that focuses on teaching elementary and middle schoolers about technology and bridges the gap between STEM and artistic expression. He’s excited to use STEM to improve the living conditions for people all around the world and while also helping provide educational resources for unrepresented peoples. In his free time, he can be found developing film, exploring (with a camera), spending too much time at coffee or boba cafés, or riding his bike dangerously fast."
}, {
	name: "Ege Yalcindag",
	position: "STEMchats Institute Lead",
	linkedIn: "selin-yalcindag-13bb80164/",
	home: "Boston, MA",
	team: "STEMchats Institute",
	src: "EgeYalcindag.jpg",
	bio: "Ege is a second-year at the University of Chicago pursuing a Biological Sciences major and French minor. She joined STEMchats because she hopes to make an impact on underrepresented groups in science, especially women. Outside of STEMchats, she is the Creative Director of her a cappella group, works in a neuroscience lab, tutors high school students, and volunteers with inpatient children at the hospital. In her free time, she enjoys drinking tea, painting, and listening to podcasts."
}, {
	name: "Maxximo Ibarra",
	position: "STEMchats Institute Lead",
	linkedIn: null,
	home: "Oklahoma City, OK",
	team: "STEMchats Institute",
	src: "MaxximoIbarra.jpg",
	bio: "Maxx is a rising sophomore studying applied physics at the California Institute of Technology in Pasadena, California. Maxx is a Questbridge college match scholar who is very interested in contributing to a culture of excellence in STEM, and by joining STEMchats he hopes to offer a helping hand to his first-generation or low income peers. Maxx comes from a family with Mexican, White, and Choctaw heritage and hopes to help other minorities gain access to advanced programs in STEM. When he isn't working for educational equity, Maxx likes to play bass guitar, work with wood or other building media, or experiment with CAD and additive manufacturing techniques."
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
	bio: "Abigail is a scientist, activist, and a rising second-year student at Caltech studying Materials Science with a focus on Physics. She joined STEMchats to create tangible community impact and empower youth, specifically by providing quality educational opportunities alongside personal mentorship. She is passionate about scientific research, peer mental health advising, and sustainable living. In her free time, she loves hiking, photographing the world, and exploring museums."
}, {
	name: "Hana Memon",
	position: "Blueprint Lead",
	linkedIn: "hanamemon/",
	home: "Yardley, PA",
	team: "Blueprint",
	src: "HanaMemon.jpg",
	bio: "Hana is a rising freshman at the College of New Jersey where she plans to study Computer Science, Business, and Arabic. Hana actively uses her technical skills to empower marginalized communities through technology. Hana first joined STEMchats to give FGLI students a platform to creatively express their scientific interests. Outside of STEMchats, Hana is involved with various other student run nonprofits dedicated towards making the tech industry more inclusive. In her free time, you can find Hana drinking iced coffee and discovering new music on Spotify."
}, {
	name: "Anusha Puri",
	position: "Blueprint Lead",
	linkedIn: "anusha-p-04bb59190/",
	home: "Richmond, VA",
	team: "Blueprint",
	src: "AnushaPuri.jpg",
	bio: "Anusha is a driven researcher and rising first-year student at the Massachusetts Institute of Technology majoring in Biological Engineering. She joined STEMchats to help others discover the potential of research and to further conversation on real-world scientific issues and their solutions. In her free time, she enjoys playing the piano, writing comedy, and doing trivia."
}, {
	name: "Manvir Bhandal",
	position: "Internal Development Lead",
	linkedIn: null,
	home: "Astoria, NY",
	team: "Development",
	src: "ManvirBhandal.jpg",
	bio: "Manvir is a passionate researcher/entrepreneur and a rising first-year  student majoring in Biochemistry at Columbia University in NYC and a graduating senior at the Bronx High School of Science in the Bronx, NY. He joined STEMchats to help provide underprivileged students, such as low income, first generation youth, with more opportunities in STEM and to help connect the STEM world with underrepresented groups. In his free time, he enjoys conducting scientific research, buying and reselling streetwear, and playing basketball."
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
	bio: "Katrina is a graphic designer and rising second-year computer science student attending California State University in Long Beach, California. She joined STEMchats to have an active role in pushing for equitable education while engaging her love for STEM. In her free time, she loves to bullet journal, go to concerts, and embark on foodie adventures around the city."
}, {
	name: "Kanokwan Tungkitkancharoen",
	position: "Senior Advisor",
	linkedIn: "kanotung/",
	home: "Las Vegas, NV",
	team: "Senior Advisors",
	src: "KanokwanTungkitkancharoen.jpg",
	bio: "Kanokwan is an avid maker and a rising 1st-year mechanical engineering student attending the Massachusetts Institute of Technology. She joined STEMchats to be proactive in the fight for social equity for low-income minority students, such as herself. On the usual, you can find her meditating, eating Thai red chili peppers, or on the hunt for writing nooks in the city."
},
//coords
{
	name: "Vivienne Nguyen",
	position: "Marketing Coordinator",
	linkedIn: "vivienne-nguyen-7703b6163/",
	home: "Las Vegas, NV",
	team: "Marketing",
	src: "VivienneNguyen.jpg",
	bio: "Vivienne is a passionate entrepreneur and rising second-year student majoring in Business Administration at the University of Nevada, Las Vegas. She was eager to join STEMchats because she believes in its mission and wants to use her marketing experience to help expand it to the next level! In her spare time, she enjoys taking photos, traveling, and spending time with friends."
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
	bio: "Caitlyn is an advocate for those underrepresented in fields such as STEM, she believes in equitable education for all and joined STEMchats to help break down barriers in STEM for youth in underserved communities. She is a rising junior at North Creek High School in Bothell, Washington and competes in business competitions through DECA, teaches environmental science to elementary students in association with the Lake Washington Watershed Internship Program, and empowers young women to achieve their own version of success. In her free time, Caitlyn enjoys spending time with friends and family, trying new foods, finding new movies to watch, and drinking boba."
}, {
	name: "Abby Liang",
	position: "Marketing Coordinator",
	linkedIn: "abby-liang/",
	home: "Troy, MI",
	team: "Marketing",
	src: "AbbyLiang.jpg",
	bio: "Abby is passionate about technology, education, and design. She is driven by the ways that technology can integrate with other fields, valuing the creativity in STEM. She loves the way technology can be used for social good and how she can use her skills to make an impact. She joined STEMchats seeing the importance of STEM and how everyone deserves access to immersive STEM programming. In her free time, she enjoys watching Netflix, designing, and eating ice cream."
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
	name: "Téa Chapman",
	position: "Funding Coordinator",
	linkedIn: null,
	home: "Seattle, WA",
	team: "Funding",
	src: "TeaChapman.jpg",
	bio: "Téa is a rising Junior at Arizona State University! She is majoring in biochemistry with a background in behavioral neuroscience. She joined STEMchats to help POC students like herself create opportunities to find their passion for science. She is a proud Seattleite that aspires to do research in mental health in the future. She is creative at heart, so when she's not in the research lab she's cooking, crafting, or trying something new. She is excited to join STEMchats to help young minds believe in themselves and the gifts they have to offer to the STEM community."
}, {
	name: "Audrey Chu",
	position: "Funding Coordinator",
	linkedIn: null,
	home: "New York City, NY",
	team: "Funding",
	src: "AudreyChu.jpg",
	bio: "Audrey is a sophomore at Brooklyn Technical High School in New York with a strong interest in STEM. She joined STEMchats because she supports its mission and hopes to help make STEM educational opportunities accessible to students from underrepresented and underserved communities. In her free time, Audrey enjoys sewing her designs, playing cards, baking, and going on long walks with her dog. "
}, {
	name: "Zainab AlRamlawi",
	position: "External Development Coordinator",
	linkedIn: "zainab-al-ramlawi-25201a12b/",
	home: "Gaza, Palestine",
	team: ["Development", "Speaker Series"],
	src: "ZainabAlRamlawi.jpg",
	bio: "Zainab is a youth advocate and a rising third-year student majoring in business administration. Zainab has taken part in many leadership positions and run many initiatives & campaigns to empower youth in education, STEM, and entrepreneurship fields. She joined STEMchats because she believes in its mission and wants to empower more people to pursue their career in STEM fields, especially the one who is living in the underserved communities. In her free time, she enjoys watching movies, reading books, and debating."
}, {
	name: "Sristi Palimar",
	position: "External Development Coordinator",
	linkedIn: "sristi-palimar-238397188/",
	home: "Irvine, CA",
	team: ["Development", "Speaker Series"],
	src: "SristiPalimar.jpg",
	bio: "Sristi is a rising senior at Woodbridge High School in southern California. As an ally to underrepresented minorities, Sristi strives to uplift marginalized youth in her community. She strongly believes that all students deserve the opportunity to extend their learning outside of the classroom, and is committed to supporting those who lack the resources to fulfill their educational potential. Sristi joined STEMchats to broaden the scope of her advocacy, and support underserved students in pursuing STEM opportunities across the nation. She hopes that her impact will inspire young women of color to find confidence in challenging adversity. In her free time, Sristi enjoys volunteering, painting, journaling, and trying new foods!"
},
{	name: "Sai Hruthika Naraharisetti",
	position: "External Development Coordinator",
	linkedIn: "sai-h-naraharisetti-5a2084195/",
	home: "Woodstock, MD",
	team: "Development",
	src: "SaiNaraharisetti.jpg",
	bio: "Sai is currently a student at Marriotts Ridge High School. She didn’t consider computer science as a career at first. She wanted to pursue a career where she would have a positive impact on the world and its people. Her freshman year, she took both AP Computer Science Principles and Principals of Java Programming GT. After taking these courses, she felt a new love for computer science that she did not feel for any other field. She is currently a member of an FTC Robotics team that has qualified for the 2020 World Championship in both Maryland and Virginia. She is currently a research intern at the University of Maryland (UMD) where she works on the secure public key infrastructure project. She also partook in a research project with a computer science professor at the University of Maryland and his team of a few other Ph.D. and Master’s students her sophomore year. She aided in the research of the linkage between abnormal breathing patterns and certain respiratory and cardiovascular health conditions. Additionally, she is a co-president of the Model UN club in her school and actively participates in the Future Business Leaders of America (FBLA) club. She has taken AP Computer Science- A her sophomore year to expand her knowledge in Java and is currently taking Advanced Data Structures. Having pursued these courses, she is on the path to completing the Computer Programming Academy. She intends to complete this academy, hoping to major in computer science, with a strong foundation of the fundamentals."
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
	bio: "Anika is a rising sophomore at Lower Merion High School with a passion for STEM. She joined STEMchats to be able to help others explore their own love for STEM without having to worry about potential barriers preventing them from achieving their goals. In her free time, Anika can be seen playing her viola, practicing calligraphy, watching birds, painting, and taking photos."
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
	name: "Lauryne Assa",
	position: "Technology Coordinator",
	linkedIn: 'lauryne-assa/',
	home: "Nice, FR",
	team: "Technology",
	src: "LauryneAssa.JPG",
	bio: "Lauryne is motivated student interested in all things technology. Whether it's graphic design, video production or programming she loves creating. Looking to pursue an education in computer science & business and further along a career in data science. She joined STEMchats because she was exposed to technology thanks to an organization with similar goals and wants to give back by helping youths that are in the same position she was in. In her free time you can find her reading a thriller book, watching TV shows, baking or working out!"
}, {
	name: "Hannah Zhang",
	position: "Technology Coordinator",
	linkedIn: null,
	home: "Tucson, AZ",
	team: "Technology",
	src: "HannahZhang.JPG",
	bio: "Hannah is a high school junior in Tucson, Arizona. With a passion for computer science and climate change activism, she joined STEMchats because she believes in equity for underrepresented, low-income groups. She hopes to provide passionate, capable students with equal opportunities in the STEM field. In her free time, she likes to meet with friends, write poetry, and play with her dogs."
}, {
	name: "Estrella Popoca",
	position: "Technology Coordinator",
	linkedIn: "Estrella-2021/",
	home: "Chicago, IL",
	team: "Technology",
	src: "EstrellaPopoca.jpg",
	bio: "Estrella Popoca is currently a 12th grade student attending Proviso Math and Science Academy, and is an aspiring aerospace engineer and CS major! She joined STEMchats to be involved in the movement of providing STEM exposure to minorities, and her personal passion of encouraging women to join STEM and Tech fields. One of her main passions is leading her FRC Robotics Team as a Co-Captain, and working on outreach events in Chicago! Outside of school she loves to hang out with her robotics team, listen to music, and drink boba with her friends!"
}, {
	name: "Bianca Chan",
	position: "Blueprint Coordinator",
	linkedIn: "bianca-chan-1260071a7/",
	home: "Brooklyn, NY",
	team: "Blueprint",
	src: "BiancaChan.jpg",
	bio: "Bianca is a rising high school senior at Brooklyn Technical High School, NY. She joined STEMchats to inspire and provide more opportunities in the STEM field for minorities and low income youths like her. In her free time she enjoys skiing, drawing, and traveling around NYC."
}, {
	name: "Gina Lee",
	position: "Blueprint Coordinator",
	linkedIn: null,
	home: "Great Neck, NY",
	team: "Blueprint",
	src: "GinaLee.jpg",
	bio: "Gina is an advocate for equal educational opportunity and is a rising senior at Great Neck South High School. She joined STEMchats because she wants to inspire students from underrepresented backgrounds to discover their passion in STEM. She hopes to help make research in the STEM fields attainable for everyone. In her free time, Gina likes baking sweets, fencing, and relaxing at coffee shops."
}, {
	name: "April Zhang",
	position: "Blueprint Coordinator",
	linkedIn: "april-zhang-39922a13/",
	home: "Tucson, AZ",
	team: "Blueprint",
	src: "AprilZhang.jpg",
	bio: "April is an advocate for equitable opportunity and environmentalism. She is a senior at BASIS Oro Valley in Arizona and aspires to be a biomedical sciences and CS double major. She joined STEMchats to help provide transformative and educational opportunities to low-income, underprivileged, minority students. A driven opponent of animal cruelty, April has been lacto-vegetarian for 6 years and counting. In her free time, she loves to practice piano, meditate with family, play tennis with friends, or be found with a large cup of rose-flavored boba tea."
}, {
	name: "Audrey Vargas",
	position: "Blueprint Coordinator",
	linkedIn: null,
	home: "San Diego, CA",
	team: "Blueprint",
	src: "AudreyVargas.jpg",
	bio: "Audrey is a proud Latinx senior from Sweetwater High School in San Diego, California. She is involved in her school's varsity Cross Country and Quiz Bowl teams, participates in science fairs, and spends her time outside of school volunteering for the American Red Cross and as a tutor for elementary school students. She joined STEMchats with a vision to spread its mission to younger students, especially for those from under-resourced communities. Audrey typically spends her free time going out for a long run, listening to music, reading anything she gets her hands on, and annoying her family."
}, {
	name: "Sakshi Garg",
	position: "Blueprint Coordinator",
	linkedIn: null,
	home: "Little Rock, AR",
	team: "Blueprint",
	src: "SakshiGarg.jpg",
	bio: "Sakshi is a rising freshman at Harvard College where she will be studying History & Science with a focus in Medicine & Society. She joined STEMchats to help address the racial, economic, and gender inequities that pervade STEM while making research more accessible to underrepresented youth. In her free time, Sakshi loves to cook, watch sitcoms, and go on road trips!"
}, {
	name: "Sekinat Aliu",
	position: "STEMlights Coordinator",
	linkedIn: "sekinat-aliu-748aba16b/",
	home: "Los Angeles, CA",
	team: "STEMlights",
	src: "SekinatAliu.jpg",
	bio: "Sekinat is an experienced journalist and techie who attends Chadwick School in California. She looks forward to making the most of opportunities to work with both journalism and STEM with the STEMlights team. In her free time, Sekinat enjoys making digital art, folding origami, and learning more about innovative STEM research. She will be attending Princeton University in the fall as a potential electrical engineering major. "
}, {
	name: "Lauren Chong",
	position: "STEMlights Coordinator",
	linkedIn: "lauren-chong-792648163/",
	home: "Irvine, CA",
	team: "STEMlights",
	src: "LaurenChong.jpg",
	bio: "Lauren is a senior at Woodbridge High School in California. She joined STEMchats because it was the perfect opportunity to combine her love for publications and goal of increasing opportunities for underserved students. In her free time, she enjoys playing with her rabbit, bullet journaling, and sleeping."
}, {
	name: "Isabel Ramos",
	position: "STEMlights Coordinator",
	linkedIn: null,
	home: "Los Angeles, CA",
	team: "STEMlights",
	src: "IsabelRamos.jpg",
	bio: "Isabel is a second generation Mexican-American who has recently decided to take a gap year but plans on enrolling at Pomona College in Claremont, California next year. Though somewhat undecided on her college major, she is interested in Cognitive Science, Biology, and Computer Science. She joined STEMchats because she recognized the vast inequities in STEM education within her own community and also wanted to raise awareness between the intersection of science and society. A fun fact about her is in elementary school she conducted an 'experiment' testing her hypothesis that energy drinks would make plants grow faster: spoiler they don't. Since then her love of science has only continued to grow."
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
	bio: "Tyler is honored to be an intern for STEMchats! He is a rising junior at Colonie Central High School in Upstate New York, participating in his community through his school's Black Lives Advocacy Club (Co-President and Founder) Drama Club, STEM Club (VP), Global Diversity Club (Secretary), and the Mental Health Awareness Club (Co-President). He also takes part in securing renewable energy resources for upstate New Yorkers through Common Energy as well as directing a student-run Shakespearean theatrical company. He hopes that via STEMchats he'll share his passion for STEM in an intersectional lens."
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
	bio: "Iris is a rising junior at Hardin Valley Academy, aspiring to make the world a better place tomorrow. She joined STEMchats to spread knowledge to others who may not have the same opportunities as others in hopes of inspiring them to become fascinated in the STEM fields. She is proudly part of the LGBTQIA+ community and wants to bring more representation to STEM in the community and to bring more of the community into STEM. In her free time, she likes to draw rocket ships and play video games."
}, {
	name: "Collins Kariuki",
	position: "STEMlights Coordinator",
	linkedIn: "collins-kariuki-b2b88a1aa/",
	home: "Nairobi, KE",
	team: "STEMlights",
	src: "CollinsKariuki.jpg",
	bio: "Collins is an ardent advocate for scientific advancements. He's a freshman at Pomona College, planning to double major in Physics and Cognitive Science. He joined STEMChats to expose students from disadvantaged upbringings with opportunities abroad, thus acting as a link to both worlds. Collins aspires to find the intersectionality between Cognition and Physics to help underrepresented African students excel in STEM. Proud of his heritage, he seeks to mentor kids back in Kenya with skills they need to develop their areas at the grassroots level. Collins loves playing soccer, getting stuck in Wikipedia rabbit holes, and STEM Research."
},
{
	name: "Sue Yim",
	position: "STEMlights Coordinator",
	linkedIn: null,
	home: "Baltimore, MD",
	team: "STEMlights",
	src: "SueYim.JPG",
	bio: "Sue is a rising junior at the Bryn Mawr School in Baltimore, MD. She joined STEMchats to learn more and expand her knowledge on STEM while also getting the opportunity to teach those who are underrepresented in the field. She is also passionate about social justice, equity, and learning. In her free time, Sue enjoys playing sports (field hockey and lacrosse), reading, listening to music, and watching Netflix."
},
{
	name: "Dyllan Eslava",
	position: "STEMlights Coordinator",
	linkedIn: "dyllan-eslava-1185a4217/",
	team: "STEMlights",
	home: "Las Vegas, NV",
	src: "DyllanEslava.JPG",
	bio: "Dyllan is a rising senior at Clark High School in Las Vegas, Nevada. He enjoys running, problem solving, playing cello, and traveling. Dyllan joined STEMchats because he is fascinated by the world of STEM. The history and new discoveries in STEM never ceases to amaze Dyllan and he wants others to see the world of STEM through his eyes."
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
	name: "Bianca Luansing",
	position: "STEMchats Institute Coordinator",
	linkedIn: "bluansing/",
	home: "San Diego, CA",
	team: ["STEMchats Institute", "Speaker Series"],
	src: "BiancaMoniqueLuansing.jpg",
	bio: "Bianca is a rising third-year undergraduate at the University of California, Berkeley studying Physics, Astrophysics, and South and Southeast Asian Studies. She joined STEMchats to serve as a mentor for students who identify as low-income, first-generation, minorities and are experiencing a lack of STEM resources, just as she did. In her free time you can find her listening to podcasts, learning new languages, reading in coffee and tea shops, and learning about start-ups from around the world."
}, {
	name: "Isabella Siu",
	position: "STEMchats Institute Coordinator",
	linkedIn: "isabellasiu/",
	home: "Castro Valley, CA",
	team: "STEMchats Institute",
	src: "IsabellaSiu.jpg",
	bio: "Isabella is a senior at Castro Valley High School in California interested in education policy, user interaction, and cognitive science. She enjoys teaching competitive mathematics to middle school students and helping local youth reach new heights in STEM outside of the classroom. Isabella joined STEMchats to advance educational equity and be part of a lively team of innovators, entrepreneurs, and community leaders. In her spare time, she enjoys going wild in Adobe Lightroom, finding good lofi tracks, and poaching eggs."
}, {
	name: "David Zhou",
	position: "STEMchats Institute Coordinator",
	linkedIn: "david-zhou-5a8162181/",
	home: "Chicago, IL",
	team: "STEMchats Institute",
	src: "DavidZhou.jpg",
	bio: "David is an aspiring engineer and a graduating senior at Northside College Prep in Chicago, Illinois. He will be attending University of Illinois at Chicago in the fall to study computer engineering. He joined STEMchats because, as a first generation low income student, he wanted to make STEM opportunities and activities become accessible for everyone, especially low income students. In his free time, he enjoys playing video games, singing, and photography."
}, {
	name: "Natalie Zhou",
	position: "STEMchats Institute Coordinator",
	linkedIn: null,
	home: "Cupertino, CA",
	team: "STEMchats Institute",
	src: "NatalieZhou.jpg",
	bio: "Natalie is a junior at Monta Vista High School in California pursuing computer engineering and data science. She joined STEMchats as a Program Coordinator because she hopes to combine her personal passion for STEM and teaching and bring opportunities to disadvantaged students who have an interest in pursuing STEM. In her free time, Natalie enjoys dancing to K-pop and hip-hop choreographies, playing the violin, and spending time with her cat."
}, {
	name: "Maheen Mohammed",
	position: "STEMchats Institute Coordinator",
	linkedIn: null,
	home: "Bolingbrook, IL",
	team: "STEMchats Institute",
	src: "MaheenMohammed.jpg",
	bio: "Maheen is a rising senior at Bolingbrook high school interested in the intersection of technology and social good. She volunteers much of her time uplifting her local Muslim community. In school, she actively participates in her Model Un club and her dance club. Through STEMchats, Maheen hopes to inspire and spark interest in STEM in young students of the Chicago area. In her free time, you can find Maheen cuddling with her cat Lyla and cooking new recipes she finds."
}, {
	name: "Alyssa Blanco",
	position: "STEMchats Institute Coordinator",
	linkedIn: null,
	home: "Ontario, CA",
	team: "STEMchats Institute",
	src: "AlyssaBlanco.jpg",
	bio: "Alyssa is a passionate high school senior from Southern California interested in Biochemistry and Molecular Biology. She joined STEMchats to make an effort in the battle of making the world of education more equitable for low income, first generation students. Coming from a FGLI background herself, she strives to make any and every positive impact in her fellow FGLI community through volunteer work, community outreach, and various educational programs. In her spare time, Alyssa enjoys running, playing basketball, watching Avatar: The Last Airbender, and stressing over College Apps."
}, {
	name: "Karla Gonzalez",
	position: "STEMchats Institute Coordinator",
	linkedIn: "karla-gonzalez-a378841b2/",
	home: "San Diego, CA",
	team: "STEMchats Institute",
	src: "KarlaGonzalez.jpg",
	bio: "Karla is a hardworking Latina and is a rising senior at University City High School in San Diego, California. She joined STEMchats to help break educational barriers in STEM for low-income and minority students as she has faced these challenges herself. She believes everyone, no matter their ethnicity/culture/background, should have an equal opportunity to attain quality education. During her free time, she loves hanging out with friends and family, watching Netflix, listening to music, eating, and playing the violin."
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
	bio: "Sarah is a rising senior at Methacton High School. She is passionate about equitable education and programming. She joined STEMchats to help others develop knowledge in STEM and to share her passion for these fields.  In her free time, Sarah enjoys learning, trying new foods, and dancing."
}, {
	name: "Emily Shang",
	position: "United Engineers Coordinator",
	linkedIn: null,
	home: "Philadelphia, PA",
	team: "United Engineers",
	src: "EmilyShang.jpg",
	bio: "Emily is passionate about advocating for equitable access to resources and educational opportunities both locally and globally. She is a rising senior at Lower Merion High School in the suburbs of Philadelphia. At STEMchats, she hopes to aid in evening out available educational STEM opportunities which are highly clustered amongst people traditionally represented in STEM and promote a habit of curiosity in learning STEM. In her free time, Emily likes to listen to music, compete with her friends in the NYTimes mini crossword, and fence."
}, {
	name: "Justin Yoo",
	position: "United Engineers Coordinator",
	linkedIn: null,
	home: "East Rutherford, NJ",
	team: "United Engineers",
	src: "JustinYoo.jpg",
	bio: "Justin is a rising sophomore in the Engineering Academy at Bergen County Academies and is passionate about anything related with STEM. He joined STEMchats in order to pursue his passion in this field and to open up opportunities for low-income, minority students. He is Korean and is constantly trying to share his culture with others. During his free time, Justin loves to go on runs in the morning, play guitar and basketball, and watch movies with friends."
},
{
	name: "Elaine Viloria",
	position: "United Engineers Coordinator",
	linkedIn: 'elaineviloria/',
	home: "San Jose, CA",
	team: "United Engineers",
	src: "ElaineViloria.JPG",
	bio: "Elaine is a rising second-year at UC Berkeley intending to major in environmental science and minor in materials science and engineering. She is passionate about creating a sustainable lifestyle that is more accessible to disadvantaged communities. She is heavily influenced by her own East Side San Jose community and Filipinx identity. Elaine joined STEMchats to foster her love for science and social justice and to support students like her that are exploring their interests in STEM fields. In her free time, she loves traveling, watching Parks and Rec, and spending time with her loved ones."
},
{
	name: "Michelle Lee",
	position: "United Engineers Coordinator",
	linkedIn: null,
	home: "Westminster, CA",
	team: "United Engineers",
	src: "MichelleLee.JPG",
	bio: "Michelle is a rising senior at Westminster High School and is passionate about increasing the number of opportunities there are in the STEM field for less fortunate children. She believes that everyone should have a chance in trying their hand in the STEM field regardless of backgrounds. With STEMchats, she hopes to develop more accessible opportunities for communities that may not have a strong STEM background. In her free time, Michelle enjoys listening to music, spending time with friends and family, along with assembling figurines."
},
{
	name: "Ryan Bui",
	position: "United Engineers Coordinator",
	linkedIn: null,
	home: "Westminster, CA",
	team: "United Engineers",
	src: "RyanBui.JPG",
	bio: "Ryan is a rising third-year student majoring in Mechanical Engineering at California State University of Long Beach. He joined STEMchats to give back to less fortunate communities as the one he grew up in, and to spread more awareness to the youth of this field. He is a proud Vietnamese-American who wants to help represent the minorities, and help influence their passions/dreams. On Ryan's free time, he likes to exercise, hangout with friends, play with his dog, and play sports. These sports are usually basketball, volleyball, and MMA. "
},
{
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
	linkedIn: null,
	home: "Point Pleasant Beach, NJ",
	team: "i-STEM Scholars",
	src: "GracePluemacher.jpg",
	bio: "Grace Pluemacher is a passionate researcher and a rising senior at the Marine Academy of Technology and Environmental Science. She joined STEMchats to inspire future students, especially women, to explore fields in STEM through independent research. In her free time, she enjoys playing various sports, watching Netflix and playing the drums."
}, {
	name: "Sophia Lin",
	position: "i-STEM Scholars Coordinator",
	linkedIn: "sophiajlin/",
	home: "Boston, MA",
	team: "i-STEM Scholars",
	src: "SophiaLin.jpg",
	bio: "Sophia is a rising senior at Winchester High School in Massachusetts and is passionate about healthcare, education, and social justice. She joined STEMchats to utilize her interests in science to help connect underserved students to various enriching opportunities in STEM. In her free time, Sophia enjoys running, swimming, playing the piano, and learning new languages."
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
	linkedIn: null,
	home: "Seabrook, TX",
	team: "i-STEM Scholars",
	src: "VijetaRevankar.jpg",
	bio: "Vijeta is a rising freshman at the University of Houston in Houston, Texas, where she plans on studying Business Management. She joined STEMchats because of her desire to combine her love of scientific research with her passion for making STEM opportunities more accessible to low-income students. She is committed to making the scientific community more representative of the diversity inherent in communities around the nation and the world. In her downtime, Vijeta enjoys baking, learning new languages, and teaching children how to code."
}, {
	name: "Sneha Jaikumar",
	position: "i-STEM Scholars Coordinator",
	linkedIn: "sneha-jaikumar/",
	home: "Charlotte, NC",
	team: "i-STEM Scholars",
	src: "SnehaJaikumar.jpg",
	bio: "Sneha is a first year student at the University of North Carolina at Chapel Hill majoring in Computer Science. She joined STEMchats to encourage underrepresented students to pursue a STEM education and engage in research opportunities through impactful and immersive programs. Sneha is passionate about uplifting minorities in computer science, peer mentoring, and taking action to make change. She enjoys traveling, dancing, coding, and impromptu bike rides."
}
];

//load all at onload
window.onload = createMembers(membersObj);
window.onload = animateOnload();
