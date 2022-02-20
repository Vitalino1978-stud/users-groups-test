import React from "react";
import style from "./Users.module.css";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td >
        <input className={ style.inputEditing}
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="userName"
          value={editFormData.userName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className={ style.inputEditing}
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className={ style.inputEditing}
          type="date"
          required="required"
          placeholder="Enter date..."
          name="date"
          value={editFormData.date}
          onChange={handleEditFormChange}
          disabled
        ></input>
      </td>
      <td>
        <select className={ style.inputEditing}
          type="text"
          name="group"
          required="required"
          placeholder="choose"  
           value={editFormData.group}
          onChange={handleEditFormChange}
              >
              <option value="React">React</option>
              <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
                <option value="Node">Node.js</option>
              </select>
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