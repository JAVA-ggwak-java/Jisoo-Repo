import React from "react";

export default function Form({
  handleSubmitDiary,
  diaryText,
  setDiaryText
}) {
  const handleDiaryChange = (e) => {
    setDiaryText(e.target.value);
  };


  // * html 부분
  return (
    <form className="dataInputField" onSubmit={handleSubmitDiary}>
      <input
        type="text"
        name="diaryInput"
        className="dairyDataInput"
        placeholder="한 줄 일기를 작성하세요."
        value={diaryText}
        onChange={handleDiaryChange}
      />
      <input type="submit" value="입력" className="dataInputButton" />
    </form>
  );
}
