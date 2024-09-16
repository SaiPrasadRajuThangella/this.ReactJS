import { columns } from "./data";
import Box from "./Box";
import "./column-shuffle.css";
import { useState } from "react";

const getAllIds = () => columns.map((column) => column.id);

const filterColumns = (availableColumnsIds) => {
  const availableColumns = [];
  const selectedColumns = [];
  columns.forEach(({ id }, index) => {
    if (availableColumnsIds.find((availableId) => availableId === id)) {
      availableColumns.push(columns[index]);
    } else {
      selectedColumns.push(columns[index]);
    }
  });

  return [availableColumns, selectedColumns];
};
 
 
const ColumnShuffle = () => {
  const [availableColumnsIds, setavailableColumnsIds] = useState(getAllIds);
  const [availableColumns, selectedColumns] =
    filterColumns(availableColumnsIds);
  const [selectedColumn, setSelectedColumn] = useState({ id: null ,box:null});
  const isRightButtonEnabled = selectedColumn && selectedColumn.box === 1;
  const isLeftButtonEnabled = selectedColumn && selectedColumn.box === 2;
  const moveRight=()=>{
    setavailableColumnsIds(availableColumnsIds.filter(id => id!= selectedColumn.id))
    setSelectedColumn(null);
}
const moveLeft=()=>{
    setavailableColumnsIds([...availableColumnsIds,selectedColumn.id])
    setSelectedColumn(null);

  }
  
  return (
    <div className="container">
      <Box
        boxId={1}
        columnList={availableColumns}
        selectedColumn={selectedColumn}
        setSelectedColumn={setSelectedColumn}
        />
      <div className="options">
        <button onClick={()=>moveRight()}
        className="material-icons " disabled={!isRightButtonEnabled}>chevron_right</button>
        <button onClick={()=>moveLeft()}className="material-icons " disabled={!isLeftButtonEnabled}>chevron_left</button>
      </div>
      <Box
        boxId={2}
        columnList={selectedColumns}
        selectedColumn={selectedColumn}
        setSelectedColumn={setSelectedColumn}
      />
    </div>
  );
};
export default ColumnShuffle;
