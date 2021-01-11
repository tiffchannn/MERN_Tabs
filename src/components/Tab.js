import React, {useState} from 'react';

// ctl + opt + arrow --> copy above/below

const Tab = (props) => {
  const {tabsArr} = props;
  // const [list, setList] = useState(tabsArr);
  const [content, setContent] = useState("which tab?")


  //when clicked, will change the text area's info with corresponding button's content
  const handleClick = (index) => {
    // const clickedTab = list[index];
    console.log("clicked tab: ", index)

    setContent(tabsArr[index].content);
    console.log("Which tab did we click?", tabsArr[index].content);
  }

  return(
    <div>
      {tabsArr.map((tab, index) => (
        <div className="tabs">
          <button name="button" key="index" onClick={ () => handleClick(index)}> { tab.label } </button>
        </div>
      ))}
      <div className="content-box">
        <p className="content"> {content} </p>
      </div>
    </div>

);
};

export default Tab;

