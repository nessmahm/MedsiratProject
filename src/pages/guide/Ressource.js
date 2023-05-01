import Table from "./Table";
import React, { useState } from "react";
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
function Ressource() {
  const RessourceType=["Ressources financières",  "Ressources matérielles","Ressources immatérielles", 
  "Ressources humaines", "Ressources communautaires",]
  const financeHeaders = [
    "Ressources Financières",
    "Fondateur",
    "Description et quantité",
    "disponibilité",
  ];
  const materialHeaders = [
    "Ressources Matérielles",
    "Fondateur",
    "Description et quantité",
    "disponibilité",
  ];
  const nonMaterialHeaders = [
    "Ressources Immatérielles",
    "Fondateur",
    "Description et quantité",
    "disponibilité",
  ];
  const humanHeaders = [
    "Ressources Humaines",
    "Fondateur",
    "Description et quantité",
    "disponibilité",
  ];
  const communaHeaders = [
    "Ressources Communautaires",
    "Fondateur",
    "Description et quantité",
    "disponibilité",
  ];

  const emptyHeader = [];
  const [tableIndex, setTableIndex] = useState(0); // state to keep track of the table index
  const tables = [
    <table key={0}>
      {<Table
          rowHeaders={emptyHeader}
          columnHeaders={financeHeaders}
          numHeaders={1}
        />}
    </table>,
    <table key={1}>
     {<Table
          rowHeaders={emptyHeader}
          columnHeaders={materialHeaders}
          numHeaders={1}
        />}
    </table>,
    <table key={2}>
     { <Table
          rowHeaders={emptyHeader}
          columnHeaders={nonMaterialHeaders}
          numHeaders={1}
        />}
    </table>
    ,<table key={3}>
      {<Table
          rowHeaders={emptyHeader}
          columnHeaders={humanHeaders}
          numHeaders={1}
        />}
    </table>,
    <table key ={4}>
<Table
          rowHeaders={emptyHeader}
          columnHeaders={communaHeaders}
          numHeaders={1}
        />
    </table>,
    <div key={5}>
      <div className="description1">
        <h2 className="subDescription">
          Proposez trois{"  "}
          <span className="indication2"> 3 idées d'entreprises </span>
          que vous pouvez lancer{"  "}
          <span className="indication2">
            {"  "}
            en exploitant vos ressources{"  "}
          </span>
          {"  "}.{" "}
        </h2>
      </div>
    
    <div className="container2">
        <input
          type="text"
          className="text-field2"
          placeholder=" Ecrivez votre 1ere idée" />
<br></br>
        <input
          type="text"
          className="text-field2"
          placeholder=" Ecrivez votre 2eme idée" />
<br></br>
        <input
          type="text"
          className="text-field2"
          placeholder=" Ecrivez votre 3eme idée" />
      </div>


    </div>
  ];
  const handleNextTable = () => {
    if (tableIndex < tables.length - 1) {
      setTableIndex(tableIndex + 1);
    }
  };
  const handleBackTable = () => {
    setTableIndex(tableIndex - 1);
  };
  return (
    <div>
      {tableIndex !== 5 &&(
        <div className="description">
          <h2 className="subDescription">
            Parlez nous de vos <span className="indication"> {RessourceType[tableIndex]} </span>{" "}
            ?
          </h2>
        </div>)}
        
        <div className ="container1" >
        {tableIndex >0 &&(
      <button className="arrow" onClick={handleBackTable}>  <FaAngleLeft size={70}  /></button> 
      )}
      {tables[tableIndex]}
      {tableIndex !== 5 &&(
      <button className="arrow" onClick={handleNextTable}>  <FaAngleRight size={70}  /></button> 
      )}
      </div>
     
       
    </div>
  );
}
export default Ressource;
