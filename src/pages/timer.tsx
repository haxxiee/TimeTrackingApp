import { useEffect, useState } from "react";
import CreateTimerModal from "../components/CreateTimerModal";
import TimelogItem from "../components/TimelogItem";
import TimerInfo from "../components/TimerInfo";
import { useStoreContext } from "../context";
import TimeProvider from "../context/TimeContext";

function Timer() {
  const { timelogs, tasks } = useStoreContext();
  const [modal, setModal] = useState<boolean>(false);

  return (
    <TimeProvider>
      <div>
        <TimerInfo setModal={setModal} />
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
