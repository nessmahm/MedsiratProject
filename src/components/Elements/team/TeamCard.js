import React from "react"
import { team } from "../../../dummydata"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
            <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-linkedin icon'></i>
              <i className='fab fa-instagram icon'></i>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
