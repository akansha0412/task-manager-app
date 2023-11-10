import React from "react";
import styled from "styled-components";
import {
  MdEdit,
  MdCheckBoxOutlineBlank,
  MdDelete,
  MdDone,
} from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { useState } from "react";
import useForm from "../../hooks/useForm";
import { InputField } from "../design-system/InputField";

const Tr = styled.tr`
  height: 60px;
  border-bottom: 1px solid rgba(0,0,0,0.12);
  font-size: 20px;
  color: #999;
  &:last-child {
    border-bottom: none;
  }
`;
const Td1 = styled.td`
  width: 3%;
  cursor: pointer;
`;
const Td2 = styled.td`
  width: 95%;
  text-transform: capitalize;
  color: ${(props) => (props.isDone ? "#999" : "#1890ff")};
  text-decoration: ${(props) => (props.isDone ? "line-through" : "unset")};
  @media (max-width: 768px) {
    width: 85%;
  }
`;

const Td3 = styled.td`
  cursor: pointer;
`;

const Td4 = styled.td`
  cursor: pointer;
`;

function TaskItem({key, task, onDelete, onEdit, onComplete }) {
  const [isEdit, setIsEdit] = useState("");
  const { values, handleChange, handleSubmit } = useForm(handleEdit);

  function handleEdit() {
    onEdit(isEdit, values.task_name);
    setIsEdit("");
  }

  return (
    <Tr key={key}>
      <Td1>
        {task.isDone ? (
          <IoMdCheckboxOutline onClick={() => onComplete(task.task_id)} />
        ) : (
          <MdCheckBoxOutlineBlank onClick={() => onComplete(task.task_id)} />
        )}
      </Td1>
      <Td2 isDone={task.isDone}>
        {isEdit ? (
          <InputField
            placeholder={task.task_name}
            name="task_name"
            autoFocus={true}
            onChange={handleChange}
            required={false}
            value={values.task_name || ""}
          />
        ) : (
          task.task_name
        )}
      </Td2>
      <Td3>
        {isEdit ? (
          <MdDone onClick={() => handleSubmit()} />
        ) : (
          <MdEdit onClick={() => setIsEdit(task.task_id)} />
        )}
      </Td3>
      <Td4>
        <MdDelete onClick={() => onDelete(task.task_id)} />
      </Td4>
    </Tr>
  );
}

export default TaskItem;
