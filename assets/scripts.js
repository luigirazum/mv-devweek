// This file contains the JS scripts/functions used in the DevWeek project.

// Object 'speakers' to store Speakers info
// It is used to generate dinamically the cards for all the speakers.
const speakers = [
  {
    id: 'speaker1',
    name: 'Phil Wilkins',
    position: 'Cloud Developer Evangelist @ Oracle',
    bio: `Phil Wilkins has spent over 25 years in the
          software industry with a breadth of experience
          in different types of businesses and environments.
          from multinationals to software startups and
          consumer organizations including a global optical
          and auditory healthcare provider. He started out
          as a developer on real-time mission-critical
          solutions and has worked his way up through
          technical and development leadership roles
          primarily in Java-based environments. These days
          Phil focuses on APIs, Integration, and development
          technologies and techniques. In 2022 Phil joined
          Oracle as a Cloud Developer Evangelist building on
          his previous work contributing to the developer
          community.<br>
          Phil has authored or co-authored books on Fluentd,
          API, and Integration tools. He has also had a number
          of articles published in technical journals in his
          own right as well as being an active blogger. When
          not writing Phil is exploring new tech or presenting
          at conferences physically & virtually around the
          world - from DeveloperWeek to JAXLondon.`,
    photo: './assets/imgs/phil-wilkins.jpeg',
  },
  {
    id: 'speaker2',
    name: 'Jody Bailey',
    position: 'Chief Technology Officer @ Stack Overflow',
    bio: `Jody Bailey is the Chief Technology Officer at
          Stack Overflow, leading the Product Engineering,
          Platform Engineering, InfoSec, and IT teams. Jody
          has spent the last eight years of his nearly
          30-year career on tech-leading EdTech software
          development teams. Most recently, Jody served as
          a senior product development leader at AWS, where
          he led the Product Management, User Experience,
          and Engineering teams responsible for new
          self-paced learning experiences for AWS customers.
          Prior to AWS, he was the Chief Technology Officer
          at Pluralsight where he grew the development team
          by 10X and transformed the product into an
          industry-leading enterprise SaaS learning offering.
          Jody is married and has three children. Outside
          of work Jody enjoys spending time with his family,
          traveling, mountain bike racing, sailing and
          listening to live music.`,
    photo: './assets/imgs/jody-bailey.png',
  },
  {
    id: 'speaker3',
    name: 'Spencer Carver',
    position: 'Software Engineer @ Bloomberg Media',
    bio: `Spencer Carver has been passionate about web
          development since joining Bloomberg in 2015.
          He is responsible for various aspects of
          bloomberg.com’s subscription products, and is
          consistently working to improve the first-touch
          experience of new visitors on the news site
          through experimentation and clearer on-site
          experiences. Outside of the technical space,
          he can occasionally be found rock climbing,
          playing board games, or continuing his quest to
          visit as many U.S. National Parks as possible.
          As a home chef, his dishes frequently receive
          spousal acclaim for being “too spicy” or “good
          enough”.`,
    photo: './assets/imgs/spencer-carver.jpg',
  },
  {
    id: 'speaker4',
    name: 'Mihailo Joksimovic',
    position: 'Senior Software Engineer @ Microsoft',
    bio: `Software Architect by choice, Engineering Manager
          by accident and REBT practitioner by need. Thirteen
          plus years in the industry have taught him stuff and
          he's willing to share them!`,
    photo: './assets/imgs/mihailo-joksimovic.jpg',
  },
  {
    id: 'speaker5',
    name: 'Steve Wood',
    position: 'SVP of Product and Developer Platform @ Slack',
    bio: `Steve Wood is the SVP Product, Platform at Slack, where
          he oversees Slack’s vision to be an automation platform
          for work. Steve drives the continued success of the Slack
          platform and popular no-code tool Workflow Builder, which
          gives users the tools to integrate their unique mix of
          software and create time-saving automations in the same
          place their team already works together. He’s also focused
          on enhancing the Slack platform’s developer capabilities,
          enabling 1M+ developers to build custom apps that help their
          teams do their best work.`,
    photo: './assets/imgs/steve-wood.jpg',
  },
  {
    id: 'speaker6',
    name: 'Siddhant Sanyam',
    position: 'Staff Software Engineer @ Google',
    bio: `Siddhant is a Staff Software Engineer and a TLM in Google's
          Core Org. Prior to this, he has been with Meta Inc. (formally
          called Facebook) for about 8 years and has led many initiatives
          in various orgs like the Notification Platform, building scalable
          A/B testing infrastructure and more recently, developing a new
          paradigm and eco-system for authoring and deploying complex data
          pipelines using a tool called Dent. In his free time, he likes
          practicing and composing music, mixing cocktails and watching
          cooking videos.`,
    photo: './assets/imgs/siddhant-sanyam.jpg',
  },
  {
    id: 'speaker7',
    name: 'Josefine Schaefer',
    position: 'Developer Relations Engineer @ Storyblok',
    bio: `Initially from a communications background, Josefine got into
          frontend development in her late twenties by joining a coding
          boot camp. After working as a front-end developer for two years,
          she now combines her curiosity for tech with her experience in
          marketing and communications and works as a Developer Relations
          Engineer at Storyblok. She is a Girl Code ambassador, passionate
          about all things web accessibility and coding communities.`,
    photo: './assets/imgs/josefine-schaefer.jpg',
  },
  {
    id: 'speaker8',
    name: 'Josh Goldberg',
    position: 'Developer @ Open Source Development',
    bio: `Josh is a frontend developer from New York with a
          passion for open source, static analysis, and the web. He's a
          full time open source maintainer and work on projects in the
          TypeScript ecosystem such as typescript-eslint and TypeStat.
          I'm also the author of the Learning TypeScript book, published
          by O'Reilly. His work focuses on bringing accessible education
          to the masses in a sustainable way.`,
    photo: './assets/imgs/josh-goldberg.jpg',
  },
  {
    id: 'speaker9',
    name: 'Lesley Cordero',
    position: 'Staff Software Engineer @ The New York Times',
    bio: `Lesley is currently a Staff Software Engineer at
          The New York Times. She has spent the majority of her career
          on edtech teams as an engineer, including Google for Education
          and other edtech startups. In my previous roles I have focused
          on building robust data pipelines, setting technical strategy,
          building excellent engineering teams & communities, and
          reliability management. Some more specifics include setting
          org-wide vision & strategy for observability, improving on-call
          processes, adopting chaos engineering practices, and cultivating
          culture that builds with the most vulnerable employees
          in mind first.`,
    photo: './assets/imgs/lesley-cordero.jpg',
  },
  {
    id: 'speaker10',
    name: 'Anastasia Lalamentik',
    position: 'Full Stack Engineer @ Kaleido',
    bio: `Anastasia is a full-stack engineer at Kaleido,
          she obtained her undergraduate degree at UNC Chapel-Hill and
          her graduate degree at the University of Virginia. There she
          did Human-Computer Interaction research in haptics and
          accessibility.`,
    photo: './assets/imgs/anastasia-lalamentik.jpg',
  },
  {
    id: 'speaker11',
    name: 'Brendan O\'Leary',
    position: 'Staff Developer Evangelist @ GitLab',
    bio: `Brendan has a passion for software development and iterating
          on processes just as quickly as we iterate on code. He is a
          zealous advocate for the user experience. Brendan can still
          remember what his first computer - a Tandy 2000 - felt like
          to use (and break...sorry Dad). Working with customers to
          deliver value is what drives Brendan's passion for DevOps
          and smooth CI/CD implementation. Brendan has worked with a
          wide range of customers - from the nation's top healthcare
          institutions to environmental services companies to the
          Department of Defense. The only thing more eclectic is
          probably his taste in music. Outside of work, you'll find
          Brendan with 1 to 4 kids hanging off of him at any given time
          or occasionally finding a moment alone to build something in
          his workshop.`,
    photo: './assets/imgs/brendan-oleary.jpg',
  },
  {
    id: 'speaker12',
    name: 'Ankush Desai',
    position: 'Senior Applied Scientist @ Amazon Web Services',
    bio: `Ankush is a Senior Applied Scientist in the Database
          Services (DBS) group at AWS. He is currently working on
          building formal tools and techniques that help developers
          reason about the correctness of complex distributed services
          across AWS (S3, DBS, EBS,). These techniques range from
          lightweight approaches like model checking, to systematic
          testing, to more rigorous deductive verification that provides
          mathematical proofs. . Before joining the DBS group, Ankush
          was part of the S3 team and worked on the Amazon S3's Strong
          Consistency project.`,
    photo: './assets/imgs/ankush-desai.jpg',
  },
];

// Add the cards of each speaker at the speakers variable.
// This cards are added into the HTML dinamically when the page loads.

// getSpeaker function, retrieves the JS object for the
// speaker id that we asked for.
const getSpeaker = (id) => speakers.find((speaker) => speaker.id === id);

// insertSpeaker function fullfils a Template with the
// speaker info and then it adds it to the HTML into the
// speakers section.
const insertSpeaker = (speaker) => {
  // Fill the spkrTemplate with the info of the speaker
  const spkrTemplate = `
    <div class="speaker-photo">
      <div class="squares"></div>
      <img src="${speaker.photo}" alt="${speaker.name} photo">
    </div>
    <div class="speaker-info">
      <strong>${speaker.name}</strong>
      <span>
        <i>< ${speaker.position} /></i>
      </span>
      <hr class="speaker-dash">
      <p>
        ${speaker.bio.split('.').shift()}.
      </p>
    </div> <!--EOF ${speaker.name}-->
  `;

  const spkrsList = document.querySelector('#speakers-list');
  const newSpeaker = document.createDocumentFragment();

  const li = document.createElement('li');
  li.classList = `speaker ${speaker.id}`;
  li.innerHTML = spkrTemplate;
  newSpeaker.appendChild(li);

  spkrsList.appendChild(newSpeaker);
};

// createSpeakers is the function that starts
// the process of loading the speakers cards
// when the page loads (dinamically).
const createSpeakers = (speakers) => {
  speakers.forEach((speaker) => {
    insertSpeaker(getSpeaker(speaker.id));
  });
};

// When the page is loaded we add the speakers cards
// to the Speakers section dinamically.
window.addEventListener('load', () => {
  // Verify that we are in the index.html to load the cards.
  if (window.location.pathname.includes('/index.html')) {
    createSpeakers(speakers);

    // If we are in the home page (index.html)
    // We have speakers to show, so we add the event listeners
    // to the more/less buttons for the mobile version in the
    // Featured Speakers section.

    // This first event listener is for the more button
    // when you click it, it will hide the more button and
    // show the less button.
    document.querySelector('.btn-more').addEventListener('click', () => {
      Array.from(document.getElementsByClassName('speaker')).forEach((speaker, index) => {
        if (index > 1) {
          speaker.classList.toggle('show');
        }
      });
      document.querySelector('.btn-less').classList.toggle('show');
      document.querySelector('.btn-more').classList.toggle('hide');
    });

    // This second event listener is for the less button
    // when you click it, it will hide the less button and
    // show the more button.
    document.querySelector('.btn-less').addEventListener('click', () => {
      Array.from(document.getElementsByClassName('speaker')).forEach((speaker, index) => {
        if (index > 1) {
          speaker.classList.toggle('show');
        }
      });
      document.querySelector('.btn-more').classList.toggle('hide');
      document.querySelector('.btn-less').classList.toggle('show');
    });
  }
});

// Events in the Mobile Menu
// CSS styles are used to make the Burger icon
// appear or disappear as you change from desktop
// version to mobile and viceversa.

// When we have the Burguer button we can click it
document.querySelector('.burguer-nav a').addEventListener('click', () => {
  // Clicking the burger icon makes the mobile menu appear.
  document.querySelector('.contain-nav').style.display = 'flex';
  // When the mobile menu is visible the burger button disappear.
  document.querySelector('.burguer-nav').style.display = 'none';
});

// When you can see the mobile menu, and X at the right/top
// corner of the screen is available to close the mobile menu
// you can click on it.
document.querySelector('.x-close').addEventListener('click', () => {
  // Clicking the X will close the mobile menu
  document.querySelector('.contain-nav').style.display = '';
  // Once the mobile menu is closed, the burger button will appear
  // on the top/left corner of the screen.
  document.querySelector('.burguer-nav').style.display = '';
});

// When we have the mobile menu open, we can choose any option
// available to scroll into the page.
document.querySelector('.main-nav ul').addEventListener('click', () => {
  // Clicking on any option, will take you to that
  // part of the page and will close the mobile menu.
  document.querySelector('.x-close').click();
});
