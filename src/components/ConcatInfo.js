import EmailIcon from "../images/emailIcon.png"
import linkedInIcon from "../images/linkedInIcon.png"
import AboutInterests from "../components/AboutInterest";

export default function ContactInfo(props) {
  let componentTheme = `contact ${props.theme}`;
  return (
    <div className={componentTheme}>
      <h1 className={`contact--name ${props.theme}`}>Joshua Barnett</h1>
      <h4 className={`contact--title ${props.theme}`}>Software Engineer</h4>
      <p className={`contact--email ${props.theme}`}>joecoolatbyu@hotmail.com</p>
      <div className={`contact--buttons ${props.theme}`}>
        <a href="mailto:joecoolatbyu@hotmail.com?subject=From%20Business%20Card">
          <div className={`contact--email--btn ${props.theme}`}>
            <img src={EmailIcon} alt={`button to send email`} className={`email--icon ${props.theme}`}/>
            <p>Email</p>
          </div>
        </a>

        <a href={`https://www.linkedin.com/in/joshua-barnett-03b1107/`}>
          <div className={`contact--linkedIn--btn ${props.theme}`}>
            <img src={linkedInIcon} alt={`button to go to LinkedIn page`} className={`linkedin--icon ${props.theme}`}/>
            <p>LinkedIn</p>
          </div>
        </a>
      </div>
<AboutInterests theme={props.theme}/>
    </div>
  )
}