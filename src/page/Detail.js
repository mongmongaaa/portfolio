import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import jsonData from "../data.json";
import "../style/detail.scss";

function Detail() {
  const { category, id } = useParams();
  const selectedItem = jsonData.find(
    (item) => item.category === category && item.id === id
  );

  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
  
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if(ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  }

  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })
  console.log(selectedItem);

  return (
    <>
      <button className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
        onClick={handleTop}>TOP</button>
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
