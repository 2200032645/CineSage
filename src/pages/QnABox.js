/*import React, { useState } from 'react';

const QnABox = () => {
  const qaData = [
    {
      question: "What genre of movies do you prefer?",
      answers: ["Action", "Comedy", "Drama", "Science Fiction", "Horror", "Romance"],
    },
    {
      question: "Do you have a favorite actor or actress?",
      answers: [],
    },
    {
      question: "How about a preferred movie release year or range?",
      answers: [],
    },
    {
      question: "Please rate our service (1-5 stars):",
      answers: ["1", "2", "3", "4", "5"],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [chatStarted, setChatStarted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [serviceRating, setServiceRating] = useState(null);

  const handleAnswer = (answer) => {
    if (currentQuestionIndex === qaData.length - 1) {
      setServiceRating(answer);
    } else {
      setUserAnswers([...userAnswers, answer]);
    }

    if (currentQuestionIndex + 1 < qaData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      generateMovieRecommendations();
    }
  };

  const handleStartChat = () => {
    setChatStarted(true);
  };

  const handleUserInput = () => {
    const answer = userInput.trim();
    if (answer) {
      setUserAnswers([...userAnswers, answer]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserInput("");
    }
  };

  const generateMovieRecommendations = () => {
    const recommendations = [
      "The Shawshank Redemption",
      "Inception",
      "The Godfather",
      "Pulp Fiction",
      "The Dark Knight",
    ];

    setRecommendedMovies(recommendations);
  };

  if (!chatStarted) {
    return (
      <div className="qa-box">
        <button onClick={handleStartChat}>Start Chat</button>
      </div>
    );
  }

  if (currentQuestionIndex < qaData.length) {
    const currentQuestion = qaData[currentQuestionIndex];

    return (
      <div className="qa-box">
        <h2>Movie Recommendation Chat</h2>
        <p>
          <strong>Q:</strong> {currentQuestion.question}
        </p>
        <ul>
          {currentQuestion.answers.map((answer, index) => (
            <li key={index}>
              <button onClick={() => handleAnswer(answer)}>{answer}</button>
            </li>
        )  )}
        </ul>
        {currentQuestionIndex !== qaData.length - 1 && (
          <input
            type="text"
            placeholder="Your Answer"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        )}
        <button
          onClick={
            currentQuestionIndex === qaData.length - 1 ? () => {} : handleUserInput
          }
        >
          {currentQuestionIndex === qaData.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    );
  } else {
    return (
      <div className="qa-box">
        <h2>Movie Recommendations</h2>
        <p>Based on your preferences, here are some movie recommendations:</p>
        <ul>
          {recommendedMovies.map((movie, index) => (
            <li key={index}>{movie}</li>
         ) )}
        </ul>
        <p>Your service rating: {serviceRating} Stars</p>
        <p>Thank you for your feedback and enjoy your movie night!</p>
      </div>
    );
  }
};

export default QnABox;
*/



/*import React from 'react';

const QnABox = () => {
  const qaData = [
    {
      question: "What is the capital of France?",
      answer: "The capital of France is Paris."
    },
    {
      question: "Who wrote Romeo and Juliet?",
      answer: "Romeo and Juliet was written by William Shakespeare."
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter is the largest planet in our solar system."
    }
  ];

  return (
    <div className="qa-box">
      <h2>Questions and Answers</h2>
      <ul>
        {qaData.map((qa, index) => (
          <li key={index}>
            <strong>Q:</strong> {qa.question}<br />
            <strong>A:</strong> {qa.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QnABox;
*/