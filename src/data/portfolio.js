export const portfolio = {
  profile: {
    name: 'Sakshi Khose',
    role: 'Staff Data Engineer',
    tagline: 'Architecting Intelligent Data Systems',
    location: 'Tucson, AZ',
    availability: 'Open to Opportunities',
    bio: 'I transform chaotic data swamps into pristine lakes of insight. With over 4 years of experience, I build scalable ETL architectures, optimize query performance for Fortune 500s, and integrate Generative AI into enterprise workflows.',
    contact: 'https://github.com/sakshi2399',
    linkedin: 'https://linkedin.com/in/sakshikhose'
  },
  metrics: [
    { label: 'Pipeline Efficiency', value: '+30%' },
    { label: 'Data Latency', value: '<1s' },
    { label: 'Cloud Native', value: '100%' },
    { label: 'User Adoption', value: '+30%' }
  ],
  skills: {
    'Core Engineering': ['Python', 'SQL', 'Scala', 'Java'],
    'Cloud Infrastructure': ['AWS', 'Redshift', 'Athena', 'Glue', 'S3', 'EC2', 'Lambda'],
    'Big Data & ETL': ['Spark', 'Airflow', 'Kafka', 'dbt', 'Snowflake'],
    'DevOps & Tools': ['Docker', 'Kubernetes', 'Terraform', 'Git', 'CI/CD'],
    'AI & Analytics': ['GenAI', 'NLP', 'Tableau', 'PowerBI']
  },
  education: [
    {
      degree: 'Master’s in Management Information Systems',
      school: 'University of Arizona',
      location: 'Tucson, AZ',
      period: 'Aug 2024 - Dec 2025',
      gpa: '4.0 / 4.0',
      courses: ['Enterprise Data Management', 'Data Mining', 'Business Intelligence']
    },
    {
      degree: 'B.E. in Information Technology',
      school: 'University of Mumbai',
      location: 'India',
      period: 'Aug 2017 - Jul 2021',
      gpa: '3.6 / 4.0',
      courses: ['Big Data Analytics', 'Data Structures', 'Algorithms']
    }
  ],
  experience: [
    {
      id: 'ua',
      company: 'Univ. of Arizona',
      role: 'Teaching Assistant',
      period: '2025 - Present',
      logo: 'UA',
      logoUrl: '/logos/ua.svg',
      color: 'from-blue-500 to-blue-700',
      tags: ['SQL', 'Education', 'Modeling'],
      highlights: [
        'Mentoring students in Database Management Systems (MIS 331/531).',
        'Teaching SQL optimization, relational modeling, and ETL design patterns.'
      ]
    },
    {
      id: 'oracle',
      company: 'Oracle',
      role: 'Staff Data Engineer',
      period: '2022 - 2024',
      logo: 'O',
      logoUrl: '/logos/oracle.svg',
      color: 'from-red-500 to-orange-600',
      tags: ['Oracle APEX', 'Python', 'GenAI', 'SQL', 'ETL'],
      highlights: [
        'Led migration of HDFC Bank workflows to Oracle APEX, reducing loan processing by 10 days.',
        'Architected AI Fusion Query Generator using LLMs, boosting non-tech user adoption by 30%.',
        'Optimized financial ETL pipelines, improving data accuracy by 15%.'
      ]
    },
    {
      id: 'ey',
      company: 'Ernst & Young',
      role: 'Data Engineer',
      period: '2021 - 2022',
      logo: 'EY',
      logoUrl: '/logos/ey.svg',
      color: 'from-yellow-400 to-yellow-600',
      tags: ['Hive', 'Presto', 'API', 'SQL', 'Real-time'],
      highlights: [
        'Integrated Supertax REST API for tax compliance, cutting manual effort by 30%.',
        'Built real-time Hive/Presto pipelines for instant procurement insights.',
        'Reduced procurement workflow costs by 15% through data process optimization.'
      ]
    }
  ],
  projects: [
    {
      title: 'AI Fusion Query Gen',
      type: 'GenAI Product',
      tags: ['Python', 'GenAI', 'Oracle Cloud', 'NLP'],
      tech: ['Python', 'OpenAI', 'Oracle Cloud'],
      desc: 'Empowering non-technical stakeholders to query complex databases using natural language prompts.',
      architecture: [
        'User Prompt -> OpenAI API (Intent)',
        'Intent -> Metadata Map (Oracle)',
        'Query Generation -> Validation',
        'Result -> Natural Language Response'
      ]
    },
    {
      title: 'Sabdam CRM',
      type: 'AI Analysis Engine',
      tags: ['Python', 'NLP', 'Flask', 'AI'],
      tech: ['NLP', 'Speech-to-Text', 'Flask'],
      desc: 'Real-time call transcription and sentiment analysis engine for customer support enhancement.',
      architecture: [
        'Audio Stream -> Speech-to-Text Model',
        'Text -> Sentiment Classifier (BERT)',
        'Output -> CRM Dashboard Overlay'
      ]
    },
    {
      title: 'Enterprise Warehouse',
      type: 'ETL Architecture',
      tags: ['SSIS', 'Redshift', 'Athena', 'SQL'],
      tech: ['SSIS', 'Redshift', 'Athena'],
      desc: 'Scalable warehouse integrating weather and demographic data to correlate environmental factors with sales.',
      architecture: [
        'Raw Data (API/CSV) -> S3 Staging',
        'S3 -> Glue Crawler -> Athena',
        'Transformation (dbt) -> Redshift',
        'Visualization -> PowerBI'
      ]
    }
  ]
};
