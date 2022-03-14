import { useEffect, useState } from "react";

function MyTimerComponent() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(function () {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  useEffect(
    function () {
      console.log("hey there.");
    },
    [time]
  );

  return <div>{time}</div>;
}
export default MyTimerComponent;
