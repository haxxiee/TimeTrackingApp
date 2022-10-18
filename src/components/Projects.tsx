import { FC, useState } from "react";
import { useStoreContext } from "../context";
import { v4 as uuidv4 } from "uuid";
import CreateProjectModal from "./CreateProjectModal";
import ProjectItem from "./ProjectItem";

const Projects: FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const { projects, createProject } = useStoreContext();

  const test = {
    id: uuidv4(),
    name: `Projekt nr 5`,
    color: "red",
  };

  if (!projects) return <div>Loading..</div>;
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-lg font-semibold my-2">PROJECTS</h1>
      {projects &&
        projects.map((item: any) => {
          return (
            <ProjectItem key={item.id} name={item.name} color={item.color} />
          );
        })}
      <button className="bg-gray-400" onClick={() => setModal(true)}>
        CREATE PROJECT
      </button>

      {modal && <CreateProjectModal setModal={setModal} />}
    </div>
  );
};

export default Projects;
