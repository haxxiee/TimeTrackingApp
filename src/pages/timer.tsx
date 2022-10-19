import { useStoreContext } from "../context";

function Timer() {
  const { timelogs } = useStoreContext();

  const seconds = 3699;

  const timerHours = (seconds: number) => {
    return Math.floor(seconds / 3600);
  };

  const timerMinutes = (seconds: number) => {
    return Math.floor((seconds / 60) % 60);
  };

  return (
    <div>
      <div>TIMER</div>
      {timelogs &&
        timelogs.map((item) => {
          const hehe = new Date(Date.parse(item.createdAt));
          return <div key={item.id}>{hehe.toUTCString()}</div>;
        })}

      <div>
        {timerHours(seconds)} hours {timerMinutes(seconds)} minutes{" "}
        {seconds % 60} seconds
      </div>
    </div>
  );
}

export default Timer;
