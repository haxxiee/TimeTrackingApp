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
    getProjects();
    getTasks();
    getTimelogs();
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
        setProjects((prevstate) => [...prevstate, project]);
      });
  };

  const getProjectFromId = (projectId: string) => {
    const project = projects.find((item) => item.id === projectId);
    return project;
  };

  const deleteProject = (id: any) => {
    if (!id) return;
    axios.delete(`http://localhost:3000/projects/${id}`).then((res) => {
      getProjects();
      getTasks();
      getTimelogs();
    });
  };

  const createTask = (task: any) => {
    axios
      .post("http://localhost:3000/tasks", JSON.stringify(task), customConfig)
      .then((res) => {
        setTasks((prevstate) => [...prevstate, task]);
      });
  };
  const getTaskFromId = (taskId: string) => {
    const task = tasks.find((item) => item.id === taskId);
    return task;
  };

  const deleteTask = (id: any) => {
    if (!id) return;
    axios.delete(`http://localhost:3000/tasks/${id}`).then((res) => {
      getTasks();
      getTimelogs();
    });
  };

  const createTimelog = (timelog: any) => {
    axios
      .post(
        "http://localhost:3000/timelogs",
        JSON.stringify(timelog),
        customConfig
      )
      .then((res) => {
        setTimelogs((prevstate) => [...prevstate, timelog]);
      });
  };

  const updateTimelog = (object: any, timelogId: any) => {
    axios
      .patch(
        `http://localhost:3000/timelogs/${timelogId}`,
        JSON.stringify(object),
        customConfig
      )
      .then((res) => {});
  };

  const deleteTimelog = (id: any) => {
    if (!id) return;
    axios.delete(`http://localhost:3000/timelogs/${id}`).then((res) => {
      getTimelogs();
    });
  };

  const getProjects = () => {
    axios.get("http://localhost:3000/projects").then((res) => {
      setProjects(res.data);
    });
  };
  const getTasks = () => {
    axios.get("http://localhost:3000/tasks").then((res) => {
      setTasks(res.data);
    });
  };

  const getTimelogs = () => {
    axios.get("http://localhost:3000/timelogs").then((res) => {
      setTimelogs(res.data);
    });
  };

  return (
    <StoreContext.Provider
      value={{
        projects,
        tasks,
        timelogs,
        setTimelogs,
        createProject,
        getProjectFromId,
        createTask,
        createTimelog,
        getTaskFromId,
        updateTimelog,
        deleteTimelog,
        deleteProject,
        deleteTask,
      }}
    >
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
