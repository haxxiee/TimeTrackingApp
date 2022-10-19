import { FC, useState } from "react";
import { useStoreContext } from "../context";
import CreateTaskModal from "./CreateTaskModal";
import TaskItem from "./TaskItem";

const Tasks: FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const { tasks } = useStoreContext();
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="mt-4 p-2 font-semibold border-2 border-indigo-300 rounded-xl"
        onClick={() => setModal(true)}
      >
        Create Task
      </button>
      <div className="flex flex-col justify-center items-center w-full mb-20">
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
      </div>

      {modal && <CreateTaskModal setModal={setModal} />}
    </div>
  );
};

export default Tasks;
