// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Tab from './components/Tab';

// have 3 tabs - each has a label and content
// when button is clicked, display in content box which tab was clicked

function App() {

  // each element in tabs array is an object with label and content

  const tabsArr = [
    {
      label: "Tab 1",
      content: "This is content from Tab 1"},
    {
      label: "Tab 2",
      content: "This is content from Tab 2"
    },
    {
      label: "Tab 3",
      content: "This is content from Tab 3"
    }
  ];

  // add new tab info into the tabs array
  // const addTabInfo = (tab) => {
  //   setTabsInfo([...tabsInfo, tab])
  // }

  return (
    <div className="App">
      <h1> Tabs React App</h1>
      <Tab tabsArr={tabsArr}/>
    </div>

  );
}

export default App;

// MOVED FROM BELOW H1 TAG --
// <>
// { props.tabsArr.map( (item, index) => {
//     <button name="button1" onClick={ (e) => handleClick(e, item)}> { item.label } </button>
//     <textarea value={ props.content }></textarea>
// })};
// </>

{/* <Tab addTabInfo={addTabInfo} tabsArr={tabsArr} /> */}