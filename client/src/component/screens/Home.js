import React from "react";
import "../../App.css";


export default function Home() {
  var image =
    "https://images.unsplash.com/photo-1496545087308-51ec893e6bbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  var array = [
    { img: image , name:'Noman' },
    { img: image, name:'Usama' },
    { img: image, name:'Affan' },
    { img: image, name:'RAZA' },
    { img: image, name:'Faraz' },
    { img: image , name:'Noman'},
    {img:image, name:'Adnan'},
    { img: image, name:'Mazz' },
    { img: image , name:'Faiz'},
    { img: image, name:'Shariq' },
    { img: image , name:'Noman'},
    { img: image , name:'Noman'},
    { img: image , name:'Noman'},
    {img:image, name:'Noman'},
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
        { 
        array.map((item)=>{
            return (
                <div className="card home-card ">
        <h4>{item.name}</h4>
        <div className="card-image">
          <img src={item.img} />
        </div>
        <div className="card-content input-field">
          <i class="material-icons" style={{ color: "blue" }}>
            favorite
          </i>
          <span className="card-title">Title</span>
          <h6>This is an Amazing Posts</h6>
          <input type="text" placeholder="Add a Comments" />
        </div>
      </div>
      
            )
        })
        }
      
    </div>
  );
}
