// ─────────────────────────────────────────────────────────────────────────────
//  ResearchSocial — Shared Data Layer
//  Loaded by both index.html and profile.html
// ─────────────────────────────────────────────────────────────────────────────

const RS_USERS = {
  AlicePSY: {
    handle: 'AlicePSY',
    name: 'Dr. Alice Pemberton',
    initials: 'AP',
    color: '#818cf8',
    avatar: null,
    title: 'Associate Professor',
    affiliation: 'MIT Brain & Cognitive Sciences',
    location: 'Cambridge, MA',
    joined: 'March 2023',
    bio: 'Cognitive neuroscientist studying the interplay between sleep architecture and declarative memory consolidation. Former postdoc at Stanford Sleep Lab. Passionate about open science and rigorous pre-registration.',
    interests: ['Sleep & Memory', 'EEG/fMRI Methods', 'Open Science', 'Longitudinal Design'],
    website: 'https://alice-psy.example.com',
    followers: 1240,
    following: 318,
    papers: 24,
    citations: 1870,
    openToCollaborate: true,
    badges: [
      { id: 'early', label: 'Early Researcher', icon: '🌱', desc: 'One of the first 500 members' },
      { id: 'prolific', label: 'Prolific Poster', icon: '✍️', desc: 'Published 20+ posts' },
      { id: 'reviewer', label: 'Helpful Reviewer', icon: '🔍', desc: 'Left 50+ peer comments' },
      { id: 'collab', label: 'Collaboration Star', icon: '🤝', desc: 'Accepted 10+ collab requests' }
    ],
    postIds: ['p1', 'p7r']
  },
  MarcusKBio: {
    handle: 'MarcusKBio',
    name: 'Marcus Kimura, PhD',
    initials: 'MK',
    color: '#34d399',
    avatar: null,
    title: 'Senior Research Scientist',
    affiliation: 'Broad Institute of MIT & Harvard',
    location: 'Cambridge, MA',
    joined: 'June 2023',
    bio: 'Molecular biologist focused on CRISPR-Cas9 precision engineering in human iPSCs. Building safer genome editing pipelines for clinical translation. Lab PI since 2021.',
    interests: ['CRISPR/Cas9', 'iPSC Engineering', 'Off-target Analysis', 'Gene Therapy'],
    website: null,
    followers: 2105,
    following: 204,
    papers: 41,
    citations: 4320,
    openToCollaborate: true,
    badges: [
      { id: 'early', label: 'Early Researcher', icon: '🌱', desc: 'One of the first 500 members' },
      { id: 'trending', label: 'Trending Post', icon: '🔥', desc: 'Post reached top 10 trending' },
      { id: 'cited', label: 'Highly Cited', icon: '📚', desc: 'Over 1000 citations on platform' },
      { id: 'mentor', label: 'Mentor', icon: '🎓', desc: 'Mentored 5+ early-career researchers' }
    ],
    postIds: ['p2']
  },
  SophiaLEcon: {
    handle: 'SophiaLEcon',
    name: 'Sophia Laurent',
    initials: 'SL',
    color: '#f87171',
    avatar: null,
    title: 'PhD Candidate',
    affiliation: 'London School of Economics',
    location: 'London, UK',
    joined: 'September 2023',
    bio: 'Behavioral economist researching how economic instability reshapes cognitive heuristics and risk preferences. My dissertation examines loss aversion under hyperinflationary regimes. JStor Fellow 2025.',
    interests: ['Loss Aversion', 'Behavioral Finance', 'Field Experiments', 'Prospect Theory'],
    website: null,
    followers: 876,
    following: 445,
    papers: 8,
    citations: 390,
    openToCollaborate: false,
    badges: [
      { id: 'preregistered', label: 'Pre-registered', icon: '📋', desc: 'All studies pre-registered on OSF' },
      { id: 'open', label: 'Open Data', icon: '🔓', desc: 'All datasets publicly available' },
      { id: 'early', label: 'Early Researcher', icon: '🌱', desc: 'One of the first 500 members' }
    ],
    postIds: ['p3']
  },
  DrJayaNeuro: {
    handle: 'DrJayaNeuro',
    name: 'Dr. Jaya Krishnamurthy',
    initials: 'JN',
    color: '#a78bfa',
    avatar: null,
    title: 'Clinical Research Fellow',
    affiliation: 'Johns Hopkins School of Medicine',
    location: 'Baltimore, MD',
    joined: 'January 2024',
    bio: 'Psychiatrist-scientist investigating the neural mechanisms of metacognition in anxiety disorders. Combines fMRI, computational modelling, and clinical assessment to develop transdiagnostic biomarkers.',
    interests: ['Anxiety Disorders', 'Metacognition', 'fMRI', 'Computational Psychiatry'],
    website: 'https://jaya-neuro.example.com',
    followers: 641,
    following: 389,
    papers: 13,
    citations: 710,
    openToCollaborate: true,
    badges: [
      { id: 'reviewer', label: 'Helpful Reviewer', icon: '🔍', desc: 'Left 50+ peer comments' },
      { id: 'collab', label: 'Collaboration Star', icon: '🤝', desc: 'Accepted 10+ collab requests' },
      { id: 'clinical', label: 'Clinical Bridge', icon: '🏥', desc: 'Bridges clinical and basic research' }
    ],
    postIds: ['p4']
  },
  ElenaCLIM: {
    handle: 'ElenaCLIM',
    name: 'Elena Castillo, DrPH',
    initials: 'EC',
    color: '#fbbf24',
    avatar: null,
    title: 'Research Director',
    affiliation: 'Harvard T.H. Chan School of Public Health',
    location: 'Boston, MA',
    joined: 'February 2023',
    bio: 'Environmental epidemiologist specializing in climate-health intersections, particularly urban heat, air quality, and pediatric respiratory outcomes. Co-investigator on 3 NIH-funded climate adaptation studies.',
    interests: ['Climate & Health', 'Urban Heat Islands', 'Pediatric Epidemiology', 'Meta-analysis'],
    website: null,
    followers: 3280,
    following: 177,
    papers: 58,
    citations: 9100,
    openToCollaborate: false,
    badges: [
      { id: 'cited', label: 'Highly Cited', icon: '📚', desc: 'Over 1000 citations on platform' },
      { id: 'trending', label: 'Trending Post', icon: '🔥', desc: 'Post reached top 10 trending' },
      { id: 'prolific', label: 'Prolific Poster', icon: '✍️', desc: 'Published 20+ posts' },
      { id: 'mentor', label: 'Mentor', icon: '🎓', desc: 'Mentored 5+ early-career researchers' },
      { id: 'early', label: 'Early Researcher', icon: '🌱', desc: 'One of the first 500 members' }
    ],
    postIds: ['p5']
  },
  TaroMATH: {
    handle: 'TaroMATH',
    name: 'Taro Nakashima, PhD',
    initials: 'TM',
    color: '#38bdf8',
    avatar: null,
    title: 'Computational Biologist',
    affiliation: 'Wellcome Sanger Institute',
    location: 'Cambridge, UK',
    joined: 'April 2023',
    bio: 'Mathematician turned computational biologist. I develop topological data analysis methods for single-cell genomics. Currently fascinated by persistent homology applied to developmental trajectories.',
    interests: ['Topological Data Analysis', 'scRNA-seq', 'Bioinformatics', 'Machine Learning'],
    website: 'https://taro-math.example.com',
    followers: 1560,
    following: 521,
    papers: 19,
    citations: 2240,
    openToCollaborate: true,
    badges: [
      { id: 'early', label: 'Early Researcher', icon: '🌱', desc: 'One of the first 500 members' },
      { id: 'open', label: 'Open Data', icon: '🔓', desc: 'All datasets publicly available' },
      { id: 'trending', label: 'Trending Post', icon: '🔥', desc: 'Post reached top 10 trending' },
      { id: 'preregistered', label: 'Pre-registered', icon: '📋', desc: 'All studies pre-registered on OSF' }
    ],
    postIds: ['p6']
  },
  PriyaDEV: {
    handle: 'PriyaDEV',
    name: 'Priya Devkota, MSc',
    initials: 'PD',
    color: '#4ade80',
    avatar: null,
    title: 'Doctoral Researcher',
    affiliation: 'University of Amsterdam',
    location: 'Amsterdam, NL',
    joined: 'October 2023',
    bio: 'Developmental psychologist studying adolescent stress physiology. Champion of null result publishing and transparent science. Pre-register everything. Peer reviewer at JCPP and Dev Psych.',
    interests: ['Adolescent Health', 'Stress Physiology', 'Null Results', 'Screen Time Research'],
    website: null,
    followers: 2870,
    following: 603,
    papers: 11,
    citations: 880,
    openToCollaborate: true,
    badges: [
      { id: 'open', label: 'Open Data', icon: '🔓', desc: 'All datasets publicly available' },
      { id: 'preregistered', label: 'Pre-registered', icon: '📋', desc: 'All studies pre-registered on OSF' },
      { id: 'trending', label: 'Trending Post', icon: '🔥', desc: 'Post reached top 10 trending' },
      { id: 'reviewer', label: 'Helpful Reviewer', icon: '🔍', desc: 'Left 50+ peer comments' }
    ],
    postIds: ['p7']
  },
  OmarFLING: {
    handle: 'OmarFLING',
    name: 'Omar Al-Farsi, MSc',
    initials: 'OF',
    color: '#fb923c',
    avatar: null,
    title: 'PhD Student',
    affiliation: 'University of Edinburgh',
    location: 'Edinburgh, UK',
    joined: 'July 2024',
    bio: 'Cross-cultural psychologist validating cognitive tools across linguistic and cultural contexts. My work bridges psychometrics, cultural psychology, and decision science. ESRC Doctoral Fellow.',
    interests: ['Cross-cultural Psychology', 'Psychometrics', 'Cognitive Reflection', 'Decision Making'],
    website: null,
    followers: 423,
    following: 267,
    papers: 4,
    citations: 95,
    openToCollaborate: true,
    badges: [
      { id: 'early', label: 'Early Researcher', icon: '🌱', desc: 'One of the first 500 members' },
      { id: 'preregistered', label: 'Pre-registered', icon: '📋', desc: 'All studies pre-registered on OSF' }
    ],
    postIds: ['p8']
  }
};

const RS_POSTS = [
  {
    id: 'p1',
    type: 'proposal', badgeClass: 'badge-proposal', badgeText: 'Proposal',
    authorHandle: 'AlicePSY',
    time: '2h ago',
    title: 'Sleep Deprivation & Working Memory: A 6-Week Longitudinal Study',
    excerpt: 'This proposal investigates the cumulative effects of chronic sleep restriction (≤6 hrs/night) on working memory capacity and attentional control. Using a within-subjects design with n=120 university students, we will measure EEG theta oscillations during N-back tasks at baseline, 3-week, and 6-week intervals.',
    tags: [{label:'#sleep',cls:''},{label:'#cognition',cls:'green'},{label:'#memory',cls:'blue'},{label:'#EEG',cls:''},{label:'#longitudinal',cls:'orange'}],
    likes: 94, comments: 17, chart: 'line'
  },
  {
    id: 'p2',
    type: 'findings', badgeClass: 'badge-findings', badgeText: 'Findings',
    authorHandle: 'MarcusKBio',
    time: '4h ago',
    title: 'CRISPR-Cas9 Off-Target Editing Rates in Pluripotent Stem Cells Revised',
    excerpt: 'Our whole-genome sequencing of 48 iPSC lines edited with SpCas9 reveals a 3.2× lower off-target SNV rate than previously reported when guide RNA secondary structure is computationally optimized. These findings challenge current safety estimation models used in clinical trial approval pipelines.',
    tags: [{label:'#genomics',cls:'green'},{label:'#CRISPR',cls:''},{label:'#stemcells',cls:'teal'},{label:'#safety',cls:'red'}],
    likes: 212, comments: 38, chart: 'bar'
  },
  {
    id: 'p3',
    type: 'study', badgeClass: 'badge-study', badgeText: 'Study',
    authorHandle: 'SophiaLEcon',
    time: '6h ago',
    title: 'Loss Aversion Asymmetry Under Inflationary Pressure: Behavioral Field Study',
    excerpt: 'Using a pre-registered field experiment with 3,400 participants across two economic regimes (stable vs. 8%+ CPI), we examine whether classical loss-aversion ratios (~2:1) hold under high inflation. Preliminary data suggest a compressed ratio of 1.4:1, indicating reduced risk sensitivity in economically stressed populations.',
    tags: [{label:'#behavioral-econ',cls:'orange'},{label:'#loss-aversion',cls:''},{label:'#field-study',cls:'blue'},{label:'#inflation',cls:'red'}],
    likes: 156, comments: 29, chart: 'scatter'
  },
  {
    id: 'p4',
    type: 'proposal', badgeClass: 'badge-proposal', badgeText: 'Proposal',
    authorHandle: 'DrJayaNeuro',
    time: '9h ago',
    title: 'Neural Correlates of Metacognitive Accuracy in Anxiety Disorders',
    excerpt: 'We propose examining fMRI BOLD responses in prefrontal cortex and anterior cingulate during metacognitive accuracy tasks in 80 participants (40 GAD, 40 controls). Our hypotheses are grounded in the metacognitive model of anxiety and prior work showing reduced PFC-ACC coupling in high-trait-anxious individuals.',
    tags: [{label:'#anxiety',cls:'red'},{label:'#metacognition',cls:''},{label:'#fMRI',cls:'blue'},{label:'#neuroscience',cls:''}],
    likes: 78, comments: 14, chart: 'brain'
  },
  {
    id: 'p5',
    type: 'review', badgeClass: 'badge-review', badgeText: 'Review',
    authorHandle: 'ElenaCLIM',
    time: '12h ago',
    title: 'Systematic Review: Urban Heat Island Effects on Pediatric Respiratory Health',
    excerpt: 'Meta-analysis of 67 studies (n=2.1M, 2000–2024) quantifying the dose-response relationship between nighttime urban heat island intensity and pediatric asthma emergency visits. Pooled OR = 1.28 (95% CI: 1.19–1.38) per 1°C UHI increment, with stronger effects in low-income districts.',
    tags: [{label:'#climate',cls:'teal'},{label:'#pediatrics',cls:'blue'},{label:'#asthma',cls:'red'},{label:'#meta-analysis',cls:''},{label:'#public-health',cls:'green'}],
    likes: 303, comments: 52, chart: 'area'
  },
  {
    id: 'p6',
    type: 'study', badgeClass: 'badge-study', badgeText: 'Study',
    authorHandle: 'TaroMATH',
    time: '18h ago',
    title: 'Topological Data Analysis of Single-Cell RNA-seq Reveals Hidden Cell Lineages',
    excerpt: 'Applying persistent homology to scRNA-seq data from 82,000 hematopoietic stem cells, we identify 3 previously undescribed progenitor sub-populations that standard clustering algorithms collapse into known lineages. Validation via CITE-seq protein co-expression confirms distinct surface marker profiles.',
    tags: [{label:'#scRNA-seq',cls:''},{label:'#TDA',cls:'green'},{label:'#bioinformatics',cls:'blue'},{label:'#stem-cells',cls:'teal'}],
    likes: 187, comments: 31, chart: 'cluster'
  },
  {
    id: 'p7',
    type: 'findings', badgeClass: 'badge-findings', badgeText: 'Findings',
    authorHandle: 'PriyaDEV',
    time: '1d ago',
    title: 'Screen Time & Adolescent Cortisol: No Significant Effect After Confound Adjustment',
    excerpt: 'Contrary to popular discourse, our pre-registered study (n=680, ages 13–17) finds no significant association between recreational screen time and salivary cortisol levels once socioeconomic status, sleep duration, and physical activity are included as covariates (β = 0.04, p = .41).',
    tags: [{label:'#screen-time',cls:''},{label:'#cortisol',cls:'orange'},{label:'#adolescents',cls:'blue'},{label:'#null-result',cls:'red'}],
    likes: 441, comments: 73, chart: 'regression'
  },
  {
    id: 'p8',
    type: 'proposal', badgeClass: 'badge-proposal', badgeText: 'Proposal',
    authorHandle: 'OmarFLING',
    time: '1d ago',
    title: 'Cross-Cultural Validation of the Cognitive Reflection Test in 14 Languages',
    excerpt: 'The CRT remains poorly validated outside Western WEIRD populations. We propose simultaneous administration to 7,200 participants across 14 linguistic-cultural groups to test for measurement invariance, differential item functioning, and predictive validity on real-world decision quality outcomes.',
    tags: [{label:'#cognition',cls:''},{label:'#cross-cultural',cls:'orange'},{label:'#psychometrics',cls:'green'},{label:'#CRT',cls:''}],
    likes: 129, comments: 22, chart: 'bar2'
  }
];

// ─── localStorage helpers ───
function rsGetLS(key, def) {
  try { const v = localStorage.getItem(key); return v !== null ? JSON.parse(v) : def; }
  catch { return def; }
}
function rsSetLS(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} }

// ─── Auth helpers ───
function rsGetCurrentUser() { return rsGetLS('rs_currentUser', null); }
function rsSetCurrentUser(handle) { rsSetLS('rs_currentUser', handle); }
function rsLogout() { localStorage.removeItem('rs_currentUser'); }

// ─── Account store (registered users may override defaults) ───
function rsGetUserProfile(handle) {
  const accounts = rsGetLS('rs_accounts', {});
  const base = RS_USERS[handle] || null;
  if (!base) return null;
  return Object.assign({}, base, accounts[handle] || {});
}
function rsUpdateUserProfile(handle, patch) {
  const accounts = rsGetLS('rs_accounts', {});
  accounts[handle] = Object.assign({}, accounts[handle] || {}, patch);
  rsSetLS('rs_accounts', accounts);
}

// ─── Follow helpers ───
function rsIsFollowing(handle) {
  const f = rsGetLS('rs_following', {});
  return !!f[handle];
}
function rsToggleFollow(handle) {
  const f = rsGetLS('rs_following', {});
  f[handle] = !f[handle];
  rsSetLS('rs_following', f);
  return f[handle];
}

// ─── Profile URL helper ───
function rsProfileURL(handle) {
  // Works for both root-relative and subdirectory deployments
  const base = window.location.pathname.replace(/\/(profile\/.*)?$/, '');
  return base + '/profile/' + handle + '.html';
}
