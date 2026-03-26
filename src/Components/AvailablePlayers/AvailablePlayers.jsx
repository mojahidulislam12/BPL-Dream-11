import React from "react";

import { FaFlag, FaUser } from "react-icons/fa";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ players }) => {
  //console.log(players);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1">
      {players.map((player) => (
        <PlayerCard player={player}></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
