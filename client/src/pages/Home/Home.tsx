import React from 'react';
import Footer from '../../components/Footer/Footer'
import Wallpaper from './components/Wallpaper'

const Home: React.FC = () => {
 
  return (
  <>
    <Wallpaper />

    <div className="container my-container">
      <div className="row my-row">
        <div className="col-sm my-column">
          Row 1Column one
        </div>
        <div className="col-sm my-column">
          Row 1 Column two
        </div>
        <div className="col-sm my-column">
          Row 1 Column three
        </div>
      </div>
      <div className="row my-row">
      <div className="col-sm my-column">
          Row 2 column 1
        </div>
      </div>
    </div>
    {/* ========================================================================================= */}
    <div className="main-content-container">
        <div className="info-wrapper ">
        <h2 className="custom-heading">Who are C.A.W</h2>
        <hr className="hr" />
        <div className="text-wrapper-main">
          <p>Community Action on Waste is a Leeds-based community co-operative, made up of local residents, students, and alumni. Every June, hundreds of tonnes of waste is left on the streets of Leeds by students moving house. The kinds of things left are exactly what incoming students will be buying new in September. We want to help put a stop to this unsustainable cycle of buying and throwing.
          <br/>
          <br/>
         {/* eslint-disable-next-line  */}
          You might know us from our <a href="https://www.facebook.com/events/1019083138553638/" target="_blank"> Free Shops</a>, which we ran back in September. We put a load of stuff donated by students in June into one of our members' basements. Then, we set up shop in September to give it back to students as they arrived in Leeds - pay as you feel. We raised over £250 and we’re very happy about this!
          </p>
        </div>
      </div>

      <div className="background-wrapper">
        <div className="info-wrapper current-project">
          <h2 className="custom-heading">Current Project</h2>
          <hr className="hr white"/>
          <div className="text-wrapper">
            <p>Using the money raised from our shops, we are looking to fund a project idea to decorate and invigorate street sections cut off as part of the Active Travel Neighbourhoods (ATN) initiative. These ideas are coming from the community and will be implemented by the community.</p>
          </div>
        </div>

        <div className="info-wrapper sub-text">
          <h3 className="custom-heading-h3">What's the aim of this project?</h3>
          <div className="text-wrapper">
            <p>
            We think that in order to put an end to the student waste lifecycle, a shift in behaviour and attitude needs to be implemented from the bottom up. The place we live in should be one we all care about. We can envision what goes on our streets together and we can make it a reality!
            <br/><br/>
            We encourage ideas that:
            </p>
            <ul>
              <li>Bring people together</li>
              <li>Provide a space that offers something new</li>
              <li>Create something local people can enjoy for free</li>
              <li>Improve daily life and mental wellbeing</li>
              <li>Improve the environment</li>
              <li>Tackle issues of waste</li>
            </ul>
          </div>
      </div>

        </div>
  {/* ============================================ SUBMITTING ======================================================== */}
      <div className="submitting-wrapper">
        <div className="info-wrapper sub-text-submit">
          <h3 className="custom-heading-h3">Submitting Your Idea</h3>
          <div className="text-wrapper">
            <p>Please submit your idea before 20th February. You can do so on our website <a href="/submission">submit idea</a>, or by contacting one of our team. 
            There is a template with questions to help you think about your idea in more detail, and you can check out our idea for clues. However if you find the template does not work for your idea, we will find a way to submit your idea - be that by video, or a diagram.
            There is no need to come to the online sessions to submit your idea.
            </p>
          </div>
        </div>
        <div className="info-wrapper sub-text-submit">
          <h3 className="custom-heading-h3">Submitting Feedback</h3>
          <div className="text-wrapper">
            <p>Feedback is very important and will be the main factor in deciding the winning idea. You can submit your feedback through the website or by contacting one of our team. Please leave descriptive feedback on ideas, as the volunteers who complete the project will take these comments into account. The more constructive your feedback, the more useful it will be for the panel.
            </p>
          </div>
        </div>

        <div className="info-wrapper sub-text-submit">
          <h3 className="custom-heading-h3">Who Can Submit?</h3>
          <div className="text-wrapper">
            <p>Anyone! If you have trouble using our website, or have trouble using Zoom (where we will be hosting two sessions to chat about ideas), please get in touch with us via text or email on:
            </p>
          </div>
        </div>    
    </div>
{/* ============================================ SUBMITTING ======================================================== */}
      <div className="info-wrapper">
        <h3 className="custom-heading">Online Sessions</h3>
        <hr className="hr"/>
        <div className="text-wrapper">
          <p>Please come along to our online sessions where we’ll discuss the ideas people have in a friendly and relaxed way.
          </p>
        </div>
      </div>

      <div className="info-wrapper sub-text">
        <h3 className="custom-heading-h3">30th Jan Coffee Morning Meetup</h3>
        <div className="text-wrapper">
          <p>Whether you have a burning idea or just want to get involved. We will discuss each other's ideas and have a friendly natter. If you are still a bit hazy about your idea then this is perfect for you as we can all help brainstorm together.
          </p>
        </div>
      </div>

      <div className="info-wrapper sub-text">
        <h3 className="custom-heading-h3">13th Feb Project Presentations</h3>
        <div className="text-wrapper">
          <p>This is a chance to raise awareness of your idea and to check out the ideas that are on the table. If you’ve got an idea, you get some time to talk about it and why it’s so great! If you’re interested in what others are thinking, you can ask some questions. 
          <br/>
          <br/>
          Please sign up to these by emailing or texting us on:
          </p>
        </div>
      </div>
      
      <div className="info-wrapper">
        <h2 className="custom-heading">How will the winning project be decided?</h2>
        <hr className="hr winning"/>
        <div className="text-wrapper">
          <p>We will invite a panel of community leaders to vote on the winning idea based on a few factors: feedback, viability, budgeting, and how well it fulfils our aims.
          </p>
        </div>
      </div>
     
      <div className="info-wrapper sub-text">
        <h3 className="custom-heading-h3">What will happen after the winner is decided?</h3>
        <div className="text-wrapper">
          <p>We will ask volunteers to join a co-operative working group. The person who submitted the idea may well want to be a part of this! The group will work with a flat hierarchy to complete the project, and make decisions by consensus.
          </p>
        </div>
      </div>
      
      <div className="info-wrapper">
        <h3 className="custom-heading">Our Take On ATNs</h3>
        <hr className="hr atn" />
        <div className="text-wrapper">
          <p>These planters have been controversial, we know. But we think they represent an opportunity to make the place we live better, so that people will be kinder to our streets and one another.
          </p>
        </div>
      </div>
      <Footer />
    {/* ======================================================================================== */}
      <div className="footer-basic">
        <footer>    
          <div className="social"><a href="https://www.facebook.com/CommunityActionWaste" target="_blank"><i className="fab fa-facebook-f"></i></a></div>
          <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Home</a></li>
              <li className="list-inline-item"><a href="#">Submit An Idea</a></li>
              <li className="list-inline-item"><a href="#">Current Ideas</a></li>
          </ul>
          <p className="contact-us">Contact Us:</p>

          <ul className="list-inline">
              <li className="list-inline-item">Email: <a href="mailto:communityactionwaste@gmail.com">communityactionwaste@gmail.com</a></li>
          </ul>
          <p className="copyright">Community Action On Waste © 2021</p>
        </footer>
      </div>
    </div>
  </>
  )
};


export default Home;
