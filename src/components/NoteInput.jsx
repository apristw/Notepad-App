import { useState } from "react";

function NoteInput({ addNote, onClose }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleError, setTitleError] = useState("");

  const titleMaxLength = 50;

  const handleTitleChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= titleMaxLength) {
      setTitle(inputValue);
      setTitleError("");
    } else {
      if (title.length < titleMaxLength) {
        setTitleError("Judul tidak boleh lebih dari 50 karakter");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() !== "" && body.trim() !== "") {
      if (title.length <= titleMaxLength) {
        setTitleError("");
        addNote({ title, body });
        setTitle("");
        setBody("");
        onClose();
      } else {
        return;
      }
    }
  };

  const remainingChars = titleMaxLength - title.length;

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-600 font-medium">
          Judul ({remainingChars} karakter tersisa):
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-500 ${
            titleError ? "border-red-500" : ""
          }`}
          placeholder="Masukkan judul catatan"
        />
        {titleError && (
          <p className="text-red-500 text-sm mt-1">{titleError}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="body" className="block text-gray-600 font-medium">
          Isi Catatan:
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-500"
          placeholder="Masukkan isi catatan"
          rows="4"
        ></textarea>
      </div>
      <button
        type="button"
        className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 mr-4"
        onClick={() => onClose()}
      >
        Tutup
      </button>
      <button
        type="submit"
        className="bg-[#487eb0] text-white px-4 py-2 hover:bg-[#366794] focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Tambah Catatan
      </button>
    </form>
  );
}

export default NoteInput;
