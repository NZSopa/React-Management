import './App.css';
import React from 'react';
import Customer from './components/Customer'

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '유인석',
    'birthday': '700514',
    'gender': '남자',
    'job': '회사원'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '이선희',
    'birthday': '901222',
    'gender': '여자',
    'job': '주부'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '송민호',
    'birthday': '200729',
    'gender': '남자',
    'job': '대학생'
  },

]

class App extends React.Component {
  render() {
    return (
      <div>
        {
          customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />); })
        }

      </div>
    );
  }

}

export default App;
