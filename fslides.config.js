module.exports = {
  name: 'security-quick-nov12',
  title: 'Elastic Security',
  repo: 'cojoe01/security-quick-nov12',   // powers slide comments (GitHub issues)
  gateway: 'https://api.fslides.dev',    // sign-in broker for commenting on the published deck
  slidesDir: 'slides',
  style: 'elastic-web',

  // Slide filenames in order, relative to the slides/ directory
  slides: [
    'cover.html',
    'team.html',
    'search-ai-platform.html',
    'all-your-data.html',
    'elastic-security-labs.html',
    'why-now.html',
    'problem-orientation.html',
    'soc-model.html',
    'answers-to-action.html',
    'senses-brain-hands.html',
    'multi-layer-security.html',
    'esql.html',
    'demo.html',
    'solution.html',
    'unified-platform.html',
    'closing.html',
  ],

  // Human-readable labels for the overview panel (must match slides array length)
  labels: [
    'Cover',
    'Team',
    'Search AI Platform',
    'All your data',
    'Elastic Security Labs',
    'Why now',
    'Problem orientation',
    'SOC operating model',
    'From answers to action',
    'Senses, brain, hands',
    'Multi-layer security',
    'ES|QL',
    'Demo',
    'Security solution',
    'Unified platform',
    'Thank you',
  ],

  // Optional: per-slide PDF overrides
  // pdfOverrides: {
  //   'my-animated-slide.html': {
  //     wait: 5000,   // extra ms to wait before capturing
  //     extra: `document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));`
  //   }
  // },
  disabled: [
    'team.html',
    'problem-orientation.html',
    'unified-platform.html',
    'solution.html',
    'senses-brain-hands.html',
    'multi-layer-security.html',
    'esql.html',
  ],
};
