import React from "react";

export default ({ data }) => {

    const hasScore = (score) => {
        if (score == null) {
            return (
                <input
                    className="hidden-spinner bg-white text-center text-2xl w-10 h-10 p-1 rounded-lg border-1 border-neutral-300 outline-none cursor-pointer"
                    type="number"
                />
            )
        } else {
            return <p className="text-2xl">{score}</p>
        }
    }

    const firstColumn = data.slice(0, 5);
    const secondColumn = data.slice(5, 10);

    const renderMatches = (matches) => (
        matches.map((match, index) => (
            <div key={index}>
                <div className="flex justify-between items-center py-2 px-10 md:px-5 hover:bg-neutral-50 cursor-pointer transition duration-500">
                    <div className="w-20 flex items-center justify-between gap-2">
                        <img
                            className="h-10"
                            src={match.home_team_logo}
                            alt="Team 1 Logo"
                        />

                        <p className="text-lg font-semibold">{match.home_team_name}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        {hasScore(match.home_score)}

                        <p className="text-2xl">x</p>

                        {hasScore(match.away_score)}
                    </div>

                    <div className="w-20 flex items-center justify-between gap-2">
                        <p className="text-lg font-semibold">{match.away_team_name}</p>

                        <img
                            className="h-10"
                            src={match.away_team_logo}
                            alt="Team 1 Logo"
                        />
                    </div>

                    <button className="w-15 h-8 text-sm rounded-lg bg-green-500 hover:bg-green-600 text-white cursor-pointer transition duration-500">
                        Aplicar
                    </button>
                </div>
            </div>
        ))
    );

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6">
                {renderMatches(firstColumn)}
            </div>

            <div className="col-span-12 md:col-span-6">
                {renderMatches(secondColumn)}
            </div>
        </div>
    )
}