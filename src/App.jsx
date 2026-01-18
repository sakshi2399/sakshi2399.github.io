import React, { useState } from 'react';
import {
  ArrowRight,
  Box,
  Command,
  Download,
  ExternalLink,
  Github,
  GitBranch,
  GraduationCap,
  Hash,
  Layers,
  Linkedin,
  Mail,
  Server,
  Activity,
  X,
  BookOpen
} from 'lucide-react';
import { GlitchText } from './components/GlitchText.jsx';
import { ParticleNetwork } from './components/ParticleNetwork.jsx';
import { TiltCard } from './components/TiltCard.jsx';
import { useScrollSpy } from './hooks/useScrollSpy.js';
import { portfolio } from './data/portfolio.js';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
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
    <a
      href={`mailto:${portfolio.profile.email}`}
      className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2"
      title="Email"
    >
      <Mail className="w-3 h-3" />
      <span className="text-[10px] font-mono">CONTACT</span>
    </a>
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

const HeroSection = ({ onNavigate }) => (
  <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
    <ParticleNetwork />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

    <div className="max-w-7xl w-full px-6 relative z-10 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/30 border border-blue-500/20 text-blue-400 text-xs font-mono mb-8 backdrop-blur-sm animate-in fade-in zoom-in duration-1000">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
        </span>
        SYSTEM ONLINE // READY
      </div>

      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6">
        <GlitchText text="SAKSHI" className="text-white" /> <br />
        <GlitchText text="KHOSE" className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600" />
      </h1>

      <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
        {portfolio.profile.tagline}. <br></br>I build scalable <span className="text-white font-medium">pipelines</span> and{' '}
        <span className="text-white font-medium">AI systems</span> that power enterprise intelligence.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          href={portfolio.profile.resume}
          download="Sakshi_Khose_Resume.pdf"
          className="group relative px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase rounded-full overflow-hidden hover:scale-105 transition-transform flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" /> Resume
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href={portfolio.profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group relative px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm tracking-widest uppercase rounded-full overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
        >
          <Linkedin className="w-4 h-4" /> Connect
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <button
          onClick={() => onNavigate('projects')}
          className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
        >
          View Projects
        </button>
      </div>

      <div className="mt-20 md:mt-32 w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/5 pt-8">
        {portfolio.metrics.map((m, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-white font-mono">{m.value}</span>
            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SkillsSection = ({ activeFilter, onFilter }) => (
  <section id="skills" className="py-24 md:py-32 bg-[#040405] relative border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Layers className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">Tech Arsenal</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Capabilities</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {Object.entries(portfolio.skills).map(([category, items], idx) => (
          <div key={idx} className="mb-8 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.35)]">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full box-shadow-glow" />
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => {
                const isActive = activeFilter === skill;
                return (
                  <button
                    key={skill}
                    onClick={() => onFilter(skill)}
                    className={`group relative px-4 py-2 rounded-lg border text-sm font-mono transition-all duration-300 overflow-hidden ${
                      isActive
                        ? 'bg-blue-600/20 border-blue-500 text-blue-200 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Hash className={`w-3 h-3 ${isActive ? 'text-blue-400' : 'text-gray-600 group-hover:text-gray-400'}`} />
                      {skill}
                    </span>
                    <span
                      className={`absolute inset-0 bg-blue-500/10 transform origin-left transition-transform duration-300 ease-out ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ExperienceSection = ({ activeFilter, onReset }) => (
  <section id="experience" className="py-24 md:py-32 bg-[#030304] relative border-t border-white/5 bg-noise">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-16 md:mb-24">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-mono text-purple-400 uppercase tracking-widest">Data Lineage</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Experience Log</h2>
        </div>
        {activeFilter && (
          <button
            onClick={() => onReset(activeFilter)}
            className="flex items-center gap-2 text-red-400 text-xs hover:text-white font-mono transition-colors"
          >
            <X className="w-3 h-3" /> RESET_FILTER
          </button>
        )}
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-20 space-y-20">
        {portfolio.experience.map((job) => {
          const isMatch = !activeFilter || job.tags.some((t) => t.includes(activeFilter) || activeFilter.includes(t));
          return (
            <div
              key={job.id}
              className={`relative pl-8 md:pl-16 transition-all duration-500 ${
                isMatch ? 'opacity-100 translate-x-0' : 'opacity-30 blur-[1px] translate-x-4'
              }`}
            >
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-[#030304] border-2 border-white/30 z-10 group-hover:border-blue-500 group-hover:scale-125 transition-all" />

              <div className="grid md:grid-cols-12 gap-8 items-start group">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shadow-lg">
                      {job.logoUrl ? (
                        <img src={job.logoUrl} alt={`${job.company} logo`} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <div className={`w-full h-full flex items-center justify-center font-bold text-white text-xl bg-gradient-to-br ${job.color}`}>
                          {job.logo}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.company}</h3>
                      <span className="text-xs font-mono text-gray-500 uppercase">{job.period}</span>
                    </div>
                  </div>
                  <div className="text-lg text-blue-400 font-medium mb-4 pl-1">{job.role}</div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] px-2 py-0.5 rounded-full border transition-all ${
                          tag === activeFilter ? 'bg-blue-500 text-white border-blue-500' : 'bg-white/5 text-gray-500 border-white/10'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-8 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Activity className="w-12 h-12 text-white" />
                  </div>
                  <ul className="space-y-4 relative z-10">
                    {job.highlights.map((point, i) => (
                      <li key={i} className="flex items-start text-gray-400 leading-relaxed group/item hover:text-gray-200 transition-colors">
                        <span className="text-blue-500 mr-3 mt-1.5 text-xs">●</span>
                        {point}
                      </li>
                    ))}
                  </ul>
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
      <div className="mb-16 md:mb-24">
        <div className="flex items-center gap-3 mb-4">
          <Server className="w-5 h-5 text-green-500" />
          <span className="text-sm font-mono text-green-400 uppercase tracking-widest">System Architecture</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Featured Nodes</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.projects.map((proj, i) => {
          const isDimmed = activeFilter && !proj.tags.some((t) => t.includes(activeFilter));
          return (
            <TiltCard key={i} className={`h-full ${isDimmed ? 'opacity-20 grayscale' : 'opacity-100 grayscale-0'}`}>
              <div className="h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col relative overflow-hidden group">
                <div className="absolute top-4 right-4 z-20">
                  <div className="text-[10px] font-mono text-green-500 bg-green-900/20 px-2 py-0.5 rounded border border-green-500/20">
                    {proj.type}
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-xl border border-white/10 w-fit mb-6 group-hover:border-blue-500/30 transition-colors">
                  <Box className="w-6 h-6 text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">{proj.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{proj.desc}</p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-[10px] px-2 py-1 rounded bg-black border font-mono transition-colors ${
                        t === activeFilter ? 'border-blue-500 text-blue-400' : 'border-white/10 text-gray-500'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 bg-black/95 p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10 translate-y-4 group-hover:translate-y-0">
                  <h4 className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-widest border-b border-gray-800 pb-2">Data Flow</h4>
                  <div className="space-y-3">
                    {proj.architecture.map((step, k) => (
                      <div key={k} className="flex items-center text-xs font-mono text-gray-300">
                        <span className="text-blue-500 mr-3">{k + 1}</span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </div>
  </section>
);

const EducationSection = () => (
  <section id="education" className="py-24 md:py-32 bg-[#030304] relative border-t border-white/5 bg-noise">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16 md:mb-24">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="w-5 h-5 text-teal-500" />
          <span className="text-sm font-mono text-teal-400 uppercase tracking-widest">Knowledge Base</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Education</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {portfolio.education.map((edu, idx) => (
          <TiltCard key={idx} className="h-full">
            <div className="h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-teal-500/30 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <BookOpen className="w-24 h-24 text-teal-400" />
              </div>

              <div className="relative z-10">
                <span className="text-xs font-mono text-teal-400 border border-teal-500/20 bg-teal-900/10 px-2 py-1 rounded mb-4 inline-block">
                  {edu.period}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <div className="text-lg text-gray-400 mb-6 flex items-center gap-2">
                  <span>{edu.school}</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full" />
                  <span className="text-sm text-gray-500">{edu.location}</span>
                </div>

                <div className="flex items-center gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Activity className="w-4 h-4 text-teal-500" />
                    GPA: <span className="text-white font-mono">{edu.gpa}</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-6">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">Key Coursework</span>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5 hover:text-teal-300 hover:border-teal-500/30 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-32 bg-black relative overflow-hidden border-t border-white/5 bg-radial-fade">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent" />

    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-blue-300 mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/15 border border-blue-800/50">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> STATUS: AVAILABLE
        </span>
        <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">Timezone: MST (UTC-7)</span>
        <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">Typical response: &lt; 24h</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#0b0d14] border border-white/10 rounded-3xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300 mb-3">Collaboration</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Initialize Collaboration.</h2>
          <p className="text-lg text-gray-400 mb-8">
            Optimizing data infrastructures. Available for data engineering, data analyst, consulting roles.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigator.clipboard.writeText(portfolio.profile.email)}
              className="group inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white text-black font-semibold shadow-lg hover:-translate-y-[1px] transition-transform"
            >
              <Mail className="w-4 h-4" /> Copy Email
            </button>
            <a
              href={`mailto:${portfolio.profile.email}?subject=Hi%20Sakshi%2C%20let%27s%20talk%20data%20platforms`}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/15 text-white hover:bg-white/5 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Book 15m intro
            </a>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 grid gap-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Preferred Channels</span>
            <span className="text-[10px] px-2 py-1 rounded-full bg-blue-500/10 text-blue-200 border border-blue-500/20">fastest</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://linkedin.com/in/sakshikhose"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-black border border-white/10 text-gray-200 hover:border-blue-500/50 hover:text-white transition-all"
            >
              <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-blue-400" /> LinkedIn
              <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-white" />
            </a>
            <a
              href={portfolio.profile.contact}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-black border border-white/10 text-gray-200 hover:border-blue-500/50 hover:text-white transition-all"
            >
              <Github className="w-4 h-4 text-gray-400 group-hover:text-blue-400" /> GitHub
              <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-white" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            {[['Focus', 'Data Platforms / GenAI'], ['Location', portfolio.profile.location], ['Availability', portfolio.profile.availability], ['Response SLA', '< 24 hrs']].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-[#0d0f15] border border-white/10 p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-gray-500">{label}</div>
                <div className="text-sm text-white mt-1">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="mt-24 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 text-[10px] text-gray-600 font-mono uppercase tracking-widest">
      <div>
        <span>&copy; 2025 SAKSHI KHOSE</span>
        <span className="mx-4 text-blue-900">|</span>
        <span>SYSTEM_VER_5.0</span>
      </div>
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <span>Server Time: {new Date().toLocaleTimeString()}</span>
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
      </div>
    </div>
  </section>
);

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
      <ContactSection />
    </div>
  );
};

export default App;
