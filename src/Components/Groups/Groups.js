import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import PageHeading from '../PageHeading/PageHeading';
import data from "../../groups.json";
import ReadOnlyGroup from "./ReadOnlyGroup";
import EditGroup from "./EditGroups";

import style from "./Groups.module.css";

const Groups = () => {
  const [groups, setGroups] = useState(data);
  const [addFormData, setAddFormData] = useState({
    id: "",
    name: "",
    basics: "",
    practice: "",
    patProjects:""
  });

  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    basics: "",
    practice: "",
    patProjects:""
  });

  const [editGroupId, setEditGroupId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newGroup = {
      id: nanoid(),
      name: addFormData.name,
      basics: addFormData.basics,  
      practice: addFormData.practice,
      patProjects: addFormData.patProjects,
    };

    const newtGroups = [...groups, newGroup];
    setGroups(newtGroups);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedGroup = {
      id: editGroupId,
    name: editFormData.name,
      basics: editFormData.basics,
      practice: editFormData.practice,
      patProjects: editFormData.patProjects,
    };

    const newGroups = [...groups];

    const index = groups.findIndex((contact) => contact.id === editGroupId);

    newGroups[index] = editedGroup;

    setGroups(newGroups);
    setEditGroupId(null);
  };

  const handleEditClick = (event, group) => {
    event.preventDefault();
    setEditGroupId(group.id);

    const formValues = {
    name: group.name,
    basics: group.basics,
     practice: group.practice,
     patProjects: group.patProjects
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditGroupId(null);
  };

  const handleDeleteClick = (groupId) => {
    const newGroups = [...groups];

    const index = groups.findIndex((group) => group.id === groupId);

    newGroups.splice(index, 1);

    setGroups(newGroups);
  };

    return (
        <>
      <PageHeading text="Groups"/>
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
                <tr
                  className={style.item}
                >
              <th>ID</th>
              <th>Name</th>
              <th>Basics</th>
              <th>Practice</th>
              <th>Pat projects</th>
            
            <th> </th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <Fragment>
                {editGroupId === group.id ? (
                  <EditGroup
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyGroup
                    group={group}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add Group</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input className={style.inputAdd}
          type="text"
          name="name"
          required="required"
          placeholder="Enter a group name..."
          onChange={handleAddFormChange}
        />        
            <button type="submit"
              className={style.btn}
            >Add</button>
      </form>
    </div>
  </>
  );
};

export default Groups;
