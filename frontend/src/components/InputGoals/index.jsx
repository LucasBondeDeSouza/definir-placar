import React from "react";

export default ({ goals1, setGoals1, goals2, setGoals2 }) => {

    return (
        <div className="flex flex-row items-center justify-center gap-2">
            <input 
                type="number" 
                className="hidden-spinner text-center text-2xl w-10 h-10 p-1 rounded-lg border-1 border-neutral-300 shadow-lg outline-none cursor-pointer" 
                value={goals1}
                onChange={(e) => setGoals1(Number(e.target.value))}
                required
            />

            <p className="text-2xl font-semibold">x</p>

            <input 
                type="number" 
                className="hidden-spinner text-center text-2xl w-10 h-10 p-1 rounded-lg border-1 border-neutral-300 shadow-lg outline-none cursor-pointer" 
                value={goals2}
                onChange={(e) => setGoals2(Number(e.target.value))}
                required
            />
        </div>
    )
}