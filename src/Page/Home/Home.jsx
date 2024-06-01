import React, { useContext, useEffect } from "react";
import Homebanner from "../../Components/Homeconteiner/Homebanner";

import UserContext from "../../context/UserContext";
import Advatice from "../../Components/Addvatice/Advatice";

function Home() {
  const { user, setuser } = useContext(UserContext);
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("userdata"));
    if (item) {
      setuser(true);
    }
  });
  return (
    <div className="w-full bg-slate-900  ">
      <Homebanner />
      <div className="flex flex-col gap-2">
        <Advatice />
      </div>
    </div>
  );
}

export default Home;
