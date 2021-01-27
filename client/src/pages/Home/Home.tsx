import React from 'react';
import Footer from '../../components/Footer/Footer'
import Wallpaper from '../../components/Wallpaper/Wallpaper'

const Home: React.FC = () => {
 
  return (
  <>
    <Wallpaper />

    {/* ========================================================================================= */}
    <div className="main-content-container">
        <div className="info-wrapper ">
        <h2 className="custom-heading">Who are C.A.W</h2>
        <hr className="hr" />
        <div className="text-wrapper text-wrapper-main">
          <p>Community Action on Waste is a Leeds-based community co-operative, made up of local residents, students, and alumni. Every June, hundreds of tonnes of waste is left on the streets of Leeds by students moving house. The kinds of things left are exactly what incoming students will be buying new in September. We want to help put a stop to this unsustainable cycle.
          <br/>
          <br/>
         {/* eslint-disable-next-line  */}
          You might know us from our <a href="https://www.facebook.com/events/1019083138553638/" target="_blank"> Free Shops</a>, which we ran back in September. With help from ‘The Big Clearout’, we managed to gather a load of stuff donated by students in June, and we put it in one of our members' basements for storage. Then, in September, we set up a series of pay-as-you-feel shops to the pre-loved goodies back to students as they arrived in Leeds. We raised over £250 in donations and we’re very happy about this!
          </p>
        </div>
      </div>

      <div className="background-wrapper">
        <div className="info-wrapper current-project">
          <h2 className="header custom-heading">Current Project</h2>
          <hr className="hr white"/>
          <div className="text-wrapper">
            <p>Using the money raised from our shops, we are looking to fund a project idea to decorate and invigorate street sections cut off as part of the Active Travel Neighbourhoods (ATN) initiative. These ideas will be both designed and implemented by the community.</p>
          </div>
        </div>

        <div className="info-wrapper sub-text">
          <h3 className="header custom-heading-h3">What's the aim of this project?</h3>
          <div className="text-wrapper">
            <p>
            We think that in order to put an end to the waste lifecycle, a shift in behaviour and attitude needs to be implemented from the bottom up. The place we live in should be one we all care about. We believe that our community should be collectively empowered to reimagine our surroundings, and make these visions a tangible reality.
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
            <p>Please submit your idea before 6th March. Anyone can <a href="/submission" >submit an idea</a> on our website using the online form. The form has questions to help you think about your idea in more detail, and you can also check out our example idea for inspiration. 
            <br/>
            <br/>
            If you are struggling with using the template format, don’t worry! We will find a format that works for you – send us an email. You can also come to our online sessions to brainstorm your ideas and see what others are thinking.
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
            <p>Anyone! If you have trouble using our website, or have trouble using Zoom (where we will be hosting two sessions to chat about ideas), please get in touch with us via email: communityactiononwaste@gmail.com 
            </p>
          </div>
        </div>    
    </div> 
{/* ============================================ SUBMITTING ======================================================== */}
        <div className="info-wrapper">
          <h3 className="header custom-heading">Online Sessions</h3>
          <hr className="hr"/>
          <div className="text-wrapper">
            <p>Please come along to our online sessions where we’ll discuss the ideas people have in a friendly and relaxed way. These sessions are simply there to provide a platform for discussion and to help you formulate your ideas. But they are NOT compulsory.
            </p>
          </div>
        </div>

        <div className="info-wrapper sub-text">
          <h3 className="header custom-heading-h3">13th Feb Coffee Morning Meetup</h3>
          <div className="text-wrapper">
            <p>Whether you have a burning idea or just want to get involved. We will discuss each other's ideas and have a friendly natter. If you are still a bit unsure about your idea then this is the perfect opportunity to brainstorm with others.
            </p>
          </div>
        </div>

        <div className="info-wrapper sub-text">
          <h3 className="header custom-heading-h3">27th Feb Project Presentations</h3>
          <div className="text-wrapper">
            <p>This is a chance to present your idea and also to check out the other ideas on the table. You’ll have the chance to explain why your idea is so great. As well as this, you can ask and receive questions to get/give extra feedback and pointers for improvement.
            <br/>
            <br/>
            Please sign up to these by emailing us via: communityactionwaste@gmail.com
            </p>
          </div>
        </div>
      <div className="info-wrapper">
        <div className="header heading-wrapper">
          <h2 className="custom-heading">How will the winning project be decided?</h2>
          <hr className="hr winning"/>
        </div>
        <div className="text-wrapper">
          <p>We will invite a panel of community leaders to vote on the winning idea based on a few factors: public feedback, viability, budgeting, and how well it fulfils our aims.
          </p>
        </div>
      </div>
     
      <div className="info-wrapper sub-text">
        <h3 className="header custom-heading-h3">What will happen after the winner is decided?</h3>
        <div className="text-wrapper">
          <p>We will ask volunteers to join a co-operative working group to make the idea a reality. The person who submitted the idea may well want to be a part of this! The group will work together to complete the project, and make decisions by consensus.
          </p>
        </div>
      </div>
      
      <div className="info-wrapper">
        <h3 className="header custom-heading">Our Take On ATNs</h3>
        <hr className="hr atn" />
        <div className="text-wrapper">
          <p>These planters have been controversial, we know. But we think they represent an opportunity to make the place we live better, so that people will be kinder to our streets and one another.
          </p>
        </div>
      </div>
      <Footer />
    {/* ======================================================================================== */}
    </div>
  </>
  )
};


export default Home;
