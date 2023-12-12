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
      className={`relative flex flex-col ${colorClass} justify-between h-[400px] max-w-[380px] w-full p-6 text-slate-600`}
    >
      <div className="overflow-hidden h-full">
        <h2 className="font-bold text-2xl pr-4">{title}</h2>
        <p className="py-1 text-sm italic text-slate-500">
          {showFormattedDate(createdAt)}
        </p>
        <p>{body}</p>
      </div>
      <button
        onClick={() => archiveToggle(id)}
        className="w-full mt-4 py-4 z-20 border border-gray-400 hover:bg-slate-500 hover:text-white"
      >
        {archived === true ? "Pulihkan" : "Arsipkan"}
      </button>
      <button
        onClick={() => onDelete(id)}
        className="absolute top-0 right-0 py-3 px-3 bg-[#faa5ac] hover:bg-[#ff4757]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
}

export default CardItem;
