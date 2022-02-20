import React from "react";
import style from "./Groups.module.css";

const ReadOnlyRow = ({ group, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className={style.item}>
      <td>{group.id}</td>
      <td>{group.name}</td>
      <td>
        <input className={style.checkbox}
        type="checkbox"
        // name="basic"
        value={group.basic}
        ></input>
      </td>
      <td>
        <input className={style.checkbox}
        type="checkbox"
        name="practice"
        value={group.basic}
        ></input>
      </td>
      <td>
        <input className={style.checkbox}
        type="checkbox"
        name="patProjects"
        value={group.patProjects}
        ></input>
      </td>
      <td>
        <button
          type="button"
          className={style.btn}
          onClick={(event) => handleEditClick(event, group)}
        >
          Edit
        </button>
        <button
          type="button"
          className={style.btn}
          onClick={() => handleDeleteClick(group.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;