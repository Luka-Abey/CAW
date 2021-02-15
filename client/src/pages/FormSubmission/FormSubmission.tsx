import React,  { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Wallpaper from '../../components/Wallpaper/Wallpaper';
import submissionService from '../../services/submissionService';
import SendSubmissionType from '../../models/SendSubmissionType';
import Recaptcha from 'react-recaptcha';

const Submission: React.FC = () => {

  const sService = new submissionService;

  const [isVerified, setIsVerified] = useState(false);

  const onloadCallback = () => {
    console.log('loaded captcha');
  };

  const userVerified = () => {
    setIsVerified(true)
  }

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    window.location.reload()
  };

  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(false)
  const [imageArray, setImageArray] = useState(new Array<String>());
  const [urlArray, setUrlArray] = useState(new Array<string>());
  const [key, setKey] = useState("");
  const [submission, setSubmission] = useState<SendSubmissionType>({
    title: "",
    description: "",
    benefit: "",
    contribution: "",
    skills: "",
    costs: "",
    maintenance: "",
    other: "",
    contact: "",
    image: []
  });

  const [finalSubmission, setFinalSubmission] = useState<SendSubmissionType>({
    title: "",
    description: "",
    benefit: "",
    contribution: "",
    skills: "",
    costs: "",
    maintenance: "",
    other: "",
    contact: "",
    image: []
  });

  // Get triggered when finalSubmssion state is changed, 
  // which only happens in handleSubmit function.
  // Need more rigorous error handling.
  useEffect(() => {
    if (finalSubmission.title !== "") { 
      sService.postSubmission(finalSubmission).catch(e => console.log("something went wrong: " + e));

    }
 }, [finalSubmission]);
  
  // nice-to-have show filenames when selected + a way to remove a file. 
  const handleInputText = (e: React.FormEvent<HTMLInputElement>) => {
    const {value, name} = e.currentTarget;  
    setSubmission({ ...submission, [name]: value});
  }

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => { 
    const {value, name} = e.currentTarget;  
    setSubmission({ ...submission, [name]: value});
  }

  // upload files to cloudinary, return url
  const uploadFile = async (file: any): Promise<string> => {
    const cloudinaryData = new FormData();
    cloudinaryData.append('file', file);
    cloudinaryData.append('upload_preset', 'communityactiononwaste');
    // send off image file
    const resCloudinary = await fetch(
      'https://api.cloudinary.com/v1_1/dura1eemm/image/upload',
      {
        method: 'POST',
        body: cloudinaryData
      }
    )
    // retrieve url
    const URL = await resCloudinary.json()
    const imageURL = URL.secure_url 

    // store the url(s) in a state variable
    let tempArray = urlArray;
    tempArray.push(imageURL);
    setUrlArray(tempArray); 
    return "done";
  }

  // (e: React.ChangeEvent<HTMLInputElement>) was not working... using e: any for now
  const handleImage = async (e: any) => {
    const initialFileUpload = e.target.files;
    // limit of file size in bytes, eg 1048576 == 1mb, 2097152 == 2mb
    const fileSizeLimit = 10485760; // 10 megabyte cloudinary limit
    // iterate through array of files
    [...initialFileUpload].forEach((file: any) => {
      const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.xbm|\.tif|\.ico|\.svg|\.webp|\.pjpeg|\.avif)$/i; 
      // .exec checks if argument string contains string provided and alerts user
      if (!allowedExtensions.exec(file.name)) {
        alert("Invalid file type provided. Please try again and click Choose Files")
        file = null
        resetImage()
      }
      // checks file size is correct and alerts user
      else if (file.size > fileSizeLimit) {
        alert("One of your files is too large. Please try again with a compressed/smaller file")
        file = null
        resetImage()
      }
      else {
        setImageArray(initialFileUpload);
      }
      console.log(file)
    });
  }
  
  const resetImage = () => { 
    let randomString = Math.random().toString(36);
    setKey(randomString);
  }

  // validate submissions & send off the submission.
  const handleSubmit = async (e: React.FormEvent<EventTarget>) => { 
    e.preventDefault();
    if (!isVerified) {
      alert('Please verify you are not a robot !')
      return
    }
    setLoading(true)
    for (let index = 0; index < imageArray.length; index++) {
      await uploadFile(imageArray[index]);
    }

    // Once react finishes updating this state, it triggers a POST request in the useEffect()
    setFinalSubmission(
      {
        title: submission.title,
        description: submission.description,
        benefit: submission.benefit,
        contribution: submission.contribution,
        skills: submission.skills,
        costs: submission.costs,
        maintenance: submission.maintenance,
        other: submission.other,
        contact: submission.contact,
        image: urlArray
      });

    setSubmission(
      {
      title: "",
      description: "",
      benefit: "",
      contribution: "",
      skills: "",
      costs: "",
      maintenance: "",
      other: "",
      contact: "",
      image: []
      }); 
      
      resetImage();
      setLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      handleShow();
      // window.scrollTo({ top: 0, behavior: 'smooth' });
}
  

  return (
  <>
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for your submission</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Click through to see and contribute to others' ideas.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" href="/feedback">Submissions</Button>
        </Modal.Footer>
      </Modal.Dialog> 
    </Modal>
    <Wallpaper />
      {/* <div className="submission-content">
        <div className="pretext-wrapper"> 
          <h2 className="custom-heading">Submission Form</h2>
          <hr className="hr" />
          <p className="p-text">Please submit your idea below. If you want some help, see our <a href="/submissions/example" className="link-to-example">example</a> idea for some guidance. Once your idea is submitted, it will be added to our database and displayed on the <a href="/submissions" className="link-to-example">submitted ideas</a> page. There, people will be able to add comments and questions.
          <br/><br/>
          If you would prefer to submit your idea in another format, such as by video or voice recording, please contact us via <a href="mailto:communityactionwaste@gmail.com?subject=Alternate Format Submission" className="link-to-example">email</a> and we can find a way that works for you.
          </p>
        </div>
      </div> */}
      <div className="submission-content">
        <div className="pretext-wrapper"> 
          <h2 className="custom-heading">Submission Form</h2>
          <hr className="hr" />
          <p className="p-text">Submission Form Coming Soon.
          <br/><br/>
          If you would prefer to submit your idea in another format, such as by video or voice recording, please contact us via <a href="mailto:communityactionwaste@gmail.com?subject=Alternate Format Submission" className="link-to-example">email</a> and we can find a way that works for you.
          </p>
        </div>
      </div>
      <div className="form-container">
        <form className="submission-form" onSubmit={handleSubmit}>
          <div className="form-content-wrapper">
            <div className="form-group">
              <label >Submission Name (max 20 words)</label>
              <input type="text" className="form-control" maxLength={130} required name="title" onChange={handleInputText} value={submission.title}/>
            </div>
            <div className="form-group">
              <label >In a few sentences, please explain your idea (max 200 words)</label>
              <br/>
              <label className="sub-label">This is the ‘what’ of your idea. You could describe what it might look like, talk us through the different parts, or anything else that gives us a basic understanding of what your idea is. </label>
              <textarea className="form-control text-area" maxLength={3000} required name="description" onChange={handleTextArea} value={submission.description}/>
            </div>
            <div className="form-group">
              <label >Who would benefit from your idea? (max 200 words)</label>
              <br/>
              <label className="sub-label">Think about the different groups of people who might come into contact with your idea - children, families, shop owners, older people etc. </label>
              <textarea required className="form-control text-area" maxLength={3000} name="benefit" onChange={handleTextArea} value={submission.benefit} />
            </div>
            <div className="form-group">
              <label >How will your idea make a positive contribution to the Hyde park area? (max 200 words)</label>
              <br/>
              <label className="sub-label">Tell us about the positive changes your idea would bring about. </label>
              <textarea required className="form-control text-area" maxLength={3000} name="contribution" onChange={handleTextArea} value={submission.contribution} />
            </div>          
            <div className="form-group">
              <label >Are there any practical skills needed to implement your idea? (max 200 words)</label>
              <br/>
              <label className="sub-label">Would something need building or assembling? Please note that you don’t need to be the person with these practical skills, but it’s useful information for gathering a group of volunteers with the right skills for the job! </label>
              <textarea required className="form-control text-area" maxLength={3000} name="skills" onChange={handleTextArea} value={submission.skills} />
            </div>          
            <div className="form-group">
              <label >Outline the rough costs for your idea - how will it fit into the allocated budget? (max 200 words)</label>
              <br/>
              <label className="sub-label">No need to be exact, just a rough estimate will do.</label>
              <textarea required className="form-control text-area" maxLength={3000} placeholder="" name="costs" onChange={handleTextArea} value={submission.costs} />
            </div>          
            <div className="form-group">
              <label >Will it need maintenance? If so, how might this happen? (max 200 words)</label>
              <br/>
              <label className="sub-label">Is your idea sort of ‘once it’s done, it’s done’, or would it require some looking after? </label>
              <textarea required className="form-control text-area" maxLength={3000} name="maintenance" onChange={handleTextArea} value={submission.maintenance} />
            </div>          
            <div className="form-group">
              <label >Is there anything else to consider? (max 200 words)</label>
              <br/>
              <label className="sub-label">Is there anything else you want to tell us about your idea? Or perhaps you’ve got some questions about your idea that you haven’t got the answers to yet? </label>
              <textarea required className="form-control text-area" maxLength={3000} name="other" onChange={handleTextArea} value={submission.other} />
            </div>   
            <div className="form-group">
              <label >Contact details (name and email/number)</label>
              <br/>
              <label className="sub-label">We will not share this with anyone - this is just to contact you if we want to discuss implementing your idea!</label>
              <input type="text" required className="form-control" maxLength={1000} name="contact" onChange={handleInputText} value={submission.contact} />
            </div>
          </div>
          <div className="form-check">
            <label>Feel free to draw or add example images which might help us to imagine your idea </label>
            <input type="file" required className="form-control-file text-center" name="image" onChange={handleImage} id="fileInput" multiple accept="image/*" key={key || ""}/>
          </div>
          <Recaptcha
            sitekey="6LcDE1QaAAAAAL56wfQD7anULS07GdV7tcFJsNA9"
            render="explicit"
            verifyCallback={userVerified}
            onloadCallback={onloadCallback}
            className="centerize"
          />
            {loading ? (
                <button className="btn btn-primary" type="button" disabled>
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </button>
              ) : 
                <button type="submit" className="btn btn-primary" >
                  Submit
                </button>
            }
        </form>
      </div>
    <Footer /> 
  </>
  )
};
export default Submission;
