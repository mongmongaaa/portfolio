import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "../style/main.scss";
import DesignWork from "../comp/DesignWork";

function Main() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };
  // 섹션2 이미지 변경 코드

  const categoryChange = (category) => {
    setActiveCategory(category);
  };
  // 카데고리 변경 코드

  const scrollToSection = (section) => {
    scroll.scrollTo(section);
  };

  //스크롤 코드


  

  return (
    <div>
      <nav>
        <ul>
          <li>
            <ScrollLink to="section_1" smooth={true} duration={500}>
              <img src="./image/ICON_yellow1_100x100.png" />
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="section_2" smooth={true} duration={500}>
              <img src="./image/ICON_flower2_100x100.png" />
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="section_3" smooth={true} duration={500}>
              <img src="./image/ICON_green3_100x100.png" />
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="section_4" smooth={true} duration={500}>
              <img src="./image/ICON_sun4_100x100.png" />
            </ScrollLink>
          </li>
        </ul>
      </nav>
      <div className="allcontents">
        <div id="section_1" className={`section_1 ${isMouseOver ? "bg_active" : ""}`}>
          <div className="inner">
            <figure>
              <img src="./image/main_spot_1.gif" />
              <figcaption>
                <div>Portfolio</div>
                <p>Lee ji young</p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div id="section_2" className={`section_2 ${isMouseOver ? "bg_active" : ""}`}>
          <div className="inner">
            <div className="text">
              <div>Introduction</div>
              <ul>
                <li>
                  <p>
                    "원활한"
                    <br />
                    <span>소통</span>
                  </p>
                </li>
                <li>
                  <p>
                    "<span>공감</span>과"
                    <br />
                    <span>이해</span>
                  </p>
                </li>
                <li>
                  <p>
                    "<span>경청</span>과"
                    <br />
                    <span>인사이트</span>
                  </p>
                </li>
              </ul>
              <p>
                좋은 결과물은 <span>소통</span>에서 나온다고 생각합니다.
                <br />
                둥근 성격으로
                <span> 원활한 소통</span>을 이끌며, <span>경청 </span>하는
                자세로
                <br />
                <span>인사이트</span>를 얻기 위해 노력합니다.
                <br />
              </p>
              <p>
                인사이트를 통한 끊임없는 발전으로
                <br />
                대중들의 공감을 받을 수 있는 디자이너가 되고자 합니다.
              </p>
            </div>
          </div>
          <div
            className={`spot ${isMouseOver ? "hovered_img" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg">
              <div>
                <img
                  src={
                    isMouseOver
                      ? "./image/main_spot_2_1.gif"
                      : "./image/main_spot_2.gif"
                  }
                />
              </div>
            </div>
            <div className="bg2"></div>
          </div>
        </div>
        <div id="section_3" className={`section_3 ${isMouseOver ? "bg_active" : ""}`}>
          <div className="pattern">
            <div className="inner">
              <div className="section_3_t">About</div>
              <div className="contents">
                {/* 큰 네모  */}
                <div className="spot_img">
                  <img src="./image/main_spot_3.png" />
                </div>
                <div className="tt">
                  {/*  // 글자만 들어잇는 네모  */}
                  <div className="textbox">
                    {/* // 그 글자 묶는 네모  */}
                    <div className="text_top">
                      <ul className="profil">
                        <li>
                          <b>PROFIL</b>
                        </li>
                        <li>LEE JI YOUNG</li>
                        <li>이지영 2000.04.27</li>
                        <li>dlwldud40344@naver.com</li>
                        <li>인스타 주소</li>
                        <li>집주소</li>
                      </ul>
                      <ul className="skills">
                        <li>
                          <b>SKILLS</b>
                        </li>
                        <li>원활한 디자인 및 시안 제작이 가능합니다.</li>
                        <li>
                          <ul>
                            <li>
                              <img src="./image/skills/Logo_1.png" />
                            </li>
                            <li>
                              <img src="./image/skills/Logo_2.png" />
                            </li>
                            <li>
                              <img src="./image/skills/Logo_3.png" />
                            </li>
                            <li>
                              <img src="./image/skills/Logo_4.png" />
                            </li>
                            <li>
                              <img src="./image/skills/Logo_5.png" />
                            </li>
                            <li>
                              <img src="./image/skills/Logo_6.png" />
                            </li>
                            <li>
                              <img src="./image/skills/Logo_7.png" />
                            </li>
                          </ul>
                        </li>
                        <li>
                          HTML5 시멘틱 태그 활용, css 요소를 이해하고 있습니다.
                        </li>
                        <li>
                          <ul>
                            <li>
                              <img src="./image/skills/Html_1.png" />
                            </li>
                            <li>
                              <img src="./image/skills/Html_2.png" />
                            </li>
                            <li>
                              <img src="./image/skills/Html_3.png" />
                            </li>
                            <li>
                              <img src="./image/skills/Html_4.png" />
                            </li>
                            <li>
                              <img src="./image/skills/Html_5.png" />
                            </li>
                            <li>
                              <img src="./image/skills/Html_6.png" />
                            </li>
                            <li>
                              <img src="./image/skills/Html_7.png" />
                            </li>
                            <li>
                              <img src="./image/skills/Html_8.png" />
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="text_bottom">
                      <ul className="experience">
                        <li>
                          <b>EXPERIENCE</b>
                        </li>
                        <li>2019 제 10회 캐릭콘 네이밍 공모전 우수상 수상</li>
                        <li>2019 문화광고 그랑프리 신인부문 금상 수상</li>
                        <li>2022 우송대학교 졸업전 웹 디자인 팀</li>
                        <li>
                          2023 그린컴퓨터아카데미 프로젝트기반{" "}
                          <span>프론트엔드 웹&앱 SW개발자 양성과정 수료</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section_4" className="section_4">
          <div className="inner">
            <div className="box">
              <div>Portfolio</div>
              <ul>
                <li
                  onClick={() => categoryChange("ALL")}
                  className={activeCategory === "ALL" ? "active" : ""}
                >
                  <figure>
                    <img
                      src={
                        activeCategory == "ALL"
                          ? "./image/folder_2.png"
                          : "./image/folder_1.png"
                      }
                    />
                    <figcaption>ALL</figcaption>
                  </figure>
                </li>
                <li
                  onClick={() => categoryChange("UIUX")}
                  className={activeCategory === "UIUX" ? "active" : ""}
                >
                  <figure>
                    <img
                      src={
                        activeCategory == "UIUX"
                          ? "./image/folder_2.png"
                          : "./image/folder_1.png"
                      }
                    />
                    <figcaption>UIUX</figcaption>
                  </figure>
                </li>
                <li
                  onClick={() => categoryChange("BRANDING.EDITING")}
                  className={
                    activeCategory === "BRANDING.EDITING" ? "active" : ""
                  }
                >
                  <figure>
                    <img
                      src={
                        activeCategory == "BRANDING.EDITING"
                          ? "./image/folder_2.png"
                          : "./image/folder_1.png"
                      }
                    />
                    <figcaption>
                      BRANDING<span>EDITING</span>
                    </figcaption>
                  </figure>
                </li>
                <li
                  onClick={() => categoryChange("PACKAGE.CHARACTER")}
                  className={
                    activeCategory === "PACKAGE.CHARACTER" ? "active" : ""
                  }
                >
                  <figure>
                    <img
                      src={
                        activeCategory == "PACKAGE.CHARACTER"
                          ? "./image/folder_2.png"
                          : "./image/folder_1.png"
                      }
                    />
                    <figcaption>
                      PACKAGE<span>CHARACTER</span>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </div>
            <DesignWork activeCategory={activeCategory} /> {/* props전달 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
