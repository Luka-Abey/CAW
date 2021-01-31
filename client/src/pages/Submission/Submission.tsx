import React from 'react';
import Footer from '../../components/Footer/Footer';
import Wallpaper from '../../components/Wallpaper/Wallpaper';
import submissionService from '../../services/submissionService';


type submission = {
  title?: string;
  description?: string;
  benefit?: string;
  contribution?: string;
  skills?: string;
  costs?: string;
  maintenance?: string;
  other?: string;
  images?: File;
}
const Submission: React.FC = () => {


  const sService = new submissionService; 

  const handleChange = () => {

    // let name: HTMLElement;
    // name= document.getElementById('fileInput'); 
    // alert('Selected file: ' + name.files.item(0).name);
    // alert('Selected file: ' + name.files.item(0).size);
    // alert('Selected file: ' + name.files.item(0).type);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 

  }

  return (
  <>
    <Wallpaper />
      <div className="submission-content">
          <h1>Submission Form Coming Soon</h1>
          <h3>Please check back the week commencing:</h3>
          <h3>25/01/2021</h3>
      </div>
      <div className="form-container">
        <form className="submission-form" onSubmit={handleSubmit}>
          <div className="form-content-wrapper">
            <div className="form-group">
              <label >Submission Name</label>
              <input type="text" className="form-control" placeholder="e.g. The Green Space" required/>
              <div className="invalid-feedback">
                Please choose a name of your submission.
              </div>
            </div>
            <div className="form-group">
              <label >In a few sentences, please explain your idea</label>
              <textarea className="form-control text-area" required/>
            </div>
            <div className="form-group">
              <label >Who would benefit from your idea?</label>
              <textarea className="form-control text-area"></textarea>
            </div>
            <div className="form-group">
              <label >How will your idea make a positive contribution to the Hyde park area?</label>
              <textarea className="form-control text-area"></textarea>
            </div>          
            <div className="form-group">
              <label >Are there any practical skills needed to implement your idea?</label>
              <textarea className="form-control text-area"></textarea>
            </div>          
            <div className="form-group">
              <label >Outline the rough costs for your idea - how will it fit into the £250 budget? </label>
              <label className="sub-label">No need to be exact, just a rough estimate will do</label>
              <textarea className="form-control text-area" placeholder=""></textarea>
            </div>          
            <div className="form-group">
              <label >Will it need maintenance? If so, how might this happen?</label>
              <textarea className="form-control text-area"></textarea>
            </div>          
            <div className="form-group">
              <label >Is there anything else to consider?</label>
              <textarea className="form-control text-area"></textarea>
            </div>   
            
          </div>
          <div className="form-check">
            <label>Feel free to draw or add example images which might help us to imagine your idea </label>
            <input type="file" className="form-control-file" id="fileInput" onChange={handleChange} multiple accept="image/*"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    <Footer /> 
  </>
  )
};
export default Submission;
