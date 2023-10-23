import { useState, useEffect } from "react";

function Navbar() {
    const [currentMedia, setCurrentMedia] = useState(false);


  return (
    <div className="border h-[5rem] flex justify-evenly items-center">
      <div className="flex">
        <button className="flex md:hover">Button</button>
      </div>
        <div className="flex">LOGO</div>
        <div className="flex">Gaming PCs</div>
        <div className="flex">Community</div>
        <div className="flex">Support</div>
    </div>
  );
}

export default Navbar;
