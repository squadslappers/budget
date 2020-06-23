import React, {useState} from 'react';
import Header from '../Header/Header';
import ListItem from '../ListItem/BudgetList';

const Budget = (props) => {

  const [showPennies, togglePennies] = useState(false);

  return(
    <div id='obligatory-div'>

      <Header
        title="BUDGET"
      />

      <div id='everything-but-the-header'>

        <div id='top-stuff'>

          <div id='budget-white-bar'>
            <span>ALLOCATED</span>
            <span>NAME 
              <span className='white'>---</span>
            </span>
            <span>BALANCE</span>
          </div>

          <div id='list'>

            <ListItem
              pennies={showPennies}
              penniesFN={togglePennies}
              allocated={50}
              name={'HOUSE'}
              balance={40}/>
            <ListItem
              pennies={showPennies}
              penniesFN={togglePennies}
              allocated={50}
              name={'CAR'}
              balance={400}/>
            <ListItem
              pennies={showPennies}
              penniesFN={togglePennies}
              allocated={50}
              name={'CLOTHES'}
              balance={40}/>
            <ListItem
              pennies={showPennies}
              penniesFN={togglePennies}
              allocated={50}
              name={'ENTERTAINMENT'}
              balance={40}/>
            <ListItem
              pennies={showPennies}
              penniesFN={togglePennies}
              allocated={50}
              name={'EATING OUT'}
              balance={40}
              id={0}/>

          </div>

        </div>

        <div className='button-container'>
          <button>EDIT</button>
        </div>

      </div>

    </div>
  )
}

export default Budget;