import Table from "./Table";
import React, {useEffect, useState} from "react";
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
function Ressource() {
  const RessourceType=["Ressources financières",  "Ressources matérielles","Ressources immatérielles",
  "Ressources humaines", "Ressources communautaires",]

  const initialTableState = {
    ressources: ["", "", ""],
    fondateurs: ["", "", ""],
    description: ["", "", ""],
    disponibilite: ["", "", ""]
  };

  const [ressourcesFinanciers, setressourcesFinanciers] = useState({ ...initialTableState });
  const [ressourcesMateriels, setressourcesMateriels] = useState({ ...initialTableState });
  const [ressourcesImmateriels, setressourcesImmateriels] = useState({ ...initialTableState });
  const [ressourcesHumaines, setressourcesHumaines] = useState({ ...initialTableState });
  const [ressourcesCommunautaires, setressourcesCommunautaires] = useState({ ...initialTableState });
  const columns=["ressources","fondateurs","description","disponibilite"]

  const data=["ressourcesFinanciers",
  "ressourcesMateriels",
  "ressourcesImmateriels",
  "ressourcesHumaines",
  "ressourcesCommunautaires"]

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
  const [tablesInfo, setTablesInfo] = useState({
    ressourcesFinanciers:ressourcesFinanciers,
        ressourcesMateriels:ressourcesMateriels,
        ressourcesImmateriels:ressourcesImmateriels,
        ressourcesHumaines :ressourcesHumaines,
        ressourcesCommunautaires:ressourcesCommunautaires
  })

  const tableHeaders=[financeHeaders,materialHeaders,nonMaterialHeaders,humanHeaders,communaHeaders]
  const tableSets=[setressourcesFinanciers,setressourcesMateriels,setressourcesImmateriels,setressourcesHumaines,setressourcesCommunautaires]

useEffect(() => {
  console.log("big table ",tablesInfo)
},[tablesInfo])

  const emptyHeader = [];
  const [tableIndex, setTableIndex] = useState(0); // state to keep track of the table index

  const handleNextTable = () => {
    if (tableIndex < 5) {
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
          <div key={tableIndex}>
            { tableIndex<5 &&
                <Table
                rowHeaders={emptyHeader}
                columnHeaders={tableHeaders[tableIndex]}
                numHeaders={1}
                header={columns}
                tableValue={tablesInfo}
                setTable={setTablesInfo}
                tableName={data[tableIndex]}
            />}
          </div>
          {
            tableIndex === 5 && <>
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
              </>
          }
      {tableIndex !== 5 &&(
      <button className="arrow" onClick={handleNextTable}>  <FaAngleRight size={70}  /></button> 
      )}
      </div>

       
    </div>
  );
}
export default Ressource;
