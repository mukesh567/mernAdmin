import React from 'react'
import Analytics from '../components/Analytics'
import { useAuth } from '../store/auth'


const About = () => {

  const { user } = useAuth();

  return (
    <>
      <main>
        <section className='section-hero'>
          <div className="container grid grid-two-cols">

            <div className="hero-content">
              <p>Welcome , {user ? `${user.username} to our website` : `to our website`}</p>
              <h1>Why Choose Us?</h1>
              <p>Expertise: Our team consists of experienced IT professionals who are
                passionate about stying up-to-date with the latest industry trends.
              </p>
              <p>Customization: We understand that every business is unique.That's why
                we create solutions that are tailored to your specific needs and goals.
              </p>

              <p>Customer-Centric Approach: We priorities your satisfaction and provide
                top-notch support to address your IT concerns. </p>

              <p>Affordability: We offer competitive pricing without compromising on the
                quality of our services. </p>

              <p>Reliability: Count on us to be there when you need us. We're committed
                to ensuring your IT environment is reliable and available 24/7. </p>

              <div className="btn btn-group">
                <a href="/contact"><button className='btn'>Connect Now</button></a>
                <a href="/service"><button className='btn secondary-btn'>Learn More</button></a>
              </div>
            </div>


            <div className="hero-image">
              <img src="/assets/images/about.png" alt="Coding together" width="400" height="400" />
            </div>

          </div>
        </section>
      </main>

      <Analytics />
    </>
  )
}

export default About