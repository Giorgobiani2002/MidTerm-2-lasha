import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import logo from "./assets/user.png";

function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <>
      <div className="w-full flex flex-wrap gap-10">
        {users &&
          users.map((user) => (
            <div className="w-[300px] h-[400px] ">
              <div className="flex items-center justify-between">
                <img src={logo} alt="" />
                <div>
                  <h3>{user.name.first}</h3>
                  <h4>
                    {user.dob.age} / {user.gender}
                  </h4>
                </div>
              </div>
              <div className="w-[300px] h-[394px] flex justify-between ">
                <div>
                  <h5>Age</h5>
                  <h5>Name</h5>
                  <h5>username</h5>
                  <h5>city</h5>
                  <h5>country:</h5>
                  <h5>postcode</h5>
                </div>
                <div className="flex flex-col">
                  <span>{user.dob.age}</span>
                  <span>{user.name.first + user.name.last}</span>
                  <span>{user.login.username}</span>
                  <span>{user.location.city}</span>
                  <span>{user.location.country}</span>
                  <span>{user.location.postcode}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
