import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import github from "../images/github.png"

export default function SocialIcons(){
  return(
    <div className="social-icons">
      <a href="https://twitter.com">
        <img src={twitter} alt="twitter icon"/>
      </a>
      <a href="https://www.facebook.com/joshua.barnett.31392/">
        <img src={facebook} alt="facebook icon"/>
      </a>
      <a href="https://www.instagram.com/joecoolatbyu/">
        <img src={instagram} alt="instagram icon"/>
      </a>
      <a href="https://twitter.com">
        <img src={github} alt="twitter icon"/>
      </a>
    </div>
  )
}