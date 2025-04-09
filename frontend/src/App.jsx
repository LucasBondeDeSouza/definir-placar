import React, { useState, useEffect } from "react";
import axios from "axios";
import Matches from "./components/Matches";
import Round from "./components/Round";

export default () => {
  const [data, setData] = useState([]);
  const [round, setRound] = useState(3)

  const fetchMatches = async () => {
    try {
      const response = await axios.get('https://simulador-server.vercel.app/api/matches')
      setData(response.data)
    } catch (err) {
      console.error("Error fetching matches: ", err);
    }
  }

  useEffect(() => {
    fetchMatches();
  }, [])

  const filteredMatches = data.filter(match => match.round === round);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-neutral-100">
        <div className="w-4xl mx-2 my-10">
          <div className="flex flex-col py-5 bg-white rounded-lg shadow-lg">
            <Round round={round} setRound={setRound} />
            <Matches data={filteredMatches} />
          </div>
        </div>
      </div>
    </>
  )
}