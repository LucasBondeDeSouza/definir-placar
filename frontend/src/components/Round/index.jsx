import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default ({ round, setRound }) => {

    const addRound = (round) => {
        if (round < 38) {
            setRound(round + 1);
        }
    }

    const removeRound = (round) => {
        if (round > 1) {
            setRound(round - 1);
        }
    }

    return (
        <div className="w-sm mx-auto flex items-center justify-between pb-5">
            <button onClick={() => removeRound(round)}>
                    <FontAwesomeIcon icon={faArrowLeft} className={`text-2xl cursor-pointer ${round == 1 ? 'text-neutral-200' : 'text-black'}`} />
            </button>
            
            <h1 className="text-3xl">
                Round {round}
            </h1>

            <button onClick={() => addRound(round)}>
                <FontAwesomeIcon icon={faArrowRight} className={`text-2xl cursor-pointer ${round == 38 ? 'text-neutral-200' : 'text-black'}`} />
            </button>
        </div>
    )
}