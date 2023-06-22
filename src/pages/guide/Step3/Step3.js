import {React, useState} from "react";
import BMCForm from "./BMC";
import BMCView from "./BMCView";

const Step3 = () => {
    const [bmc, setBMC] = useState(null);

    const handleSaveBMC = (newBMC) => {
      setBMC(newBMC);
    };
    return (
        <div className="Step1">
        
        {!bmc ? <BMCForm onSave={handleSaveBMC} /> : <BMCView bmc={bmc} />}
        
        </div>
    );
    }

export default Step3;