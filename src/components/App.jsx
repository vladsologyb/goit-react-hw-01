import userData from "../userData.json";
// import friends from "../friends.json";
import Profile from "./Profile/Profile";



export default function App() {
  return (
    <>
       <Profile data={userData} />
      {/* <FriendList data={friends} /> */}
    </>
  );
};

 
