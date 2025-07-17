import React, { useState } from 'react';

const MovieReviewGenerator = () => {
  const movieReviews = [
    '🌟 Fantastic movie! A must-watch.',
    '👎 Not my cup of tea. I would skip this one.',
    '👍 Decent film, but it could have been better.',
    '🎬 An absolute masterpiece!',
    '😂 I couldn\'t stop laughing. Hilarious!',
    '😢 A real tearjerker. Bring tissues.',
    '🍿 This film had me on the edge of my seat the entire time. The suspense and plot twists were absolutely riveting, and the acting was top-notch. A must-see',
    '🎥 I was completely blown away by the special effects in this movie. It\'s a visual feast that transports you to another world.',
    '😭 The emotional depth of the characters in this film was truly remarkable. I found myself crying and laughing right along with them. A true emotional rollercoaster.',
    '📸 The cinematography in this movie is a work of art. Every frame is beautifully composed, and the use of color and light is breathtaking.',
    '🎵 The soundtrack perfectly complements the on-screen action. The music added so much to the overall experience and left me humming the tunes long after the credits rolled.',
    '💬 I couldn\'t get enough of the witty and clever dialogue in this film. The script was a masterpiece in and of itself.',
    '⏱️ The pacing of this movie was spot on. It kept me engaged from start to finish, and I never felt like there was a dull moment.',
    '👥 The ensemble cast in this film was phenomenal. Every actor brought their A-game, and the chemistry between them was palpable.',
    '🎬 The director\'s vision truly shines through in this movie. Their creative choices and storytelling techniques were refreshing and bold.',
    '💥 The action sequences were nothing short of breathtaking. The choreography and stunts were mind-blowing and left me in awe.',
    '🤔 This film\'s message and themes are thought-provoking and relevant. It left me pondering long after I left the theater.',
    '🎭 The attention to detail in the set design and costumes was impeccable. It transported me to a different era and added authenticity to the story.'
  ];

  const [randomReview, setRandomReview] = useState('');

  const generateRandomReview = () => {
    const randomIndex = Math.floor(Math.random() * movieReviews.length);
    setRandomReview(movieReviews[randomIndex]);
  };

  return (
    <div>
      <h1>Random People Review</h1>
      <button onClick={generateRandomReview}>Generate Random  Review</button>
      {randomReview && <p>{randomReview}</p>}
      {movieReviews.map((review, index) => (
        <p key={index}>{`${index + 1}. ${review}`}</p>
      ))}
    </div>
  );
};

export default MovieReviewGenerator;
