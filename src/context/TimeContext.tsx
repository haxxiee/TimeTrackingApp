import { FC, useState, createContext, useContext, useEffect } from "react";

export const TimeContext = createContext<any | null>(null);

const TimeProvider: FC<any> = ({ children }) => {
  const [time, setTime] = useState<any>();
  const [currentTimer, setCurrentTimer] = useState<any>();
  const [isActive, setIsActive] = useState<any>();

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toISOString());
    }, 1000);
  }, []);

  return (
    <TimeContext.Provider
      value={{ time, setCurrentTimer, currentTimer, isActive, setIsActive }}
    >
      {children}
    </TimeContext.Provider>
  );
};

export const useTimeContext = () => {
  const context = useContext(TimeContext);

  if (!context) {
    throw new Error("Outside the provider");
  }

  return context;
};

export default TimeProvider;
