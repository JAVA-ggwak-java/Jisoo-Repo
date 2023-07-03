import "./App.css";
import { useState } from "react";
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
  const [dateData, setDateData] = useState(initialDateData);

  // 일기 추가가 안 되는데 문제가 뭔지 모르겠음. id 문제인가?
  // * Create 기능
  const handleSubmitDiary = (e) => {
    
    e.preventDefault();
    console.log(e.dateValue)
    console.log(e.diaryValue)
    
    // 새로운 일기 데이터, 날짜 데이터
    let newDiary = {
      id: Date.now(),
      date: 
      diaryValue: diaryText,
    };

    // 기존 일기에 새로운 일기, 날짜 추가
    setDiaryData((prev) => [...prev, newDiary]);
    localStorage.setItem("diaryData", JSON.stringify([newDiary, ...diaryData]));

    // 입력란에 있던 글씨 지워주기
    setDiaryText("");
  };


  // * html 부분
  return (
    <div>
      <div>
        <h1>한 줄 일기</h1>
      </div>
      <div>
        <Form
          handleSubmitDiary={handleSubmitDiary}
          diaryText={diaryText}
          setDiaryText={setDiaryText}
        />
        <List
          // diaryValue={diaryValue}
          // dateValue={dateValue}
          diaryData={diaryData}
          setDiaryData={setDiaryData}
          dateData={dateData}
          setDateData={setDateData}
        />
      </div>
    </div>
  );
}

export default App;
