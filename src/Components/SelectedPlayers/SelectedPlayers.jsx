import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setCoin,
  coin,
}) => {
  console.log(selectedPlayers, "selectedPlayers");
  const handleDeleteSelectPlayer = (players) => {
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName != players.playerName,
    );
    console.log(filteredPlayers, "......");
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + players.price);
  };
  return (
    <div>
      <div className="space-y-4">
        {selectedPlayers.length === 0 ? (
          <div className="h-100 flex justify-center items-center flex-col gap-4">
            <h2 className="font-bold text-xl">No players selected yet</h2>
            <p>Go to Available tab to select players</p>
          </div>
        ) : (
          selectedPlayers.map((players, index) => {
            return (
              <SelectedCard
                players={players}
                handleDeleteSelectPlayer={handleDeleteSelectPlayer}
              ></SelectedCard>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SelectedPlayers;
