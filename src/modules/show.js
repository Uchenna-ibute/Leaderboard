const getScore = (name, score) => {
  const getScore = async () => {
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wsIOxR0bKz1yTE4Uisg5/scores/',
      {
        method: 'post',
        body: JSON.stringify({
          user: name,
          score,
        }),
        headers: { 'Content-type': 'application/json' },
      });
    const response = await res.json();
    return response;
  };
  getScore();
};

export default getScore;