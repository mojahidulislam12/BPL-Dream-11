import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const PlayerCard = ({ player }) => {
  const {
    playerName,
    battingStyle,
    bowlingStyle,
    country,
    playerImg,
    price,
    type,
  } = player;
  console.log(player);
  return (
    <div className="p-6">
      <div className="card bg-base-100 shadow-sm w-106  h-132 rounded-xl">
        <figure className=" rounded-md">
          <div className="p-6  pt-6">
            <img
              className="md:w-93.75  h-60 rounded-2xl"
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
            <button className="btn ">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
