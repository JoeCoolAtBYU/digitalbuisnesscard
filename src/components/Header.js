import profilePhoto from "../images/profilePhoto.png";

export default function Header() {
  return <header className="App-header">
    <img src={profilePhoto} className="profile-photo" alt="logo"/>
  </header>;
}