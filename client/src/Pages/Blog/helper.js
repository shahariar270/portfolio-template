import featuredImage from '../../assets/images/home.jpg'

export const createBlogSlug = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const featuredPosts = [
  {
    category: 'React',
    title: 'How I Structure Reusable React Components',
    excerpt: 'A practical look at component boundaries, props, state, and styling patterns that keep frontend projects easier to grow.',
    date: 'Jan 12, 2026',
    readTime: '6 min read',
    image: featuredImage,
    content: [
      'Reusable components start with clear responsibility. A component should own one job, expose a small set of props, and avoid mixing layout decisions with business logic unless that behavior is truly part of the component.',
      'For portfolio and client projects, I prefer building small UI primitives first, then composing them into sections. This keeps the code easier to test, easier to restyle, and easier to change when a new feature arrives.',
      'The practical goal is not abstraction for its own sake. The goal is to make repeated interface patterns predictable while keeping each page flexible enough for real content.'
    ],
  },
  {
    category: 'Frontend',
    title: 'Responsive UI Checklist for Portfolio Projects',
    excerpt: 'The layout, spacing, image, and typography checks I use before shipping a professional responsive interface.',
    date: 'Jan 20, 2026',
    readTime: '5 min read',
    image: featuredImage,
    content: [
      'Responsive design should be checked from the layout level first. If the main shell uses fixed widths or locked heights, individual cards and buttons cannot fully solve the mobile experience.',
      'I check navigation wrapping, image ratios, form spacing, card grids, and long text behavior at common mobile, tablet, and desktop widths. The best responsive interfaces feel planned, not squeezed.',
      'A good final pass includes testing real page content instead of only short placeholder text, because long titles and contact details are where many layouts break.'
    ],
  },
  {
    category: 'MERN',
    title: 'Connecting React Forms to Express APIs',
    excerpt: 'A clean form submission pattern with validation, request handling, API feedback, and useful error states.',
    date: 'Feb 02, 2026',
    readTime: '7 min read',
    image: featuredImage,
    content: [
      'A clean contact form needs more than input fields. The frontend should validate required values, submit a predictable payload, and show clear success or failure feedback after the API response.',
      'On the backend, Express should validate the request again, keep response shapes consistent, and return useful status codes. This makes the frontend simpler and helps debug real production issues.',
      'For a professional portfolio, this pattern creates a form that is easy to connect to email services, databases, dashboards, or CRM workflows later.'
    ],
  },
]
