import CardItem from "./CardItem";

function CardRestore({ initialData, dateFormat, onDelete, archiveToggle }) {
  const colorArray = [
    "bg-red-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
  ];

  const getColorClass = (index) => {
    return colorArray[index % colorArray.length];
  };

  const filteredActive = initialData.filter((data) => data.archived === true);
  return (
    <div className="max-w-7xl mx-auto mb-16">
      <h2 className="text-2xl text-gray-500 py-3">Arsip</h2>
      <div className="grid grid-cols-3 gap-8 w-full ">
        {filteredActive.map((data, index) => {
          const colorClass = getColorClass(index);
          return (
            <CardItem
              {...data}
              key={data.id}
              dateFormat={dateFormat}
              colorClass={colorClass}
              onDelete={onDelete}
              archiveToggle={archiveToggle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardRestore;
