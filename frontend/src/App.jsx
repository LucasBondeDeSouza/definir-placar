import React, { useState } from "react";
import axios from "axios";

import SelectTeam from "./components/SelectTeam";
import SelectRound from "./components/SelectRound";
import InputGoals from "./components/InputGoals";

export default () => {
  const [round, setRound] = useState(1)
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [goals1, setGoals1] = useState('')
  const [goals2, setGoals2] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const matchData = {round, team1, team2, goals1, goals2};
      
      await axios.put('http://localhost:5000/api/matches', matchData)

      setTeam1('')
      setTeam2('')
      setGoals1('')
      setGoals2('')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-neutral-100">
        <form onSubmit={handleSubmit} className="w-2xl rounded-lg shadow-xl bg-white mx-2 px-10 py-5">
          <SelectRound round={round} setRound={setRound} />

          <div className="flex flex-row justify-between mt-5">
            <SelectTeam team={team1} setTeam={setTeam1} placeholder={"Mandante"} />

            <InputGoals goals1={goals1} setGoals1={setGoals1} goals2={goals2} setGoals2={setGoals2} />

            <SelectTeam team={team2} setTeam={setTeam2} placeholder={"Visitante"} />
          </div>

          <button 
            type="submit"
            className="mt-10 w-full py-1 bg-green-600 hover:bg-green-700 text-white font-semibold text-2xl rounded-lg cursor-pointer transition duration-500"
          >
            Definir Placar
          </button>
        </form>
      </div>
    </>
  )
}