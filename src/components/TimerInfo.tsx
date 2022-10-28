import { FC, useEffect, useState } from "react";
import { useStoreContext } from "../context";
import { useTimeContext } from "../context/TimeContext";

interface Props {
  setModal: (modal: boolean) => void;
}

const TimerInfo: FC<Props> = ({ setModal }) => {
  const { deleteTimelog } = useStoreContext();
  const { setCurrentTimer, currentTimer, time, isActive } = useTimeContext();
  const { getTaskFromId } = useStoreContext();
  const [taskInfo, setTaskInfo] = useState<any>("");

  useEffect(() => {
    if (currentTimer) {
      const task = getTaskFromId(currentTimer.taskId);
      setTaskInfo(task);
    }
  }, [currentTimer]);

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

  const onDeleteClick: any = (id) => {
    setCurrentTimer("");

    deleteTimelog(id);
  };

  return (
    <div className="flex flex-col h-[40vh] bg-gray-300 relative text-center">
      <h1>TIMER</h1>

      {!isActive?.status && currentTimer?.id === !isActive?.id ? (
        <div className="mt-20">{timerFormat(currentTimer?.total)}</div>
      ) : (
        ""
      )}

      {isActive?.status && currentTimer?.id === isActive?.id ? (
        <div className="mt-20">
          {timerFormat(
            diffInSeconds(currentTimer?.start, time) + 1 + currentTimer?.total
          )}
        </div>
      ) : (
        <div className="mt-20">{timerFormat(currentTimer?.total)}</div>
      )}
      {taskInfo.title ? <h2>{taskInfo.title}</h2> : <h2>Task name</h2>}
      <div
        className="absolute top-3 right-2 text-3xl"
        onClick={() => setModal(true)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div
        className="absolute top-3 left-2"
        onClick={() => onDeleteClick(currentTimer?.id)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
            fill="currentColor"
          />
          <path d="M9 9H11V17H9V9Z" fill="currentColor" />
          <path d="M13 9H15V17H13V9Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default TimerInfo;
