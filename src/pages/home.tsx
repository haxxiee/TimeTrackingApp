import { useState } from "react";
import Projects from "../components/Projects";
import Tasks from "../components/Tasks";

function Home() {
  const [tab, setTab] = useState<boolean>(false);
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center w-full bg-indigo-200 py-5">
        <h1 className="text-lg font-semibold">Overview</h1>
      </div>
      <div className="flex w-full bg-slate-200">
        <button
          className={`w-1/2 p-2 ${!tab && "bg-slate-400"}`}
          onClick={() => setTab(false)}
        >
          Projects
        </button>
        <button
          className={`w-1/2 p-2 ${tab && "bg-slate-400"}`}
          onClick={() => setTab(true)}
        >
          Tasks
        </button>
      </div>
      {tab === false ? <Projects /> : <Tasks />}
    </div>
  );
}

export default Home;
