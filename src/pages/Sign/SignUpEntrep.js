import React from 'react'
import {BiLeftArrowAlt} from  "react-icons/bi";
import FieldModal from '../../Modals/FieldModal';

function SignUpEntrep() {
    const EntrepreneurFields = [
        "E-commerce",
        "Marketing and Advertising",
        "Financial Services",
        "Health and Wellness",
        "Food and Beverage",
        "Consulting",
        "Real Estate",
        "Education",
        "Technology",
        "Manufacturing",
        "Hospitality",
        "Creative and Design",
        "Legal Services",
        "Non-profit",
        "Retail",
        "Agriculture",
        "Construction",
        "Transportation and Logistics",
        "Energy and Utilities",
        "Other"
    ];
  return (
   

        <div className="form">

            <div className='form-element'>
                     <div className='form-element'>
                        <label>Company Name</label>
                        <input type="text" className ="input-container"  placeholder='MedSirat' />
                     </div>
                     <div className='form-element slect-fields'>
                        <label>Business Field</label>
                        <FieldModal fields={EntrepreneurFields} fieldsName={"Business Field"} />
                    </div>    
                                                
             
                
            </div>

       
</div>   )
}

export default SignUpEntrep