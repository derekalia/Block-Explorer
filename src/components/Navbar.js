import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateBlocks } from '../actions';
import { getLastTenBlocks } from '../util/blockQuery';


class Navbar extends React.Component {
  state = { text: 'Start' };

  getBlockData = async () => {
    this.setState({ text: 'Loading' });
    const blocks = await getLastTenBlocks();
    this.props.updateBlocks(blocks);
    this.setState({ text: 'Refresh' });
  };

  render() {
    return (
      <NavGrid>
        <NavTitle>{this.props.title}</NavTitle>
        <NavButton status={this.state.text} onClick={() => this.getBlockData()}>
          {this.state.text}
        </NavButton>
      </NavGrid>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.navbar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBlocks: blocks => dispatch(updateBlocks(blocks))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

const NavGrid = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
  padding-left: 30px;
  padding-right: 30px;
  border-bottom: 1px solid #eaeaea;
`;

const NavTitle = styled.div`
  font-size: 24px;
  align-self: center;
  font-weight: 200;
`;

const NavButton = styled.button`
  height: 41px;
  width: 90px;
  align-self: center;
  justify-self: center;
  background: rgb(2, 181, 230);
  background: linear-gradient(118deg, rgba(2, 181, 230, 1) 0%, rgba(0, 239, 224, 1) 100%);
  border-radius: 4px;
  color: white;
  border: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  outline: none;
  cursor: pointer;
  &:hover {
    background: linear-gradient(228deg, rgba(253, 29, 29, 1) 0%, rgba(252, 176, 69, 1) 100%);
  }
`;
