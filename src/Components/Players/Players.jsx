import React, { use } from "react";

const Players = ({ playersPromis }) => {
  const playersData = use(playersPromis);
  const data = playersData;
  console.log(data);
  return (
    <div className="w-11/12 mx-auto">
      <p>Players:{data.length}</p>
    </div>
  );
};

export default Players;
