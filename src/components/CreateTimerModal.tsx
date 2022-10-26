import { FC, useState } from "react";
import { useStoreContext } from "../context";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setModal: (modal: boolean) => void;
}

const CreateTimerModal: FC<Props> = ({ setModal }) => {
  const { tasks, createTimelog, getTaskFromId } = useStoreContext();
  const [selectTaskId, setSelectTaskId] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const project = getTaskFromId(selectTaskId || tasks[0].id);

    const timelogObject = {
      id: uuidv4(),
      projectId: project.projectId,
      taskId: selectTaskId || tasks[0].id,
      createdAt: new Date().toISOString(),
      start: null,
      end: null,
      total: 0,
    };

    createTimelog(timelogObject);
    setModal(false);
  };

  return (
    <div className="flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div
        className="absolute bg-black/60 top-0 right-0 bottom-0 left-0 z-10 flex justify-center items-center"
        onClick={() => setModal(false)}
      />

      <form
        className="w-4/5 h-1/3 bg-slate-100 flex flex-col items-center rounded-md z-20 relative"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center items-center mt-10">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Select task
          </label>
          <div className="inline-block relative w-40">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setSelectTaskId(e.target.value)}
            >
              {tasks.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                );
              })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex gap-2 w-[90%] absolute bottom-10">
          <button
            className="bg-green-600 p-2 rounded-md mt-10 w-full text-white font-semibold"
            type="submit"
          >
            Create
          </button>
          <button
            className="bg-red-500 p-2 rounded-md mt-10 w-full text-white font-semibold"
            type="button"
            onClick={() => setModal(false)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTimerModal;
