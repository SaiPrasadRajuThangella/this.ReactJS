const Box = ({ boxId, columnList, setSelectedColumn, selectedColumn }) => {
  return (
    <div className="box">
      {columnList.map((column) => {
        const updateSelection = ()=> {
          if (selectedColumn?.id ===column.id) {
            setSelectedColumn(null);
          } else setSelectedColumn({ id: column.id, box: boxId });
        }
        return (
          <p
            key={column.id}
            className={selectedColumn?.id == column.id ? "Active" : ""}
            onClick={updateSelection}
          >
            {column.displayName}
          </p>
        );
      })}
    </div>
  );
};

export default Box;
