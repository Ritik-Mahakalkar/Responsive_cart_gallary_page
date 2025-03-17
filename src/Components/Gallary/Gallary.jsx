import { useState } from 'react'
import './Gallary.css'
const Gallary = () => {
      const [category, setCategory] = useState("all");
      const images = [
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHwpDcDTQaXme54x16yp2tAQKceNuj_1Jaw&s", type: "nature" },
        { src: "https://t4.ftcdn.net/jpg/03/14/92/75/360_F_314927575_yqFMAuXFTNC6gBflR2njRZ4bQb8dAb7y.jpg", type: "tech" },
        { src: "https://plus.unsplash.com/premium_photo-1668447599542-70e7b1bf9acc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww", type: "art" },
        { src: "https://www.shutterstock.com/image-photo/beautiful-nature-wallpaper-260nw-1148410709.jpg", type: "nature" },
        { src: "https://cdn.pixabay.com/photo/2021/05/19/06/13/smartphone-6265047_640.jpg", type: "tech" },
        { src: "https://t3.ftcdn.net/jpg/02/73/22/74/360_F_273227473_N0WRQuX3uZCJJxlHKYZF44uaJAkh2xLG.jpg", type: "art" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxV508rIJPKb66gQHUc_QDs-N4y-XjhuuzmQ&s", type: "tech" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-saVwW68fz2H0vQnBOSWbIL9058gn-WQaw&s", type: "art" },
        
      ];
  return (
    <div className="gallery-container">
    <select
      className="filter-dropdown"
      onChange={(e) => setCategory(e.target.value)} >
      <option value="all">All</option>
      <option value="nature">Nature</option>
      <option value="tech">Technology</option>
      <option value="art">Art</option>
    </select>
    <div className="gallery">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          className={category === "all" || img.type === category ? "" : "hidden"}
          alt={img.type}
        />
      ))}
    </div>
  </div>

  )
}

export default Gallary
