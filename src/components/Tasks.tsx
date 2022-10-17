import { FC } from "react";
import { useStoreContext } from "../context";

const Tasks: FC = () => {
  const { tasks, setProjects } = useStoreContext();
  return (
    <div>
      <div>TASKS</div>
      {tasks &&
        tasks.map((item: any) => {
          return (
            <div key={item.id}>
              <div>{item.title}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Tasks;
