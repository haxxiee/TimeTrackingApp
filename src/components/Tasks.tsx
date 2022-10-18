import { FC, useState } from "react";
import { useStoreContext } from "../context";
import CreateTaskModal from "./CreateTaskModal";
import TaskItem from "./TaskItem";

const Tasks: FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const { tasks } = useStoreContext();
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-lg font-semibold my-2">TASKS</h1>

      {tasks &&
        tasks.map((item: any) => {
          return (
            <TaskItem
              key={item.id}
              projectId={item.projectId}
              title={item.title}
            />
          );
        })}
      <button className="bg-gray-400" onClick={() => setModal(true)}>
        CREATE PROJECT
      </button>

      {modal && <CreateTaskModal setModal={setModal} />}
    </div>
  );
};

export default Tasks;
