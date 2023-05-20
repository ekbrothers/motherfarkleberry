import * as React from "react"
import '../styles/IndexPage.css'
import ImageName from '../images/upupdowndownleftright_native_kentucky_plants_in_the_shape_of_an_ab4faea1-9981-4d6a-91bb-1b4bac075c55.png';

const HeroSection = () => (
  <section className="hero-section"></section>
);

const ContentSection = () => (
  <section className="content-section">
    <div className="content-text">
      <h1>Mother Farkleberry's Native Wonders</h1>
    </div>
    <div className="content-image">
      <img className="small-image" src={ImageName} alt="description" />
    </div>
  </section>
);

const OfferingsSection = () => (
  <div> {/* This div serves as a parent element */}
    <section className="section">
      <h2>Our Offerings</h2>
      <p>Our store offers a variety of native plants perfect for your garden, backyard, or landscaping project. Plus, we provide expert consultation services to ensure your plants thrive in their new home.</p>
    </section>
    <section className="section">
      <h2>Why Plant Native</h2>
      <p>Planting native is good for our local environment and even better for you. Not only does it support local wildlife and conserve water, but native plants are also naturally adapted to our climate, making them easier to care for and maintain.</p>
    </section>
    <section className="flex-container">
      <div className="column">
        <img src="/assets/icon1.png" alt="Icon 1" />
        <h3>Locally Grown</h3>
        <p>All our plants are grown right here in Kentucky, ensuring they're perfectly suited for local conditions.</p>
      </div>
      <div className="column">
      <img src="/assets/icon2.png" alt="Icon 2" />
      <h3>Pesticide-Free</h3>
      <p>We believe in natural growth. That's why we guarantee that our plants are grown without the use of harmful pesticides.</p>
    </div>
    <div className="column">
      <img src="/assets/icon3.png" alt="Icon 3" />
      <h3>Hand-Picked for Quality</h3>
      <p>Each plant we sell is hand-picked by our expert staff for its health and vitality. You can trust you're getting the best.</p>
    </div>
  </section>
</div>
);

const IndexPage = () => {
  return (
    <main className="main">
      <HeroSection />
      <ContentSection />
      <OfferingsSection />
      {/* other sections */}
    </main>
  )
}

export default IndexPage