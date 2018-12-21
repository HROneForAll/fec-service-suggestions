import React from 'react';

class House extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a href='#' id='info'>
        <div>
          <div className='img_container'>
            <img id='roomPic' src={this.props.house.suggestions.houseImg}/>
          </div>
          <div className='verified'>
            <img src="plus.png"/>
            {this.props.house.suggestions.houseBeds}
          </div>
          <div>
            <strong>{this.props.house.suggestions.houseName}</strong>
          </div>
          <div>
            {this.props.house.suggestions.housePrice}
          </div>
          <div>
            <img src="/stars.png"/> {this.props.house.suggestions.reviewCount}
          </div>
        </div>
      </a>
    );
  }
}

export default House;

