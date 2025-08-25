export interface CommandResult {
  action: string;
  mode?: string;
  raw?: string;
}

export const parseCommand = (raw: string): CommandResult => {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return { action: 'noop' };

  // Core commands
  if (cmd === 'quit') return { action: 'quit' };
  if (cmd === 'help') return { action: 'help' };
  if (cmd === 'clear') return { action: 'clear' };

  // Module commands
  if (cmd === 'start dsa') return { action: 'start', mode: 'dsa' };
  if (cmd === 'start web') return { action: 'start', mode: 'web' };
  if (cmd === 'start ai') return { action: 'start', mode: 'ai' };
  if (cmd === 'start ttt') return { action: 'start', mode: 'ttt' };
  
  // Submission
  if (cmd === 'submit') return { action: 'submit' };
  
  return { action: 'unknown', raw: cmd };
};

export const getWelcomeText = () => [
  {
    text: '╔══════════════════════════════════════════════════════════════╗\n║                    RETRO-SYSTEM v1.0                        ║\n╚══════════════════════════════════════════════════════════════╝',
    className: 'text-cyber-green'
  },
  { text: '' },
  { text: '> SYSTEM STATUS: ONLINE', className: 'text-cyber-green' },
  { text: '> USER AUTHENTICATED', className: 'text-cyber-green' },
  { text: '' },
  { text: "It's impossible to find a clue in this game.", className: 'text-cyber-magenta italic' },
  { text: "Trust me, you'll just waste your time.", className: 'text-cyber-magenta italic' },
  { text: "Type 'quit' to leave... or 'start' if you want to play.", className: 'text-cyber-blue' },
  { text: '' },
  {
    text: '┌─ AVAILABLE MODULES ─┐\n│ 1. DSA   [start dsa] │\n│ 2. Web   [start web] │\n│ 3. AI    [start ai]  │\n│ 4. TTT   [start ttt] │\n└─────────────────────┘',
    className: 'text-cyber-green'
  },
  { text: '' },
  { text: '> Type a command to begin...', className: 'text-cyber-blue' }
];
