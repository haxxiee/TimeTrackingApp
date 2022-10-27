import { FC, useState } from "react";
import { useStoreContext } from "../context";
import { v4 as uuidv4 } from "uuid";
import CreateProjectModal from "./CreateProjectModal";
import ProjectItem from "./ProjectItem";

const Projects: FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const { projects } = useStoreContext();

  if (!projects) return <div>Loading..</div>;
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="mt-4 p-2 font-semibold border-2 border-indigo-300 rounded-xl"
        onClick={() => setModal(true)}
      >
        Create Project
      </button>
      <div className="flex flex-col justify-center items-center w-full mb-20">
        {projects &&
          projects.map((item: any) => {
            return (
              <ProjectItem
                key={item.id}
                name={item.name}
                color={item.color}
                id={item.id}
              />
            );
          })}
      </div>

      {modal && <CreateProjectModal setModal={setModal} />}
    </div>
  );
};

export default Projects;
