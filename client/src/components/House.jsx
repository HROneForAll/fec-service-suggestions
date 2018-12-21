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
            <img id='roomPic' src={this.props.house.houseImg}/>
          </div>
          <div className='verified'>
            {this.props.house.houseBeds}
          </div>
          <div>
            <strong>{this.props.house.houseName}</strong>
          </div>
          <div>
            {this.props.house.housePrice}
          </div>
          <div>
            {this.props.house.houseStars} {this.props.house.reviewCount}
          </div>
        </div>
      </a>
    );
  }
}

export default House;

