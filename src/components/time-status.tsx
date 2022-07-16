import { useEffect, useState } from "react";

export const TimeStatus = () => {
  const [time, setTime] = useState("00:00:00 p.m.");
  const [awake, setAwake] = useState(true);

  function updateTime() {
    const current = new Date().toLocaleString("en-US", {
      timeZone: "America/Lima",
    });

    setTime(`${current.slice(-11, -6)}${current.slice(-3, -1)}.M`);

    setTimeout(updateTime, 60 * 1000);

    if (new Date().getHours() < 7) setAwake(false);
  }

  useEffect(() => {
    updateTime();
  }, []);

  return (
    <p className="text-black/50 dark:text-white/50 text-sm mb-10">
      It's currently{" "}
      <span className="font-semibold text-black/60 dark:text-white/60">
        {time}
      </span>{" "}
      for me, so I'm probably{" "}
      <span className="font-semibold text-black/60 dark:text-white/60">
        {awake ? "awake" : "sleeping"}
      </span>
      . I'll get back to you soon.
    </p>
  );
};
