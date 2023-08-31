import React from "react";

const Images_List = function(props){
    const images = props.images.map(
        (image)=>{
            return <img src={image.webformatURL} alt="image" key={image.id}/>
        }

        
    )
    return(
        <div>
            <p>My images list</p>
            {images}
        </div>
    )
}

export default Images_List;