/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목1, 글제목변경1] = useState(['남자 코트 추천','가쓰오우동', '헐']); 
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  function 제목바꾸기() {
    var newArray = [...글제목1];
    newArray[0] = '여자코트 추천';
    글제목변경1( newArray );
  }

  return ( // return( 1개의 div만 가능 -> div태그 안에 여러개의 div태그를 넣는다.)
    <div className="App">

        <div className="black-nav">
          <div>개발 Blog</div>
        </div>
        <button onClick={ 제목바꾸기 }>버튼</button>
        <div className='list'>
          <h3> { 글제목1[0] }<span onClick={ ()=>{ 따봉변경(따봉 + 1) } }> 👍 </span>{ 따봉 }</h3>
          <p>2월 17일 발행</p>
          <hr />
          <h3> { 글제목1[1] }</h3>
          <p>2월 18일 발행</p>
          <hr />
          <h3> { 글제목1[2] }</h3>
          <p>2월 19일 발행</p>
          <hr />
        </div>

        <Modal />

    </div>
  );
}

function Modal() {
  return (
    <>
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    <div></div>
    </>
  )
}

export default App;
