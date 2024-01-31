import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: "John S.", salary: "800", increase: true, id: 1},
        {name: "Alex M.", salary: "3000", increase: false, id: 2},
        {name: "Carl R.", salary: "5000", increase: false, id: 4},
        {name: "Mykyta P.", salary: "900", increase: true, id: 3},
        {name: "Anastasia K.", salary: "650", increase: true, id: 5},
        {name: "Ivan T.", salary: "600", increase: false, id: 6},
      ]
    }
    this.maxId = 7;
  }
  
  deleteItem = (id) => {
    this.setState(({data}) => {      
      return {
        data: data.filter(item => item.id !== id)
      } 
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }


  render() {
    return (
      <div className="app">
        <AppInfo/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployeesList 
          data={this.state.data} 
          onDelete={this.deleteItem} 
        />
        <EmployeesAddForm 
          onAdd={this.addItem}
        />
      </div>
    );
  }
}

export default App;