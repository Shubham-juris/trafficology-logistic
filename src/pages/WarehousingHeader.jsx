import React from "react";
import img from "../assets/services/ware.webp"
import WarehousingDetails from "../pages/WarehousingDetails";

const WarehousingHeader = () => {
  return (
    <>
    <div className="w-full mt-20">
      <img
        src={img}
        alt="Warehousing"
        className="w-full h-80 object-cover"
      />
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold">Warehousing Solutions</h1>
      </div>
    </div>
    <WarehousingDetails/>
    </>
  );
};

export default WarehousingHeader;
