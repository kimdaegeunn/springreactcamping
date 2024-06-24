import React from "react";

import '../css/reset.css';
import '../css/style.css';
import '../App.css';
import cardBg01 from "../img/card_bg01.jpg";
import cardBg02 from "../img/card_bg02.jpg";
import cardBg03 from "../img/card_bg03.jpg";


function Main() {

    const cardInfo = [
        {
            img: cardBg01,
            title: "Camping Tip's",
            desc: "자연 속에서 더 편안하고 즐거운 캠핑을 즐기기 위한 유용한 팁과 노하우를 소개합니다. 캠핑 전문가들의 조언을 통해 더 안전하고 재미있는 캠핑을 경험해보세요"
        },
        {
            img: cardBg02,
            title: "Camping Recipes",
            desc: "야외에서 쉽게 만들 수 있는 맛있는 캠핑 요리들을 소개합니다. 자연 속에서 즐기는 특별한 식사를 위한 간편하고 다양한 레시피를 만나보세요!"
        },
        {
            img: cardBg03,
            title: "Camping Shop",
            desc: "캠핑에 필요한 모든 장비와 용품을 한곳에서 편리하게 쇼핑하세요. 고품질 캠핑 기어부터 실용적인 아이템까지, 캠핑을 완벽하게 준비할 수 있습니다!"
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
        <h3 className="title">Camping Theme</h3>
        <p className="desc">
          #수영장 #바다 #산 #불멍 #바베큐
            <a href="/" title="유튜브 페이지 이동">테마별로 놀러가자~</a>
        </p>

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
                <p className="image__desc"> Github ~ </p>
                <a className="image__btn" href="/">자세히 보기</a>
            </article>
            <article className="image img2">
                <h3 className="image__title">장준희</h3>
                <p className="image__desc">Github ~ </p>
                <a className="image__btn yellow" href="/">자세히 보기</a>
            </article>
        </div>
    </div>


        </div>
    );
}

export default Main;
