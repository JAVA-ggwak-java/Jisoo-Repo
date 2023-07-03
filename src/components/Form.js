import React from "react";

export default function Form({
  handleSubmitDiary,
  diaryText,
  dateText,
  setDiaryText,
  setDateText,
}) {
  const handleDiaryChange = (e) => {
    setDiaryText(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateText(e.target.value);
  };

  // * html 부분
  return (
    <form 
    className="dataInputField" 
    onSubmit={handleSubmitDiary}>
      <input
        type="text"
        name="dateInput"
        className="dateDataInput"
        placeholder="xxxx-xx-xx"
        value={dateText}
        onChange={handleDateChange}
      />
      <input
        type="text"
        name="diaryInput"
        className="dairyDataInput"
        placeholder="한 줄 일기를 작성하세요."
        value={diaryText}
        onChange={handleDiaryChange}
      />
      <input type="submit" value="입력" className="dataInputButton" 
      />
    </form>
  );
}
