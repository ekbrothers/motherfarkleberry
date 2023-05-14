import * as React from "react"
import HeroImage from "../images/upupdowndownleftright_joe-pye_weed_shallow_depth_of_field_earth_86855f7b-2844-4a12-af08-b05c61d4783c.png"
import '../styles/global.css'

const pageStyles = {
  color: "#232129",
  fontFamily: "margin, Roboto, sans-serif, serif",
  margin: '0',
  padding: '0',
  width: '100%',
  height: '100vh',
  overflowX: 'hidden', // Add this line
}

const sectionStyles = {
  padding: '2rem',
}

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

const heroSectionStyles = {
  backgroundImage: `url(${HeroImage})`,
  backgroundSize: 'cover',
  height: '40vh',
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  color: '#fff',
  textAlign: 'left',
  padding: '7% 2rem 0 2rem',
  margin: '0',
}

const heroContentStyles = {
  maxWidth: '23%', // Limit the width of the content
  marginLeft: '22%', // Control the left margin to move the content
  // textAlign: 'justify',
  // wordWrap: 'break-word'
}

const heroHeaderStyles = {
  fontSize: '1.4rem',
  lineHeight: '0.8', // Adjust this value for desired line spacing of header
  fontWeight: 90
}

const heroTextStyles = {
  fontSize: '0.6rem',
  lineHeight: '1.3', // Adjust this value for desired line spacing of text
  fontFamily: "Gill Sans",
}

const headerStyles = {
  fontSize: '1.3rem',
  color: '#232129',
  fontFamily: 'Margin',
  fontWeight: 100, // Add this line
  lineHeight: '1.3',
}

// const subHeaderStyles = {
//   fontSize: '1.75rem',
//   color: '#232129',
//   fontFamily: 'Margin',
//   fontWeight: 200, // Add this line
//   lineHeight: '1.2',
// }

const textStyles = {
  fontFamily: "Gill Sans, Roboto, sans-serif, serif",
  // other styles...
}

const iconStyles = {
  width: '50px',
  height: '50px',
  marginBottom: '1rem', // Adjust as needed for spacing beneath icons
}

const columnStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center the content vertically
  justifyContent: 'center', // Center the content horizontally
  flexBasis: '33.33%', // Each column takes up a third of the available width
  textAlign: 'center' // Center the text within each column
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      {/* Hero Section */}
      <section style={heroSectionStyles}>
      <div style={heroContentStyles}>
  <h1 style={heroHeaderStyles}>Nurture Nature with Native Plants</h1>
  <p style={heroTextStyles}>Providing Kentucky with the highest quality native plants for over 20 years</p>
</div>
      </section>
      <section style={sectionStyles}>
        <h2 style={headerStyles}>Our Offerings</h2>
        <p style={textStyles}>Our store offers a variety of native plants perfect for your garden, backyard, or landscaping project. Plus, we provide expert consultation services to ensure your plants thrive in their new home.</p>
      </section>
      <section style={sectionStyles}>
        <h2 style={headerStyles}>Why Plant Native</h2>
        <p style={textStyles}>Planting native is good for our local environment and even better for you. Not only does it support local wildlife and conserve water, but native plants are also naturally adapted to our climate, making them easier to care for and maintain.</p>
      </section>
      <section style={{ ...sectionStyles, ...flexContainer }}>
        <div style={columnStyles}>
          <img src="/assets/icon1.png" alt="Icon 1" style={iconStyles} />
          <h3 style={headerStyles}>Locally Grown</h3>
          <p style={textStyles}>All our plants are grown right here in Kentucky, ensuring they're perfectly suited for local conditions.</p>
        </div>
        <div style={columnStyles}>
          <img src="/assets/icon2.png" alt="Icon 2" style={iconStyles} />
          <h3 style={headerStyles}>Pesticide-Free</h3>
          <p style={textStyles}>We believe in natural growth. That's why we guarantee that our plants are grown without the use of harmful pesticides.</p>
        </div>
        <div style={columnStyles}>
          <img src="/assets/icon3.png" alt="Icon 3" style={iconStyles} />
          <h3 style={headerStyles}>Hand-Picked for Quality</h3>
          <p style={textStyles}>Each plant we sell is hand-picked by our expert staff for its health and vitality. You can trust you're getting the best.</p>
        </div>
      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
