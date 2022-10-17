import { FC } from "react";
import { useStoreContext } from "../context";

const Projects: FC = () => {
  const { projects, setProjects } = useStoreContext();
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
    </div>
  );
};

export default Projects;
