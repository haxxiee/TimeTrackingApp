import { FC, useEffect, useState } from "react";
import { useStoreContext } from "../context";
import { useTimeContext } from "../context/TimeContext";
import Loading from "./Loading";

interface Props {
  setModal: (modal: boolean) => void;
}

const TimerInfo: FC<Props> = ({ setModal }) => {
  const { timelogs, tasks } = useStoreContext();
  const { setCurrentTimer, currentTimer, time, isActive } = useTimeContext();

  const diffInSeconds = (start, end) => {
    let diff = Date.parse(end) - Date.parse(start);
    return Math.floor(diff / 1000);
  };

  const timerFormat = (diff: number) => {
    let hours = Math.floor(diff / 3600);
    let minutes = Math.floor((diff / 60) % 60);
    let seconds = diff % 60;

    if (isNaN(diff)) return;
    return `${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}:${(
      "0" + seconds
    ).slice(-2)}`;
  };

  return (
    <div className="flex flex-col h-[40vh] bg-gray-300 relative text-center">
      <h1>TIMER</h1>

      {!isActive?.status && currentTimer?.id === !isActive?.id ? (
        <div className="mt-20">{timerFormat(currentTimer?.total)}</div>
      ) : (
        ""
      )}
      {/* {!currentTimer && <div className="mt-20">00:00:00</div>} */}

      {isActive?.status && currentTimer?.id === isActive?.id ? (
        <div className="mt-20">
          {timerFormat(
            diffInSeconds(currentTimer?.start, time) + 1 + currentTimer?.total
          )}
        </div>
      ) : (
        <div className="mt-20">{timerFormat(currentTimer?.total)}</div>
      )}

      <p>Task name</p>
      <div
        className="absolute top-0 right-2 text-3xl"
        onClick={() => setModal(true)}
      >
        +
      </div>
    </div>
  );
};

export default TimerInfo;
