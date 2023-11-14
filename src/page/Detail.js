import React from "react";
import { useParams } from "react-router-dom";
import jsonData from "../data.json";
import "../style/detail.scss";

function Detail() {
  const { category, id } = useParams();
  const selectedItem = jsonData.find(
    (item) => item.category === category && item.id === id
  );

  console.log(selectedItem);

  return (
    <>
      {selectedItem ? (
        <div className="allcontents_2">
          <div className="inner_2">
            <div className="box">
              <div className="right">
                <div className="thum_img">
                  <img src={`./image/${selectedItem.thumbnail}`} />
                  {selectedItem.giturl && <p>git 바로가기</p>}
                </div>
                {/* {selectedItem.giturl && <p>git 바로가기</p>} */}
              </div>
              <ul className="left">
                <li>{selectedItem.category}</li>
                <li>{selectedItem.title}</li>
                <li>{selectedItem.date}</li>
                <li>
                  기여도 <span>{selectedItem.percent}</span>
                </li>
                <li>
                  <div>TOOL</div>
                  <div className="skills">
                    {selectedItem.tool.split(",").map((toolImage, index) => (
                      <img
                        key={index}
                        src={`./image/skills/${toolImage.trim()}`}
                      />
                    ))}
                  </div>
                </li>
                <li>
                  <div>EXPLANATION</div>
                  <div>{selectedItem.text}</div>
                </li>
              </ul>
            </div>
            <hr />
            <div className="detail_img">{selectedItem.detail_img}</div>
            <div className="qr_img">{selectedItem.qr_img}</div>
          </div>
        </div>
      ) : (
        <p>준비중</p>
      )}
    </>
  );
}

export default Detail;
