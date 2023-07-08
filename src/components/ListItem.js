import React, { useState } from "react";

const ListItem = ({ id, diaryValue, diaryDate, diaryData, setDiaryData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDiaryValue, setEditedDiaryValue] = useState(diaryValue); // Edit 할 때 입력되어 있는 부분
  const [editedDiaryDate, setEditedDiaryDate] = useState(diaryDate);

  console.log("editedDiaryDate", editedDiaryDate);

  // 업데이트 할 때 입력 받는 부분?
  const handleDiaryEditChange = (e) => {
    setEditedDiaryValue(e.target.value);
    setEditedDiaryDate(e.target.value);
  };

  // * Update 기능 (save 클릭했을 때 호출)
  const handleSubmit = (e) => {
    e.preventDefault();

    let newDiaryData = diaryData.map((data) => {
      if (data.id === id) {
        data.diaryValue = editedDiaryValue;
        data.diaryDate = editedDiaryDate;
      }
      return data;
    });
    setDiaryData(newDiaryData);
    localStorage.setItem("diaryData", JSON.stringify(newDiaryData));

    setIsEditing(false);
  };

  // * Delete 기능
  const handleRemove = (id) => {
    let newDiaryData = diaryData.filter((data) => data.id !== id);
    setDiaryData(newDiaryData);
    localStorage.setItem("diaryData", JSON.stringify(newDiaryData));
  };

  // * html 부분
  if (isEditing) {
    /* isEditing이 true 즉, 수정 중인 데이터 */
    return (
      <div className="stateOfEditing">
        <form onSubmit={handleSubmit}>
          <input
            className="editDiaryText"
            value={editedDiaryDate}
            onChange={handleDiaryEditChange}
          />
          <input
            className="editDiaryText"
            value={editedDiaryValue} /* 저장된 텍스트 값 부분 */
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
      <div style={{ display: "flex" }} key={id}>
        {" "}
        {/* 각 리스트들의 고유 key 가 필요함 */}
        <span className="editDate">{diaryDate}</span>
        <span className="editDiary">{diaryValue}</span>
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

export default ListItem;