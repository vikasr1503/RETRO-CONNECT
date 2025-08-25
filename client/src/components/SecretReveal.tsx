interface SecretRevealProps {
  user: { email: string };
  onBack: () => void;
  onLogout: () => void;
}

export default function SecretReveal({ user, onBack, onLogout }: SecretRevealProps) {
  return (
    <div className="terminal-container flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="secret-container p-8 bg-black">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-cyber-green glitch-text mb-4" data-testid="title-secret">
              🎯 SECRET DISCOVERED
            </h1>
            <div className="text-cyber-blue text-lg">
              PSYCHOLOGICAL PROFILE: CONTRARIAN THINKER
            </div>
          </div>
          
          <div className="space-y-4 text-cyber-green">
            <div className="border-l-4 border-cyber-magenta pl-4">
              <p className="text-lg font-bold">Congratulations!</p>
              <p>You discovered the hidden secret by doing exactly what we told you NOT to do.</p>
            </div>
            
            <div className="bg-black bg-opacity-50 p-4 border border-cyber-blue">
              <h3 className="text-cyber-blue font-bold mb-2">The Psychology:</h3>
              <ul className="text-sm space-y-1 text-cyber-green opacity-90">
                <li>• Most users ignore "quit" commands when exploring</li>
                <li>• Reverse psychology makes forbidden actions more appealing</li>
                <li>• You demonstrated independent thinking over compliance</li>
                <li>• This pattern indicates strong problem-solving instincts</li>
              </ul>
            </div>
            
            <div className="text-center mt-6">
              <div className="text-cyber-magenta text-2xl font-bold mb-2">
                🏆 ACHIEVEMENT UNLOCKED
              </div>
              <div className="text-cyber-blue">
                "The Contrarian" - Found the secret through disobedience
              </div>
            </div>

            <div className="mt-8 p-4 border border-cyber-magenta">
              <p className="text-cyber-magenta">&lt;User data submitted&gt;</p>
              <p className="text-cyber-blue" data-testid="text-user-data">   Gmail : {user.email}</p>
            </div>

            <div className="mt-6">
              <p>For any other queries, contact via Gmail.</p>
            </div>

            <div className="mt-8 p-6 border-2 border-cyber-green bg-green-900 bg-opacity-20">
              <p className="text-2xl font-bold text-cyber-green" data-testid="text-secret-key">
                SECRET KEY : GDG{'{'} retro_cyber_unlocked {'}'}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={onBack}
              className="px-6 py-3 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300"
              data-testid="button-continue"
            >
              CONTINUE TO SYSTEM
            </button>
            <button 
              onClick={onLogout}
              className="px-6 py-3 border border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-black transition-all duration-300"
              data-testid="button-exit"
            >
              EXIT SYSTEM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
