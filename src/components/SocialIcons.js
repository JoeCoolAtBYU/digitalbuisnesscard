import twitter from "../images/Twitter Icon.png"
import facebook from "../images/Facebook Icon.png"
import instagram from "../images/Instagram_Icon.png"
import github from "../images/GitHub Icon.png"

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <div className="twitter-icon">
        <a href="https://twitter.com">
          <img src={twitter} alt="twitter icon"/>
        </a>
      </div>

      <div className="facebook-icon">
      <a href="https://www.facebook.com/joshua.barnett.31392/">
        <img src={facebook} alt="facebook icon"/>
      </a>
      </div>
      <div className="instagram-icon">
      <a href="https://www.instagram.com/joecoolatbyu/">
        <img src={instagram} alt="instagram icon"/>
        {/*<FontAwesomeIcon icon="fa-brands fa-square-instagram" />*/}
      </a>
      </div>
      <div className="github-icon">
      <a href="https://twitter.com">
        <img src={github} alt="twitter icon"/>
      </a>
      </div>
    </div>
  )
}