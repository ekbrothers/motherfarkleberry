import * as React from "react"
import HeroImage from "../images/photo-1567268113943-0e88ef2e4883.avif" //replace with your actual hero image path

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: '100%',
  margin: '0 auto',
  padding: '0 1rem',
}

const sectionStyles = {
  padding: '2rem',
}

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <section style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', textAlign: 'center', padding: '0 2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>Nurture Nature with Native Plants</h1>
          <p>Providing Kentucky with the highest quality native plants for over 20 years</p>
        </div>
      </section>
      <section style={sectionStyles}>
        <h2>Our Offerings</h2>
        <p>Our store offers a variety of native plants perfect for your garden, backyard, or landscaping project. Plus, we provide expert consultation services to ensure your plants thrive in their new home.</p>
      </section>
      <section style={sectionStyles}>
        <h2>Why Plant Native</h2>
        <p>Planting native is good for our local environment and even better for you. Not only does it support local wildlife and conserve water, but native plants are also naturally adapted to our climate, making them easier to care for and maintain.</p>
      </section>
      <section style={{ ...sectionStyles, ...flexContainer }}>
        <div>
          <h3>Locally Grown</h3>
          <p>All our plants are grown right here in Kentucky, ensuring they're perfectly suited for local conditions.</p>
        </div>
        <div>
          <h3>Pesticide-Free</h3>
          <p>We believe in natural growth. That's why we guarantee that our plants are grown without the use of harmful pesticides.</p>
        </div>
        <div>
          <h3>Hand-Picked for Quality</h3>
          <p>Each plant we sell is hand-picked by our expert staff for its health and vitality. You can trust you're getting the best.</p>
        </div>
      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
