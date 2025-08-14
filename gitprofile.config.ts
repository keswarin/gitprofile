const CONFIG = {
  github: {
    username: 'keswarin', // GitHub username
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'ระบบบริการรถรางอัจฉริยะ ในมหาวิทยาลัยราชภัฎเชียงใหม่ ศูนย์แม่ริม',
          description: 'ระบบติดตามรถรางและบริการข้อมูลแบบเรียลไทม์',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Keswarin',
    description: '',
    imageURL: '',
  },
  social: {
    facebook: 'แอล(keswarin2020)',
    instagram: '_chongeun',
    phone: '092-385-1336',
    email: 'keswarin.th@gmail.com',
  },
  resume: {
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  skills: [
    'PHP', 'Laravel', 'JavaScript', 'React.js', 'MySQL', 'PostgreSQL',
    'Git', 'Docker', 'PHPUnit', 'CSS', 'Antd', 'Tailwind',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
  ],
  publications: [],
  blog: {
    header: 'Podcasts, Music & Videos I Love',
    items: [
      {
        title: '🎧 Design Better Podcast',
        description: 'คุยกับดีไซเนอร์ระดับโลก เรื่อง UX, DesignOps, และการทำงานจริง',
        imageUrl: 'https://img.youtube.com/vi/2gq8GfQ9t4M/hqdefault.jpg',
        link: 'https://open.spotify.com/show/ลิงก์จริง',
      },
      {
        title: '🎙️ Darknet Diaries',
        description: 'เรื่องเล่าด้านความปลอดภัยไซเบอร์ ฟังง่าย ลุ้นเหมือนสารคดี',
        imageUrl: 'https://img.youtube.com/vi/6Yx-g5mQv2E/hqdefault.jpg',
        link: 'https://open.spotify.com/show/ลิงก์จริง',
      },
      {
        title: '🎵 My Focus Playlist',
        description: 'เพลงที่ฟังเวลาทำงาน ออกแบบ และเขียนโค้ด',
        imageUrl: 'https://i.imgur.com/8N0mQyB.png',
        link: 'https://open.spotify.com/playlist/ลิงก์จริง',
      },
      {
        title: '▶️ Don Norman on UX',
        description: 'วิดีโอสั้น ๆ ว่าทำไม UX สำคัญกับธุรกิจ',
        imageUrl: 'https://img.youtube.com/vi/2gq8GfQ9t4M/hqdefault.jpg',
        link: 'https://www.youtube.com/watch?v=2gq8GfQ9t4M',
      },
    ],
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
      'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween',
      'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe',
      'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid',
      'lemonade', 'night', 'coffee', 'winter', 'dim', 'nord', 'sunset',
      'caramellatte', 'abyss', 'silk', 'procyon',
    ],
  },
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
