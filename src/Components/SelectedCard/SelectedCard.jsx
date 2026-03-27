import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedCard = ({ players, handleDeleteSelectPlayer }) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-6 p-10 rounded-2xl border">
        <div className="flex items-center gap-6">
          <img
            className="h-20 w-35 rounded-md"
            src={players.playerImg}
            alt=""
          />
          <div>
            <h2 className="flex justify-between items-center gap-2 font-semibold text-2xl">
              <FaUser />
              {players.playerName}
            </h2>
            <p>{players.type}</p>
          </div>
        </div>
        <button onClick={() => handleDeleteSelectPlayer(players)}>
          <MdDelete className="btn text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default SelectedCard;
