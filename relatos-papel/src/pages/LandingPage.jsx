import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Landing from '../components/Landing';
import '../styles/components/landing.css';

function LandingPage() {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsLeft(prevSeconds => {
        if (prevSeconds <= 1) {
          clearInterval(intervalId);
          navigate('/home');
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  // Pasar el contador al componente Landing
  return <Landing secondsLeft={secondsLeft} />;
}

export default LandingPage;