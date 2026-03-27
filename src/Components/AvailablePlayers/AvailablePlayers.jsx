import React from "react";

import { FaFlag, FaUser } from "react-icons/fa";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  players,
  setCoin,
  coin,
  setSelectedPlayers,
  selectedPlayers,
}) => {
  //console.log(players);
  return (
    <div className="grid  grid-cols-1 md:grid-cols-3 gap-5 border-white">
      {players.map((player) => (
        <PlayerCard
          player={player}
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
