import React, {useEffect, useState} from "react";
import "./table.css"; // import your CSS file

function Table  ({ tableName,rowHeaders, columnHeaders, numHeaders , tableValue,setTable,header}){

  const [tableInfo, setTablesInfo] = useState(tableValue[tableName]);


  useEffect(() => {
      console.log("modifer table info",tableInfo)
      console.log("modifer big table ",tableValue["ressourcesImmateriels"])
      //setTable(prevTable => ({...prevTable,[tableName]:tableInfo}))

  },[tableInfo])


  const handleTable= (column,row, value)=>{

    const cel = tableInfo[header[column]];
    cel[row] = value;
    console.log("cell", {...tableInfo,[header[column]]:cel})
    setTablesInfo({...tableInfo,[header[column]]:cel})

  };
const [rowNumber, setRowNumber] = useState(3);
const rows = Array.from({ length: rowNumber }, (_, index) => index);

  return (
    
    <div>
      {
      numHeaders === 2 && (
        <div className="description">
        <h2 className="subDescription">
          Quels sont <span className="indication"> vos capacités </span> et <span className="indication"> vos lacunes</span> ?
        </h2>
        <h2 className="subDescription">
          Comment <span className="indication"> profiter</span> de vos capacités pour <span className="indication"> se développer</span> ?
        </h2>
        <h2 className="subDescription">
          Comment <span className="indication"> corriger </span> vos lacunes pour <span className="indication"> se développer </span> ?
        </h2>
      </div>
      ) 
    } 
      
     <table>
        <thead>
        <tr>
          {
            columnHeaders && columnHeaders.map((header, colIndex) => (
                  <th className="header1" id={"header: "+header} >{header}</th>

              ))
          }
        </tr>
        </thead>
       <tbody>
        {
          rows?.map(rowIndex => (
              <tr key={"row: "+rowIndex+tableName} >{
                columnHeaders && columnHeaders?.map((column, colIndex) =>
                      ( <td key={"column: "+colIndex+tableName}>
                            <textarea
                                className="cell1"
                                value={tableInfo[header[colIndex]][rowIndex]}
                                onChange={(event) =>(
                                  handleTable(colIndex,rowIndex,event.target.value)
                                )

                                }
                            />
                      </td>))
                  }
              </tr>
              ))
        }
       </tbody>



      </table>
    </div>
  );
};

export default Table;
