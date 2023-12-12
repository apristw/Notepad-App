import { getInitialData } from "../utils";
import CardActive from "./CardActive";
import { useState } from "react";
import CardRestore from "./CardRestore";
import NoteInput from "./NoteInput";
import SearchNote from "./SearchNote";

function Notepad() {
  const [initialData, setInitialData] = useState(getInitialData());
  const [isInputNoteVisible, setIsInputNoteVisible] = useState(false);
  const [search, setSearch] = useState("");

  const onSearchNote = (valueInput) => {
    setSearch(valueInput);
  };

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

  const showNoteInput = () => {
    setIsInputNoteVisible(true);
    document.body.classList.add("overflow-hidden");
  };

  const hideNoteInput = () => {
    setIsInputNoteVisible(false);
    document.body.classList.remove("overflow-hidden");
  };

  const filteredNotes = initialData.filter((note) => {
    return note.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1 className="text-center mt-7 text-gray-600 text-3xl font-bold ">
        Note App
      </h1>
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center px-19 my-4">
        <button
          className="bg-[#22a6b3] hover:bg-[#108690] py-3 px-4 text-white font-semibold"
          onClick={showNoteInput}
        >
          Tambah Catatan
        </button>

        <SearchNote onSearchNote={onSearchNote} search={search} />
      </div>
      {isInputNoteVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="max-w-xl w-full bg-white p-8 rounded-md">
            <NoteInput addNote={addNote} onClose={hideNoteInput} />
          </div>
        </div>
      )}
      <CardActive
        initialData={filteredNotes}
        onDelete={onDeleteHandler}
        archiveToggle={handleArchiveToggle}
      />
      <hr className="max-w-7xl w-full mx-auto h-1 bg-gray-300" />
      <CardRestore
        initialData={filteredNotes}
        onDelete={onDeleteHandler}
        archiveToggle={handleArchiveToggle}
      />
    </div>
  );
}

export default Notepad;
