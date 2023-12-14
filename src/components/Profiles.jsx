import React, { useEffect, useState } from "react";

const Profiles = () => {
  const [userData, setUserData] = useState(null);

  const fetchNewUser = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    fetchNewUser();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-green-100">
      <h1 className="font-bold text-[36px]">Random User Generator</h1>
      <button
        className="py-2 px-12 text-[24px] bg-green-400 border-2 border-black rounded-xl mt-8 hover:bg-green-600"
        onClick={fetchNewUser}
      >
        Generate
      </button>
      {userData && (
        <div className="flex flex-col justify-center items-center mt-8">
          <img src={userData.picture.large} className="border-2 border-black" />
          <p className="mt-4 text-[20px] font-semibold">
            Name: {userData.name.first} {userData.name.last}
          </p>
          <p className="text-[20px] font-semibold">Email: {userData.email}</p>
          <p className="text-[20px] font-semibold">
            Location: {userData.location.city}, {userData.nat}
          </p>
        </div>
      )}
    </div>
  );
};

export default Profiles;
