import React from "react";
import person from "../../images/person.png";
import '../../App.css'
export default function Profile() {
    var array=[{img:person},{img:person},{img:person},{img:person},{img:person},{img:person},{img:person},{img:person},]
  return (
    <div style={{maxWidth:'850px' , margin:'0px auto'}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "5px 0px",
          borderBottom: "1px solid lightgray",
          borderTop: "1px solid lightgray"
        }}
      >
        <div style={{ margin: "18px 0px",}}>
          <img
            src={person}
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
          />
        </div>
        <div style={{ margin: "18px 0px",}}>
          <h4 >Affan Ali</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "112%",
            }}
          >
            <h5 className="app_logo">40 Posts</h5>
            <h5 className="app_logo">40 Followers</h5>
            <h5 className="app_logo">40 Following</h5>
            <h5 className="app_logo">40 Friends</h5>
          </div>
        </div>
      </div>
      <div className="gallery"> 
      {
          array.map((item)=>{
              return( <div className="card" style={{width:'30%'}}>
                  <img src={item.img} style={{width:'100%' ,marginTop:'3%' ,marginBottom:'3%'}} />
              </div>
              )
          })
      }
      
     
      </div>
  
    </div>
  );
}
