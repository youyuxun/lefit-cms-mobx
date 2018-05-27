import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Select } from 'antd'
import 'antd/dist/antd.css';
import { observer, inject } from 'mobx-react'

const { Option } = Select

@inject('appStore')
@observer
class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount () {
    this.props.appStore.getData()
  }

  render() {
    const { appStore: { list } } = this.props
    console.log(list)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Select style={{ width: 150 }}>
          {list.map(item => <Option key={item.city_id} value={item.city_id}>{item.city_name}</Option>)}
        </Select>
      </div>
    );
  }
}

export default App;
