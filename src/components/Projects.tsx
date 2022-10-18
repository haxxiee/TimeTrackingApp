import { FC, useState } from "react";
import { useStoreContext } from "../context";
import { v4 as uuidv4 } from "uuid";
import CreateProjectModal from "./CreateProjectModal";

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
    <div>
      <div>PROJECTS</div>
      {projects &&
        projects.map((item: any) => {
          return (
            <div key={item.id}>
              <div>{item.name}</div>
            </div>
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
