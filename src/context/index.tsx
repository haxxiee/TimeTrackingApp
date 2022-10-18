import React, {
  FC,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import axios from "axios";
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

  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const createProject = (project: any) => {
    axios
      .post(
        "http://localhost:3000/projects",
        JSON.stringify(project),
        customConfig
      )
      .then((res) => {
        console.log(res);
        setProjects((prevstate) => [...prevstate, project]);
      });
  };

  return (
    <StoreContext.Provider value={{ projects, tasks, timelogs, createProject }}>
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
