import thumbCode from '../../assets/images/home.jpg'
import thumbUi from '../../assets/images/profile.jpg'

export const menuArray = [
    {
        label: 'All',
        value: 'all'
    },
    {
        label: 'Web Design',
        value: 'design'
    },
    {
        label: 'Web Development',
        value: 'development'
    }
]

export const projectArray = [
    {
        label: 'Dashboard System',
        category: 'development',
        type: 'Analytics Platform',
        description: 'A fully functional admin dashboard with analytics, data visualization, user management, and responsive UI components.',
        technologies: ['React', 'Charts', 'Sass'],
        liveDemo: '',
        link: '',
        image: thumbCode,
    },
    {
        label: 'Design System',
        category: 'design',
        type: 'UI Foundation',
        description: 'A scalable design system containing typography, colors, spacing, reusable UI components, and guidelines to maintain consistent branding.',
        technologies: ['Tokens', 'Components', 'Guidelines'],
        liveDemo: '',
        link: '',
        image: thumbUi,
    },
    {
        label: 'WillTube',
        category: 'development',
        type: 'Media Tool',
        description: 'A YouTube video downloader app that allows users to fetch and download videos in multiple formats with a clean and intuitive interface.',
        technologies: ['React', 'API', 'Node'],
        liveDemo: '',
        link: '',
        image: thumbCode,
    },
    {
        label: 'Todo',
        category: 'development',
        type: 'Productivity App',
        description: 'A simple and efficient todo application with task creation, editing, filtering, and persistent local storage support.',
        technologies: ['React', 'Local Storage', 'UX'],
        liveDemo: '',
        link: '',
        image: thumbUi,
    },
];
