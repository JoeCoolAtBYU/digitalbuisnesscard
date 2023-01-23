import profilePhoto from "../images/profilePhoto.png";

export default function Header(theme) {
  let componentTheme = `App-header-${theme.theme}`
  return <header className={componentTheme}>
    <img src={profilePhoto} className="profile-photo" alt="logo"/>
  </header>;
}