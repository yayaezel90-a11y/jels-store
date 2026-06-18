const agents = [
  'CEO',
  'CTO',
  'Developer',
  'Security',
  'Research',
  'Teacher',
  'Business',
  'Finance',
  'Marketing',
  'Product',
  'Operations',
  'Customer Support',
  'Legal',
  'Game Developer',
  'Mobile Developer',
  'Data Scientist',
  'Machine Learning',
  'UI UX',
  'Architecture',
  'Cloud Engineer',
  'DevOps',
];

const workspaceModules = [
  ['Projects', 'Product spaces and roadmap.'],
  ['Folders', 'Structured storage.'],
  ['Boards', 'Kanban and pipelines.'],
  ['Knowledge', 'Team brain.'],
  ['Chats', 'Contextual conversations.'],
  ['Agents', 'Role-based AI workers.'],
  ['Documents', 'Docs and reports.'],
  ['Files', 'Assets and uploads.'],
  ['Tasks', 'Execution tracking.'],
  ['Goals', 'Outcome planning.'],
];

const thinking = [
  'Reasoning Progress',
  'Planning Progress',
  'Research Progress',
  'Verification Progress',
  'Response Generation',
  'Visualization Generation',
];

const agentGrid = document.getElementById('agentGrid');
const thinkingStack = document.getElementById('thinkingStack');
const workspaceGrid = document.getElementById('workspaceModules');
const toast = document.getElementById('toast');

workspaceGrid.innerHTML = workspaceModules
  .map(([title, description]) => `<div class="module"><b>${title}</b><span class="muted">${description}</span></div>`)
  .join('');

agentGrid.innerHTML = agents
  .map((name, index) => `<div class="agent"><div class="avatar" style="animation-delay:${index * 0.08}s"></div><b>${name} Agent</b><p class="muted">Agent Thinking, Analysis, Recommendation, Final Consensus.</p></div>`)
  .join('');

thinkingStack.innerHTML = thinking
  .map((name, index) => `<div>${name}<div class="progress"><i style="--p:${62 + index * 6}%"></i></div></div>`)
  .join('');

function showToast(text) {
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

document.getElementById('finishOnboarding').addEventListener('click', () => {
  document.getElementById('onboarding').classList.remove('show');
  const name = document.getElementById('nameInput').value.trim() || 'User';
  showToast(`Dashboard personal untuk ${name} dibuat`);
});

document.getElementById('openThinking').addEventListener('click', () => {
  document.getElementById('thinkingPanel').classList.toggle('show');
});

document.getElementById('runCommand').addEventListener('click', () => {
  document.getElementById('thinkingPanel').classList.add('show');
  showToast('AI agents started building your workspace');
});

window.addEventListener('mousemove', (event) => {
  document.body.style.setProperty('--mx', `${(event.clientX / innerWidth) * 100}%`);
  document.body.style.setProperty('--my', `${(event.clientY / innerHeight) * 100}%`);
});
