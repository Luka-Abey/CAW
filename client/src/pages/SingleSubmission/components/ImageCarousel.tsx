
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap'

// Your component own properties
type PropsType = {
    imageUrls: string[];
}

const ImageCarousel: React.FC<PropsType> = ( {imageUrls} ) => {
    
    const [images, setImages] = useState(new Array<string>());

    useEffect(() => {

        // If there are no images, set the image carousel to have the logo.
        if (imageUrls.length == 0) { 
            setImages(["https://imgur.com/n5VyLq2.png"]);
        } 
        else { 
            setImages(imageUrls);
        }
    }, [images]);
  
    return (
        <>  
            <Carousel>
                { images?.map((image, index) => {
                    {console.log(image)}
                    return ( 
                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        key={index}
                        src={image}
                        alt="image slide"
                        />
                    </Carousel.Item>) 
                })}
            </Carousel>
        </>
    ) 
};

export default ImageCarousel;




