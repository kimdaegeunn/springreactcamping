import './App.css';
import React, {useContext} from "react";
import {Link, Route, Routes} from "react-router-dom";

import './css/reset.css'
import './css/style.css'

import Campinglist from "./Page/Campinglist";
import Campingdetail from "./Page/Campingdetail";
import Main from "./Page/Main";
import {AuthContext} from "./board/context/AuthProvider";
import BbsList from "./board/bbs/BbsList";
import BbsWrite from "./board/bbs/BbsWrite";
import BbsDetail from "./board/bbs/BbsDetail";
import BbsUpdate from "./board/bbs/BbsUpdate";
import BbsAnswer from "./board/bbs/BbsAnswer";
import Login from "./board/member/Login";
import Join from "./board/member/Join";
import CheckPwd from "./board/member/CheckPwd";
import MemberUpdate from "./board/member/MemberUpdate";
import Logout from "./board/member/Logout";
import CampingVideos from "./Page/CampingVideos";
import CookingVideos from "./Page/CookingVideos";
function App() {
    const { auth, setAuth } = useContext(AuthContext);

  return (
      <div className="App">
          <div className="nav">
              <ul>
                  <li><Link to="/">HOME</Link></li>
                  <li><Link to="/Campinglist">CAMPINGLIST</Link></li>
                  <li><Link to="/CampingTips">TIP's</Link></li>
                  <li><Link to="/CampingRecipe">RECIPES</Link></li>
                  <li><Link to="/bbslist">BOARD</Link></li>
                  {auth ? (
                      <>
                          {/* 회원 정보 */}
                          <li className="nav-item">
                              <Link className="nav-link" to="/checkpwd">
                                  <i className="fas fa-sign-out-alt"></i> {auth} 님 반갑습니다 <i
                                  className="fab fa-ello"></i>{" "} &nbsp;{" "}
                              </Link>
                          </li>

                          {/* 로그아웃 */}
                          <li className="nav-item">
                              <Link className="nav-link" to="/logout">
                                  <i className="fas fa-sign-out-alt"></i> 로그아웃
                              </Link>
                          </li>
                      </>
                  ) : (
                      <>
                          {/* 로그인 */}
                          <li className="nav-item">
                              <Link className="nav-link" to="/login">
                                  로그인
                              </Link>
                          </li>

                          {/* 회원가입 */}
                          <li className="nav-item">
                              <Link className="nav-link" to="/join">
                                  회원가입
                              </Link>
                          </li>
                      </>
                  )}

              </ul>
          </div>

          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/Campinglist" element={<Campinglist/>}/>
              <Route path="/Campingdetail/:id" element={<Campingdetail/>}/>

              <Route path="/CampingTips" element={<CampingVideos/>}/>
              <Route path="/CampingRecipe" element={<CookingVideos/>}/>


              <Route path="/bbslist" element={<BbsList/>}></Route>
              <Route path="/bbswrite" element={<BbsWrite/>}></Route>
              <Route path="/bbsdetail/:boardId" element={<BbsDetail/>}></Route>
              <Route path="/bbsupdate" element={<BbsUpdate/>}></Route>
              <Route path="/bbsanswer/:parentSeq" element={<BbsAnswer/>}></Route>

              <Route path="/login" element={<Login/>}></Route>
              <Route path="/join" element={<Join/>}></Route>
              <Route path="/checkpwd" element={<CheckPwd/>}></Route>
              <Route path="/update" element={<MemberUpdate/>}></Route>
              <Route path="/logout" element={<Logout/>}></Route>
          </Routes>

          <div className="footer-box">

              <div className="footer__right">
                  2023-12-21 ~ 2024-06-26 <br/>codelab akademy
              </div>

          </div>
      </div>
  );
}

export default App;
