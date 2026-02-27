import React, { useState } from 'react';
import {
  Activity,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  ChevronRight,
  Cloud,
  Code,
  Command,
  Database,
  ExternalLink,
  FileText,
  Github,
  GitBranch,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Server,
  ShieldCheck,
  Terminal,
  Trophy,
  User,
  X
} from 'lucide-react';
import { GlitchText } from './components/GlitchText.jsx';
import { ParticleNetwork } from './components/ParticleNetwork.jsx';
import { TiltCard } from './components/TiltCard.jsx';
import { useScrollSpy } from './hooks/useScrollSpy.js';
import { portfolio } from './data/portfolio.js';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'awards', label: 'Awards' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

const PROFILE_LINKS = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/sakshikhose', icon: Linkedin, stat: '500+ Connections', color: 'from-blue-600 to-blue-400' },
  { name: 'GitHub', url: 'https://github.com/sakshi2399', icon: Github, stat: '15+ Repositories', color: 'from-gray-600 to-gray-400' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/sakshi2399/', icon: Code, stat: '209 Submissions', color: 'from-amber-600 to-yellow-400' },
  { name: 'Tableau Public', url: 'https://public.tableau.com/app/profile/sakshi.sandeep.khose/vizzes', icon: BarChart3, stat: '5+ Vizzes', color: 'from-indigo-600 to-purple-400' },
  { name: 'Medium', url: 'https://medium.com/@sakshikhose2399/about', icon: BookOpen, stat: 'Tech Articles', color: 'from-green-600 to-emerald-400' },
  { name: 'Resume', url: '/resume/Sakshi_Khose_Resume.pdf', icon: FileText, stat: 'Download PDF', color: 'from-rose-600 to-pink-400', download: true }
];

const ABOUT_HIGHLIGHTS = [
  { label: 'Experience', value: '3+ Years', detail: 'Oracle · Ernst & Young', icon: Award },
  { label: 'Education', value: 'MS MIS', detail: 'University of Arizona (4.0 GPA)', icon: GraduationCap },
  { label: 'Specialization', value: 'Data Engineering', detail: 'ETL · Cloud · Analytics · GenAI', icon: Database },
  { label: 'Availability', value: 'Open to Work', detail: 'San Mateo, CA · Open to Relocate', icon: Activity }
];

const CommandBar = ({ activeSection, onNavigate }) => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 p-1.5 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl ring-1 ring-white/5">
    {NAV_ITEMS.map((sec) => (
      <button
        key={sec.id}
        onClick={() => onNavigate(sec.id)}
        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          activeSection === sec.id ? 'bg-white/10 text-white shadow-inner' : 'text-gray-400 hover:text-white hover:bg-white/5'
        }`}
      >
        {sec.label}
      </button>
    ))}
    <div className="w-[1px] h-4 bg-gray-700 mx-2" />
    <span className="px-3 py-1.5 text-xs font-mono text-gray-400">
      {portfolio.profile.email.split(',')[0]}
    </span>
    <a
      href={portfolio.profile.linkedin}
      className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
      title="LinkedIn"
      target="_blank"
      rel="noreferrer"
    >
      <Linkedin className="w-4 h-4" />
    </a>
    <a
      href={portfolio.profile.contact}
      className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
      title="GitHub"
      target="_blank"
      rel="noreferrer"
    >
      <Github className="w-4 h-4" />
    </a>
  </nav>
);

const MobileMenu = ({ menuOpen, onToggle, onNavigate }) => (
  <>
    <div className="fixed top-4 right-4 z-50 md:hidden">
      <button onClick={onToggle} className="p-3 bg-black/80 backdrop-blur border border-gray-800 rounded-full text-white">
        {menuOpen ? <X className="w-5 h-5" /> : <Command className="w-5 h-5" />}
      </button>
    </div>
    {menuOpen && (
      <div className="fixed inset-0 z-40 bg-black/95 flex items-center justify-center md:hidden">
        <div className="flex flex-col gap-6 text-center">
          {NAV_ITEMS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => onNavigate(sec.id)}
              className="text-2xl font-bold uppercase tracking-widest text-gray-400 hover:text-white"
            >
              {sec.label}
            </button>
          ))}
        </div>
      </div>
    )}
  </>
);

const HeroSection = ({ onNavigate }) => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      <ParticleNetwork />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl w-full px-6 relative z-10 flex flex-col gap-10">

        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
            <GlitchText text="SAKSHI" className="text-white" />
            <br />
            <GlitchText text="KHOSE" className="text-white" />
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-blue-400" /> San Mateo, CA</span>
            <span className="text-gray-600">|</span>
            <span className="inline-flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-blue-400" /> MS MIS, University of Arizona</span>
            <span className="text-gray-600">|</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Open to Opportunities</span>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
            3+ Years Experience | Data Engineer & Data Analyst. <br />
            I build scalable <span className="text-white font-medium">pipelines</span> and{' '}
            <span className="text-white font-medium">AI systems</span> that power enterprise intelligence.
          </p>
        </div>

        {/* Profile Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
          {PROFILE_LINKS.map(({ name, url, icon: Icon, stat, color, download }) => (
            <a
              key={name}
              href={url}
              target={download ? undefined : '_blank'}
              rel={download ? undefined : 'noreferrer'}
              download={download ? 'Sakshi_Khose_Resume.pdf' : undefined}
              aria-label={`${name} — ${stat}`}
              className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 p-4 transition-all duration-300 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-400 transition-colors" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">{name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat}</p>
              </div>
            </a>
          ))}
        </div>

        {/* About Me Section */}
        <section id="about" className="w-full rounded-[32px] bg-white/5 border border-white/10 p-6 md:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] text-left">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono uppercase tracking-[0.35em] text-gray-400 mb-8">
            <span className="flex items-center gap-2"><User className="w-4 h-4" /> About Me</span>
          </div>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-8">
            {/* Left column: quick highlights */}
            <div className="space-y-4">
              {ABOUT_HIGHLIGHTS.map(({ label, value, detail, icon: Icon }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{label}</span>
                    <Icon className="w-4 h-4 text-blue-300" />
                  </div>
                  <p className="text-2xl font-bold text-white mt-2">{value}</p>
                  <p className="text-xs text-blue-300 mt-1">{detail}</p>
                </div>
              ))}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-2xl border border-white/10 bg-blue-500/10 text-blue-300 text-sm font-medium hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
              >
                <Layers className="w-4 h-4" /> View Projects <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right column: bio & career journey */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed">
                  {portfolio.profile.bio}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mt-4">
                  I graduated with my Master&apos;s in MIS from the University of Arizona in December 2025 with a 4.0 GPA. During my time there, I mentored 60+ graduate students as a Teaching Assistant in Database Management Systems.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Career Journey</h3>
                <div className="space-y-4">
                  {portfolio.experience.map((exp) => (
                    <div key={exp.id} className="flex items-start gap-4">
                      <img src={exp.logoUrl} alt={exp.company} className="w-10 h-10 rounded-full object-cover shrink-0 border border-white/10" />
                      <div>
                        <p className="text-white font-medium">{exp.role}</p>
                        <p className="text-sm text-gray-400">{exp.company} &middot; {exp.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {portfolio.metrics.slice(0, 4).map((m, i) => (
                  <div key={`${m.label}-${i}`} className="rounded-xl border border-white/10 bg-black/30 p-3 text-center">
                    <p className="text-xl font-bold text-white">{m.value}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

const SkillsSection = ({ activeFilter, onFilter }) => {
  const [activeTab, setActiveTab] = useState(0);
  const categories = Object.entries(portfolio.skills);
  const totalSkills = categories.reduce((sum, [, items]) => sum + items.length, 0);

  const techIcons = {
    'Data Engineering Core': Database,
    'Cloud & Warehousing': Cloud,
    'Big Data & Orchestration': Server,
    'Data Quality & Modeling': ShieldCheck,
    'Analytics & Visualization': BarChart3,
    'DevOps & Platform': Terminal
  };

  const featuredStats = [
    { label: 'Pipelines automated', value: '35+', detail: 'Airflow · Spark · dbt' },
    { label: 'Cloud warehouses', value: '4', detail: 'Snowflake · Redshift · OCI' },
    { label: 'Dashboards shipped', value: '25+', detail: 'Tableau · Power BI · Looker' }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#040405] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">Tech Arsenal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Capabilities Dashboard</h2>
            <p className="text-sm text-gray-500 mt-3">Interactive view of the stacks used to build high-uptime data platforms.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400 uppercase tracking-[0.3em]">
            <span>Total skills: {totalSkills}</span>
            {activeFilter && <span className="text-blue-400">Filtering by: {activeFilter}</span>}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {featuredStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/5 border border-white/10 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
              <p className="text-xs font-mono text-gray-500 uppercase tracking-[0.35em]">{stat.label}</p>
              <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
              <p className="text-sm text-blue-300 mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Daily Toolkit — tools you actually use */}
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-500 rounded-full" />
              Daily Toolkit
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { tool: 'Python', context: 'ETL · Spark · Pandas', icon: '🐍' },
                { tool: 'SQL / PL-SQL', context: 'Optimization · Modeling', icon: '🗄️' },
                { tool: 'AWS', context: 'S3 · Glue · Redshift · Athena', icon: '☁️' },
                { tool: 'Snowflake', context: 'Warehousing · dbt', icon: '❄️' },
                { tool: 'Airflow', context: 'Orchestration · DAGs', icon: '🔄' },
                { tool: 'Kafka', context: 'Streaming · CDC', icon: '📡' },
                { tool: 'Tableau / Power BI', context: 'Dashboards · KPIs', icon: '📊' },
                { tool: 'Docker / K8s', context: 'Containerization · CI/CD', icon: '🐳' }
              ].map((item) => (
                <div key={item.tool} className="rounded-xl border border-white/10 bg-black/30 p-3.5 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-white font-medium text-sm">{item.tool}</span>
                  </div>
                  <p className="text-[11px] text-gray-500">{item.context}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What I Deliver — impact-oriented view */}
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-500 rounded-full" />
              What I Deliver
            </h3>
            <div className="space-y-5">
              {[
                { area: 'ETL & Pipeline Architecture', desc: 'Design and optimize batch & real-time pipelines processing millions of records daily.', metric: '2M+ rows/day', color: 'border-blue-500/40 bg-blue-500/5' },
                { area: 'Cloud Data Platforms', desc: 'Build warehouse solutions on AWS, Snowflake & OCI with SLA-grade reliability.', metric: '99.8% accuracy', color: 'border-purple-500/40 bg-purple-500/5' },
                { area: 'Analytics & BI', desc: 'Turn raw data into executive dashboards, KPIs, and self-service analytics layers.', metric: '90% faster reports', color: 'border-emerald-500/40 bg-emerald-500/5' },
                { area: 'GenAI Integration', desc: 'Embed LLMs into data workflows — natural-language querying, automated insights.', metric: '30% more adoption', color: 'border-amber-500/40 bg-amber-500/5' }
              ].map((item) => (
                <div key={item.area} className={`rounded-2xl border ${item.color} p-4`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-semibold text-sm">{item.area}</span>
                    <span className="text-xs font-mono text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded-full">{item.metric}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabbed Tech Stack Interface */}
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar / Tabs */}
            <div className="lg:w-1/3 space-y-2">
                {categories.map(([category, items], idx) => {
                    const isActive = activeTab === idx;
                    const Icon = techIcons[category] || Terminal;
                    return (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                                isActive 
                                    ? 'bg-blue-600/10 border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.1)]' 
                                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-500 text-white' : 'bg-white/5 text-gray-400 group-hover:text-white'}`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <span className={`font-medium ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                    {category}
                                </span>
                            </div>
                            <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-blue-400 translate-x-1' : 'text-gray-600'}`} />
                        </button>
                    )
                })}
            </div>

            {/* Content Area */}
            <div className="lg:w-2/3">
                <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <h3 className="text-2xl font-bold text-white">{categories[activeTab][0]}</h3>
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono border border-blue-500/20">
                                {categories[activeTab][1].length} Items
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {categories[activeTab][1].map((skill) => {
                                const isActive = activeFilter === skill;
                                return (
                                    <button
                                        key={skill}
                                        onClick={() => onFilter(skill)}
                                        className={`group relative px-4 py-3 rounded-xl border text-sm font-mono text-left transition-all duration-300 overflow-hidden ${
                                            isActive
                                            ? 'bg-blue-600/20 border-blue-500 text-blue-200 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                                            : 'bg-black/20 border-white/5 text-gray-300 hover:border-white/20 hover:bg-white/5 hover:text-white'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2 relative z-10">
                                            <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-blue-400 animate-pulse' : 'bg-gray-600 group-hover:bg-gray-400'}`} />
                                            {skill}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>


                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = ({ activeFilter, onReset }) => (
  <section id="experience" className="py-24 md:py-32 bg-[#030304] relative border-t border-white/5 bg-noise">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-mono text-purple-400 uppercase tracking-widest">Career</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Experience</h2>
          <p className="text-sm text-gray-500 mt-3">Professional roles across enterprise data engineering and analytics.</p>
        </div>
        {activeFilter && (
          <button
            onClick={() => onReset(activeFilter)}
            className="flex items-center gap-2 text-gray-400 text-xs hover:text-white font-mono transition-colors border border-white/10 px-3 py-1.5 rounded-full hover:border-white/20"
          >
            <X className="w-3 h-3" /> Clear filter
          </button>
        )}
      </div>

      <div className="space-y-8">
        {portfolio.experience.map((job, idx) => {
          const isMatch = !activeFilter || job.tags.some((t) => t.includes(activeFilter) || activeFilter.includes(t));
          const colors = [
            { accent: 'from-blue-500 to-cyan-400' },
            { accent: 'from-red-500 to-orange-400' },
            { accent: 'from-yellow-500 to-amber-400' }
          ];
          const color = colors[idx % colors.length];

          return (
            <div
              key={job.id}
              className={`group rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all duration-500 overflow-hidden ${
                isMatch ? 'opacity-100' : 'opacity-30 blur-[1px]'
              }`}
            >
              <div className={`h-1.5 bg-gradient-to-r ${color.accent}`} />

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Company info */}
                  <div className="md:w-72 shrink-0">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 overflow-hidden shrink-0">
                        {job.logoUrl ? (
                          <img src={job.logoUrl} alt={job.company} className="w-full h-full object-cover" loading="lazy" />
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center font-bold text-white bg-gradient-to-br ${job.color}`}>
                            {job.logo}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{job.company}</h3>
                        <p className="text-sm text-gray-500">{job.period}</p>
                      </div>
                    </div>
                    <p className="text-blue-400 font-medium mb-4">{job.role}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-3 py-1 rounded-full border transition-all ${
                            tag === activeFilter ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-white/5 text-gray-500 border-white/10'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex-1 md:border-l md:border-white/10 md:pl-8">
                    <ul className="space-y-3">
                      {job.highlights.map((point, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-400 leading-relaxed hover:text-gray-200 transition-colors">
                          <span className="text-blue-500 mr-3 mt-1.5 text-[8px]">●</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const ProjectsSection = ({ activeFilter }) => (
  <section id="projects" className="py-24 md:py-32 bg-[#050505] relative border-t border-white/5 bg-radial-fade">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Layers className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">Featured Work</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Projects</h2>
        <p className="text-sm text-gray-500 mt-3">End-to-end solutions I&apos;ve designed and built.</p>
      </div>

      <div className="space-y-12">
        {portfolio.projects.map((proj, i) => {
          if (activeFilter && !proj.tags.some(t => t.includes(activeFilter))) return null;

          const gradients = [
            'from-blue-600/20 to-cyan-600/10',
            'from-purple-600/20 to-pink-600/10',
            'from-emerald-600/20 to-teal-600/10'
          ];

          return (
            <div key={i} className="group rounded-3xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all duration-500 overflow-hidden">
              {/* Top gradient accent */}
              <div className={`h-1.5 bg-gradient-to-r ${gradients[i % gradients.length]}`} />

              <div className="p-6 md:p-10">
                <div className="grid md:grid-cols-[1fr_300px] gap-8">
                  {/* Main content */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-mono border border-blue-500/20">{proj.type}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">{proj.title}</h3>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-base">{proj.desc}</p>

                    {/* Architecture flow */}
                    <div className="space-y-3">
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Architecture</span>
                      <div className="rounded-2xl bg-black/40 border border-white/5 p-5">
                        <div className="flex flex-wrap items-center gap-2">
                          {proj.architecture.map((step, idx) => {
                            const parts = step.split('->').map(s => s.trim());
                            return (
                              <React.Fragment key={idx}>
                                {parts.map((part, pIdx) => (
                                  <React.Fragment key={`${idx}-${pIdx}`}>
                                    <span className="bg-white/5 text-gray-300 px-3 py-1.5 rounded-lg border border-white/10 text-sm font-mono hover:border-blue-500/30 hover:text-blue-300 transition-colors whitespace-nowrap">
                                      {part}
                                    </span>
                                    {pIdx < parts.length - 1 && <ArrowRight className="w-4 h-4 text-blue-500/50 shrink-0" />}
                                  </React.Fragment>
                                ))}
                                {idx < proj.architecture.length - 1 && <ArrowRight className="w-4 h-4 text-blue-500/50 shrink-0" />}
                              </React.Fragment>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="flex flex-col justify-between gap-6 md:border-l md:border-white/10 md:pl-8">
                    <div>
                      <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Tech Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {proj.tags.map(tag => (
                          <span key={tag} className="px-3 py-1.5 bg-white/5 text-gray-300 text-xs rounded-lg border border-white/10 font-mono hover:bg-white/10 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-auto">
                      {proj.githubUrl && (
                        <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm text-gray-300 hover:text-white transition-all group/link border border-white/10 hover:border-white/20">
                          <span className="flex items-center gap-2">
                            <Github className="w-4 h-4" /> Source Code
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover/link:text-gray-400 transition-colors" />
                        </a>
                      )}
                      {proj.analyticsUrl && (
                        <a href={proj.analyticsUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between px-4 py-3 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl text-sm text-blue-300 hover:text-blue-200 transition-all group/link border border-blue-500/20 hover:border-blue-500/30">
                          <span className="flex items-center gap-2">
                            <BarChart3 className="w-4 h-4" /> Live Dashboard
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-[#030304] relative border-t border-white/5 bg-noise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-5 h-5 text-teal-500" />
            <span className="text-sm font-mono text-teal-400 uppercase tracking-widest">Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Academic Background</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.education.map((edu, idx) => {
            const colors = [
              { accent: 'from-teal-500 to-emerald-400', badge: 'bg-teal-500/10 text-teal-300 border-teal-500/20' },
              { accent: 'from-blue-500 to-indigo-400', badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20' }
            ];
            const color = colors[idx % colors.length];

            return (
              <div key={idx} className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col">
                <div className={`h-1.5 bg-gradient-to-r ${color.accent}`} />

                <div className="p-6 md:p-8 flex flex-col flex-1 gap-5">
                  {/* Period + GPA */}
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono border ${color.badge}`}>
                      {edu.period}
                    </span>
                    <span className="text-sm font-mono text-white bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      GPA: {edu.gpa}
                    </span>
                  </div>

                  {/* Degree + School */}
                  <div>
                    <h3 className="text-xl font-bold text-white leading-snug group-hover:text-teal-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{edu.school} · {edu.location}</p>
                  </div>

                  {/* Coursework */}
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3 block">Key Coursework</span>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span key={course} className="text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 hover:text-teal-300 hover:border-teal-500/30 transition-colors">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AwardsSection = () => {
  if (!portfolio.awards?.length) return null;

  const awardIcons = [Trophy, Award, Award];
  const awardColors = [
    { accent: 'from-yellow-500 to-amber-400', badge: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20', glow: 'bg-yellow-500/10' },
    { accent: 'from-blue-500 to-cyan-400', badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20', glow: 'bg-blue-500/10' },
    { accent: 'from-emerald-500 to-green-400', badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20', glow: 'bg-emerald-500/10' }
  ];

  return (
    <section id="awards" className="py-24 md:py-32 bg-[#050607] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-mono text-yellow-300 uppercase tracking-widest">Awards &amp; Honors</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Recognition</h2>
          <p className="text-sm text-gray-500 mt-3">Milestones from hackathons, innovation challenges, and enterprise excellence programs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.awards.map((award, idx) => {
            const Icon = awardIcons[idx % awardIcons.length];
            const color = awardColors[idx % awardColors.length];

            return (
              <div key={idx} className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col">
                {/* Gradient accent */}
                <div className={`h-1.5 bg-gradient-to-r ${color.accent}`} />

                <div className="p-6 flex flex-col flex-1 gap-4">
                  {/* Icon + Year */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${color.glow} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white/80" />
                    </div>
                    <span className="text-xs font-mono text-gray-500">{award.year}</span>
                  </div>

                  {/* Org badge */}
                  <span className={`px-3 py-1 rounded-full text-xs font-mono border w-fit ${color.badge}`}>
                    {award.org}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-blue-300 transition-colors">
                    {award.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">{award.description}</p>

                  {/* Link */}
                  {award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 hover:text-white transition-colors mt-auto"
                    >
                      <ExternalLink className="w-3 h-3" /> Learn more
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CertificationsSection = () => (
  <section id="certifications" className="py-24 md:py-32 bg-[#040506] relative border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-mono text-amber-300 uppercase tracking-widest">Licenses &amp; Certifications</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Credentials</h2>
        <p className="text-sm text-gray-500 mt-3">Cloud + data analytics certifications backing hands-on delivery.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {portfolio.certifications.map((cert, idx) => {
          const colors = [
            { accent: 'from-amber-500 to-orange-400', badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20' },
            { accent: 'from-blue-500 to-cyan-400', badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20' },
            { accent: 'from-purple-500 to-indigo-400', badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20' },
            { accent: 'from-emerald-500 to-green-400', badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' }
          ];
          const color = colors[idx % colors.length];

          return (
            <div key={cert.credentialId || idx} className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col">
              <div className={`h-1.5 bg-gradient-to-r ${color.accent}`} />

              <div className="p-6 flex flex-col flex-1 gap-4">
                {/* Issuer + Date */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono border w-fit ${color.badge}`}>
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-mono text-gray-500">{cert.issued}</span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-blue-300 transition-colors">
                  {cert.name}
                </h3>

                {/* Verify link */}
                <div className="mt-auto pt-2">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between w-full px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm text-gray-300 hover:text-white transition-all group/link border border-white/10 hover:border-white/20"
                    >
                      <span className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Verify Credential
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover/link:text-gray-400 transition-colors" />
                    </a>
                  ) : (
                    <p className="text-xs text-gray-500 font-mono">Verification on request</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Let&apos;s Connect</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Open to data engineering, data analyst, and consulting opportunities. I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a
            href={`mailto:${portfolio.profile.email}`}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/20 p-6 transition-all duration-300 flex flex-col gap-4 text-center items-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-white font-medium">Email</p>
              <p className="text-sm text-gray-500 mt-1">{portfolio.profile.email}</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={portfolio.profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/20 p-6 transition-all duration-300 flex flex-col gap-4 text-center items-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center">
              <Linkedin className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-white font-medium">LinkedIn</p>
              <p className="text-sm text-gray-500 mt-1">linkedin.com/in/sakshikhose</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={portfolio.profile.contact}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/20 p-6 transition-all duration-300 flex flex-col gap-4 text-center items-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-gray-500/10 flex items-center justify-center">
              <Github className="w-5 h-5 text-gray-400" />
            </div>
            <div>
              <p className="text-white font-medium">GitHub</p>
              <p className="text-sm text-gray-500 mt-1">github.com/sakshi2399</p>
            </div>
          </a>
        </div>

        {/* Quick info row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            ['Location', portfolio.profile.location],
            ['Availability', portfolio.profile.availability],
            ['Focus', 'Data Platforms / GenAI'],
            ['Response', '< 24 hours']
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500">{label}</p>
              <p className="text-sm text-white mt-1 font-medium">{value}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
          <span>&copy; {currentYear} Sakshi Khose</span>
          <span className="mt-2 md:mt-0">Built with React &amp; Tailwind</span>
        </div>
      </div>
    </section>
  );
};
const App = () => {
  const activeSection = useScrollSpy();
  const [activeFilter, setActiveFilter] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleFilter = (skill) => {
    setActiveFilter((prev) => (prev === skill ? null : skill));
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="bg-[#030304] text-gray-200 selection:bg-blue-500/30 font-sans overflow-x-hidden relative">
      <CommandBar activeSection={activeSection} onNavigate={scrollToSection} />
      <MobileMenu menuOpen={menuOpen} onToggle={() => setMenuOpen((prev) => !prev)} onNavigate={scrollToSection} />

      <HeroSection onNavigate={scrollToSection} />
      <SkillsSection activeFilter={activeFilter} onFilter={handleFilter} />
      <ExperienceSection activeFilter={activeFilter} onReset={handleFilter} />
      <ProjectsSection activeFilter={activeFilter} />
      <EducationSection />
      <AwardsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
};

export default App;
