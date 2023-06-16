import React from "react"
import { awrapper } from "../../../assets/dummydata"

const Awrapper = () => {
  return (
    <>
      <section className='achievement awrapper'>
        <div className='container'>
          {awrapper.map((val) => {
            return (
              <div className='box '>
                <div className='img'>
                    <i className={val.icon }></i>
                </div>
                <div className='text'>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Awrapper
