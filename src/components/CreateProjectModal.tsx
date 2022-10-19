import { FC, useState } from "react";

interface Props {
  setModal: (modal: boolean) => void;
}

const CreateProjectModal: FC<Props> = ({ setModal }) => {
  const [selectColor, setSelectColor] = useState<string>("green");
  return (
    <div className="flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div
        className="absolute bg-black/60 top-0 right-0 bottom-0 left-0 z-10 flex justify-center items-center"
        onClick={() => setModal(false)}
      />

      <div className="w-4/5 h-2/3 bg-slate-100 flex flex-col items-center rounded-md z-20 relative">
        <div className="flex flex-col justify-center items-center mt-14">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Project name
          </label>
          <div>
            <input
              type="text"
              id="project_name"
              className="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow"
              placeholder="Example Project"
              required
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Color for your project
          </label>
          <div className="inline-block relative w-28">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setSelectColor(e.target.value)}
            >
              <option value={"green"}>Green</option>
              <option value={"red"}>Red</option>
              <option value={"blue"}>Blue</option>
              <option value={"purple"}>Purple</option>
              <option value={"orange"}>Orange</option>
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
          <button className="bg-green-600 p-3 rounded-md mt-10 w-full text-white font-semibold">
            Create
          </button>
          <button
            className="bg-red-500 p-3 rounded-md mt-10 w-full text-white font-semibold"
            onClick={() => setModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
