import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const initialDiaryData = localStorage.getItem("diaryData")
  ? JSON.parse(localStorage.getItem("diaryData"))
  : [];

// JSON.parse() 함수는 JSON 형식의 문자열을 JavaScript 객체로 변환
// 일반적으로 아래와 같은 방식으로 JSON.stringify(), JSON.parse() 사용
// JSON.stringify()로 JavaScript 객체나 값을 JSON 형식의 문자열로 변환 -> 로컬 스토리지에 저장 -> 이후에 해당 데이터를 다시 사용할 때 JSON.parse()로 JSON 형식의 문자열을 다시 JavaScript 객체나 값으로 변환

function App() {
  const [diaryData, setDiaryData] = useState(initialDiaryData);
  const [diaryText, setDiaryText] = useState("");
  const [diaryDate, setDiaryDate] = useState("");


  // * Create 기능
  const handleSubmitDiary = (e) => {
    e.preventDefault();

    // 새로운 일기 데이터, 날짜 데이터
    let newDiary = {
      id: Date.now(),
      diaryValue: diaryText,
      diaryDate: diaryDate
    };

    // 기존 일기에 새로운 일기, 날짜 추가
    setDiaryData((prev) => [newDiary, ...prev]);
    localStorage.setItem("diaryData", JSON.stringify([newDiary, ...diaryData]));

    // 입력란에 있던 글씨 지워주기
    setDiaryText("");
    setDiaryDate("");
  };

  // 전체 삭제
  const handleRemoveAll = () => {
    setDiaryData([]);
    localStorage.setItem("diaryData", JSON.stringify([]));
  };

  // * html 부분
  return (
    <div>
      <div>
        <h1>한 줄 일기</h1>
        <button onClick={handleRemoveAll}>Delete All</button>
      </div>
      <div>
        <Form
          handleSubmitDiary={handleSubmitDiary}
          diaryText={diaryText}
          setDiaryText={setDiaryText}
          diaryDate={diaryDate}
          setDiaryDate={setDiaryDate}
        />
        <List
          diaryText={diaryText}
          diaryData={diaryData}
          setDiaryData={setDiaryData}
        />
      </div>
    </div>
  );
}

export default App;
