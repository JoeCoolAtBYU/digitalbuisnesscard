import EmailIcon from "../images/emailIcon.png"
import linkedInIcon from "../images/linkedInIcon.png"

export default function ContactInfo() {
  return (
    <div className="contact">
      <h1 className="contact--name">Joshua Barnett</h1>
      <h4 className="contact--title">Software Engineer</h4>
      <p className="contact--email">joecoolatbyu@hotmail.com</p>
      <div className="contact--buttons">
        <div className="contact--email--btn">
          <a href="mailto:joecoolatbyu@hotmail.com?subject=From%20Business%20Card">
            <img src={EmailIcon} alt="button to send email" className="email--icon"/>
          </a>
          <p>Email</p>
        </div>

        <div className="contact--linkedIn--btn">
          <a href="https://www.linkedin.com/in/joshua-barnett-03b1107/">
            <img src={linkedInIcon} alt="button to go to LinkedIn page" className="linkedin--icon"/>
          </a>
          <p>LinkedIn</p>
        </div>
      </div>
    </div>
  )
}