import React, { useState } from "react";
import { getItemFromLS, getUUID, setItemInLS } from "../../utils/commonUtils";
import { Dashboard } from "./Dashboard";
import { NavBar } from "./NavBar";
import { NoTaskContainer } from "./NoTaskPopover";

export const DashboardContainer = () => {
  const [tasks, setTasks] = useState(getItemFromLS('tasksData'));
  const [isNoSearch,setIsNoSearch]=useState(false)

  const handleAddTask = (newTask) => {
    setTasks([
      { task_id: getUUID(), task_name: newTask, isDone: false },
      ...tasks,
    ]);
    setItemInLS('tasksData',[
        { task_id: getUUID(), task_name: newTask, isDone: false },
        ...tasks,
      ])
  };

  const handleUpdateTask = (taskId, updatedTask) => {
    if(updatedTask && updatedTask!==undefined){
    const newTasks = [...tasks];
    let obj = newTasks.find((task) => task.task_id === taskId);
    if (obj) obj.task_name = updatedTask;
    setTasks([...newTasks]);
    setItemInLS('tasksData',[...newTasks])
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedtasks = tasks.filter((task) => task.task_id !== taskId);
    setTasks([...updatedtasks]);
    setItemInLS('tasksData',[...updatedtasks])
  };

  const handleComplete = (taskId) => {
    const newTasks = [...tasks];
    let obj = newTasks.find((task) => task.task_id === taskId);
    if (obj) obj.isDone = obj.isDone === true ? false : true;
    setTasks([...newTasks]);
    setItemInLS('tasksData',[...newTasks])
  };


  const handleSearch = (taskName) => {
    let currentList = [];
    let newList = [];

    if (taskName !== "") {
      currentList = [...tasks];
      newList = currentList.filter(item => {
        const lc = item.task_name.toLowerCase();
        const filter = taskName.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = getItemFromLS('tasksData');
      setIsNoSearch(false)
    }
    if(newList.length>0) setTasks(newList)
    else setIsNoSearch(true)
    //setTasks(newList.length>0 ? newList:getItemFromLS('tasksData'));
  };

  return (
    <div>
      <NavBar/>
      {tasks.length === 0 ? (
        <NoTaskContainer onAdd={handleAddTask} />
      ) : (
        <Dashboard
          tasks={tasks}
          onAdd={handleAddTask}
          onDelete={handleDeleteTask}
          onEdit={handleUpdateTask}
          onComplete={handleComplete}
          onSearch={handleSearch}
          isNoSearch={isNoSearch}
        />
      )}
    </div>
  );
};
