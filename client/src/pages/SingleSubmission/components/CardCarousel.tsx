
import React from 'react';
import { Link, withRouter } from 'react-router-dom';


// Your component own properties
type PropsType = {
    title: string;
    description: string;
    imageUrl: string;
    submissionId: string;
}

const MAX_LENGTH = 200;

const CardCarousel: React.FC<PropsType> = ( {title, description, imageUrl, submissionId} ) => { 

    return (
        <> 
            <div className="card mb-3">
                <div className="row">
                <div className="col-sm-12 col-md-4">
                    <img className="img-fluid" src={imageUrl} alt={imageUrl} />
                </div>
                <div className="col-sm-12 col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        { (description.length > MAX_LENGTH) ? 
                            <p className="card-text text-secondary">{description.substring(0, MAX_LENGTH) + "..."}</p>
                         : <p className="card-text text-secondary">{description}</p> }
                        <hr/>
                    </div>
                </div>
                </div>
            </div>
            </>
    ) 
};

export default CardCarousel;


