import { useState } from 'react';

interface LoginPageProps {
  onLogin: (email: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsLoading(true);
    
    // Simulate login delay for effect
    setTimeout(() => {
      onLogin(email.trim());
    }, 2000);
  };

  return (
    <div className="terminal-container flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 glitch-text text-cyber-green" data-testid="title-system">
            RETRO-SYSTEM v1.0
          </h1>
          <div className="text-cyber-blue mb-6 text-lg">
            <div>◆ ◆ ◆ CYBER AUTHENTICATION REQUIRED ◆ ◆ ◆</div>
          </div>
          <div className="text-xs text-cyber-green opacity-60">
            CLASSIFIED SYSTEM - AUTHORIZED PERSONNEL ONLY
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-login">
          <div>
            <label className="block text-cyber-green mb-2 text-sm">
              &gt; ENTER EMAIL ADDRESS:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="terminal-input w-full p-3 border border-cyber-green bg-transparent focus:border-cyber-blue transition-colors duration-300"
              placeholder="user@domain.com"
              required
              autoFocus
              data-testid="input-email"
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 border border-cyber-blue bg-transparent text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300 hover:shadow-lg disabled:opacity-50"
            data-testid="button-login"
          >
            {isLoading ? 'ACCESSING SYSTEM...' : 'INITIALIZE CONNECTION'}
          </button>
        </form>

        {isLoading && (
          <div className="mt-6 text-center text-cyber-magenta" data-testid="status-loading">
            <div className="typewriter">Establishing secure connection...</div>
            <div className="mt-2 text-xs opacity-60">
              • Verifying credentials<br />
              • Initializing terminal interface<br />
              • Loading system modules
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
