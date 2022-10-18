import { FC } from "react";

interface Props {
  setModal: (modal: boolean) => void;
}

const CreateProjectModal: FC<Props> = ({ setModal }) => {
  return (
    <div className="flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div
        className="absolute bg-black/60 top-0 right-0 bottom-0 left-0 z-10 flex justify-center items-center"
        onClick={() => setModal(false)}
      />

      <div className="w-4/5 h-2/3 bg-slate-100 flex flex-col items-center rounded-md z-20">
        <div className="inline-block relative w-28">
          <label htmlFor=""></label>
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
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
        <div className="flex gap-2 w-[90%]">
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
