
import { Feature, Internship, Innovation } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'customer-app',
    title: 'Customer App',
    icon: '📱',
    shortDesc: 'Smart search, AI recommendations, and pre-ordering.',
    longDesc: [
      'Discover perfect restaurants instantly through location-based search with advanced filters for cuisine, price, and dietary needs.',
      'AI delivers personalized suggestions based on your past visits and mood.'
    ],
    highlights: [
      { title: 'Smart Search', desc: 'AI-driven restaurant discovery and filters.' },
      { title: 'Real-Time Wait Times', desc: 'Skip the guessing game with live table availability.' },
      { title: 'PIN-Based Ordering', desc: 'No verbal mix-ups. Order in app, share a 4-digit PIN.' }
    ]
  },
  {
    id: 'waiter-ai',
    title: 'Waiter AI Co-Pilot',
    icon: '👨‍💼',
    shortDesc: 'Real-time prompts and customer recognition.',
    longDesc: [
      'Empower your staff with AI that recognizes regulars and suggests optimal upselling opportunities.',
      'Reduce service latency and improve customer satisfaction through intelligent task prioritization.'
    ],
    highlights: [
      { title: 'Recognition', desc: 'Instantly identify returning guests and their preferences.' },
      { title: 'Upselling', desc: 'Data-backed suggestions to increase average order value.' }
    ]
  },
  {
    id: 'kitchen',
    title: 'Kitchen Management',
    icon: '🍳',
    shortDesc: 'AI chef assignment and dish synchronization.',
    longDesc: [
      'Optimize your back-of-house operations with smart routing and synchronization.',
      'Ensure every dish at the table is served hot and at the same time.'
    ],
    highlights: [
      { title: 'Chef Assignment', desc: 'Route orders to the best-suited station automatically.' },
      { title: 'Synchronization', desc: 'Intelligent timing to ensure table-wide readiness.' }
    ]
  },
  {
    id: 'billing',
    title: 'Smart Billing',
    icon: '💳',
    shortDesc: 'QR payments and multi-method support.',
    longDesc: [
      'The fastest way to settle bills. No more waiting for the machine.',
      'Integrated splitting, tip management, and digital receipt generation.'
    ],
    highlights: [
      { title: 'QR Payments', desc: 'Scan and pay at the table instantly.' },
      { title: 'Split Billing', desc: 'Complex math handled by the platform.' }
    ]
  },
  {
    id: 'dashboard',
    title: 'Owner Dashboard',
    icon: '📊',
    shortDesc: 'Real-time revenue tracking and analytics.',
    longDesc: [
      'Control your business from anywhere with live metrics and performance data.',
      'Deep insights into inventory usage and staff efficiency.'
    ],
    highlights: [
      { title: 'Live P&L', desc: 'Real-time profit and loss tracking.' },
      { title: 'Inventory AI', desc: 'Predictive alerts for low-stock items.' }
    ]
  },
  {
    id: 'ai-engine',
    title: 'AI Intelligence Engine',
    icon: '🚀',
    shortDesc: 'Pattern recognition and predictive analytics.',
    longDesc: [
      'The brain behind CareVo. Learning from every transaction to improve your margins.',
      'Dynamic pricing support and demand forecasting.'
    ],
    highlights: [
      { title: 'Demand Forecast', desc: 'Know how many guests to expect tomorrow.' },
      { title: 'Churn Prediction', desc: 'Identify fading customers before they leave.' }
    ]
  }
];

export const INTERNSHIPS: Internship[] = [
  {
    id: 1,
    title: "Backend Development Intern",
    location: "Remote / Bangalore",
    type: "Internship (3-6 months)",
    description: "Learn to build microservices architecture powering restaurant operations. Perfect for freshers wanting hands-on experience with real systems.",
    requirements: [
      "Basic understanding of programming concepts",
      "Willingness to learn .NET Core/C# or Python",
      "Interest in database design and APIs"
    ],
    responsibilities: [
      "Assist in developing backend services",
      "Learn about microservices architecture",
      "Work with PostgreSQL databases"
    ]
  },
  {
    id: 2,
    title: "Mobile App Development Intern",
    location: "Remote / Bangalore",
    type: "Internship (3-6 months)",
    description: "Build beautiful mobile apps for restaurant customers and staff. Learn React Native, state management, and real-time features.",
    requirements: [
      "Basic knowledge of JavaScript/React",
      "Interest in mobile app development",
      "Willingness to learn React Native"
    ],
    responsibilities: [
      "Help develop customer-facing mobile apps",
      "Implement UI components and features",
      "Collaborate with design team"
    ]
  },
  {
    id: 3,
    title: "AI/ML Intern",
    location: "Remote / Bangalore",
    type: "Internship (3-6 months)",
    description: "Work on cutting-edge AI projects for restaurants. Learn machine learning, computer vision, and recommendation systems.",
    requirements: [
      "Basic Python knowledge",
      "Interest in machine learning/AI",
      "Willingness to learn TensorFlow/PyTorch"
    ],
    responsibilities: [
      "Assist in ML model development",
      "Work on image recognition projects",
      "Document experiments and results"
    ]
  }
];

export const INNOVATIONS: Innovation[] = [
  {
    id: 'iot',
    title: 'IoT Cylinder Sensors',
    icon: '🔧',
    description: 'Real-time gas cylinder level monitoring with automated low-stock alerts.',
    techStack: ['MQTT Protocol', 'Real-time Tracking', 'Automated Alerts']
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning Recognition',
    icon: '🧠',
    description: 'TensorFlow-powered dish quality detection and recognition.',
    techStack: ['Quality Detection', 'Dish Identification', 'Compliance Verification']
  },
  {
    id: '3d-viz',
    title: '3D Visualization',
    icon: '🎨',
    description: 'Advanced 3D rendering for bakery items and dishes.',
    techStack: ['3D Generation', 'Cake Visualization', 'AR Menu']
  },
  {
    id: 'ml-pipeline',
    title: 'ML/AI Pipeline',
    icon: '⚡',
    description: 'Scalable machine learning infrastructure for predictive insights.',
    techStack: ['Feature Store', 'Model Registry', 'Real-time Inference']
  }
];
