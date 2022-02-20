import React from "react";
import style from "./Groups.module.css";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td >
        <input className={style.inputId}
          type="text"
          required="required"
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
          disabled
        ></input>
      </td>
      <td>
        <input className={style.inputEditing}
          type="text"
          required="required"
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className={style.checkbox}
        type="checkbox"
        // name="basic"
        value={editFormData.basic}
        ></input>
      </td>
      <td>
        <input className={style.checkbox}
        type="checkbox"
        // name="basic"
        value={editFormData.basic}
        ></input>
      </td>
      <td>
        <input className={style.checkbox}
        type="checkbox"
        // name="basic"
        value={editFormData.basic}
        ></input>
      </td>
      <td>
        <button className={style.btn} type="submit">Save</button>
        <button className={style.btn} type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;