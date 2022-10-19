import { useEffect, useState } from "react";
import CreateTimerModal from "../components/CreateTimerModal";
import TimelogItem from "../components/TimelogItem";
import { useStoreContext } from "../context";
import TimeProvider from "../context/timeContext";

function Timer() {
  const { timelogs, tasks } = useStoreContext();
  const [modal, setModal] = useState<boolean>(false);

  return (
    <TimeProvider>
      <div>
        <div className="h-[40vh] bg-gray-300 relative text-center">
          <h1>TIMER</h1>
          <>INFO SOM VISAS HÄR SKA SYNAS PÅ STATE/context, onClick, byt state</>
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
                return (
                  <TimelogItem
                    key={item.id}
                    id={item.id}
                    taskId={item.taskId}
                    createdAt={item.createdAt}
                    start={item.start}
                    end={item.end}
                    total={item.total}
                  />
                );
              })}
        </div>
        {modal && <CreateTimerModal setModal={setModal} />}
      </div>
    </TimeProvider>
  );
}

export default Timer;
