interface WebModuleProps {
  onBack: () => void;
}

export default function WebModule({ onBack }: WebModuleProps) {
  const handleSubmit = () => {
    window.open('https://www.udemy.com/topic/web-development/', '_blank');
  };

  return (
    <div className="terminal-container p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-cyber-green" data-testid="title-web">WEB MODULE</h2>
          <button 
            className="text-cyber-magenta hover:text-white transition-colors duration-300" 
            onClick={onBack}
            data-testid="button-back"
          >
            [BACK TO TERMINAL]
          </button>
        </div>
        
        <div className="border border-cyber-blue p-6 bg-black bg-opacity-50">
          <h3 className="text-lg font-bold text-cyber-blue mb-4">Task: Responsive Grid Layout</h3>
          <div className="text-cyber-green mb-4">
            <p>Create a responsive grid layout using CSS Grid.</p>
            <p className="text-sm opacity-60 mt-2">Requirements: 3 columns on desktop, 2 on tablet, 1 on mobile</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-cyber-green mb-2">HTML:</label>
              <textarea
                className="terminal-input w-full h-24 p-3 border border-cyber-green bg-transparent resize-none text-xs"
                placeholder="<div class='grid-container'>"
                data-testid="textarea-html"
              />
            </div>
            <div>
              <label className="block text-cyber-green mb-2">CSS:</label>
              <textarea
                className="terminal-input w-full h-24 p-3 border border-cyber-green bg-transparent resize-none text-xs"
                placeholder=".grid-container { display: grid; }"
                data-testid="textarea-css"
              />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button className="px-4 py-2 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300" data-testid="button-preview">
              PREVIEW
            </button>
            <button 
              onClick={handleSubmit}
              className="px-4 py-2 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300"
              data-testid="button-submit-web"
            >
              SUBMIT & ACCESS RESOURCES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
