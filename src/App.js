import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabHeader from './components/TabHeader';
import { useState } from 'react';

function App() {
  const [tabs, setTabs] = useState ([
    {
      selected: true,
      title: "The first tab",
      content: "The first tab's content"
    },
    {
      selected: false,
      title: "The second tab",
      content: "The second tab's content"
    },
    {
      selected: true,
      title: "The third tab",
      content: "The third tab's content"
    }
  ])

  const handleClick = (clickedIndex) => {
    console.log("You've clicked tab # ${clickedIndex}");
    // set tabs
    // include all the tabs before the index of the clicked one, set to false
    // include tab we clicked on set to true
    // include all the tabs after the one we clicked on, set to false
    tabs.map((tab, i) => {
      let t = tab;
      if (clickedIndex === i){
        t.selected = true;
      }
      else{
        t.selected = false;
      }

      setTabs([...tabs.slice(0,i),
      t,
    ].concat(tabs.slice(i+1)))
    })
  }

    return (
      <div className="App">
        {
          tabs.map((tab, i) => {
            return <TabHeader selected={tab.selected} index={i} title={tab.title}handleClick={handleClick}/>
          })
        }

        {
          tabs.map((tab, i) => {
            if(tab.selected){
              return <p>{tab.content}</p>
            }
          })
        }

      </div>
    );
}

export default App;
