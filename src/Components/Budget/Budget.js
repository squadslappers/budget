import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import Context from '../../Context/Context';

import Header from '../Header';
import ListItem from './ListItem';

const Budget = (props) => {

  const [showPennies, togglePennies] = useState(true);

  const context = useContext(Context);

  return(<div id='obligatory-div'>

    <Header title="BUDGET"
    leftClick={()=>props.history.push('/history')}
    rightClick={()=>props.history.push('/transaction')}/>

    <div id='everything-but-the-header'>

      <div id='top-stuff'>

        <div className='white-bar'>
          <span className='white-bar__small'>ALLOCATED</span>
          <span className=' white-bar__small middle'>NAME</span>
          <span className=' white-bar__small right'>BALANCE</span>
        </div>

        <div className='list'>
          {context.categories && context.categories.length > 0
              ? context.categories
              // .filter((a,b) => {
              //   let types = {
              //     '!%':4,
              //     'O':3,
              //     '$':2,
              //     '%':1
              //   }
              //   console.log('a:',a,'b:',b)
              //   return ( b-types[a.type] - 1)
              // })
              .map(category =>
                <ListItem
                penniesFN={()=>togglePennies(showPennies ? false : true)}
                pennies={showPennies}
                name={category.name}
                  type={category.type}
                  allocated={category.allocated}
                  balance={category.balance}
                  key={category.id}
                />
                )
              : <span className='budget__no-categories'>You don't have any categories yet... Click "EDIT" to start budgeting.</span>}
        </div>

      </div>

      <div className='button-container'>
        <Link to='/edit-budget'>
          <button>EDIT</button>
        </Link>
      </div>

    </div>

  </div>)
}

export default Budget;
