import React from "react";

import '../css/reset.css'
import '../css/style.css'
import cardBg01 from "../img/card_bg01.jpg";
import cardBg02 from "../img/card_bg02.jpg";
import cardBg03 from "../img/card_bg03.jpg";


function Main() {

    const cardInfo = [
        {
            img: cardBg01,
            title: "캠핑 준비물 챙기기",
            desc: "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 방법입니다."
        },
        {
            img: cardBg02,
            title: "캠핑 요리 만들기",
            desc: "웹표준 사이트를 완성하고, 반응형을 익히는 사이트입니다. 기본 코딩을 익히고, 반응형 감각을 키우면 모바일 및 반응형 사이트도 만들 수 있습니다. 웹표준 사이트를........"
        },
        {
            img: cardBg03,
            title: "캠핑 용품 사러가기",
            desc: "기업 사이트 중 50% 이상이 패랙렉스 스크로링 효과로 만들어져 있습니다. 웹 표준, 반응형 사이트를 완성하였다면, 이제는 인터랙티브한 패랠렉스 스크롤링 사이트를...."
        }
    ]
    return (
        <div className="main">
        <div className="slider__inner">
            <div className="slider">
                <div className="slider__img">
                    <div className="desc">
                        <span>Let's Go!</span>
                        <h3>Camping</h3>
                        <p>
                            계곡으로! 바다로! 산으로! 어디로든 떠나자!!<br/>
                            술렁술렁~
                        </p>
                        <div className="btn">
                            <a href="/">자세히 보기</a>
                            <a href="/" className="black">사이트 보기</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    <div className="banner_inner">
        <h3 className="title">에휴 하기싫어요</h3>
        <p className="desc">
           끝나고 배그나 같이 합시다
            <a href="/" title="유튜브 페이지 이동">youtube.com/bluebo2</a>
        </p>
        <span className="small">배너 유형01</span>
    </div>

    <div className="card-box">
        <div className="card_inner container">
            {cardInfo.map((card, key) => (
                <article className="card" key={key}>
                    <figure className="card_header">
                        <img src={card.img} alt={card.title}/>
                    </figure>
                    <div className="card_body">
                        <h3 className="tit">{card.title}</h3>
                        <p className="desc">{card.desc}</p>
                        <a className="btn" href="/">
                            더 자세히 보기
                            <span aria-hidden="true">
                                    <svg width="52" height="8" viewBox="0 0 52 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                                            fill="#5B5B5B"/>
                                    </svg>
                                </span>
                        </a>
                    </div>
                </article>
            ))}

        </div>
    </div>


    <div className="image_box">
        <div className="image__inner container">
            <article className="image img1">
                <h3 className="image__title">김대근</h3>
                <p className="image__desc">왤 케 하 기 가 싫 냐 </p>
                <a className="image__btn" href="/">자세히 보기</a>
            </article>
            <article className="image img2">
                <h3 className="image__title">장준희</h3>
                <p className="image__desc">왤 케 하 기 가 싫 냐 </p>
                <a className="image__btn yellow" href="/">자세히 보기</a>
            </article>
        </div>
    </div>

    <div className="footer-box">

        <div className="footer__right">
            2023-12-21 ~ 2024-06-26 <br/>codelab akademy
        </div>

    </div>
        </div>
    );
}

export default Main;
