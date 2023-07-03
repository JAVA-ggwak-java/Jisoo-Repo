import React, { useState } from "react";

const List = ({
  id,
  diaryValue,
  dateValue,
  diaryData,
  setDiaryData,
  dateData,
  setDateData,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDiaryValue, setEditedDiaryValue] = useState(diaryValue);
  const [editedDateValue, setEditedDateValue] = useState(dateValue);

  // 업데이트 할 때 입력 받는 부분?
  const handleDiaryEditChange = (e) => {
    setEditedDiaryValue(e.target.diaryText);
  };
  const handleDateEditChange = (e) => {
    setEditedDateValue(e.target.dateText); //e.target.value?
  };
  
  // * Update 기능
  const handleSubmit = (e) => {
    e.preventDefault();

    let newDiaryData = diaryData.map((data) => {
      if (data.id === id) {
        data.diaryValue = editedDiaryValue;
      }
      return data;
    });
    setDiaryData(newDiaryData);
    localStorage.setItem("diaryData", JSON.stringify(newDiaryData));

    let newDateData = dateData.map((data) => {
      if (data.id === id) {
        data.dateValue = editedDateValue;
      }
      return data;
    });
    setDateData(newDateData);
    localStorage.setItem("dateData", JSON.stringify(newDateData));

    setIsEditing(false);
  };

  // * Delete 기능
  const handleRemove = (id) => {
    let newDiaryData = diaryData.filter((data) => data.id !== id);
    setDiaryData(newDiaryData);
    localStorage.setItem("diaryData", JSON.stringify(newDiaryData));

    let newDateData = dateData.filter((data) => data.id !== id);
    setDateData(newDateData);
    localStorage.setItem("dateData", JSON.stringify(newDateData));
  };

  // * html 부분
  if (isEditing) {
    /* isEditing이 true 즉, 수정 중인 데이터 */
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="editDateText"
            value={editedDateValue}
            onChange={handleDateEditChange}
          />
          <input
            className="editDiaryText"
            value={editedDiaryValue}
            onChange={handleDiaryEditChange}
            autoFocus /* 웹 페이지를 열었을 때 해당 요소에 자동으로 커서가 위치하여 사용자가 바로 입력을 시작할 수 있게 함 */
          />
        </form>

        <div className="isEditingButtons">
          <button onClick={() => setIsEditing(false)} type="button">
            X
          </button>
          <button onClick={handleSubmit} type="submit">
            Save
          </button>
        </div>
      </div>
    );
  } else {
    /* isEditing이 false 즉, 작성이 완료된 데이터 */
    return (
      <div>
        <span className="editedDate">
            {dateValue}
        </span>
        <span className="editedDiary">
            {diaryValue}
        </span>

        <div className="isEditedButtons">
          <button onClick={() => handleRemove(id)} className="removeButton">
            X
          </button>
          <button onClick={() => setIsEditing(true)} className="editButton">
            Edit
          </button>
        </div>
      </div>
    );
  }
};

export default List;
