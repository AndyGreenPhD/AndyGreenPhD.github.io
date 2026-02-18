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
        },{id: "nav-presentations",
          title: "Presentations",
          description: "Presentations",
          section: "Navigation",
          handler: () => {
            window.location.href = "/presentations/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
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
      },{id: "post-thoughts-after-running-a-virtual-conference",
        
          title: "Thoughts after running a virtual conference",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/03/31/thoughts-after-running-a-virtual-conference/";
          
        },
      },{id: "post-student-internship-dilemmas-a-case-study",
        
          title: "Student internship dilemmas – a case study",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/06/19/student-internship-dilemmas-a-case-study/";
          
        },
      },{id: "post-universities-donors-and-undue-influence",
        
          title: "Universities, donors, and undue influence",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/06/10/universities-donors-and-undue-influence/";
          
        },
      },{id: "post-university-blog-about-dna-testing-concerns",
        
          title: "University blog about DNA testing concerns",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/05/02/university-blog-about-dna-testing-concerns/";
          
        },
      },{id: "post-looking-back-on-the-city-of-atlanta-ransomware-attack-a-year-later",
        
          title: "Looking back on the City of Atlanta ransomware attack, a year later",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/03/22/looking-back-on-the-city-of-atlanta-ransomware-attack-a-year-later/";
          
        },
      },{id: "post-why-i-am-against-georgia-house-bill-316",
        
          title: "Why I am against Georgia House Bill 316",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/03/13/why-i-am-against-georgia-house-bill-316/";
          
        },
      },{id: "post-2018-wisp-presentation-sns-use-risk-and-executive-behavior",
        
          title: "2018 WISP presentation – SNS Use, Risk, and Executive Behavior",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/12/13/2018-wisp-presentation-sns-use-risk-and-executive-behavior/";
          
        },
      },{id: "post-fall-2018-password-cracking-lab-results",
        
          title: "Fall 2018 password cracking lab results",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/12/06/fall-2018-password-cracking-lab-results/";
          
        },
      },{id: "post-study-abroad-survival-series-amp-8211-atm-amp-nbsp-usage",
        
          title: "Study abroad survival series &amp;#8211; ATM&amp;nbsp;usage",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/08/19/study-abroad-survival-series-8211-atm-usage/";
          
        },
      },{id: "post-students-teachers-and-the-bigger-amp-nbsp-picture",
        
          title: "Students, teachers, and the bigger&amp;nbsp;picture",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/05/11/students-teachers-and-the-bigger-picture/";
          
        },
      },{id: "post-governor-deal-vetoed-sb-315-now-amp-nbsp-what",
        
          title: "Governor Deal vetoed SB 315. Now&amp;nbsp;what?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/05/09/governor-deal-vetoed-sb-315-now-what/";
          
        },
      },{id: "post-it-bootcamp-workshop",
        
          title: "IT Bootcamp workshop",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/04/25/it-bootcamp-workshop/";
          
        },
      },{id: "post-google-and-microsoft-ask-governor-deal-to-veto-sb-amp-nbsp-315",
        
          title: "Google and Microsoft ask Governor Deal to veto SB&amp;nbsp;315",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/04/25/google-and-microsoft-ask-governor-deal-to-veto-sb315/";
          
        },
      },{id: "post-on-conference-cfps-and-amp-nbsp-reviewing",
        
          title: "On conference CFPs and&amp;nbsp;reviewing",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/04/09/on-conference-cfps-and-reviewing/";
          
        },
      },{id: "post-they-don-amp-8217-t-put-me-on-tv-when-good-things-amp-nbsp-happen-amp-8230",
        
          title: "They don&amp;#8217;t put me on TV when good things&amp;nbsp;happen&amp;#8230;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/03/25/they-dont-put-me-on-tv-when-good-things-happen/";
          
        },
      },{id: "post-update-on-georgia-sb-315-amp-8211-going-from-bad-to-amp-nbsp-worse",
        
          title: "Update on Georgia SB 315 &amp;#8211; Going from bad to&amp;nbsp;worse",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/03/15/update-on-georgia-sb-315-going-from-bad-to-worse/";
          
        },
      },{id: "post-free-admission-to-cybersecurity-panel-discussion-i-amp-8217-m-amp-nbsp-moderating",
        
          title: "Free admission to cybersecurity panel discussion I&amp;#8217;m&amp;nbsp;moderating",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/03/12/free-admission-to-cybersecurity-panel-discussion-im-moderating/";
          
        },
      },{id: "post-ajc-interview-about-georgia-sb-315-and-some-larger-amp-nbsp-thoughts",
        
          title: "AJC interview about Georgia SB 315, and some larger&amp;nbsp;thoughts",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/03/12/ajc-interview-about-georgia-sb-315-and-some-larger-thoughts/";
          
        },
      },{id: "post-spotlight-profile-in-ksu-student-amp-nbsp-newspaper",
        
          title: "Spotlight profile in KSU student&amp;nbsp;newspaper",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/03/06/spotlight-profile-in-ksu-student-newspaper/";
          
        },
      },{id: "post-georgia-senator-proposes-joint-committee-to-study-cyber-security-amp-nbsp-issues",
        
          title: "Georgia Senator proposes joint committee to study cyber security&amp;nbsp;issues",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/03/05/georgia-senator-proposes-joint-committee-to-study-cyber-security-issues/";
          
        },
      },{id: "post-ap-article-about-sb-amp-nbsp-315",
        
          title: "AP article about SB&amp;nbsp;315",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/02/26/ap-article-about-sb315/";
          
        },
      },{id: "post-wsb-interview-about-marta-it-infrastructure-amp-nbsp-issues",
        
          title: "WSB interview about MARTA IT infrastructure&amp;nbsp;issues",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/02/22/wsb-interview-about-marta-it-infrastructure-issues/";
          
        },
      },{id: "post-sb-315-senate-wrapup",
        
          title: "SB 315 - Senate wrapup",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/02/19/sb-315-senate-wrapup/";
          
        },
      },{id: "post-interview-with-wabe-about-georgia-amp-nbsp-sb315",
        
          title: "Interview with WABE about Georgia&amp;nbsp;SB315",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/02/15/interview-with-wabe-about-georgia-sb315/";
          
        },
      },{id: "post-sb-315-article-in-the-amp-nbsp-parallax",
        
          title: "SB 315 article in The&amp;nbsp;Parallax",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/02/08/sb-315-article-in-the-parallax/";
          
        },
      },{id: "post-how-academic-competitions-help-amp-nbsp-students",
        
          title: "How academic competitions help&amp;nbsp;students",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/02/06/how-academic-competitions-help-students/";
          
        },
      },{id: "post-cvs-amp-8211-your-customer-privacy-policy-needs-amp-nbsp-work",
        
          title: "CVS &amp;#8211; Your customer privacy policy needs&amp;nbsp;work",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/02/05/cvs-your-customer-privacy-policy-needs-work/";
          
        },
      },{id: "post-students-are-you-asking-the-wrong-amp-nbsp-questions",
        
          title: "Students, are you asking the wrong&amp;nbsp;questions?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/02/04/students-are-you-asking-the-wrong-questions/";
          
        },
      },{id: "post-georgia-sb-315-a-deeper-dive",
        
          title: "Georgia SB 315 - A deeper dive",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/02/02/georgia-sb-315-a-deeper-dive/";
          
        },
      },{id: "post-georgia-sb-315-amp-8211-a-quick-amp-nbsp-analysis",
        
          title: "Georgia SB 315 &amp;#8211; A quick&amp;nbsp;analysis",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/01/20/georgia-sb-315-a-quick-analysis/";
          
        },
      },{id: "post-quick-rundown-of-the-meltdown-and-spectre-amp-nbsp-vulnerabilities",
        
          title: "Quick rundown of the Meltdown and Spectre&amp;nbsp;vulnerabilities",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/01/04/quick-rundown-of-the-meltdown-and-spectre-vulnerabilities/";
          
        },
      },{id: "post-quot-learning-outcomes-for-cyber-defense-competitions-quot-journal-publication",
        
          title: "&quot;Learning Outcomes for Cyber Defense Competitions&quot; journal publication",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/11/15/learning-outcomes-for-cyber-defense-competitions-journal-publication/";
          
        },
      },{id: "post-interview-with-wsb-tv-about-marta-it-and-infosec-amp-nbsp-concerns",
        
          title: "Interview with WSB TV about MARTA IT and InfoSec&amp;nbsp;concerns",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/11/13/interview-with-wsb-tv-about-marta-it-and-infosec-concerns/";
          
        },
      },{id: "post-thoughts-about-the-amp-8220-textalyzer-amp-8221",
        
          title: "Thoughts about the &amp;#8220;Textalyzer&amp;#8221;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/10/30/thoughts-about-the-textalyzer/";
          
        },
      },{id: "post-lit-reviews-are-not-fun",
        
          title: "Lit Reviews Are Not Fun",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/10/28/lit-reviews-are-not-fun/";
          
        },
      },{id: "post-wifi-krack-vulnerability-goes-public",
        
          title: "WiFi KRACK vulnerability goes public",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/10/16/wifi-krack-vulnerability-goes-public/";
          
        },
      },{id: "post-it-amp-8217-s-tough-to-write-when-you-amp-8217-re-writing-all-the-amp-nbsp-time",
        
          title: "It&amp;#8217;s tough to write, when you&amp;#8217;re writing all the&amp;nbsp;time!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/10/16/its-tough-to-write-when-youre-writing-all-the-time/";
          
        },
      },{id: "post-how-helicopter-parents-are-ruining-college-students",
        
          title: "How helicopter parents are ruining college students",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/09/04/how-helicopter-parents-are-ruining-college-students/";
          
        },
      },{id: "post-10-things-every-college-professor-hates",
        
          title: "10 Things Every College Professor Hates",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/08/29/10-things-every-college-professor-hates/";
          
        },
      },{id: "post-a-great-way-to-start-the-semester",
        
          title: "A great way to start the semester",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/08/28/a-great-way-to-start-the-semester/";
          
        },
      },{id: "post-2011-seccdc-competition",
        
          title: "2011 SECCDC competition",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011/03/23/2011-seccdc-competition/";
          
        },
      },{id: "post-an-infrequent-blogger",
        
          title: "An infrequent blogger",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011/03/13/an-infrequent-blogger/";
          
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
            },},{id: "talks-cybersecurity-risk-management-for-parish-leadership",
          title: 'Cybersecurity Risk Management for Parish Leadership',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2025-06-14-cybersecurity-for-everyone%20copy/";
            },},{id: "talks-cybersecurity-hygiene-for-everyone",
          title: 'Cybersecurity Hygiene for Everyone',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2025-06-14-cybersecurity-for-everyone/";
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
