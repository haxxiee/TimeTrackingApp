import { FC, useEffect, useState } from "react";
import { useStoreContext } from "../context";
import Loading from "./Loading";

const CalendarItem: FC<any> = ({ item }) => {
  const { getProjectFromId, getTaskFromId } = useStoreContext();
  const [projectInfo, setProjectInfo] = useState<any>("");
  const [taskInfo, setTaskInfo] = useState<any>("");

  const { title } = taskInfo;
  const { color } = projectInfo;

  useEffect(() => {
    const task = getTaskFromId(item.taskId);
    setTaskInfo(task);
    const project = getProjectFromId(item.projectId);
    setProjectInfo(project);
  }, []);

  const timerFormat = (diff: number) => {
    let hours = Math.floor(diff / 3600);
    let minutes = Math.floor((diff / 60) % 60);
    let seconds = diff % 60;

    if (isNaN(diff)) return <Loading size={4} color={color} />;
    return `${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}:${(
      "0" + seconds
    ).slice(-2)}`;
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-xs font-semibold">
        {new Date(Date.parse(item.createdAt)).toLocaleDateString()}
      </h3>
      <div className="flex flex-col items-center justify-center w-[95%] bg-slate-100 mx-2 h-12 relative">
        <div
          className={`h-full w-4 
        ${color === "green" && "bg-green-300"} 
        ${color === "red" && "bg-red-300"}
        ${color === "blue" && "bg-blue-300"}
        ${color === "purple" && "bg-purple-300"}
        ${color === "orange" && "bg-orange-300"}
         absolute left-0`}
        />
        <h2>{title}</h2>
        <div className="text-xs font-bold">{timerFormat(item.total)}</div>
      </div>
    </div>
  );
};

export default CalendarItem;
