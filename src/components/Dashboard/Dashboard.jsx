// Dashboard.js
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../design-system/Button";
import { SearchField } from "../design-system/SearchField";
import { AddNewTask } from "./AddNewTask";
import { InfoCard } from "./InfoCard";
import TaskList from "./TaskList";
import { TasksPieChart } from "./TasksPieChart";

const MainDiv = styled.div`
  padding: 20px 150px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: unset;
    padding-top: 20px;
  }
`;

const CardsDiv = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    padding: 10px;
  }
`;

const Title = styled.div`
  color: #5c5b5b;
  font-weight: 500;
  font-size: 20px;
  margin-right: auto;
`;

const Li = styled.li`
  text-decoration: ${(props) => (props.isDone ? "line-through" : "unset")};
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const DoneTasksCountDiv = styled.div`
  font-size: 48px;
  font-weight: 600;
  color: #1890ff;
`;

const TotalCountDiv = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-left: 17px;
  margin-top: -12px;
`;

const NoSearch = styled.div`
  font-size: 16px;
  font-weight: 400;
  background: #fff;
  padding: 20px;
  border-radius: 30px;
  color:#999;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    border-radius: unset;
  }
`;

export const Dashboard = ({
  tasks,
  onAdd,
  onDelete,
  onEdit,
  onComplete,
  onSearch,
  isNoSearch,
}) => {
  const [isButtonClick, setIsButtonClick] = useState(false);

  function renderTaskCompletedCount() {
    const completedTasks = tasks.filter((task) => task.isDone === true);
    return (
      <Div>
        <DoneTasksCountDiv>{completedTasks.length}</DoneTasksCountDiv>
        <TotalCountDiv>/ {tasks.length}</TotalCountDiv>
      </Div>
    );
  }

  return (
    <>
      <MainDiv>
        <CardsDiv>
          <InfoCard>
            <>
              <Title>Tasks Completed </Title>
              {renderTaskCompletedCount()}
            </>
          </InfoCard>
          <InfoCard>
            <>
              <Title>Latest Created Tasks </Title>

              <ul>
                {tasks.slice(0, 3).map((task) => (
                  <Li isDone={task.isDone} key={task.task_id}>
                    {task.task_name}
                  </Li>
                ))}
              </ul>
            </>
          </InfoCard>
          <InfoCard>
            <TasksPieChart
              totalTasks={tasks.length}
              completedTasks={
                tasks.filter((task) => task.isDone === true).length
              }
            />
          </InfoCard>
        </CardsDiv>
        <Header>
          <Title>Tasks</Title>
          <SearchField onSearch={onSearch} />
          <Button
            onClick={() => {
              setIsButtonClick(true);
            }}
            text="+ New Task"
          ></Button>
        </Header>
        {isNoSearch ? (
          <NoSearch>No Results Found</NoSearch>
        ) : (
          <TaskList
            tasks={tasks}
            onDelete={onDelete}
            onEdit={onEdit}
            onComplete={onComplete}
          />
        )}
      </MainDiv>
      {isButtonClick && (
        <AddNewTask
          onClose={() => {
            setIsButtonClick(false);
          }}
          onAdd={onAdd}
        />
      )}
    </>
  );
};
