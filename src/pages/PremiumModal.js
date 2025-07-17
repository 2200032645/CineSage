/*import React, { useState } from "react";

const PremiumModal = ({ onClose }) => {
  const optionStyles = [
    { backgroundColor: "lightblue", color: "navy" },
    { backgroundColor: "lightgreen", color: "darkgreen" },
    { backgroundColor: "lightcoral", color: "darkred" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const optionDetails = [
    {
      price: 9.99,
      description: "Budget Picks: This category includes movies that are available for rental or purchase at $9.99 or less. These are typically older releases, independent films, or hidden gems that provide great entertainment value without breaking the bank.",
    },
    {
      price: 19.99,
      description: "New Releases: This category features the latest blockbuster movies, recent releases, and high-profile films available for rental or purchase at $19.99. Movie enthusiasts who want to watch the latest hits can explore this segment.",
    },
    {
      price: 29.99,
      description: "Premium Selection: In this category, you'll find premium movie options, including 4K Ultra HD, IMAX, or special edition releases. These films often come with extra features, higher video quality, or exclusive content, making them a top choice for cinephiles willing to invest a bit more in their movie experience.",
    },
  ];

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  return (
    <div className="premium-modal">
      <div className="premium-modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="premium-title">Premium Service Options</h2>
        <p>Choose the best service for your needs:</p>
        <div className="premium-options">
          {optionStyles.map((style, index) => (
            <button
              key={index}
              className={`premium-option-button`}
              style={style}
              onClick={() => handleOptionClick(index)}
            >
              Option {index + 1}
            </button>
          ))}
        </div>
        {selectedOption !== null && (
          <div className="selected-option-features">
            <h3>${optionDetails[selectedOption].price} Price Segment:</h3>
            <p>{optionDetails[selectedOption].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumModal;*/



import React, { useState } from "react";

const PremiumModal = ({ onClose }) => {
  const optionStyles = [
    { backgroundColor: "lightblue", color: "navy" },
    { backgroundColor: "lightgreen", color: "darkgreen" },
    { backgroundColor: "lightcoral", color: "darkred" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const optionDetails = [
    {
      price: 9.99,
      description: "Budget Picks: This category includes movies that are available for rental or purchase at $9.99 or less. These are typically older releases, independent films, or hidden gems that provide great entertainment value without breaking the bank.",
    },
    {
      price: 19.99,
      description: "New Releases: This category features the latest blockbuster movies, recent releases, and high-profile films available for rental or purchase at $19.99. Movie enthusiasts who want to watch the latest hits can explore this segment.",
    },
    {
      price: 29.99,
      description: "Premium Selection: In this category, you'll find premium movie options, including 4K Ultra HD, IMAX, or special edition releases. These films often come with extra features, higher video quality, or exclusive content, making them a top choice for cinephiles willing to invest a bit more in their movie experience.",
    },
  ];

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  return (
    <div className="premium-modal">
      <div className="premium-modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="premium-title">Premium Service Options</h2>
        <p>Choose the best service for your needs:</p>
        <ul className="premium-options">
          {optionStyles.map((style, index) => (
            <li
              key={index}
              className={`premium-option ${
                selectedOption === index ? "selected" : ""
              }`}
              style={style}
              onClick={() => handleOptionClick(index)}
            >
              <span className="premium-option-title">
                Option {index + 1}:
              </span>{" "}
              <strong>
                ${optionDetails[index].price}/month -{" "}
                {["Basic", "Premium", "Ultra Premium"][index]} Service
              </strong>
            </li>
          ))}
        </ul>
        {selectedOption !== null && (
          <div className="selected-option-features">
            <h3>${optionDetails[selectedOption].price} Price Segment:</h3>
            <p>{optionDetails[selectedOption].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumModal;






/*import React from "react";

const PremiumModal = ({ onClose }) => {
  const optionStyles = [
    { backgroundColor: "lightblue", color: "navy" },
    { backgroundColor: "lightgreen", color: "darkgreen" },
    { backgroundColor: "lightcoral", color: "darkred" },
  ];

  return (
    <div className="premium-modal">
      <div className="premium-modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="premium-title">Premium Service Options</h2>
        <p>Choose the best service for your needs:</p>
        <ul className="premium-options">
          <li className="premium-option" style={optionStyles[0]}>
            <span className="premium-option-title">Option 1:</span> $9.99/month - Basic Service
          </li>
          <li className="premium-option" style={optionStyles[1]}>
            <span className="premium-option-title">Option 2:</span> $19.99/month - Premium Service
          </li>
          <li className="premium-option" style={optionStyles[2]}>
            <span className="premium-option-title">Option 3:</span> $29.99/month - Ultra Premium Service
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PremiumModal;*/

/* 
2
import React from "react";

const PremiumModal = ({ onClose }) => {
  return (
    <div className="premium-modal">
      <div className="premium-modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="premium-title">Premium Service Options</h2>
        <p>Choose the best service for your needs:</p>
        <ul className="premium-options">
          <li className="premium-option">
            <span className="premium-option-title">Option 1:</span> $9.99/month - Basic Service
          </li>
          <li className="premium-option">
            <span className="premium-option-title">Option 2:</span> $19.99/month - Premium Service
          </li>
          <li className="premium-option">
            <span className="premium-option-title">Option 3:</span> $29.99/month - Ultra Premium Service
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PremiumModal;
1

/*import React from "react";

const PremiumModal = ({ onClose }) => {
  return (
    <div className="premium-modal">
      <div className="premium-modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Premium Service Options</h2>
        <p>Choose the best service for your needs:</p>
        <ul>
          <li>Option 1: $9.99/month - Basic Service</li>
          <li>Option 2: $19.99/month - Premium Service</li>
          <li>Option 3: $29.99/month - Ultra Premium Service</li>
        </ul>
      </div>
    </div>
  );
};

export default PremiumModal;
*/