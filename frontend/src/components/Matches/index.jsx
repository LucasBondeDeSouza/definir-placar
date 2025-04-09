import React from "react";
import axios from "axios";

export default ({ data, scores, updateScore, round }) => {

    const hasScore = (match, type) => {
        const matchScores = scores[match.match_id] || {};
        const value = matchScores[type] ?? '';

        if (match[type] == null) {
            return (
                <input
                    className="hidden-spinner bg-white text-center text-2xl w-10 h-10 p-1 rounded-lg border-1 border-neutral-300 outline-none cursor-pointer"
                    type="number"
                    value={value}
                    onChange={(e) => updateScore(match.match_id, type, e.target.value)}
                />
            );
        } else {
            return <p className="text-2xl">{match[type]}</p>;
        }
    };

    const handleApply = async (match) => {
        const matchScores = scores[match.match_id];

        const payload = {
            round,
            home_team_id: match.home_team_id,
            away_team_id: match.away_team_id,
            home_score: parseInt(matchScores.home_score, 10),
            away_score: parseInt(matchScores.away_score, 10)
        };

        try {
            await axios.put('https://definir-placar-server.vercel.app/api/matches', payload);
        } catch (error) {
            console.error("Erro ao aplicar placar:", error);
        }
    };

    const renderMatches = (matches) => (
        matches.map((match, index) => (
            <div key={index}>
                <div className="flex justify-between items-center py-2 px-5 hover:bg-neutral-50 cursor-pointer transition duration-500">
                    <div className="w-20 flex items-center justify-between gap-2">
                        <img
                            className="h-10"
                            src={match.home_team_logo}
                            alt="Team 1 Logo"
                        />
                        <p className="text-lg font-semibold">{match.home_team_name}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        {hasScore(match, 'home_score')}
                        <p className="text-2xl">x</p>
                        {hasScore(match, 'away_score')}
                    </div>

                    <div className="w-20 flex items-center justify-between gap-2">
                        <p className="text-lg font-semibold">{match.away_team_name}</p>
                        <img
                            className="h-10"
                            src={match.away_team_logo}
                            alt="Team 2 Logo"
                        />
                    </div>

                    <button 
                        onClick={() => handleApply(match)}
                        className="w-15 h-8 text-sm rounded-lg bg-green-500 hover:bg-green-600 text-white cursor-pointer transition duration-500"
                    >
                        Aplicar
                    </button>
                </div>
            </div>
        ))
    );

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6">
                {renderMatches(data.slice(0, 5))}
            </div>
            <div className="col-span-12 md:col-span-6">
                {renderMatches(data.slice(5, 10))}
            </div>
        </div>
    );
};