import React,  { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import CustomModal from '../../components/Modal/CustomModal';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Wallpaper from '../../components/Wallpaper/Wallpaper';
import submissionService from '../../services/submissionService';
import SendSubmissionType from '../../models/SendSubmissionType';
import { setSourceMapRange } from 'typescript';

const Submission: React.FC = () => {

  const sService = new submissionService;
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
      <div className="submission-content">
          
      <div className="pretext-wrapper"> 
        <h2 className="custom-heading">Submission Form</h2>
        <hr className="hr" />
        <p className="p-text">Please submit your idea below. If you want some help, please check out our <a href="/submissions/example" className="link-to-example">example</a> idea for some guidance. Once your idea is submitted, it will be added to our database and displayed on the submitted ideas page. There, people will be able to add comments and questions.
        </p>
      </div>
      </div>
      <div className="form-container">
        <form className="submission-form" onSubmit={handleSubmit}>
          <div className="form-content-wrapper">
            <div className="form-group">
              <label >Submission Name (max 20 words)</label>
              <input type="text" className="form-control" maxLength={130} placeholder="e.g. The Green Space" required name="title" onChange={handleInputText} value={submission.title}/>
              <div className="invalid-feedback">
                Please choose a name of your submission.
              </div>
            </div>
            <div className="form-group">
              <label >In a few sentences, please explain your idea (max 200 words)</label>
              <textarea className="form-control text-area" maxLength={3000} required name="description" onChange={handleTextArea} value={submission.description}/>
            </div>
            <div className="form-group">
              <label >Who would benefit from your idea? (max 200 words)</label>
              <textarea className="form-control text-area" maxLength={3000} name="benefit" onChange={handleTextArea} value={submission.benefit}></textarea>
            </div>
            <div className="form-group">
              <label >How will your idea make a positive contribution to the Hyde park area? (max 200 words)</label>
              <textarea className="form-control text-area" maxLength={3000} name="contribution" onChange={handleTextArea} value={submission.contribution}></textarea>
            </div>          
            <div className="form-group">
              <label >Are there any practical skills needed to implement your idea? (max 200 words)</label>
              <textarea className="form-control text-area" maxLength={3000} name="skills" onChange={handleTextArea} value={submission.skills}></textarea>
            </div>          
            <div className="form-group">
              <label >Outline the rough costs for your idea - how will it fit into the £250 budget? (max 200 words)</label>
              <label className="sub-label">No need to be exact, just a rough estimate will do</label>
              <textarea className="form-control text-area" maxLength={3000} placeholder="" name="costs" onChange={handleTextArea} value={submission.costs}></textarea>
            </div>          
            <div className="form-group">
              <label >Will it need maintenance? If so, how might this happen? (max 200 words)</label>
              <textarea className="form-control text-area" maxLength={3000} name="maintenance" onChange={handleTextArea} value={submission.maintenance}></textarea>
            </div>          
            <div className="form-group">
              <label >Is there anything else to consider? (max 200 words)</label>
              <textarea className="form-control text-area" maxLength={3000} name="other" onChange={handleTextArea} value={submission.other}></textarea>
            </div>   
            
          </div>
          <div className="form-check">
            <label>Feel free to draw or add example images which might help us to imagine your idea </label>
            <input type="file" className="form-control-file" name="image" onChange={handleImage} id="fileInput" multiple accept="image/*" key={key || ""}/>
          </div>
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
