import React, {
  FC,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import axios from "axios";
import { getProjects } from "./functions";
export const StoreContext = createContext<any | null>(null);

const StoreProvider: FC<any> = ({ children }) => {
  const [projects, setProjects] = useState<any>();
  const [tasks, setTasks] = useState<any>();
  const [timelogs, setTimelogs] = useState<any>();

  useEffect(() => {
    axios.get("http://localhost:3000/projects").then((res) => {
      setProjects(res.data);
    });
    axios.get("http://localhost:3000/tasks").then((res) => {
      setTasks(res.data);
    });
    axios.get("http://localhost:3000/timelogs").then((res) => {
      setTimelogs(res.data);
    });
  }, []);

  return (
    <StoreContext.Provider value={{ projects, tasks, timelogs }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("Outside the provider");
  }

  return context;
};

export default StoreProvider;
