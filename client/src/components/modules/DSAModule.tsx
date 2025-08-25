interface DSAModuleProps {
  onBack: () => void;
}

export default function DSAModule({ onBack }: DSAModuleProps) {
  const problems = [
    {
      title: "Two Sum",
      difficulty: "Easy", 
      description: "Given an array of integers nums and an integer target, return indices of two numbers that add up to target."
    },
    {
      title: "Reverse Linked List",
      difficulty: "Easy",
      description: "Given the head of a singly linked list, reverse the list and return the reversed list."
    },
    {
      title: "Longest Substring Without Repeating Characters", 
      difficulty: "Medium",
      description: "Given a string s, find the length of the longest substring without repeating characters."
    }
  ];

  const handleSubmit = () => {
    window.open('https://takeuforward.org/strivers-a2z-dsa-course/', '_blank');
  };

  return (
    <div className="terminal-container p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-cyber-green" data-testid="title-dsa">DSA MODULE</h2>
          <button 
            className="text-cyber-magenta hover:text-white transition-colors duration-300" 
            onClick={onBack}
            data-testid="button-back"
          >
            [BACK TO TERMINAL]
          </button>
        </div>
        
        <div className="border border-cyber-blue p-6 bg-black bg-opacity-50">
          <h3 className="text-lg font-bold text-cyber-blue mb-4">Problem Set: Binary Tree & Array Challenges</h3>
          <div className="text-cyber-green mb-4">
            <p>Complete the following algorithmic challenges:</p>
            <p className="text-sm opacity-60 mt-2">Expected time complexity: O(n) for each problem</p>
          </div>
          
          <div className="space-y-4 mb-6">
            {problems.map((problem, index) => (
              <div key={index} className="p-3 border border-cyber-green">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-cyber-blue font-bold">{index + 1}. {problem.title}</h4>
                  <span className={`px-2 py-1 text-xs ${
                    problem.difficulty === 'Easy' ? 'text-green-400' : 
                    problem.difficulty === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {problem.difficulty}
                  </span>
                </div>
                <p className="text-sm text-gray-300">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <label className="block text-cyber-green mb-2">Your Solution:</label>
            <textarea
              className="terminal-input w-full h-32 p-3 border border-cyber-green bg-transparent resize-none"
              placeholder="def solution(nums, target):"
              data-testid="textarea-solution"
            />
          </div>
          
          <div className="flex space-x-4">
            <button className="px-4 py-2 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300" data-testid="button-test">
              RUN TEST
            </button>
            <button 
              onClick={handleSubmit}
              className="px-4 py-2 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300"
              data-testid="button-submit-dsa"
            >
              SUBMIT & ACCESS RESOURCES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
