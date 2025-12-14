// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-media-appearances",
          title: "Media Appearances",
          description: "Media Appearances",
          section: "Navigation",
          handler: () => {
            window.location.href = "/media_appearances/";
          },
        },{id: "post-is-georgia-moving-to-hand-marked-paper-ballots-for-elections",
        
          title: "Is Georgia moving to hand-marked paper ballots for elections?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/03/27/is-georgia-moving-to-hand-marked-paper-ballots-for-elections/";
          
        },
      },{id: "post-what-does-chatgpt-know-about-information-systems-accepted-for-publication-at-the-communications-of-the-ais",
        
          title: "What does ChatGPT Know about Information Systems?” accepted for publication at the Communications...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/03/26/what-does-chatgpt-know-about-information-systems-accepted-for-publication-at-the-communications-of-the-ais/";
          
        },
      },{id: "post-to-report-or-not-to-report-extending-protection-motivation-theory-to-vulnerability-discovery-and-disclosure-accepted-for-publication-at-computers-amp-security",
        
          title: "To report or not to report? Extending Protection Motivation Theory to Vulnerability Discovery...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/04/27/to-report-or-not-to-report-extending-protection-motivation-theory-to-vulnerability-discovery-and-disclosure-accepted-for-publication-at-computers-&-security/";
          
        },
      },{id: "post-importing-ova-into-amazon-aws",
        
          title: "Importing OVA into Amazon AWS",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/02/10/importing-ova-into-amazon-aws/";
          
        },
      },{id: "post-converting-vm-images-to-docker-containers",
        
          title: "Converting VM images to Docker containers",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/01/26/converting-vm-images-to-docker-containers/";
          
        },
      },{id: "post-a-quick-analysis-of-georgia-hb-134-and-hb-156",
        
          title: "A quick analysis of Georgia HB 134 and HB 156",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/04/28/a-quick-analysis-of-georgia-hb-134-and-hb-156/";
          
        },
      },{id: "post-quick-thoughts-about-the-solarwinds-breach",
        
          title: "Quick thoughts about the SolarWinds breach",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/12/15/quick-thoughts-about-the-solarwinds-breach/";
          
        },
      },{id: "post-2020-election-rumors-and-facts-my-analysis",
        
          title: "2020 Election rumors and facts – my analysis",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/11/08/2020-election-rumors-and-facts-my-analysis/";
          
        },
      },{id: "post-how-to-hack-the-vote-georgia-style",
        
          title: "How to “hack the vote” – Georgia style",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/10/17/how-to-hack-the-vote-georgia-style/";
          
        },
      },{id: "post-the-state-of-georgia-dhs-breach-and-the-bigger-picture",
        
          title: "The State of Georgia DHS breach, and the bigger picture",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/10/13/the-state-of-georgia-dhs-breach-and-the-bigger-picture/";
          
        },
      },{id: "post-cybersecurity-month-2020-presentation-on-security-privacy-and-public-policy-concerns-for-higher-education-when-using-contact-tracing-apps",
        
          title: "Cybersecurity Month 2020 presentation on Security, Privacy, and Public Policy concerns for Higher...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/10/06/cybersecurity-month-2020-presentation-on-security-privacy-and-public-policy-concerns-for-higher-education-when-using-contact-tracing-apps/";
          
        },
      },{id: "post-no-michigan-voter-registration-data-wasn-t-hacked",
        
          title: "No, Michigan voter registration data wasn’t “hacked”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/09/01/no-michigan-voter-registration-data-wasnt-hacked/";
          
        },
      },{id: "post-practical-student-tips-for-online-real-time-class-attendance",
        
          title: "Practical student tips for online, real-time class attendance",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/08/12/practical-student-tips-for-online-real-time-class-attendance/";
          
        },
      },{id: "post-practical-zoom-meeting-security-tips",
        
          title: "Practical Zoom meeting security tips",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/04/01/practical-zoom-meeting-security-tips/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-organization',
        title: 'Organization',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%67%72%65%65%6E%35%37@%6B%65%6E%6E%65%73%61%77.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/AndyGreenPhD", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/AndyGreenPhD", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://infosec.exchange/@AndyGreenPhD", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4727-715X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=3Ka0WxIAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://facultyweb.kennesaw.edu/agreen57/index.php", "_blank");
        },
      },{
        id: 'social-zotero',
        title: 'Zotero',
        section: 'Socials',
        handler: () => {
          window.open("https://www.zotero.org/andygreenphd", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
