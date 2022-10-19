import { FC, useEffect, useState } from "react";
import { useStoreContext } from "../context";

interface Props {
  projectId: string;
  title: string;
}

const TaskItem: FC<Props> = ({ projectId, title }) => {
  const [projectInfo, setProjectInfo] = useState<any>("");
  const { getProjectFromId } = useStoreContext();

  const { color } = projectInfo;

  useEffect(() => {
    const project = getProjectFromId(projectId);
    setProjectInfo(project);
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center w-[95%] m-3">
      <div className="flex justify-between items-center w-full h-10 mb-3 bg-slate-200">
        <div
          className={`h-full w-4 
        ${color === "green" && "bg-green-300"} 
        ${color === "red" && "bg-red-300"}
        ${color === "blue" && "bg-blue-300"}
        ${color === "purple" && "bg-purple-300"}
        ${color === "orange" && "bg-orange-300"}
        overflow-hidden`}
        />
        <div>{title}</div>
        <div className="mr-2">...</div>
      </div>
    </div>
  );
};

export default TaskItem;
