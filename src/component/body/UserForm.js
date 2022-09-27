import React from "react";
import UserItem from "./UserItem";
import { useContext } from "react";
import { selectContext } from "../../App";

const profiles = [
  {
    name: "Lelah Nichols",
    avatar: "/1.png",
    location: "Troy, ML",
    tags: ["reactjs", "nodejs"],
  },
  {
    name: "Annie Rice",
    avatar: "/3.png",
    location: "Troy, ML",
    tags: ["reactjs", "nodejs", "python", "js", "css"],
  },
  {
    name: "Jesus Weiss",
    avatar: "/2.png",
    location: "Troy, ML",
    tags: ["reactjs", "nodejs", "js", "css"],
  },
  {
    name: "Robert Brower",
    avatar: "/4.png",
    location: "Troy, ML",
    tags: ["reactjs", "nodejs", "js", "css"],
  },
  {
    name: "Amy Campbell",
    avatar: "/5.png",
    location: "Troy, ML",
    tags: ["python", "nodejs"],
  },
  {
    name: "Anthony S.Morin",
    avatar: "/6.png",
    location: "Troy, ML",
    tags: ["js", "nodejs"],
  },
];
const UserForm = () => {
  const { search, selected } = useContext(selectContext);
  return (
    <div className="user-list">
      {profiles
        .filter((profile) => search === "" || profile.name.includes(search))
        .filter((profile) => profile.tags.some(tag => tag.toLocaleLowerCase() === selected.toLocaleLowerCase()))
        .map((profile, index) => (
          <UserItem profile={profile} key={`user_${index}`} />
        ))}
    </div>
  );
};

export default UserForm;
