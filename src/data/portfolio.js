export const portfolio = {
  profile: {
    name: 'Sakshi Khose',
    role: 'Data Engineer | Data Analyst',
    tagline: '3+ Years Experience | Data Engineer & Data Analyst',
    location: 'Tucson, AZ',
    availability: 'Open to Opportunities',
    bio: 'I transform chaotic data swamps into pristine lakes of insight. With over 4 years of experience, I build scalable ETL architectures, optimize query performance for Fortune 500s, and integrate Generative AI into enterprise workflows.',
    email: 'sakshikhose@arizona.edu',
    contact: 'https://github.com/sakshi2399',
    linkedin: 'https://linkedin.com/in/sakshikhose',
    resume: '/resume/Sakshi_Khose_Resume.pdf'
  },
  metrics: [
    { label: 'Reporting Turnaround Time', value: '-90%' },
    { label: 'Data Quality Issues', value: '-15%' },
    { label: 'Critical KPIs Preserved', value: '20+' },
    { label: 'Stakeholders Supported', value: '20+' },
    { label: 'Pipeline Processing Time', value: '-10 days' },
    { label: 'Query Performance', value: '+40%' },
    { label: 'Data Accuracy', value: '99%+' },
    { label: 'Automated Validations', value: '15%' }
  ],
  skills: {
    'Core Engineering': ['Python(Intermediate)', 'SQL(Advanced)', 'PySpark'],
    'Cloud Infrastructure': [ 'AWS( Athena, S3, RedShift, Glue, EC2, Lambda)', 'Oracle Cloud Infrastructure'],
    'Big Data & ETL': ['Spark', 'Airflow', 'Kafka', 'dbt', 'Snowflake'],
    'DevOps & Tools': ['Docker', 'Kubernetes', 'Terraform', 'Git', 'CI/CD'],
    'AI & Analytics': [ 'Tableau', 'PowerBI', 'Looker'],
    'Business Intelligence': ['Dimesional Modeling(Star & Snowflake Schema','KPI & Metric Definition']  
  },
  education: [
    {
      degree: 'Masters in Management Information Systems',
      school: 'University of Arizona',
      location: 'Tucson, AZ',
      period: 'Aug 2024 - Dec 2025',
      gpa: '4.0 / 4.0',
      courses: ['Enterprise Data Management', 'Data Mining', 'Business Intelligence']
    },
    {
      degree: 'Bachelors in Information Technology',
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
      period: 'Jan 2025 - Dec 2025',
      logo: 'UA',
      logoUrl: '/logos/uofa.jpg',
      color: 'from-blue-500 to-blue-700',
      tags: ['SQL', 'Education', 'Modeling'],
      highlights: [
        'Mentored 60+ graduate students in Database Management Systems (MIS 331/531), teaching advanced SQL optimization, dimensional modeling (star/snowflake schemas), and ETL design patterns.',
        'Designed hands-on labs covering query performance tuning, indexing strategies, and transaction management, improving student project scores by 25%.'
      ]
    },
    {
      id: 'oracle',
      company: 'Oracle',
      role: 'Data Engineer',
      period: 'Aug 2022 - Jul 2024',
      logo: 'O',
      logoUrl: '/logos/oracle.jpg',
      color: 'from-red-500 to-orange-600',
      tags: ['Oracle APEX', 'Python', 'GenAI', 'SQL', 'ETL'],
      highlights: [
        'Led end-to-end migration of HDFC Bank loan processing workflows to Oracle APEX, reducing approval turnaround time by 10 days and processing 5,000+ applications monthly with 99.8% data accuracy.',
        'Architected AI Fusion Query Generator using Generative AI models and Oracle Cloud Infrastructure, enabling business users to generate SQL queries via natural language increasing self-service adoption by 30% and reducing analyst query backlog by 40%.',
        'Optimized financial ETL pipelines processing 2M+ daily transactions by implementing incremental loads and parallel processing in PL/SQL, improving data accuracy by 15% and reducing pipeline runtime by 35%.'
      ]
    },
    {
      id: 'ey',
      company: 'Ernst & Young',
      role: 'Data Engineer',
      period: 'Jul 2021 - Aug 2022',
      logo: 'EY',
      logoUrl: '/logos/ey.jpeg',
      color: 'from-yellow-400 to-yellow-600',
      tags: ['Hive', 'Presto', 'API', 'SQL', 'Real-time'],
      highlights: [
        'Integrated Supertax REST API into enterprise procurement platform, automating tax compliance validation for 10,000+ vendor transactions monthly and reducing manual data entry effort by 30%.',
        'Built real-time data pipelines using Hive and Presto on AWS EMR, processing 500GB+ daily procurement data with <5-minute latency and enabling instant insights for C-suite stakeholders.',
        'Reduced procurement workflow operational costs by 15% through data-driven process optimization, implementing automated anomaly detection and duplicate vendor identification using Python and SQL.'
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
