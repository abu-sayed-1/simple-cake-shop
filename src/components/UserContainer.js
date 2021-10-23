import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

const UserContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const userInfoState = useSelector((state) => state.user.user);
  return (
    <div>
      <h1>this is UserContainer</h1>
      {userInfoState.length > 0
        ? userInfoState.map((userList) => (
            <div>
              <list key={userList.id}>
                #id:{userList.id} name: {userList.name}
              </list>
            </div>
          ))
        : "loading..."}
    </div>
  );
};

export default UserContainer;
