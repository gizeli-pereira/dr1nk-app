import { useState } from 'react';
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main className="AuthPage">
      <div>
        {/* Logo later on instead of h1 */}
        <h1>Dr1nk</h1>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'CLICK TO SIGN UP' : 'CLICK TO LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}