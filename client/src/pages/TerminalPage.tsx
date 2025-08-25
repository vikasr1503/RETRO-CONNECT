import { useState, useEffect, useRef } from 'react';
import { parseCommand, getWelcomeText } from '../utils/commandParser';
import SecretReveal from '../components/SecretReveal';
import DSAModule from '../components/modules/DSAModule';
import WebModule from '../components/modules/WebModule';
import TicTacToe from '../components/modules/TicTacToe';

interface TerminalPageProps {
  user: { email: string };
  onLogout: () => void;
}

interface TerminalLine {
  text: string;
  className?: string;
}

export default function TerminalPage({ user, onLogout }: TerminalPageProps) {
  const [lines, setLines] = useState<TerminalLine[]>(getWelcomeText());
  const [firstCommandUsed, setFirstCommandUsed] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const [currentModule, setCurrentModule] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-focus input and scroll to bottom
  useEffect(() => {
    if (inputRef.current && currentModule === null && !showSecret) {
      inputRef.current.focus();
    }
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, currentModule, showSecret]);

  const appendLine = (text: string, className = '') => {
    setLines(prev => [...prev, { text, className }]);
  };

  const clearTerminal = () => {
    setLines(getWelcomeText());
  };

  const handleInput = (command: string) => {
    const { action, mode, raw } = parseCommand(command);
    
    // Add user input to display
    appendLine(`> ${command}`, 'text-cyber-blue');

    // Track first command for psychological secret
    if (!firstCommandUsed) {
      setFirstCommandUsed(true);
    }

    // Handle commands
    switch (action) {
      case 'quit':
        if (!firstCommandUsed) {
          // 🎯 PSYCHOLOGICAL SECRET TRIGGER!
          setShowSecret(true);
        } else {
          appendLine('Terminating session...', 'text-cyber-magenta');
          setTimeout(() => {
            onLogout();
          }, 1000);
        }
        break;

      case 'start':
        handleStartModule(mode);
        break;

      case 'submit':
        handleSubmit();
        break;

      case 'help':
        showHelp();
        break;

      case 'clear':
        clearTerminal();
        break;

      case 'noop':
        // Silent ignore
        break;

      default:
        appendLine(`Command not recognized: ${raw}`, 'text-red-500');
        appendLine("Type 'help' for available commands.");
        break;
    }
  };

  const handleStartModule = (mode: string | undefined) => {
    switch (mode) {
      case 'dsa':
        setCurrentModule('dsa');
        break;

      case 'web':
        setCurrentModule('web');
        break;

      case 'ai':
        appendLine('AI module currently under construction...', 'text-yellow-500');
        appendLine('Module will be available in future updates.');
        break;

      case 'ttt':
        setCurrentModule('ttt');
        break;

      default:
        appendLine(`Module '${mode}' not found.`);
    }
  };

  const handleSubmit = () => {
    if (currentModule) {
      appendLine('Submission recorded. Opening external resources...', 'text-cyber-green');
      
      // Simulate opening external link
      setTimeout(() => {
        if (currentModule === 'dsa') {
          appendLine('Redirecting to Striver\'s A2Z DSA Sheet...');
          window.open('https://takeuforward.org/strivers-a2z-dsa-course/', '_blank');
        } else if (currentModule === 'web') {
          appendLine('Redirecting to Web Development Course...');
          window.open('https://www.udemy.com/topic/web-development/', '_blank');
        }
      }, 1000);
    } else {
      appendLine('No active module. Start a module first.');
    }
  };

  const showHelp = () => {
    appendLine('═══ AVAILABLE COMMANDS ═══');
    appendLine('start dsa  - Data Structures & Algorithms');
    appendLine('start web  - Web Development Challenge');
    appendLine('start ai   - AI Module (Coming Soon)');
    appendLine('start ttt  - Tic Tac Toe Game');
    appendLine('submit     - Submit current module');
    appendLine('help       - Show this help');
    appendLine('clear      - Clear terminal');
    appendLine('quit       - Exit system');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (inputValue.trim()) {
        handleInput(inputValue);
      }
      setInputValue('');
    }
  };

  const handleBackToTerminal = () => {
    setCurrentModule(null);
  };

  if (showSecret) {
    return <SecretReveal user={user} onBack={() => setShowSecret(false)} onLogout={onLogout} />;
  }

  if (currentModule === 'dsa') {
    return <DSAModule onBack={handleBackToTerminal} />;
  }

  if (currentModule === 'web') {
    return <WebModule onBack={handleBackToTerminal} />;
  }

  if (currentModule === 'ttt') {
    return <TicTacToe onBack={handleBackToTerminal} />;
  }

  return (
    <div className="terminal-container crt-scanline">
      {/* Terminal Header */}
      <div className="flex justify-between items-center p-4 border-b border-cyber-green">
        <div className="text-cyber-green">
          <span className="text-lg font-bold">RETRO-SYSTEM v1.0</span>
          <span className="ml-4 text-sm opacity-60" data-testid="text-user-email">User: {user.email}</span>
        </div>
        <button 
          className="text-cyber-magenta hover:text-white transition-colors duration-300"
          onClick={onLogout}
          data-testid="button-logout"
        >
          [LOGOUT]
        </button>
      </div>

      <div ref={containerRef} className="min-h-screen p-6 pb-20 overflow-y-auto terminal-scroll">
        <div className="max-w-4xl mx-auto">
          {/* Terminal Output */}
          <div className="space-y-1" data-testid="terminal-output">
            {lines.map((line, index) => (
              <pre 
                key={index} 
                className={`font-mono text-sm ${line.className || ''}`}
              >
                {line.text}
              </pre>
            ))}
          </div>

          {/* Command Input */}
          <div className="flex items-center mt-4">
            <span className="text-cyber-green mr-2">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input flex-1 blinking-cursor"
              placeholder="Enter command..."
              autoComplete="off"
              data-testid="input-command"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
