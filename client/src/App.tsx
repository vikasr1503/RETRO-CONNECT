import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import LoginPage from "@/pages/LoginPage";
import TerminalPage from "@/pages/TerminalPage";

function Router() {
  const [user, setUser] = useState<{ email: string } | null>(null);

  const handleLogin = (email: string) => {
    const userData = { email };
    setUser(userData);
    sessionStorage.setItem("cyber_user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem("cyber_user");
  };

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = sessionStorage.getItem("cyber_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        sessionStorage.removeItem("cyber_user");
      }
    }
  }, []);

  return (
    <Switch>
      <Route path="/">
        {user ? (
          <TerminalPage user={user} onLogout={handleLogout} />
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
