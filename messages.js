// ─────────────────────────────────────────────────────────────────────────────
//  ResearchSocial — Messaging Data Layer
//  Loaded by messages.html, index.html, profile/*.html
// ─────────────────────────────────────────────────────────────────────────────

// ─── Seed conversations ───────────────────────────────────────────────────────
// Each thread: { id, participants: [handleA, handleB], messages: [...] }
// Each message: { id, from, text, ts (ms), read: bool }

const RS_SEED_THREADS = [
  {
    id: 'thread_AlicePSY_MarcusKBio',
    participants: ['AlicePSY', 'MarcusKBio'],
    messages: [
      { id: 'm001', from: 'MarcusKBio', text: 'Hi Alice! I saw your sleep deprivation proposal — really elegant within-subjects design. Have you considered co-registering with our CRISPR timeline to control for circadian disruption in the iPSC samples?', ts: Date.now() - 7200000, read: true },
      { id: 'm002', from: 'AlicePSY', text: 'Marcus, that\'s a fascinating angle I hadn\'t considered. Cross-system circadian control would strengthen both studies. What\'s your data collection window looking like?', ts: Date.now() - 6900000, read: true },
      { id: 'm003', from: 'MarcusKBio', text: 'We\'re running collections every 8 weeks starting Q2. If you align your EEG baselines to our week 1 sampling, the circadian phase matching should be tight.', ts: Date.now() - 6600000, read: true },
      { id: 'm004', from: 'AlicePSY', text: 'Perfect. I\'ll loop in my biostatistics collaborator. Can we set up a 30-min Zoom this week?', ts: Date.now() - 5400000, read: true },
      { id: 'm005', from: 'MarcusKBio', text: 'Thursday at 3pm EST works for me. I\'ll send a calendar invite.', ts: Date.now() - 5100000, read: true },
      { id: 'm006', from: 'AlicePSY', text: 'Confirmed. Looking forward to it! 🧠', ts: Date.now() - 3600000, read: false },
    ]
  },
  {
    id: 'thread_AlicePSY_PriyaDEV',
    participants: ['AlicePSY', 'PriyaDEV'],
    messages: [
      { id: 'm010', from: 'AlicePSY', text: 'Priya, your null result on screen time + cortisol was incredibly well-executed. The confound adjustment strategy you used is exactly what the field needs more of.', ts: Date.now() - 86400000, read: true },
      { id: 'm011', from: 'PriyaDEV', text: 'Thank you Alice! It was a tough sell to reviewers at first — "where\'s your effect?" 😅 But the pre-registration made it bulletproof.', ts: Date.now() - 82800000, read: true },
      { id: 'm012', from: 'AlicePSY', text: 'I\'m curious — did you control for sleep duration in the cortisol model? I\'m running a related study and want to make sure my designs are compatible for a future meta-analysis.', ts: Date.now() - 79200000, read: true },
      { id: 'm013', from: 'PriyaDEV', text: 'Yes! Sleep duration (actigraphy-estimated), SES composite, and weekly PA minutes. Full model in supplementary Table S4. Happy to share the analysis script.', ts: Date.now() - 75600000, read: true },
      { id: 'm014', from: 'AlicePSY', text: 'That would be amazing. Shared analysis scripts across labs is the future.', ts: Date.now() - 72000000, read: false },
    ]
  },
  {
    id: 'thread_DrJayaNeuro_SophiaLEcon',
    participants: ['DrJayaNeuro', 'SophiaLEcon'],
    messages: [
      { id: 'm020', from: 'SophiaLEcon', text: 'Jaya, I\'ve been thinking about your metacognition fMRI proposal. Loss aversion is deeply metacognitive — we might be measuring the same construct from different angles.', ts: Date.now() - 43200000, read: true },
      { id: 'm021', from: 'DrJayaNeuro', text: 'Sophia! I was literally just reading your inflation paper this morning. The compressed 1.4:1 ratio is striking — I wonder if ACC hyperactivation in GAD mediates that reduction.', ts: Date.now() - 42000000, read: true },
      { id: 'm022', from: 'SophiaLEcon', text: 'That\'s exactly the hypothesis I\'ve been sitting on. ACC-PFC coupling disrupting the normal loss-encoding pathway... it would explain the ratio compression beautifully.', ts: Date.now() - 39600000, read: true },
      { id: 'm023', from: 'DrJayaNeuro', text: 'We should write this up as a theoretical framework paper first. If we can get pilot data from overlapping samples — your behavioral cohort + my clinical sample — this could be a flagship study.', ts: Date.now() - 36000000, read: true },
      { id: 'm024', from: 'SophiaLEcon', text: 'I\'m in. Let me draft a 2-page concept note this weekend and share it with you Monday?', ts: Date.now() - 32400000, read: true },
      { id: 'm025', from: 'DrJayaNeuro', text: 'Please do. I\'ll gather the relevant neuroimaging literature in the meantime. This could be genuinely important work.', ts: Date.now() - 28800000, read: false },
    ]
  },
  {
    id: 'thread_ElenaCLIM_TaroMATH',
    participants: ['ElenaCLIM', 'TaroMATH'],
    messages: [
      { id: 'm030', from: 'ElenaCLIM', text: 'Taro, your TDA scRNA-seq paper is extraordinary. I\'ve been wondering if persistent homology could apply to large-scale environmental health datasets — 2M+ longitudinal health records.', ts: Date.now() - 172800000, read: true },
      { id: 'm031', from: 'TaroMATH', text: 'Elena! Short answer: yes, but you\'d need to think carefully about what topological features you\'re looking for. Are you interested in clustering structure or tracking how subpopulations evolve over time?', ts: Date.now() - 169200000, read: true },
      { id: 'm032', from: 'ElenaCLIM', text: 'Both, actually. I want to identify discrete subpopulations of children with distinct UHI-exposure trajectories AND track how their respiratory outcomes cluster over their developmental arc.', ts: Date.now() - 165600000, read: true },
      { id: 'm033', from: 'TaroMATH', text: 'That\'s a beautiful application. You\'d essentially be computing the "developmental topology" of health trajectories. I know exactly which TDA pipeline to use — let me write something up.', ts: Date.now() - 162000000, read: true },
      { id: 'm034', from: 'ElenaCLIM', text: 'Taro, you might just have saved my NIH R01 renewal. Seriously.', ts: Date.now() - 158400000, read: true },
      { id: 'm035', from: 'TaroMATH', text: 'Ha! Happy to help. Let\'s aim for a methods collaboration — I can be a co-investigator if it works logistically.', ts: Date.now() - 154800000, read: false },
    ]
  },
  {
    id: 'thread_OmarFLING_SophiaLEcon',
    participants: ['OmarFLING', 'SophiaLEcon'],
    messages: [
      { id: 'm040', from: 'OmarFLING', text: 'Hi Sophia — I\'m validating the CRT across 14 languages and want to include a loss-aversion instrument as a criterion validity anchor. Would you consider adapting your field study protocol for cross-cultural use?', ts: Date.now() - 21600000, read: true },
      { id: 'm041', from: 'SophiaLEcon', text: 'Omar, great timing — I\'ve been wanting to test whether the loss-aversion compression I found under inflation is WEIRD-specific or universal. Your CRT validation provides the perfect carrier.', ts: Date.now() - 18000000, read: true },
      { id: 'm042', from: 'OmarFLING', text: 'Exactly my thinking. We could embed a short 6-item loss-framing task inside the CRT battery. Adds maybe 4 minutes per participant.', ts: Date.now() - 14400000, read: true },
      { id: 'm043', from: 'SophiaLEcon', text: 'I can provide the stimulus materials and help with the DIF analysis across language groups. Do you have ethics approval already?', ts: Date.now() - 10800000, read: false },
    ]
  },
  {
    id: 'thread_MarcusKBio_TaroMATH',
    participants: ['MarcusKBio', 'TaroMATH'],
    messages: [
      { id: 'm050', from: 'TaroMATH', text: 'Marcus — I used your iPSC line data as a test case for our TDA pipeline and I think we might be identifying a previously unknown differentiation bottleneck around day 14. Are you aware of any literature on that?', ts: Date.now() - 259200000, read: true },
      { id: 'm051', from: 'MarcusKBio', text: 'Taro, fascinating. Day 14 is exactly when we see the highest variance in off-target editing rates. I\'ve always assumed it was technical noise but you might be detecting a real biological signal.', ts: Date.now() - 255600000, read: true },
      { id: 'm052', from: 'TaroMATH', text: 'The topology shows a "pinch point" — a transient reduction in the number of distinct cell states — right at that timeframe. It\'s very reproducible across all 48 of your lines.', ts: Date.now() - 252000000, read: true },
      { id: 'm053', from: 'MarcusKBio', text: 'If that\'s a genuine bottleneck, it explains so much. We could potentially exploit it for more efficient guide RNA delivery. Can I get access to your analysis output?', ts: Date.now() - 248400000, read: true },
      { id: 'm054', from: 'TaroMATH', text: 'Already packaging it up. I\'ll push a Jupyter notebook to our shared repo by end of week.', ts: Date.now() - 244800000, read: false },
    ]
  }
];

// ─── Thread ID helper ─────────────────────────────────────────────────────────
function rsMakeThreadId(a, b) {
  return 'thread_' + [a, b].sort().join('_');
}

// ─── Initialize seed data if not already present ──────────────────────────────
function rsInitMessages() {
  const existing = rsGetLS('rs_threads', null);
  if (existing !== null) return; // already seeded
  const threads = {};
  RS_SEED_THREADS.forEach(t => {
    threads[t.id] = t;
  });
  rsSetLS('rs_threads', threads);
}

// ─── Get all threads ──────────────────────────────────────────────────────────
function rsGetThreads() {
  rsInitMessages();
  return rsGetLS('rs_threads', {});
}

// ─── Get or create a thread between two users ─────────────────────────────────
function rsGetOrCreateThread(handleA, handleB) {
  const id = rsMakeThreadId(handleA, handleB);
  const threads = rsGetThreads();
  if (!threads[id]) {
    threads[id] = { id, participants: [handleA, handleB], messages: [] };
    rsSetLS('rs_threads', threads);
  }
  return threads[id];
}

// ─── Get threads for a user (inbox) ──────────────────────────────────────────
function rsGetInboxThreads(handle) {
  const threads = rsGetThreads();
  return Object.values(threads)
    .filter(t => t.participants.includes(handle))
    .sort((a, b) => {
      const aLast = a.messages.length ? a.messages[a.messages.length - 1].ts : 0;
      const bLast = b.messages.length ? b.messages[b.messages.length - 1].ts : 0;
      return bLast - aLast;
    });
}

// ─── Get other participant in a thread ────────────────────────────────────────
function rsGetOtherParticipant(thread, myHandle) {
  return thread.participants.find(h => h !== myHandle) || thread.participants[0];
}

// ─── Send a message ────────────────────────────────────────────────────────────
function rsSendMessage(threadId, fromHandle, text) {
  const threads = rsGetThreads();
  if (!threads[threadId]) return null;
  const msg = {
    id: 'msg_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
    from: fromHandle,
    text: text.trim(),
    ts: Date.now(),
    read: false
  };
  threads[threadId].messages.push(msg);
  rsSetLS('rs_threads', threads);
  return msg;
}

// ─── Mark all messages in a thread as read ────────────────────────────────────
function rsMarkThreadRead(threadId, readerHandle) {
  const threads = rsGetThreads();
  if (!threads[threadId]) return;
  threads[threadId].messages.forEach(m => {
    if (m.from !== readerHandle) m.read = true;
  });
  rsSetLS('rs_threads', threads);
}

// ─── Count unread messages for a user ─────────────────────────────────────────
function rsCountUnread(handle) {
  const threads = rsGetThreads();
  let count = 0;
  Object.values(threads).forEach(t => {
    if (!t.participants.includes(handle)) return;
    t.messages.forEach(m => { if (m.from !== handle && !m.read) count++; });
  });
  return count;
}

// ─── Format timestamp ─────────────────────────────────────────────────────────
function rsFmtTime(ts) {
  const now = Date.now();
  const diff = now - ts;
  if (diff < 60000) return 'Just now';
  if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
  if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
  const d = new Date(ts);
  const today = new Date();
  if (d.toDateString() === today.toDateString()) {
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  }
  const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
  if (d.toDateString() === yesterday.toDateString()) return 'Yesterday';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function rsFmtTimeFull(ts) {
  const d = new Date(ts);
  return d.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
}

// ─── Get unread count for a specific thread ────────────────────────────────────
function rsThreadUnread(thread, myHandle) {
  return thread.messages.filter(m => m.from !== myHandle && !m.read).length;
}

// ─── Messages URL helper ──────────────────────────────────────────────────────
function rsMessagesURL(withHandle) {
  const base = window.location.pathname.replace(/\/(profile\/.*|messages\.html)?$/, '');
  return base + '/messages.html' + (withHandle ? '?with=' + withHandle : '');
}
