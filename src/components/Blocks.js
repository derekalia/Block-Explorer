import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateBlocks, updateSelectedBlock,updateNavTitle } from '../actions';
import { getLastTenBlocks } from '../util/blockQuery';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {ContentTitle, Content} from './style/style'

class Blocks extends React.Component {
  state = {
    selectedBlock: {
      Number: '',
      MiningTime: '',
      Transactions: '',
      Value: '',
      Gas: ''
    }
  };

componentDidMount(){
    this.props.updateNavTitle('Blocks');
}

  getBlockData = async () => {
    const blocks = await getLastTenBlocks();
    this.props.updateBlocks(blocks);
  };

  updateBlockInfo(b) {
    this.props.updateSelectedBlock(b);
    var start = moment();
    var finish = moment.unix(b.timestamp);

    let time = start.diff(finish, 'seconds') + ' seconds ago';

    const weiToEth = 1000000000000000000;
    const value =
      b.transactions.reduce((p, t) => {
        return (p += Number(t.value) / weiToEth);
      }, 0) + ' eth';

    const obj = {
      Number: b.number,
      Transactions: b.transactions.length,
      MiningTime: time,
      Value: value,
      Gas: b.gasUsed
    };
    this.setState({ selectedBlock: obj });
  }

  render() {
    return (
      <Content>
        <ContentTitle>Block Number</ContentTitle>
        <div>
          {this.props.blocks.filteredBlocks.map((b,i) => {
            return (
              <BlockLink 
                to={'/' + b.number}
                key={i}
                onMouseEnter={() => {
                  this.updateBlockInfo(b);
                }}
              >
                <div>{b.number}</div>
              </BlockLink>
            );
          })}
        </div>
        <BlockInfo>
          <BlockInfoTitle>BLOCK INFO</BlockInfoTitle>
          <BlockInfoKey>Number</BlockInfoKey>
          <BlockInfoValue>{this.state.selectedBlock.Number}</BlockInfoValue>
          <BlockInfoKey>Transactions</BlockInfoKey>
          <BlockInfoValue>{this.state.selectedBlock.Transactions}</BlockInfoValue>
          <BlockInfoKey>Mining Time</BlockInfoKey>
          <BlockInfoValue>{this.state.selectedBlock.MiningTime}</BlockInfoValue>
          <BlockInfoKey>Value</BlockInfoKey>
          <BlockInfoValue>{this.state.selectedBlock.Value}</BlockInfoValue>
          <BlockInfoKey>Gas</BlockInfoKey>
          <BlockInfoValue>{this.state.selectedBlock.Gas}</BlockInfoValue>
        </BlockInfo>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    blocks: state.blocks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBlocks: blocks => dispatch(updateBlocks(blocks)),
    updateSelectedBlock: block => dispatch(updateSelectedBlock(block)),
    updateNavTitle: title => dispatch(updateNavTitle(title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);


const BlockLink = styled(Link)`
  margin: 10px;
  margin-left: 0px;
  background-color: white;
  padding: 20px;
  width: 70px;
  display: flex;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 3px;
  text-decoration: none;
  color: black;
  &:hover {
    color: #00cbe6;
  }
`;





const BlockInfo = styled.div`
  position: fixed;
  right: 30px;
  top: 123px;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 100px 240px;
  grid-template-rows: 30px repeat(5, 20px);
`;

const BlockInfoTitle = styled.div`
  grid-column: 1/3;
  font-size: 15px;
  color: rgb(112, 112, 112);
  border-bottom: 1px solid rgb(112, 112, 112);
  align-self: center;
  height: 90%;
`;

const BlockInfoKey = styled.div`
  color: rgb(112, 112, 112);
`;

const BlockInfoValue = styled.div`
  text-align: right;
`;

