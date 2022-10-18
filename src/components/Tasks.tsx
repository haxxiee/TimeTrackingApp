import { FC, useState } from "react";
import { useStoreContext } from "../context";
import CreateTaskModal from "./CreateTaskModal";

const Tasks: FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const { tasks } = useStoreContext();
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
      <button className="bg-gray-400" onClick={() => setModal(true)}>
        CREATE PROJECT
      </button>

      {modal && <CreateTaskModal setModal={setModal} />}
    </div>
  );
};

export default Tasks;
