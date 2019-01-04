import React from 'react';
import House from './House.jsx';
import { HousingList, Header, ShowMoreHomes } from './Styled_Components/styling.jsx';


class HousesList extends React.Component {
  constructor(props) {
    super(props);
  }
  toggleMoreHomes() {
    this.props.toggleHomes();
  }
  render() {
    return (
      <div>
        <HousingList>
          {this.props.state.houses[0].suggestions.slice(0, 4).map((house, index) => 
            <House 
              house={house} 
              key={index}
              state={this.props.state}
              toggleCreateList={this.props.toggleCreateList}
              addFavoriteList={this.props.addFavoriteList}
              favoriteHome = {this.props.favoriteHome}
            />
          )}
        </HousingList>
        {this.props.state.moreRevealed 
          ? <div>
            <HousingList>{this.props.state.houses[0].suggestions.slice(4, 8).map((house, index) => 
              <House 
                house={house} 
                key={index}
                state={this.props.state}
                toggleModal={this.props.toggleModal}
                toggleCreateList={this.props.toggleCreateList}
                addFavoriteList={this.props.addFavoriteList}
              />)}
            </HousingList>
            <HousingList>{this.props.state.houses[0].suggestions.slice(8, 12).map((house, index) => 
              <House 
                house={house} 
                key={index}
                state={this.props.state}
                toggleModal={this.props.toggleModal}
                toggleCreateList={this.props.toggleCreateList}
                addFavoriteList={this.props.addFavoriteList}
              />)}
            </HousingList>
          </div>
          : 
          <ShowMoreHomes onClick={this.toggleMoreHomes.bind(this)}>Show more homes</ShowMoreHomes>
        }
      </div>
    );
  }
}

export default HousesList;