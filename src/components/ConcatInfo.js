import EmailIcon from "../images/emailIcon.png"
import linkedInIcon from "../images/linkedInIcon.png"
import AboutInterests from "../components/AboutInterest";

export default function ContactInfo() {
  return (
    <div className="contact">
      <h1 className="contact--name">Joshua Barnett</h1>
      <h4 className="contact--title">Software Engineer</h4>
      <p className="contact--email">joecoolatbyu@hotmail.com</p>
      <div className="contact--buttons">
        <a href="mailto:joecoolatbyu@hotmail.com?subject=From%20Business%20Card">
          <div className="contact--email--btn">
            <img src={EmailIcon} alt="button to send email" className="email--icon"/>
            <p>Email</p>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/joshua-barnett-03b1107/">
          <div className="contact--linkedIn--btn">
            <img src={linkedInIcon} alt="button to go to LinkedIn page" className="linkedin--icon"/>
            <p>LinkedIn</p>
          </div>
        </a>
      </div>
<AboutInterests/>
    </div>
  )
}