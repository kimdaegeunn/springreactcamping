import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Campinglist.css';
import {Link} from "react-router-dom";
import Campingdetail from './Campingdetail';

function Campinglist() {
    const [campis, setCampis] = useState([]);
    const [selectRegion, setSelectRegion] = useState('')
    const [keyword, setKeyword] = useState('')
    const [regionSearchVisible, setRegionSearchVisible] = useState(true);
    const [indutySearchVisible, setIndutySearchVisible] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [campsPerPage] = useState(5);

    const axiosCampingList = (region) => {
        setCurrentPage(1);
        setSelectRegion(region)
        axios.get(`http://localhost:8081/api/Campinglist?region=${region}`)
            .then(response => {
                const fixedCampingList = response.data.map(campi => ({
                    ...campi,
                    amenities: campi.amenities.split(',')
                }))
                setCampis(fixedCampingList)
            })
            .catch(error => {
                console.error('There was an error fetching the camping!', error);
            });
    }

    const axiosCampingSearch = (keyword) => {
        setCurrentPage(1);
        setSelectRegion(keyword)
        axios.get(`http://localhost:8081/api/Campingsearch?keyword=${keyword}`)
            .then(response => {
                let fixedCampingList = response.data.map(campi => ({
                    ...campi,
                    amenities: campi.amenities.split(','),
                    facilities: campi.facilities.split(',')
                }))

                if (fixedCampingList.length === 0) {
                    fixedCampingList = "없음";
                }

                setCampis(fixedCampingList)
            })
            .catch(error => {
                console.error('There was an error fetching the camping!', error);
            });
    }

    const axiosCampingIndutySearch = (induty) => {
        setCurrentPage(1);
        setSelectRegion(induty)
        axios.get(`http://localhost:8081/api/Campinginduty?induty=${induty}`)
            .then(response => {
                let fixedCampingList = response.data.map(campi => ({
                    ...campi,
                    amenities: campi.amenities.split(','),
                    facilities: campi.facilities.split(',')
                }))
                setCampis(fixedCampingList)
            })
            .catch(error => {
                console.error('There was an error fetching the camping!', error);
            });
    }

    const amenitiesImgUrl = (amenities) => {
        switch (amenities) {
            case '전기':
                return <><img src='https://gocamping.or.kr/img/2018/sub/ico_volt.png'/><br/>전기</>
            case '무선인터넷':
                return <><img src='https://gocamping.or.kr/img/2018/sub/ico_wifi.png'/><br/>와이파이</>
            case '장작판매':
                return <><img src='https://gocamping.or.kr/img/2018/sub/ico_wood.png'/><br/>장작판매</>
            case '온수':
                return <><img src='https://gocamping.or.kr/img/2018/sub/ico_hotwater.png'/><br/>온수</>
            case '트렘폴린':
                return <><img src='https://gocamping.or.kr/img/2018/sub/ico_tramp.png'/><br/>트렘폴린</>
            case '물놀이장':
                return <><img src='https://gocamping.or.kr/img/2018/sub/ico_pool.png'/><br/>물놀이장</>
            case '놀이터':
                return <><img src='https://gocamping.or.kr/img/2018/sub/ico_playzone.png'/><br/>놀이터</>
            case '산책로':
                return <><img src='https://gocamping.or.kr/img/2018/sub/ico_walk.png'/><br/>산책로</>
            case '운동장':
                return <><img src='https://gocamping.or.kr/img/2018/sub/ico_ground.png'/><br/>운동장</>
            case '운동시설':
                return <><img src='https://gocamping.or.kr/img/2018/sub/ico_sports.png'/><br/>운동시설</>
            case '마트.편의점':
                return <><img src='https://gocamping.or.kr/img/2018/sub/ico_mart.png'/><br/>마트.편의점</>

            default:
                return amenities
        }
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1
    }

    const handleRegionSearch = () => {
        return (
            <div className='select-list'>
                <Slider {...settings}>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("서울")}><img src='/image/seoul.png' alt="서울"/>
                        </button>
                        <br/>
                        서울
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("인천")}><img src='/image/incheon.png' alt="인천"/>
                        </button>
                        <br/>
                        인천
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("대전")}><img src='/image/daejun.png' alt="대전"/>
                        </button>
                        <br/>
                        대전
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("대구")}><img src='/image/daegu.png' alt="대구"/>
                        </button>
                        <br/>
                        대구
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("경기")}><img src='/image/gyunggi.png' alt="경기"/>
                        </button>
                        <br/>
                        경기
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("부산")}><img src='/image/busan.png' alt="부산"/>
                        </button>
                        <br/>
                        부산
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("울산")}><img src='/image/ulsan.png' alt="울산"/>
                        </button>
                        <br/>
                        울산
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("강원")}><img src='/image/gangwon.png' alt="강원"/>
                        </button>
                        <br/>
                        강원
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("광주")}><img src='/image/gwangju.png' alt="광주"/>
                        </button>
                        <br/>
                        광주
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("충북")}><img src='/image/chungbuk.png' alt="충북"/>
                        </button>
                        <br/>
                        충북
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("충남")}><img src='/image/chungnam.png' alt="충남"/>
                        </button>
                        <br/>
                        충남
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("경북")}><img src='/image/gyungbuk.png' alt="경북"/>
                        </button>
                        <br/>
                        경북
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("경남")}><img src='/image/gyungnam.png' alt="경남"/>
                        </button>
                        <br/>
                        경남
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("전북")}><img src='/image/jeonbuk.png' alt="전북"/>
                        </button>
                        <br/>
                        전북
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("전남")}><img src='/image/jeonnam.png' alt="전남"/>
                        </button>
                        <br/>
                        전남
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("제주")}><img src='/image/jeju.png' alt="제주"/>
                        </button>
                        <br/>
                        제주
                    </div>
                    <div className='region-list-div'>
                        <button onClick={() => axiosCampingList("세종")}><img src='/image/sejong.png' alt="세종"/>
                        </button>
                        <br/>
                        세종
                    </div>
                </Slider>
            </div>
        )
    }
    const handleIndutySearch = () => {
        return (
            <div className="induty-tap">
                <div className="induty-general" onClick={() => {
                    axiosCampingIndutySearch("일반야영장")
                }}><span className='induty-text'>일반야영장</span></div>
                <div className="induty-car" onClick={() => {
                    axiosCampingIndutySearch("자동차야영장")
                }}><span className='induty-text'>자동차야영장</span></div>
                <div className="induty-glamping" onClick={() => {
                    axiosCampingIndutySearch("카라반")
                }}><span className='induty-text'>카라반</span></div>
                <div className="induty-caravan" onClick={() => {
                    axiosCampingIndutySearch("글램핑")
                }}><span className='induty-text'>글램핑</span></div>
            </div>
        )
    }

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        scrollToTop();
    }, [currentPage]);

    const indexOfLastCamp = currentPage * campsPerPage;
    const indexOfFirstCamp = indexOfLastCamp - campsPerPage;
    const totalPage = Math.ceil(campis.length / campsPerPage);
    const currentCamps = campis.slice(indexOfFirstCamp, indexOfLastCamp);

    return (
        <div className="c-l-page">
            <div className='select-result'>
                <div id="search-box">
                    <form onSubmit={(event) => {
                        event.preventDefault(); // 폼 제출 방지
                        axiosCampingSearch(keyword); // 검색 함수 실행
                    }}>
                        <div id="search-left">
                            <img src="/image/search.png"/>
                            <input
                                type="text"
                                name="keyword"
                                value={keyword}
                                onChange={(event) => setKeyword(event.target.value)}
                                placeholder="지역 및 캠핑장명,주요시설로 검색이 가능합니다."
                            />
                        </div>
                        <div id="search-right">
                            <button type="submit">검색</button>
                        </div>
                    </form>
                </div>
                <div className='search-result2'>
                    <div className='search-tap'>
                        <button onClick={() => {
                            setRegionSearchVisible(true);
                            setIndutySearchVisible(false);
                        }}>지역별 검색
                        </button>
                        <button onClick={() => {
                            setIndutySearchVisible(true);
                            setRegionSearchVisible(false);
                        }}>유형별 검색
                        </button>
                    </div>
                    <div className='visible-tap'>
                        {regionSearchVisible && handleRegionSearch()}
                        {indutySearchVisible && handleIndutySearch()}
                    </div>
                </div>
            </div>

            <div className='search-result'>
                <div className='region-text'>{selectRegion}</div>
                <ul>
                    {currentCamps === "없음" ? (
                        <li className='search-none'>{selectRegion}이/가 포함된 검색결과가 없습니다.</li>
                    ) : (
                        currentCamps.map(campi => (
                            <Link to={`/CampingDetail/${campi.id}`} key={campi.id}>
                                <li>
                                    <img src={campi.imgurl} className='camping-imgurl'/>
                                    <div className='search-result-div'>
                                        <div className='search-result-text'>
                                            <div className='text-title-box'>
                                                <span
                                                    className='text-do-sigungu'>[{campi.donm}&nbsp;{campi.sigungunm}]</span>
                                                <span className='text-camp-name'>{campi.camp_name}</span>
                                            </div>
                                            <div className='text-line-info'>{campi.line_info}</div>
                                            {/*<div className='text-addr-box'>*/}
                                            {/*    <img src='https://www.gocamping.or.kr/img/2018/sub/ico_map01.png'*/}
                                            {/*         alt='map icon'/>*/}
                                            {/*    <span className='text-addr'>{campi.addr}</span>*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className='result-icon-box'>
                                            <ul className='icon-box'>
                                                {campi.amenities.map((amenities, index) => (
                                                    <li key={index}>{amenitiesImgUrl(amenities)}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        ))
                    )}
                </ul>
                {/* 페이지네이션 */}
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>이전</button>
                    <span className='page-number'>{currentPage}/{totalPage}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPage}>다음</button>
                </div>
            </div>
        </div>

    );
}

export default Campinglist;