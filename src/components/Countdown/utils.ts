export const getCountdown = (targetDate) => {
    const total = Date.parse(targetDate) - Date.now();
  
    if (total <= 0) {
      return {
        finished: true,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
    return { finished: false, days, hours, minutes, seconds };
  };
  