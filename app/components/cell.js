
const Cell = ({ id, cell, cells, setCells, go, setGo,winningMessage }) => {
    const handleCellChange = (cellChange) => {
        let copyCells = [...cells];
        copyCells[id] = cellChange;
        setCells(copyCells);
    }

    const handleClick = (e) => {
        if(winningMessage){
            return
        }

        const isnotEmpty = !cells[id];

        if (isnotEmpty) {
            if (go === "circle") {
                handleCellChange("circle");
                setGo("cross");
            } else if (go === "cross") {
                handleCellChange("cross");
                setGo("circle");
            }
        }
    }


    return (
        <div className="Squar" onClick={handleClick}>
            <div className={cell}>
                {cell && cell ? (cell === "circle" ? "o" : "x") : ""}
            </div>
        </div>
    )
}
export default Cell;