import { useEffect, useState } from "react";
import CreateTimerModal from "../components/CreateTimerModal";
import TimelogItem from "../components/TimelogItem";
import { useStoreContext } from "../context";

function Timer() {
  const { timelogs, tasks } = useStoreContext();
  const [modal, setModal] = useState<boolean>(false);

  const seconds = 4000;

  const timerHours = (seconds: number) => {
    return Math.floor(seconds / 3600);
  };

  const timerMinutes = (seconds: number) => {
    return Math.floor((seconds / 60) % 60);
  };

  return (
    <div>
      <div className="h-[40vh] bg-gray-300 relative text-center">
        <h1>TIMER</h1>
        <div
          className="absolute top-0 right-2 text-3xl"
          onClick={() => setModal(true)}
        >
          +
        </div>
      </div>
      <div className="mt-2 mb-20">
        {timelogs &&
          timelogs
            .slice(0)
            .reverse()
            .map((item) => {
              const hehe = new Date(Date.parse(item.createdAt));
              // return <TimelogItem key={item.id}>{hehe.toUTCString()}</TimelogItem>;
              return (
                <TimelogItem
                  key={item.id}
                  taskId={item.taskId}
                  createdAt={item.createdAt}
                  start={item.start}
                  end={item.end}
                />
              );
            })}
      </div>
      <div>
        {timerHours(seconds)} hours {timerMinutes(seconds)} minutes{" "}
        {seconds % 60} seconds
      </div>
      {modal && <CreateTimerModal setModal={setModal} />}
    </div>
  );
}

export default Timer;
