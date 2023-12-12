import { getInitialData, showFormattedDate } from "../utils";
import CardActive from "./CardActive";
import { useState } from "react";
import CardRestore from "./CardRestore";
import NoteInput from "./NoteInput";

function Notepad() {
  const [initialData, setInitialData] = useState(getInitialData());
  const dateFormat = showFormattedDate();

  const onDeleteHandler = (id) => {
    const dataAwal = initialData.filter((dataawal) => dataawal.id !== id);
    setInitialData(dataAwal);
  };

  const addNote = ({ title, body }) => {
    const newNote = {
      id: new Date().getTime(),
      title,
      body,
      createdAt: new Date(),
      archived: false,
    };

    setInitialData((prevData) => [newNote, ...prevData]);
  };

  const handleArchiveToggle = (id) => {
    const updatedData = initialData.map((data) => {
      if (data.id === id) {
        return { ...data, archived: !data.archived };
      }
      return data;
    });
    setInitialData(updatedData);
  };

  return (
    <div>
      <div className="max-w-7xl w-full mx-auto py-6 flex items-center justify-between">
        <h1 className="text-left text-gray-600 text-3xl font-bold ">
          Note App
        </h1>
      </div>
      <NoteInput addNote={addNote} />
      <CardActive
        initialData={initialData}
        dateFormat={dateFormat}
        onDelete={onDeleteHandler}
        archiveToggle={handleArchiveToggle}
      />
      <hr className="max-w-7xl w-full mx-auto h-1 bg-gray-300" />
      <CardRestore
        initialData={initialData}
        dateFormat={dateFormat}
        onDelete={onDeleteHandler}
        archiveToggle={handleArchiveToggle}
      />
    </div>
  );
}

export default Notepad;
