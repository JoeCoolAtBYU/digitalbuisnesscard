import profilePhoto from "../images/profilePhoto.png";

export default function Header(props) {
  let componentTheme = `App-header-${props.theme}`
  return <header className={componentTheme}>
    <img src={profilePhoto} className="profile-photo" alt="logo"/>
  </header>;
}