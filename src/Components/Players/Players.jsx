import React, { use } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Players = ({ playersPromis }) => {
  const playersData = use(playersPromis);
  const players = playersData;

  return (
    <div className="w-330 mx-auto ">
      <p>Players:{players.length}</p>
      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;
