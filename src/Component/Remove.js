import React from "react";
import { useState, useEffect } from "react";
const Remove = (props) => {
  const { viewdata } = props;
  const [timeRemaining, setTimeRemaining] = useState(7 * 24 * 60 * 60 * 1000); // 7 days in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1000); // Update countdown every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    if (timeRemaining <= 0) {
      // Perform deletion logic here (e.g., API call to delete the post)
      // You might want to trigger a callback or state update to remove the post from UI
    }
  }, [timeRemaining]);
  const days = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
  const hours = Math.floor(
    (timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);
  return (
    <div className="text-black font-bold flex">
      {timeRemaining > 0 ? (
        <p>
          Time {days}d {hours}h {minutes}m {seconds}s
        </p>
      ) : (
        <p>Post will be deleted soon...</p>
      )}
    </div>
  );
};
export default Remove;
