import React from 'react';
import ReactDOM from 'react-dom';

// write your Color component here
const Color = ({color, selected, selectColor}) => {
  return (
    <div className={color === selected ? color + ' selected' : color } onClick={()=>selectColor(color)}/>
  )
}

class Picker extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedColor: 'red'
    }
    this.selectColor = this.selectColor.bind(this);
  }

  selectColor (colorName) {
    this.setState({
      selectedColor: colorName
    })
  }

  render() {
    return (
      <div id="container">
        <div id="navbar">
          <div>Currently selected: </div>
          <div className={this.state.selectedColor}>{this.state.selectedColor}</div>
        </div>
        <div id="colors-list">
          <Color color='red' selected = {this.state.selectedColor} selectColor={this.selectColor}/>
          <Color color='orange' selected = {this.state.selectedColor} selectColor={this.selectColor}/>
          <Color color='yellow' selected = {this.state.selectedColor} selectColor={this.selectColor}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);
