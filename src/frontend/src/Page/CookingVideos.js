// CookingVideos.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Youtube.css"; // 외부 CSS 파일 또는 스타일링을 위한 모듈 import

function CookingVideos() {
    const [cookingVideos, setCookingVideos] = useState([]);
    const apiKey = 'AIzaSyDOvWqy2w9fgR-o1kR0Pwq_UvUTpC4Ud4w';
    const cookingQuery = '캠핑 요리';
    const maxResults = 10;

    useEffect(() => {
        const cookingApiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${cookingQuery}&type=video&maxResults=${maxResults}`;

        axios.get(cookingApiUrl)
            .then(response => {
                // 요리 레시피 관련 비디오 데이터 처리
                console.log('요리 레시피 관련 비디오:', response.data);
                setCookingVideos(response.data.items); // 받아온 요리 레시피 비디오 목록을 상태에 저장
            })
            .catch(error => {
                console.error('요리 레시피 관련 API 호출 중 오류 발생:', error);
            });
    }, []); // []를 빈 배열로 전달하여 컴포넌트가 마운트될 때 한 번만 호출되도록 설정

    return (
        <div className="video-category">
            <h2>Camping Recipes</h2>
            <ul className="video-list">
                {cookingVideos.map(video => (
                    <li key={video.id.videoId} className="video-item">
                        <a
                            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="video-link"
                        >
                            <img
                                src={video.snippet.thumbnails.default.url}
                                alt={video.snippet.title}
                                className="video-thumbnail"
                            />
                            <div className="video-info">
                                <h3 className="video-title">{video.snippet.title}</h3>
                                <p className="video-description">{video.snippet.description}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CookingVideos;
