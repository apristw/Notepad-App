function SearchNote({ onSearchNote, search }) {
  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="Cari Catatan..."
          className="bg-gray-300 py-3 px-4"
          value={search}
          onChange={(event) => onSearchNote(event.target.value)}
        />
      </form>
    </>
  );
}

export default SearchNote;
