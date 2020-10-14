import React, { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import insta_login from "../../images/insta_login.png";
import ImageUploading from "react-images-uploading";

const CreatePost = () => {
  const [images, setImages] = useState([]);
  const [check, setCheck] = useState(false);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    //imageList=[]
    setImages(imageList);
    setCheck(true)
  };
  return (
    <div className="my-card">
      <div className="card  card-auth input-field" style={{}}>
        <h2 className="app_logo">Create Post</h2>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Body" />
        <ImageUploading
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div style={{ display: "flex" , justifyContent:'space-between' }}>
              <div style={{ display: "inline" }}>
               
                  <button
                    style={{width:'150px' , marginTop:'10%' , }}
                    className="btn  waves-effect waves-light indigo darken-2 "
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                
              </div>

              <div style={{ display: "inline" }}>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image["data_url"]} alt="" width="50%" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </ImageUploading>
        <button className="btn  waves-effect waves-light indigo darken-2 " style={{marginTop:'4%'}}>
          Post
        </button>
        <p>
          
          Have an account!! <Link to="/login" > Login</Link>
        </p>
      </div>
    </div>
  );
};
export default CreatePost;
