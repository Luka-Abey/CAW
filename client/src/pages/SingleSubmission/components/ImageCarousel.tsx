
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap'

// Your component own properties
type PropsType = {
    imageUrls: string[];
}

const ImageCarousel: React.FC<PropsType> = ( {imageUrls} ) => {
    
    const [images, setImages] = useState(new Array<string>());

    useEffect(() => {

        console.log(imageUrls);
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
                {/* { images?.map((image, index) => {
                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        key={index}
                        src={image}
                        alt="image slide"
                        />
                    </Carousel.Item>
                })} */}
                <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={images[0]}
                        alt="image slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={images[1]}
                        alt="image slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={images[2]}
                        alt="image slide"
                        />
                    </Carousel.Item>
            </Carousel>
        </>
    ) 
};

export default ImageCarousel;



