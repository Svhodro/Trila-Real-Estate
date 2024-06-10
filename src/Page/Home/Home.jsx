import React, { useContext, useEffect } from "react";
import Homebanner from "../../Components/Homeconteiner/Homebanner";

import UserContext from "../../context/UserContext";
import Advatice from "../../Components/Addvatice/Advatice";
import Review from "../../Components/Review/Review";
import Team from "../../Components/Team/Team";

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
        <Team />
        <div>
          <div className="diff aspect-[16/9] h-[400px]">
            <div className="diff-item-1">
              <img
                alt="daisy"
                src="https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="flex justify-center items-center">
                <p className="text-2xl text-center font-bold text-white font-serif">
                  Raila realestate for the saleing property
                </p>
              </div>
            </div>
            <div className="diff-item-2">
              <img
                alt="daisy"
                src="https://images.pexels.com/photos/10229603/pexels-photo-10229603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="flex justify-center items-center">
                <p className="text-2xl text-center font-bold text-slate-300 font-serif">
                  Raila realestate for the saleing property
                </p>
              </div>
            </div>
            <div className="diff-resizer"></div>
          </div>
        </div>
        <Review />
      </div>
    </div>
  );
}

export default Home;
