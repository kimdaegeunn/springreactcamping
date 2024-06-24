import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css/Campingdetail.css';
import {Link, useParams} from "react-router-dom";
import {Map, MapMarker} from "react-kakao-maps-sdk";

function Campingdetail() {
    const {id} = useParams();
    const [campis, setCampis] = useState();
    const [tapNum, setTapNum] = useState(1);
    const [rotate, setRotate] = useState(0);
    const [rotateText, setRotateText] = useState("지도보기")

    useEffect(() => {
        axiosCampingDetail();
    }, [id]);

    const axiosCampingDetail = () => {
        axios.get(`http://localhost:8081/api/CampingDetail/${id}`)
            .then(response => {
                const fixedCampingData = {
                    ...response.data,
                    amenities: response.data.amenities.split(','),
                    induty: response.data.induty.split(','),
                    glamp_inner: response.data.glamp_inner.replaceAll(',', 'ㆍ'),
                    caravan_inner: response.data.caravan_inner.replaceAll(',', 'ㆍ')
                };
                setCampis(fixedCampingData)
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

    const HandleRotate = () => {
        if (rotate === 0) {
            setRotate(180);
            setRotateText("사진보기")
        } else {
            setRotate(0);
            setRotateText("지도보기")
        }
    }

    return (
        <div className='c-d-page'>
            {campis ? (
                <>
                    <div className='c-d-left'>
                        <div className='d-left-section'>
                            <div className='wrap'>
                                <div className='card' style={{transform: `rotateY(${rotate}deg)`}}>
                                    <div className='d-left-img'><img src={campis.imgurl} alt='사진준비중...'/></div>
                                    <div className='maps'><KaKaoMaps campis={campis}/></div>
                                </div>
                            </div>
                            <div className='d-left-box'>
                                <table>
                                    <tbody>
                                    <tr>
                                        <th>캠핑장명</th>
                                        <td className='d-l-text-name'>{campis.camp_name}</td>
                                    </tr>
                                    <tr>
                                        <th>주소</th>
                                        <td>{campis.addr}</td>
                                    </tr>
                                    <tr>
                                        <th>문의처</th>
                                        <td>{campis.tel}</td>
                                    </tr>
                                    {campis.tag == null || campis.tag === "" ? null :
                                        <tr>
                                            <th>캠핑장 환경</th>
                                            <td>{campis.tag}</td>
                                        </tr>
                                    }
                                    <tr>
                                        <th>캠핑장유형</th>
                                        <td>{campis.induty.join(',')}</td>
                                    </tr>
                                    <tr>
                                        <th>운영기간</th>
                                        <td>{campis.op_season}</td>
                                    </tr>
                                    <tr>
                                        <th>운영일</th>
                                        <td>{campis.op_day}</td>
                                    </tr>
                                    <tr>
                                        <th>홈페이지</th>
                                        <td><Link to={campis.homepage}>홈페이지 바로가기</Link></td>
                                    </tr>
                                    <tr>
                                        <th>주변이용가능시설</th>
                                        <td>{campis.facilities}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='d-left-tap'>
                                <button onClick={() => setTapNum(1)}>상세정보</button>
                                <button onClick={() => setTapNum(2)}>시설정보</button>
                                <button onClick={() => setTapNum(3)}>기타정보</button>
                            </div>
                            <div className='rotate-tap'>
                                <div className='rotate-text'>{rotateText}</div>
                                <div className='rotate-button'>
                                    <input type="checkbox" id="toggle" hidden onClick={HandleRotate}/>
                                    <label htmlFor="toggle" className="toggleSwitch">
                                        <span className="toggleButton"></span>
                                    </label>
                                </div>
                            </div>
                            <div className='d-left-info'>
                                <TapNumberInfo
                                    tapNum={tapNum}
                                    campis={campis}
                                    amenitiesImgUrl={amenitiesImgUrl}
                                />
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    로딩중
                </div>
            )}
        </div>

    );
}

function TapNumberInfo(props) {
    if (props.tapNum === 1) {
        return (
            <div className='d-l-text-info'>
                {props.campis.info == null || props.campis.info === "" ? props.campis.sub_info : props.campis.info}
            </div>
        );
    } else if (props.tapNum === 2) {
        const amenitiesItems = [];

        for (let i = 0; i < props.campis.amenities.length; i++) {
            amenitiesItems.push(
                <li key={i}>{props.amenitiesImgUrl(props.campis.amenities[i])}</li>
            );
        }

        return (
            <div>
                <ul className='detail-icon-box'>
                    {amenitiesItems}
                </ul>
            </div>
        );
    } else if (props.tapNum === 3) {
        const inCaravan = props.campis.induty.includes('카라반');
        const inGlamping = props.campis.induty.includes('글램핑')

        return <div className='facility'>
            <table>
                <tbody>
                <IndutyVisible campis={props.campis}/>
                <BottomVisible campis={props.campis}/>
                {inCaravan && (
                    <tr>
                        <th>카라반 내부시설</th>
                        <td>{props.campis.caravan_inner}</td>
                    </tr>
                )}
                {inGlamping && (
                    <tr>
                        <th>글램핑 내부시설</th>
                        <td>{props.campis.glamp_inner}</td>
                    </tr>
                )}
                <tr>
                    <th>반려동물출입</th>
                    <td>{props.campis.animal}</td>
                </tr>
                <tr>
                    <th>화로대</th>
                    <td>{props.campis.brazier}</td>
                </tr>
                </tbody>
            </table>
        </div>
    }
}

function KaKaoMaps({campis}) {
    return (
        <Map
            center={{lat: campis.mapy, lng: campis.mapx}}
            style={{width: "595px", height: "405px"}}
        >
            <MapMarker position={{lat: campis.mapy, lng: campis.mapx}}>
                <div className='marker-div'>{campis.camp_name}</div>
            </MapMarker>
        </Map>
    )
}

function IndutyVisible({campis}) {
    const {induty, general, car, caravan, glamping} = campis;

    const indutyItems = [];
    if (induty.includes('일반야영장')) {
        indutyItems.push(`일반야영장(${general}면)`);
    }
    if (induty.includes('자동차야영장')) {
        indutyItems.push(`자동차야영장사이트(${car}면)`);
    }
    if (induty.includes('카라반')) {
        indutyItems.push(`카라반(${caravan}면)`);
    }
    if (induty.includes('글램핑')) {
        indutyItems.push(`글램핑(${glamping}면)`);
    }
    return (
        <>
            {indutyItems.length > 0 && (
                <tr>
                    <th>주요시설</th>
                    <td>{indutyItems.join('ㆍ')}</td>
                </tr>
            )}
        </>
    );
}

function BottomVisible({campis}) {
    const {bottom1, bottom2, bottom3, bottom4, bottom5} = campis;

    const bottomItems = [];

    if (bottom1 !== 0 && bottom1 !== "") {
        bottomItems.push(`잔디(${bottom1})`)
    }
    if (bottom2 !== 0 && bottom2 !== "") {
        bottomItems.push(`파쇄석(${bottom2})`)
    }
    if (bottom3 !== 0 && bottom3 !== "") {
        bottomItems.push(`테크(${bottom3})`)
    }
    if (bottom4 !== 0 && bottom4 !== "") {
        bottomItems.push(`자갈(${bottom4})`)
    }
    if (bottom5 !== 0 && bottom5 !== "") {
        bottomItems.push(`맨흙(${bottom5})`)
    }

    return (
        <>
            {bottomItems.length > 0 && (
                <tr>
                    <th>바닥형태 (단위:면)</th>
                    <td>{bottomItems.join('ㆍ')}</td>
                </tr>
            )}
        </>
    );

}

// npm install react-kakao-maps-sdk
// npm install --save-dev @babel/plugin-proposal-private-property-in-object [프론트엔드]

export default Campingdetail;