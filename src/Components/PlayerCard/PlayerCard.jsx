import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const {
    playerName,
    battingStyle,
    bowlingStyle,
    country,
    playerImg,
    price,
    type,
  } = player;
  const [isSelected, setIsSelected] = useState(false);
  const handleChoosePlayer = () => {
    let newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(coin - player.price);
    } else {
      toast("Not enough coin to purchase this player");
      return;
    }

    toast(`${playerName} is Selected`);
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers, player]);
  };
  //console.log(player);
  return (
    <div className="">
      <div className="card bg-base-100 shadow-sm h-132 rounded-xl">
        <figure className=" rounded-md">
          <div className="p-6  pt-6">
            <img
              className="w-110 h-60 rounded-2xl"
              src={playerImg}
              alt="Shoes"
            />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-semibold text-[20px">
            <FaUser className="text-[#131313]"></FaUser>
            {playerName}
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <FaFlag></FaFlag>
              <p className="font-normal text-[16px] opacity-50 text-[#131313]">
                {country}
              </p>
            </div>
            <button className="btn font-normal text-[16px] opacity-100 ">
              {type}
            </button>
          </div>
          <div className="divider"></div>
          <h2 className="font-bold text-[16px]">Rating</h2>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-[16px]">{battingStyle}</p>
            <p className="font-normal text-[16px] text-right">{bowlingStyle}</p>
          </div>

          <div className="card-actions justify-between">
            <p className="font-semibold text-[16px] mt-2">Price:{price}</p>
            <button
              className="btn"
              onClick={handleChoosePlayer}
              disabled={isSelected ? true : false}
            >
              {isSelected === true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
