import Analytics from "../components/Analytics"

const Home = () => {

  return (
    <>
      <main>
        <section className='section-hero'>
          <div className="container grid grid-two-cols">

            <div className="hero-content">
              <p>I'm the best Software Engineer</p>
              <h1>Welcome to mukesh technical</h1>
              <p>I'm Self-motivated and hardworking fresher seeking for an opportunity to work in a challenging environment to prove my skills and utilize my knowledge & intelligence in the growth of the organization.</p>

              <div className="btn btn-group">
                <a href="/contact"><button className='btn'>Connect Now</button></a>
                <a href="/service"><button className='btn secondary-btn'>Learn More</button></a>
              </div>
            </div>


            <div className="hero-image">
              <img src="/assets/images/home.png" alt="Coding together" width="400" height="400" />
            </div>

          </div>
        </section>
      </main>

     <Analytics/>

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/assets/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home