import React, { useState,useRef } from 'react'
import FieldModal from '../../Modals/FieldModal';
function SignUpCoach() {
    const coachingFields = [
        "Business coaching",
        "Career coaching",
        "Leadership coaching",
        "Executive coaching",
        "Life coaching",
        "Health and wellness coaching",
        "Financial coaching",
        "Relationship coaching",
        "Personal development coaching",
        "Team coaching",
        "Communication coaching",
        "Performance coaching",
        "Sales coaching",
        "Time management coaching",
        "Mindfulness coaching",
        "Creativity coaching",
        "Transition coaching",
        "Strategic planning coaching",
        "Success coaching",
        "Other"
      ];
const [selectedFile,setSelectedFile]=useState(null);
const handlFileNames=(files)=> {
    
    setSelectedFile([files])
}
const fileInputRef = useRef(null);

const handleClick = () => {
  fileInputRef.current.click();
};

const handleFileSelect = (event) => {
    const fileName = event.target.files;
        setSelectedFile(fileName);
        console.log(fileName)
}

return (
     
            <div className="form">
    
                <div className='form-element'>
                   
                    <div className='form-element'>
                        <label>Company Name</label>
                        <input type="text" className ="input-container"  placeholder='MedSirat' />
                    </div>

                    <div className='form-element slect-fields'>
                        <label>Business Field</label>
                        <FieldModal fields={coachingFields} fieldsName={"Business Field"} />

                    </div>
                    <div className='form-element '>
                        <label>Certificate</label>
                        <div className="upload-btn-wrapper">
                            <button className="btn" onClick={handleClick}> Upload a file</button>
                            <input type="file" name="certificate" multiple   ref={fileInputRef} 
                            onChange={ (event) => 
                            { setSelectedFile(event.target.files[0].name)    
                            }} />
                           
                            <div id="file-chosen">
                                { !selectedFile ? 
                                ( <span>choose a file</span>)
                                :
                                (<span>{selectedFile}</span>  )
                                                    
                                }
                            </div>

                        </div>
                    </div> 
                    
                 
                    
                </div>
    
            </div>
            
            
    
   )
    }


export default SignUpCoach