import React from "react"
import "./services.css"
import { field } from "../../../assets/dummydata"
import Title from "../Hero/Title"

const FieldCourses= () => {
  return (
    <>
      <section className='field'>
          <Title subtitle='Votre domaine de projet' title='Voir les domaines maitrisés par nos experts' />
          <div className='field-content '>
            {field.map((val) => (
              <div className='box'>
                <div className={"box-body"}>
                    <div className='img'>
                        <img src={val.cover} />
                        <img src={val.hoverCover} alt='' className='show' />
                    </div>
                    <h1>{val.courseName}</h1>
                </div>
                <div className={"box-footer"}>
                    <span className={"expert"}>{val.course}</span>

                </div>
              </div>
            ))}
          </div>
      </section>
    </>
  )
}

export default FieldCourses
