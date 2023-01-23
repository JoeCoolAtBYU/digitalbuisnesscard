export default function AboutInterests(theme) {
  let componentTheme = `aboutInterests ${theme.theme}`
  return (
    <div className={componentTheme}>
      <div className={`about ${theme.theme}`}>
        <h1 className={`about--title  ${theme.theme}`}>About</h1>
        <p className={`about--text  ${theme.theme}`}>I am a software engineer with over 15 years experience.
          I have worked on backend projects for most of my career but am learning how to become a Unicorn.
          I love to dig into difficult problems and come up with elegant solutions that will last a long time.
        </p>
      </div>
      <div className={`interests  ${theme.theme}`}>
        <h1 className={`interests--title  ${theme.theme}`}>Interests</h1>
        <p className={`interests--text  ${theme.theme}`}>Tinkering. Reading. Star Wars fan, but not of the new stuff. World Traveler. Beach Boys Music.
          Latter-day Saint. </p>
      </div>
    </div>
  )
}