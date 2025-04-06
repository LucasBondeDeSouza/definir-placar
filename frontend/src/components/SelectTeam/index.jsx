import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ team, setTeam, placeholder }) => {
  const [data, setData] = useState([]);

  const fetchTeams = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/teams");
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar os times:", error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <select
      value={team}
      onChange={(e) => setTeam(Number(e.target.value))}
      required
      className="p-1 rounded-lg border-1 border-neutral-300 shadow-lg outline-none cursor-pointer"
    >
      <option value="default" disabled>
        {placeholder}
      </option>
      {data.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}