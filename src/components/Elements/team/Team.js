import React from "react"
import TeamCard from "./TeamCard"
import "./team.css"
import "../about/about.css"
import Title from "../Hero/Title"

const Team = () => {
  return (
    <>
      <section className='team padding'>
      <Title subtitle='Nos experts' title='Découvrez nos experts' />

        <div className='container grid'>

          <TeamCard />
        </div>
      </section>
    </>
  )
}

export default Team
