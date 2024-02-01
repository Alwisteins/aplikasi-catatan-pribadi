import React from "react";
import { useState } from "react";
import { Buttons, iconStyle } from "./Buttons";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Collections({ collectionList, handleCollectionModalOpen }) {
  const [isHidden, setIsHidden] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handleOnClick = () => setIsHidden(!isHidden);
  const handleOnClickOption = (option) => {
    handleOnClick();
    if (option === "Edit") {
      setIsEdit(!isEdit);
      setIsDelete(false);
    }
    if (option === "Delete") {
      setIsDelete(!isDelete);
      setIsEdit(false);
    }
  };

  const IconButton = ({ icon: Icon, color, onClick }) => (
    <button className="hover:scale-150 hover:rotate-12" onClick={onClick}>
      <Icon style={{ ...iconStyle, color }} />
    </button>
  );

  return (
    <div className="px-2 pt-4">
      <div className="flex justify-between mb-0.5 text-[#CFCFCF] text-sm border-b">
        <p>collections</p>
        <div className="space-x-4">
          <button onClick={handleOnClick}>···</button>
          <button onClick={handleCollectionModalOpen}>+</button>
        </div>
      </div>
      <Buttons isHidden={isHidden} handleOnClickOption={handleOnClickOption} />
      <div>
        {collectionList.map((collection, index) => (
          <div
            className="flex justify-between text-sm px-3 py-2 hover:bg-[#F1F1F1] rounded-lg"
            key={index}
          >
            <div className="flex space-x-1">
              {isEdit && (
                <IconButton
                  icon={EditIcon}
                  color="#A855F7"
                  onClick={handleEdit}
                />
              )}
              {isDelete && (
                <IconButton
                  icon={DeleteIcon}
                  color="#E74C3C"
                  onClick={handleDelete}
                />
              )}
              <p>{collection.name}</p>
            </div>
            <p>{collection.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
