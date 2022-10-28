import { useState } from "react";
import CalendarItem from "../components/CalendarItem";
import { useStoreContext } from "../context";

function Calendar() {
  const { timelogs } = useStoreContext();
  const [fromDate, setFromDate] = useState(
    new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString()
  );
  const [toDate, setToDate] = useState(
    new Date(Date.now()).toLocaleDateString()
  );

  return (
    <div className="text-center">
      <h1>Calender</h1>
      <form className="flex flex-col justify-center items-center mt-10 mb-4">
        <div className="flex">
          <div className="flex flex-col justify-center items-center m-1">
            <span>From date</span>
            <input
              type="text"
              className="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 shadow"
              placeholder="eg. 2022-04-13"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center items-center m-1">
            <span>To date</span>
            <input
              type="text"
              className="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 shadow"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>
      </form>

      {timelogs &&
        timelogs
          .slice(0)
          .reverse()
          .map((item) => {
            const date = new Date(item.createdAt);
            const start = new Date(fromDate);
            const end = new Date(toDate);
            const end2 = new Date(end.setDate(end.getDate() + 1));

            if (date > start && date < end2) {
              return <CalendarItem key={item.id} item={item} />;
            }
          })}
    </div>
  );
}

export default Calendar;
