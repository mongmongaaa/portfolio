import React, { useState, useEffect } from "react";
import jsonData from "../data.json";
import {Link} from "react-router-dom"

function DesignWork({activeCategory}) {
  const [data, setData] = useState([]);
  const [filterData, setfilterData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(()=>{

    if(activeCategory ==="ALL"){
        setfilterData(data);
    }else{
        const categories = activeCategory.split('.');
        const filtered = data.filter((item)=> categories.includes(item.category));
        setfilterData(filtered);
    }
  },[activeCategory, data])

  

  return (
    <div className="grid-container">
      {filterData.map((item) => (
            <div className="grid-item" key={item.id}>
                <Link to={`/Detail/${item.category}/${item.id}`}>
                <div className="hover">
              <img src={`/image/${item.thumbnail}`} />
                <p>{item.category}</p>
                <p>{item.title}</p>
            </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default DesignWork;
