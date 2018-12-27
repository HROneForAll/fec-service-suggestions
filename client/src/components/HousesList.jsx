import React from 'react';
import House from './House.jsx';

class HousesList extends React.Component {
  constructor(props) {
    super(props);
  }
  toggle() {
    this.props.toggle();
  }
  render() {
    return (
      <div>
        <div className="HousesList">
          {this.props.state.houses[0].suggestions.slice(0, 4).map((house, index) => 
            <House house={house} key={index}/>
          )}
        </div>
        {this.props.state.moreRevealed ? 
          <div>
            <div className="HousesList">{this.props.state.houses[0].suggestions.slice(4, 8).map((house, index) => 
              <House house={house} key={index}/>)}
            </div>
            <div className="HousesList">{this.props.state.houses[0].suggestions.slice(8, 12).map((house, index) => 
              <House house={house} key={index}/>)}
            </div>
          </div>
          : 
          <a href="#" id="displayMore" className="verified" onClick={this.toggle.bind(this)}>Show more homes</a>
        }
      </div>
    );
  }
}

export default HousesList;