
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props { 
    title: string;
    description?: string;
    imageUrl?: string;
    submissionId: string;
}

const Card: React.FC<Props> = ( { title, description, imageUrl, submissionId} ) => { 

    return (
        <> 
            <div className="card mb-3">
                <div className="row">
                <div className="col-sm-12 col-md-4 ">
                    <img className="img-fluid" src={imageUrl} alt={imageUrl} />
                </div>
                <div className="col-sm-12 col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text text-secondary ">{description}</p>
                        <hr/>
                       <Link to={"submissions/" + submissionId}>  <a className="btn btn-outline-success">View Submission</a></Link>
                    </div>
                </div>
                </div>
            </div>
            </>
    ) 
};

export default Card;


