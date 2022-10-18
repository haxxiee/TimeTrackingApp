import { FC } from "react";

interface Props {
  // id: string;
  name: string;
  color: string;
}

const ProjectItem: FC<Props> = ({ name, color }) => {
  const colorstring = color;
  return (
    <div className="flex justify-between items-center w-[95%] h-10 m-3 bg-slate-200">
      <div
        className={`h-full w-4 
        ${color === "green" && "bg-green-300"} 
        ${color === "red" && "bg-red-300"}
        ${color === "blue" && "bg-blue-300"}
        ${color === "purple" && "bg-purple-300"}
        ${color === "orange" && "bg-orange-300"}
        overflow-hidden`}
      />
      <div>{name}</div>
      <div className="mr-2">...</div>
    </div>
  );
};

export default ProjectItem;
