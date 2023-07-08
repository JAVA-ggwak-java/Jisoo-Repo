import React from "react";
import ListItem from "./ListItem";

const List = ({ diaryData, setDiaryData }) => {
  return (
    <div className="listItems">
      <div style={{ display: "flex" }}>
        <div>
          {diaryData.map((data) => (
            <ListItem
              key={data.key}
              id={data.id}
              diaryValue={data.diaryValue}
              diaryDate={data.diaryDate}
              diaryData={diaryData}
              setDiaryData={setDiaryData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
