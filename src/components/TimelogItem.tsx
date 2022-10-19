import { FC, useEffect, useState } from "react";
import { useStoreContext } from "../context";

interface Props {
  taskId: string;
  createdAt: string;
  start: string | null;
  end: string | null;
}

const TimelogItem: FC<Props> = ({ taskId, createdAt, start, end }) => {
  const { getProjectFromId, getTaskFromId } = useStoreContext();

  const [projectInfo, setProjectInfo] = useState<any>("");
  const [taskInfo, setTaskInfo] = useState<any>("");
  const [timer, setTimer] = useState<boolean>(false);

  const { title } = taskInfo;
  const { color } = projectInfo;

  useEffect(() => {
    const task = getTaskFromId(taskId);
    setTaskInfo(task);
    const project = getProjectFromId(task.projectId);
    setProjectInfo(project);
  }, []);

  const diffInSeconds = (start, end) => {
    let diff = Date.parse(end) - Date.parse(start);
    return Math.floor(diff / 1000);
  };

  const timerFormat = () => {
    let diff = diffInSeconds(start, end);
    let hours = Math.floor(diff / 3600);
    let minutes = Math.floor((diff / 60) % 60);
    let seconds = diff % 60;

    return `${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}:${(
      "0" + seconds
    ).slice(-2)}`;
  };

  return (
    <div className=" flex flex-col justify-center items-center w-[95%] m-auto">
      <h3 className="text-xs font-semibold">
        {new Date(Date.parse(createdAt)).toLocaleDateString()}
      </h3>
      <div className="flex flex-col justify-center items-center w-full h-12 mb-3 bg-slate-50 rounded-xl relative">
        <div
          className={`h-full w-4 
        ${color === "green" && "bg-green-300"} 
        ${color === "red" && "bg-red-300"}
        ${color === "blue" && "bg-blue-300"}
        ${color === "purple" && "bg-purple-300"}
        ${color === "orange" && "bg-orange-300"}
        overflow-hidden absolute left-0`}
        />
        <div className="">{title}</div>
        {start && end ? (
          <p className="text-xs font-bold">{timerFormat()}</p>
        ) : (
          <p className="text-xs font-bold">00:00:00</p>
        )}

        {timer ? (
          <div
            className="mr-2 absolute right-0"
            onClick={() => setTimer(false)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 9H11V15H9V9Z" fill="currentColor" />
              <path d="M15 15H13V9H15V15Z" fill="currentColor" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ) : (
          <div className="mr-2 absolute right-0" onClick={() => setTimer(true)}>
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
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                fill="currentColor"
              />
              <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelogItem;
