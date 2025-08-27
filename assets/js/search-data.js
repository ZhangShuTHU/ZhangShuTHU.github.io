// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-关于-about",
    title: "关于/About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-论著-publications",
          title: "论著/Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-履历-cv",
          title: "履历/CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-项目列表",
              title: "项目列表",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/SummaryCN/";
              },
            },{id: "dropdown-summary",
              title: "Summary",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/Summary/";
              },
            },{id: "dropdown-feature",
              title: "Feature",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "news-today-i-am-being-awarded-my-doctorate",
          title: 'Today I am being awarded my doctorate.',
          description: "",
          section: "News",},{id: "news-nature-sustainability-paper-was-featured",
          title: 'Nature Sustainability paper was featured.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_20240827_NS_Feature.html";
            },},{id: "news-we-got-a-project-of-national-science-and-technology-major-program",
          title: 'We got a project of National Science and Technology Major Program.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_20241201_majorP.html";
            },},{id: "news-i-have-been-granted-the-nsfc-young-scientists-fund-c",
          title: 'I have been granted the NSFC Young Scientists Fund (C).',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_20250827_NSFCProj.html";
            },},{id: "projects-绿色低碳发展转型中的关键管理科学问题与政策研究",
          title: '绿色低碳发展转型中的关键管理科学问题与政策研究',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2016%E5%9B%BD%E8%87%AA%E7%84%B6%E9%87%8D%E5%A4%A7.html";
            },},{id: "projects-可持续能源转型之路-全球和中爱能源-经济-环境-气候多模型创新集成模拟",
          title: '可持续能源转型之路：全球和中爱能源-经济-环境-气候多模型创新集成模拟',
          description: "CHIMERA – Multi-model innovations in Integrated Assessment Modelling of Global, Chinese, and Irish energy-economy-environment-climate systems investigating deep decarbonisation pathways from the Paris Agreement to the United Nations sustainable development goals",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2018%E5%9B%BD%E8%87%AA%E7%84%B6%E4%B8%AD%E7%88%B1.html";
            },},{id: "projects-气候变化风险的全球治理与国内应对关键问题研究",
          title: '气候变化风险的全球治理与国内应对关键问题研究',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2018%E7%A7%91%E6%8A%80%E9%83%A8.html";
            },},{id: "projects-城市能源系统可持续发展-政策设计-运营优化与市场协调",
          title: '城市能源系统可持续发展：政策设计、运营优化与市场协调',
          description: "STEP-UP - Socio-Techno-Economic Pathways for sustainable Urban energy develoPment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2019%E5%9B%BD%E8%87%AA%E7%84%B6%E4%B8%AD%E6%AC%A7.html";
            },},{id: "projects-cd-links",
          title: 'CD-LINKS',
          description: "Linking Climate and Development Policies – Leveraging International Networks and Knowledge Sharing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_CD-LINKS.html";
            },},{id: "projects-engage",
          title: 'ENGAGE',
          description: "Exploring National and Global Actions to reduce Greenhouse gas Emissions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_ENGAGE.html";
            },},{id: "projects-green-china",
          title: 'GREEN CHINA',
          description: "Towards Cleaner and More Sustainable Growth",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2021%E4%B8%96%E7%95%8C%E9%93%B6%E8%A1%8C.html";
            },},{id: "projects-committed",
          title: 'COMMITTED',
          description: "Climate pOlicy assessment and Mitigation Modeling to Integrate national and global TransiTion pathways for Environmental-friendly Development",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_COMMITTED.html";
            },},{id: "projects-2060年碳中和愿景下的电力转型路径与政策研究",
          title: '2060年碳中和愿景下的电力转型路径与政策研究',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2023%E6%95%99%E8%82%B2%E9%83%A8.html";
            },},{id: "projects-newpathways",
          title: 'NEWPATHWAYS',
          description: "New Pathways for Equitable Climate Action in Line with the Paris Agreement and Sustainable Development",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_NEWPATHWAYS.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%61%6E%67-%73@%6D%61%69%6C.%74%73%69%6E%67%68%75%61.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zhangshuthu", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-1977-0446", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Shu-Zhang-22/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=3dCECpgAAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=57196101151", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
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
