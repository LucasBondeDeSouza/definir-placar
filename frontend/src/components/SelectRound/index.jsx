import React from "react";

export default ({ round, setRound }) => {

    return (
        <div className="flex flex-row justify-center gap-2">
            <p className="text-3xl">Rodada </p>

            <select 
                value={round}
                onChange={(e) => setRound(e.target.value)}
                required
                className="hidden-arrow border-1 border-neutral-300 text-2xl rounded-lg text-center w-10"
            >
                {Array.from({ length: 38 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                    {i + 1}
                </option>
                ))}
            </select>
        </div>

    )
}