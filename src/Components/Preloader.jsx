import React, { useEffect, useState } from "react";
import Sign from "../assets/sign.gif";
import SignStatic from "../assets/sign.png";

const Preloader = () => {
  const [useGif, setUseGif] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setUseGif(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black animate-fadeOut">
      <img
        src={useGif ? Sign : SignStatic}
        alt="Loading Signature"
        className="w-[200px] animate-pop drop-shadow-[0_0_10px_#f9532d]"
      />
    </div>
  );
};

export default Preloader;
