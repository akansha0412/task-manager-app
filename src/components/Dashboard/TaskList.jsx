import React from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem";

const TasksList = styled.div`
  background:#fff;
  padding: 20px;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    border-radius: unset;
  }
`;
const Table = styled.table`
width: 100%;
border-collapse: collapse;
`;
const TBody = styled.tbody`

`;

function TaskList({ tasks, onDelete, onEdit,onComplete }) {
  return (
    <TasksList >
        <Table>
            <TBody>
      {tasks.map((task) => (
        <TaskItem key={task.task_id} task={task} onDelete={onDelete} onEdit={onEdit} onComplete={onComplete} />
      ))}
      </TBody>
      </Table>
    </TasksList>
  );
}

export default TaskList;
