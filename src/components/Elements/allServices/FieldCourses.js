import React from "react"
import "./services.css"
import { field } from "../../../dummydata"
import Title from "../Hero/Title"

const FieldCourses= () => {
  return (
    <>
      <section className='field'>
        <div className='container'>
          <Title subtitle='Votre domaine de projet' title='Voir les fieldes maitrisés par nos experts' />
          <div className='content grid3'>
            {field.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FieldCourses
