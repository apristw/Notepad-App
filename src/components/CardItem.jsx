import { showFormattedDate } from "../utils";

function CardItem({
  id,
  title,
  body,
  createdAt,
  archived,
  colorClass,
  onDelete,
  archiveToggle,
}) {
  return (
    <div
      className={`relative flex flex-col ${colorClass} justify-between h-[400px] max-w-[380px] w-full p-6 text-slate-600 gap-y-8`}
    >
      <div>
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="my-1 text-sm italic text-slate-500">
          {showFormattedDate(createdAt)}
        </p>
        <p>{body}</p>
      </div>
      <button
        onClick={() => archiveToggle(id)}
        className="w-full mt-2 py-4 border border-gray-400 hover:bg-slate-500 hover:text-white"
      >
        {archived === true ? "Pulihkan" : "Arsipkan"}
      </button>
      <button
        onClick={() => onDelete(id)}
        className="absolute top-0 right-0 py-4 px-4 bg-red-200"
      >
        X
      </button>
    </div>
  );
}

export default CardItem;
