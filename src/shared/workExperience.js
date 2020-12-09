export const WORK_EXPERIENCES = 
    [
        {
            id: 0,
            image: "/assets/bloomberg.png",
            company: "Bloomberg L.P.",
            position: "Software Engineer",
            date: "January 2021-Present",
            location: "New York, New York",
            workType: "job",
            shortDescription:["Coming Soon!"],
            fullDescription: "Coming Soon!"
        },
        {
            id: 1,
            image: "/assets/brainpower.png",
            company: "Brain Power",
            position: "Technical Product Management Intern",
            date: "January-February 2020",
            location: "Cambridge, Massachusetts",
            workType: "job",
            shortDescription:[
              "Led a sub-team of 5 through the design and development of a concept teaser mobile application to expose a larger audience of customers to a variety of the company’s Google Glass applications",
              "Led daily stand-up and biweekly sprint retrospective to regulate the assignment of Jira tickets for each sprint",
            ],
            fullDescription:
              //"Brain Power is a startup that develops games and AR experiences on Google Glass to help children on the autism spectrum with social-emotional skills.
              "The main project that I and another TPM intern addressed was the design and " +
              "creation of a mobile concept teaser to help advertise Brain Power's products. " +
              "We addressed the problem through client research, iterative development of UI " +
              "mockups on Figma with consultation with the company CEO, and creation of " +
              "development stories on Jira.",
        },
        {
            id: 2,
            image: "/assets/facebook.png",
            company: "Facebook",
            position: "Sofware Engineering Intern",
            date: "Summer 2018",
            location: "Menlo Park, California",
            workType: "job",
            shortDescription:[
              "Created a web app to monitor the number of occupants in an Oculus clean room and the duration of their stay in order to prevent harmful chemical exposure and to allow Oculus development to scale more safely",
              "Created a Messenger bot to check the room status every 5 minutes and message the room owner if needed",
            ],
            fullDescription:
              "The problem that I addressed in my project was creating a system to monitor the " +
              "occupancy of Oculus clean rooms since they can contain potentially harmful chemicals. " +
              "I did so by creating a 3-part application from scratch. The first part was a check " +
              "in/check out app for Facebook’s internal tablet, the second part was a web app for " +
              "monitoring the rooms, and the last part was a messenger bot to notify room owners of " +
              "potentially dangerous situations. For this project I coded predominately in React.js " +
              "and Hack.",
        },
        {
            id: 3,
            image: "/assets/facebook.png",
            company: "Facebook",
            position: "Sofware Engineering Intern",
            date: "Summer 2019",
            location: "New York, New York",
            workType: "job",
            shortDescription:[
              "Redesigned the navigation of the internal website that allows designers to create specifications for UI engineers",
              "Coordinated a team of 3 and presented weekly to higher management on the progress of the project",
            ],
            fullDescription:
              "My primary project was full-stack redevelopment of an internal website, called Pixelcloud, " +
              "which allows designers to create specifications for UI engineers. My project involved " +
              "several changes predominately focused on the navigation of the website, including adding " +
              "and standardizing search bars and collapsible sidebars in all views. Additionally, I coordinated " +
              "a team of 3 and presented weekly to higher management on the progress of the project. For this " +
              "project I coded predominately in React.js and Hack.",
        },
        {
            id: 4,
            image: "/assets/facebook.png",
            company: "Facebook University",
            position: "Android Development Intern",
            date: "Summer 2017",
            location: "Seattle, Washington",
            workType: "job",
            shortDescription: [
              "Created an Android messaging app on a team of 3 which gives numerical feedback about the tone, style, and social tendencies of messages in order to aid users on the autism spectrum with tone detection",
              "Presented app to a crowd of 150 spectators",
              "Underwent CodePath app development training and produced several apps including a mock Twitter app",
            ],
            fullDescription:
              "For this internship, I worked on a team of three to create an app which gives feedback about the " +
              "tone, style, and social tendencies of messages to help users on the autism spectrum with tone detection. " +
              "The app allows the user to send and receive messages from their phone number, color codes the messages " +
              "based on the primary emotion, shows numerical ratings on the tone of a given message when clicked, and " +
              "shows the average tone of interactions with a given user when clicked. At the end of the internship, we " +
              "presented our prototype of the app to a crowd of 150 Facebook employees.",
        },
        {
            id: 5,
            image: "/assets/openlink.jpg",
            company: "OpenLink Software",
            position: "Sofware Engineering Intern",
            date: "May-June 2016",
            location: "Burlington, Massachusetts",
            workType: "job",
            shortDescription: [
              "Worked one-on-one with the founder of OpenLink Software to create and query profiles through use of RDF in Turtle notation and SPARQL",
              "Studied various data topics including RDF-based linked data, digital sentence structure, and data integration",
              "Delivered presentation of reflections to fellow classmates and faculty",
            ],
            fullDescription:
              "This internship was part of an independent senior project for my high school. I began by studying a " +
              "variety of big data topics including RDF-based linked data, digital sentence structure, and data " +
              "integration. From there, I worked with the founder of OpenLink software to create and query profiles " +
              "through use of RDF in Turtle notation and SPARQL. At the end of my internship, I gave a presentation " +
              "of my experience to students and faculty at my school.",
        },
        {
            id: 6,
            images: "/assets/vivint.jpg",
            company: "Vivint Smart Home",
            position: "Sofware Engineering Extern",
            date: "January-February 2018",
            location: "Provo, Utah",
            workType: "job",
            shortDescription: [
              "Created a program to categorize the Elasticsearch data of triggered security devices in order to allow users to filter alarm notifications by device type",
              "Improved the internal web app permission and group requirements to regulate employees’ site access",
            ],
            fullDescription:
              "The problem that I addressed in my project was categorizing the data of Vivint home " +
              "security devices so that a user could ultimately select the categories of devices " +
              "from which they would like to receive notifications. To do so, I created a program " +
              "which categorizes Elasticsearch data of triggered security devices based on the " +
              "incoming fields. For this project, I worked predominately in Python and partially in Go.",
        },
        {
            id: 7,
            image: "/assets/yext.png",
            company: "Yext",
            position: "Sofware Engineering Intern",
            date: "Summer 2020",
            location: "New York, New York",
            workType: "job",
            shortDescription:[
              "Reduced JS artifacts by 91% from migrating builds to rules_closure and presented results to group management",
              "Enforced HIPAA compliance through several Jira stories involving export logging and both tagging and encryption of identifying healthcare information",
            ],
            fullDescription:
              "At Yext I worked on a number of Jira stories varying in topic. Nevertheless, my main project " +
              "was that I spearheaded a development epic to migrate my team's JavaScript builds from plovr " +
              "to closure rules, completing two-thirds of the epic single-handedly. This epic reduced the " +
              "JavaScript artifacts of our builds by up to 91%, and I presented these results to a collection " +
              "of three teams.",
        },

        // Research and Projects
        {
          id: 9,
          image: "/assets/kinect.jpeg",
          company: "Kinect Gestural Classification Project",
          position: "Project Creator",
          date: "March-May 2020",
          location: "Cambridge, Massachusetts",
          workType: "project",
          shortDescription: [
            "Created an award-winning web application on a team of 4 which organizes a user's job applications including their position, company, status, and time between updates",
            "Incorporated gmail api to filter a user's emails and allow them to attach recruiting emails to their job application objects",
          ],
          fullDescription:
            "This project was a part of my advanced undergraduate study (AUS) in multi-modal user " +
            "interfaces. The problem that I was addressing is that when dance choreographers teach, it is often " +
            "difficult for them to give their dancers individual feedback. I created a web application which allows " +
            "a dancer to record themself, will report when the dancer's movement was significantly different from a " +
            "recording of their choreographer, and will display side by side videos starting at the time when they differ. " +
            "I created the app through development in Vue.js, python, and processing with help of a processing skeleton " +
            "tracking package.",
        },
        {
            id: 8,
            image: "/assets/mit.png",
            company: "Jobbies Web Application",
            position: "Group Member",
            date: "November-December 2019",
            location: "Cambridge, Massachusetts",
            workType: "project",
            shortDescription: [
              "Created a web application that critiques a dancer's performance of pre-recorded dance choreography through use of Kinect skeleton tracking",
              "Presented iterative models of prototype to peers and faculty throughout development",
            ],
            fullDescription:
              "This project was a part of my advanced undergraduate study (AUS) in web development. The problem that " +
              "we addressed was that during a job recruiting season clients have a difficult time keeping track of " +
              "all of their job applications, application statuses, and recruiting emails and often rely on spreadsheets. " +
              "As a team of four, we created a web application that filters and displays all the user's recruiting emails and " +
              "allows the user to create and attach them to jobbie cards. Each jobbie card represents an application to a " +
              "particular role at a particular company including the position, company, application status, and time between " +
              "updates. We created the application through use of Vue.js and Gmail API services.",
        },
        {
            id: 12,
            image: "/assets/painterly_square.png",
            company: "Painterly Photo Rendering Project",
            position: "Project Creator",
            date: "May 2019",
            location: "Cambridge, Massachusetts",
            workType: "project",
            shortDescription: [
              "Transformed digital photo renderings to resemble photo-realistic paintings with visible brush strokes",
            ],
            fullDescription:
              //Painterly Rendering for Video and Interaction by Aaron Hertzmann
              "This project was a part of my advanced undergraduate study (AUS) in digital and " +
              "computational photography. For my project, I transformed digital photo renderings to appear as " +
              "photo-realistic paintings, with visible brush strokes, of the original image. At a high level, " +
              "I did so through calculations of two images, the high frequency areas and the angles of minimum " +
              "change for each pixel in the original image. I then applied a large number of colored brushstrokes " +
              "to an initially blank image using this information for density and angles of the brushstrokes.",
        },
        {
          id: 11,
          image: "/assets/haystack.png",
          company: "MIT Haystack Group",
          position: "Sponsored Researcher (SuperUROP)",
          date: "September 2019-May 2020",
          location: "Cambridge, Massachusetts",
          workType: "research",
          shortDescription: [
            "Spearheaded full-stack development of an annotated textbook website using Vue.js, Node.js, and PostgreSQL",
            "Tested usability and effectiveness of website through user testing at UC Davis",
            "Presented results of research through a series of presentations and a thesis",
          ],
          fullDescription:
            "My project was predominately focused on full-stack development of an annotated textbook, " +
            "called Nota Bene. More specifically, this website allows an instructor to create academic " +
            "sections of students and upload pdf assignments. The students can subsequently leave comments " +
            "and like other students’ comments in reference to specific parts of the text. My project was to " +
            "extend the functionality of the current site by adding several features, including allowing " +
            "archiving and deleting courses, allowing users to request membership in courses, and allowing " +
            "students who switch sections to view comments and threads from their previous sections but not " +
            "recent updates. For this project, I was mainly working in Vue.js and Node.js.",
        },
        {
            id: 13,
            image: "/assets/quest.png",
            company: "MIT Quest for Intelligence",
            position: "Sponsored Researcher (UROP)",
            date: "January-May 2019",
            location: "Cambridge, Massachusetts",
            workType: "research",
            shortDescription: [
              "Developed a GANpaint Scratch block extension to teach young students about generative adversarial networks",
              "Improved the user experience and functionality of a variety of artificial intelligence Scratch block extensions",
            ],
            fullDescription:
              "The problem that we addressed was making machine learning concepts more accessible to kids " +
              "in grades K-12. My main project was developing a GANpaint Scratch block extension to teach " +
              "the students about generative adversarial networks (GANs). GANpaint is an MIT developed application " +
              "which renders a photo-realistic image, allows a user to mutate the image with a pointer and " +
              "a selection of options, and then regenerates a new photo-realistic image with the mutation.",
        },
        {
          id: 10,
          image: "/assets/mvl.jpg",
          company: "MIT Man Vehicle Laboratory",
          position: "Sponsored Researcher (UROP)",
          date: "February-June 2017",
          location: "Cambridge, Massachusetts",
          workType: "research",
          shortDescription: [
            "Modified a virtual simulator for a NASA-sponsored project to assess human subjects’ operation of the International Space Station’s telerobotic arm under varying levels of automation",
            "Implemented the evaluation and data output of subjects’ situational awareness while using the simulator",
          ],
          fullDescription:
            "My project focused on testing for the optimal level of automation for operators " +
            "of the International Space Station's telerobotic arm, the SSRMS, through virtual simulations. " +
            "More specifically, we had human tests subjects perform tasks in the simulation under three different " +
            "levels of automation and we used the Situation Awareness Global Assessment Technique (SAGAT) " +
            "throughout testing to assess their performance. My role was testing the simulation, improving " +
            "our implementation of SAGAT, classifying the results of the assessment, and proctoring user testing.",
        },
    ];