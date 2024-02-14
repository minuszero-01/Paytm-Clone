import React, { useEffect, useState } from "react";
import { Button } from "../Components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.users);
      });
  }, [filter]);
  return (
    <div className="flex flex-col mx-6">
      <div className=" font-bold ">Users</div>
      <div className="my-4">
        <input
          className="p-2 w-1/2 rounded-full border border-slate-400 "
          placeholder="Search users..."
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        ></input>
      </div>
      <div className="my-2">
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
}

function User({ user }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between border rounded-full mt-1">
      <div className="flex ml-2 ">
        <div className="h-12 w-12 rounded-full bg-slate-200 flex justify-center mt-2 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full ">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full mr-2">
        <Button
          onClick={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }}
          label={"Send Money"}
        ></Button>
      </div>
    </div>
  );
}
