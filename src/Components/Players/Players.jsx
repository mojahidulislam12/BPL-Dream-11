import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromis, setCoin, coin }) => {
  const playersData = use(playersPromis);
  const players = playersData;
  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <div className="container mx-auto my-15">
      <div className="flex justify-between items-center mb-5">
        {selectedType === "available" ? (
          <h2 className="font-bold text-2xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-2xl">
            Selected Players ({selectedPlayers.length}/{players.length})
          </h2>
        )}
        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-md`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-md`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      {selectedType === "available" ? (
        <AvailablePlayers
          players={players}
          setCoin={setCoin}
          coin={coin}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          setCoin={setCoin}
          coin={coin}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
