export const about = [
    "My name is Riley Bergamasco. I am a senior at the University of North Carolina at Chapel Hill double majoring in Computer Science and Journalism with a concentration in Interactive Media & Design. Most of my experience is in web development, UX design, and graphic design. My goal is to bridge the gap between design and coding to create unique, usable experiences.",
    "Learn more about my experience and skills by downloading my resume, connecting with me on LinkedIn, or checking out my GitHub. Continue scrolling to see a selection of my projects.",
    "I designed and developed this website and all of its content. I built this website using React, JavaScript, HTML, and CSS.",
];

export const projects = [
    {
        title: "Goodreads App Redesign",
        category: "UX Design",
        date: "October 2022 - December 2022",
        goal: "The goal of this project was to discover what issues lie in the Goodreads app and redesign the app by developing creative solutions to these problems.",
        description: "This was the final project for my User Experience Design and Usability class. As an avid reader, I love having an app to track my reading habits, find books, and see what my friends are reading. I decided to redesign the Goodreads app because I have experienced firsthand some areas of improvement in the app. I conducted usability tests on the current Goodreads app, created personas and empathy maps based on listening sessions, admistered card sorts to help create a content structure, designed wireframes, a style guide, and mockups, and finally pitched my redesign to my class of 20 students as if I were pitching to the Goodreads product owners.",
        image: "/images/goodreads.png",
        url: "https://xd.adobe.com/view/7f9db312-b7dc-40f2-b377-1e056e954f4d-2ace/",
        tools: ["xd"],
        path: "/goodreads",
    },
    // {
    //     title: "Threads App",
    //     category: "UX Design",
    //     date: "January 2022-May 2022",
    //     goal: "goal here",
    //     description: "description here",
    //     image: "/images/placeholder3.png",
    //     tools: ["figma"],
    //     path: "/threads",
    // },
    {
        title: "XR Educational Website",
        category: "Web Development",
        date: "October 2021",
        goal: "The goal of this project was to explain a concept using at least one slider and then quiz readers on the information.",
        description: "I created this educational website for my Intermediate Interactive Media class. I created three sliders to teach readers about the basics of the three mediums of extended reality — augmented reality, virtual reality, and mixed reality. I also made a quiz to test readers on the information.",
        image: "/images/xr.png",
        url: "https://rileybergamasco.com/mejo487/xr-slides/",
        tools: ["react", "mui", "javascript", "html", "css"],
        path: "/xrslider",
    },
    {
        title: "Rabbit Avenger Game",
        category: "Web/AR Development",
        date: "August 2022 - Present",
        goal: "The goal of this project is to create an augmented reality game for pediatric patients in UNC Children's Hopsital that physically motivates them to move, mentally establishes confidence, and creates a positive association with rehabilitation exercises.",
        description: "I am currently working on this project for UNC Blue Sky Innovations where I am collaborating with a UX/Graphic Designer and a Writer/Marketer. While I am mostly involved in the coding for this project, I have also contributed to designing the user experience and storyline. In this game, the player is a rabbit who gains superpowers and accidentally unleashes evil salamanders on the planet. The goal of the game is to find each salamander by finding physical image targets throughout the hospital and play mini-games to defeat them in order to ultimately save the world. This project is in an early demo stage and will be available here shortly.",
        image: "/images/rabbitavenger.png",
        tools: ["wall", "aframe", "react", "typescript", "redux", "html", "css"],
        path: "/rabbitavenger",
    },
    // Another project idea: "Create backend with node.js/express.js to do something and typescript for frontend. https://www.interviewbit.com/blog/node-js-projects/"
    {
        title: "Energy Data Visualization",
        category: "Web Development",
        date: "October 2021",
        goal: "The goal of this project is to help readers visualize the world's changing energy consumption over the last 50 years. The assignment was to display data in an engaging way and match the style of the New York Times.",
        description: "I created this data visualization web development project for my Intermediate Interactive Media class. I used a dataset of world energy consumption information from Our World in Data to create a map visualization of total primary energy consumption by country and per capita primary energy consumption by country. I also wrote a short article explaining these terms and their significance and created a searchable table of the data.",
        image: "/images/energy.png",
        url: "https://rileybergamasco.com/mejo487/energy-data/",
        tools: ["javascript", "jquery", "html", "css", "bulma"],
        path: "/energy",
    },
    {
        title: "Infographics",
        category: "Graphic Design",
        image: "/images/infographic.png",
        path: "/infographics",
        graphics: [
            {
                title: "Hummingbirds",
                date: "November 2022",
                goal: "The goal of this infographic is to teach readers facts about different aspects of hummingbirds in a visually appealing way. The assignment was to create an infographic with strong illustration and an organic feel.",
                process: "When choosing my topic, I wanted to do something related to nature to really play into the organic part of the assignment. I have always loved hummingbirds, especially their bright colors, and I liked the idea of illustrating hummingbirds and the flowers they like. I researched information to get an idea for what categories I could include in the graphic. Then I created multiple sketches of layouts to help me narrow down which information to include. I decided to design the infographic as a magazine spread that would be in a nature magazine because I wanted to push myself to try a layout different from a traditional poster. I chose a serif font for the typography to fit the traditional magazine look. I created the layout in Adobe Illustrator and used rough sketches as placeholders for the illustrations. I digitally painted all the visual elements except for the map on my iPad in the Procreate app with the help of reference images. Finally, I added the illustrations into Illustrator and completed finishing touches.",
                image: "/images/hummingbird.png",
                tools: ["illustrator", "procreate"],
                // awards: ["2023 Society for News Design International Student Competition"],
                awards: ["1st Place Art & Illustration", "1st Place Feature Page Design", "2nd Place Magazine Spread", "Honorable Mention Alternative Story Format"],
            },
            {
                title: "Snowboarding Equipment 101",
                date: "October 2022",
                goal: "The goal of this infographic is to quickly explain the different types of available snowboarding equipment to allow readers to make an informed decision about what equipment is right for them. The assignment was to create an alternative story form graphic that clearly explains in words and visuals how to do something or how something works.",
                process:
                    "As a snowboarder, I know there's a lot to think about when choosing equipment, so I wanted to simplify the process. I started by researching information and creating categories, and then I drew several sketches of layouts. I added the text into Illustrator and used the sketches as placeholders. I designed all the visual assets except for the background in Illustrator with the help of reference images. I used some textured brushes to create a snowy background in the Procreate iPad app, and then I imported it into Illustrator and completed finishing touches.",
                image: "/images/snowboard.png",
                tools: ["illustrator", "procreate"],
                awards: ["2nd Place Sports Page Design"],
            },
            {
                title: "How to Train Your Dragon",
                date: "September 2022",
                goal: "The goal of this infographic is to give an overview of the How to Train Your Dragon franchise through a mix of written information and engaging visuals. The assignment was to create an infographic relating to sports or entertainment that is easy to understand, includes thorough content/research, and has professional aesthetic value.",
                process:
                    "I started by researching information and creating categories of information. I drew sketches to help narrow down the categories to include in the poster. I based this infographic poster on the character Hiccup's notebooks from the How to Train Your Dragon movies. I drew the main dragon illustration on my iPad in the Procreate app. I drew the secondary illustrations on my iPad in the Adobe Fresco app. I used Photoshop to create the burnt paper background and Illustrator the create the organic edges of the paper. I compiled all of the assets I created in Illustrator to create the final poster.",
                image: "/images/httyd.png",
                tools: ["illustrator", "procreate", "photoshop", "fresco"],
                awards: ["Honorable Mention Alternative Story Format"],
            },
        ],
    },
];
