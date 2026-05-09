import Expense from '../../../public/expense.png'
import layoff from '../../../public/leyoff.png';
import react from '../../../public/react.png';

export const createBlogSlug = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const featuredPosts = [
  {
    category: 'Career',
    title: 'Navigating Tech Layoffs and the AI Revolution',
    excerpt: 'An analysis of why mass layoffs are happening and how developers can stay relevant by embracing AI rather than fearing it.',
    date: 'Jan 12, 2026',
    readTime: '6 min read',
    image: layoff,
    content: [
      "সাম্প্রতিক সময়ে টেক ইন্ডাস্ট্রিতে যে গণ-ছাঁটাই (mass layoffs) চলছে, সেটা আমাদের অনেককেই নিজের ক্যারিয়ার নিয়ে নতুন করে ভাবতে বাধ্য করছে। গত কয়েকদিন আমি এই বিষয়টা নিয়ে একটু পড়াশোনা করেছি, কিছুটা বোঝার চেষ্টা করেছি—আর সেখান থেকে কয়েকটা জিনিস পরিষ্কার হয়ে উঠেছে। প্রথমত, বর্তমানে প্রোডাক্ট-বেসড কোম্পানিগুলো কিছুটা কঠিন সময় পার করলেও, সার্ভিস-বেসড কোম্পানিগুলোর চিত্র ভিন্ন। তবে এখানেও একটা বড় পরিবর্তন লক্ষ্য করা যাচ্ছে। আগে যে প্রজেক্টটি শেষ করতে ১০ জন ডেভেলপারের প্রয়োজন হতো, এখন AI + ২-৩ জন দক্ষ ডেভেলপার দিয়েই সেই কাজ সম্পন্ন করা সম্ভব হচ্ছে। ফলে কোম্পানিগুলো তাদের অপারেশনাল খরচ কমাতে 'অতিরিক্ত' জনবল ছাঁটাই করছে। দ্বিতীয়ত,বিগত বছর গুলাতে ডেভেলপারের সংখ্যা বাড়লেও, মানসম্মত ডেভেলপারের অভাব রয়েই গেছে। অনেকেই সময়ের সাথে নিজেকে আপডেট না করে শুধু 'Copy-Paste' নির্ভর কোডিংয়ে অভ্যস্ত হয়ে পড়েছিলেন। কিন্তু বর্তমান যুগে সাধারণ কোড লেখার কাজটুকু AI অনায়াসেই করে দিচ্ছে। যারা নিজেদের AI-এর সাথে মানিয়ে নিতে পারেননি বা লজিক্যাল ইমপ্লিমেন্টেশনে দক্ষ নন, তারাই এখন সবচেয়ে বেশি ঝুঁকির মুখে পড়ছেন। সবকিছু মিলিয়ে আমার কাছে যেটা সবচেয়ে গুরুত্বপূর্ণ মনে হয়েছে— AI আমাদের জায়গা নেবে কি না, সেটা বড় প্রশ্ন না। বরং প্রশ্নটা হওয়া উচিত—আমি কি AI-কে ব্যবহার করে নিজের কাজকে আরও ভালো, দ্রুত আর স্মার্ট করতে পারছি?"
    ],
  },
  {
    category: 'Projects',
    title: 'Building a Minimalist Expense Tracker with MERN Stack',
    excerpt: 'How I applied MongoDB, Express, React, and Node.js to solve personal finance tracking with a user-friendly experience.',
    date: 'Jan 20, 2026',
    readTime: '5 min read',
    image: Expense,
    content: [
      "ব্যক্তিগত আর্থিক হিসাব রাখা অনেকের কাছেই বেশ জটিল মনে হয়। এই জটিলতাকে সহজ করতে এবং একটি Minimalist & User-friendly অভিজ্ঞতার লক্ষ্যে আমি তৈরি করেছি Expense Tracker। এটি মূলত আমার MERN Stack (MongoDB, Express.js, React, Node.js) নলেজকে বাস্তব প্রয়োগে রূপান্তর করার একটি প্রচেষ্টা।"
    ],
  },
  {
    category: 'React',
    title: 'Understanding React Reconciliation: The Performance Boss',
    excerpt: 'A deep dive into the Virtual DOM and how React intelligently updates the UI using the Diffing Algorithm.',
    date: 'Feb 02, 2026',
    readTime: '7 min read',
    image: react,
    content: [
      "Reconciliation Algorithm — React এর আসল ম্যাজিক। যখন আপনি React এ কোনো state বা props আপডেট করো, React আসলে পুরো DOM আপডেট করে না! বরং এটি করে — নিচের প্রক্রিয়া ফলো করে। ১. React প্রথমে মেমোরিতে একটা Virtual DOM রাখে। যা real DOM এর একটা হালকা কপি। ২. এরপর যখন state বা props পরিবর্তন হয়, React নতুন একটা Virtual DOM Tree তৈরি করে। ৩. তারপর পুরোনো ও নতুন Virtual DOM এর মধ্যে diff করে দেখে কোন অংশে পরিবর্তন এসেছে। ৪. যেই অংশে পরিবর্তন পাওয়া যায়, শুধু সেই specific অংশটাই Real DOM এ আপডেট করে। এভাবেই React অপ্রয়োজনীয় DOM পরিবর্তন এড়ায় এবং পারফর্মেন্স বাড়ায় বহুগুনে।"
    ],
  },
]