import { FC } from "react";

interface Props {
  setModal: (modal: boolean) => void;
}

const CreateProjectModal: FC<Props> = ({ setModal }) => {
  return (
    <div className="flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div
        className="absolute bg-slate-800/50 top-0 right-0 bottom-0 left-0 z-10 flex justify-center items-center"
        onClick={() => setModal(false)}
      />
      <div className="w-48 h-48 bg-slate-100 flex justify-center items-center z-20">
        <button
          className="bg-slate-600 p-3 rounded-md"
          onClick={() => setModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CreateProjectModal;
