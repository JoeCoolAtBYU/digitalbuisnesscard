import twitter from "../images/Twitter Icon.png"
import facebook from "../images/Facebook Icon.png"
import instagram from "../images/Instagram_Icon.png"
import github from "../images/GitHub Icon.png"

export default function SocialIcons(theme) {
  return (
    <div className={`social-icons ${theme.theme}`}>
      {/*<div className={`twitter-icon ${theme.theme}`}>*/}
      {/*  <a href="https://twitter.com">*/}
      {/*    <img src={twitter} alt="twitter icon"/>*/}
      {/*  </a>*/}
      {/*</div>*/}

      <div className={`facebook-icon ${theme.theme}`}>
      <a href="https://www.facebook.com/joshua.barnett.31392/">
        <img src={facebook} alt="facebook icon"/>
      </a>
      </div>
      <div className={`instagram-icon ${theme.theme}`}>
      <a href="https://www.instagram.com/joecoolatbyu/">
        <img src={instagram} alt="instagram icon"/>
      </a>
      </div>
      <div className={`github-icon ${theme.theme}`}>
      <a href="https://github.com/JoeCoolAtBYU">
        <img src={github} alt="twitter icon"/>
      </a>
      </div>
    </div>
  )
}