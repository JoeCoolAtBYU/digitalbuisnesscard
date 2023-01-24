// import twitter from "../images/Twitter Icon.png"
import facebook from "../images/Facebook Icon.png"
import instagram from "../images/Instagram_Icon.png"
import github from "../images/GitHub Icon.png"

export default function SocialIcons(props) {
  return (
    <div className={`social-icons ${props.theme}`}>
      {/*<div className={`twitter-icon ${props.props}`}>*/}
      {/*  <a href="https://twitter.com">*/}
      {/*    <img src={twitter} alt="twitter icon"/>*/}
      {/*  </a>*/}
      {/*</div>*/}

      <div className={`facebook-icon ${props.theme}`}>
      <a href="https://www.facebook.com/joshua.barnett.31392/">
        <img src={facebook} alt="facebook icon"/>
      </a>
      </div>
      <div className={`instagram-icon ${props.theme}`}>
      <a href="https://www.instagram.com/joecoolatbyu/">
        <img src={instagram} alt="instagram icon"/>
      </a>
      </div>
      <div className={`github-icon ${props.theme}`}>
      <a href="https://github.com/JoeCoolAtBYU">
        <img src={github} alt="twitter icon"/>
      </a>
      </div>
    </div>
  )
}