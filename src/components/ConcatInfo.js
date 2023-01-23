import EmailIcon from "../images/emailIcon.png"
import linkedInIcon from "../images/linkedInIcon.png"
import AboutInterests from "../components/AboutInterest";

export default function ContactInfo(theme) {
  let componentTheme = `contact ${theme.theme}`;
  return (
    <div className={componentTheme}>
      <h1 className={`contact--name ${theme.theme}`}>Joshua Barnett</h1>
      <h4 className={`contact--title ${theme.theme}`}>Software Engineer</h4>
      <p className={`contact--email ${theme.theme}`}>joecoolatbyu@hotmail.com</p>
      <div className={`contact--buttons ${theme.theme}`}>
        <a href="mailto:joecoolatbyu@hotmail.com?subject=From%20Business%20Card">
          <div className={`contact--email--btn ${theme.theme}`}>
            <img src={EmailIcon} alt={`button to send email`} className={`email--icon ${theme.theme}`}/>
            <p>Email</p>
          </div>
        </a>

        <a href={`https://www.linkedin.com/in/joshua-barnett-03b1107/`}>
          <div className={`contact--linkedIn--btn ${theme.theme}`}>
            <img src={linkedInIcon} alt={`button to go to LinkedIn page`} className={`linkedin--icon ${theme.theme}`}/>
            <p>LinkedIn</p>
          </div>
        </a>
      </div>
<AboutInterests theme={theme.theme}/>
    </div>
  )
}