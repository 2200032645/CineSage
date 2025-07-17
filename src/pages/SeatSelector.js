import React, { useState } from 'react';

const SeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const totalSeats = 30; // Total number of seats

  const toggleSeat = (seat) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };

  const renderSeats = () => {
    const seats = [];
    for (let i = 1; i <= totalSeats; i++) {
      const isSeatSelected = selectedSeats.includes(i);
      seats.push(
        <button
          key={i}
          className={`seat ${isSeatSelected ? 'selected' : ''}`}
          onClick={() => toggleSeat(i)}
          disabled={isSeatSelected}
        >
          {i}
        </button>
      );
    }
    return seats;
  };

  return (
    <div>
      <h2>Seat Selector</h2>
      <div className="seat-container">{renderSeats()}</div>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
    </div>
  );
};

export default SeatSelector;
