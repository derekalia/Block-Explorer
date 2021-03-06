import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getBlock } from '../util/blockQuery';
import { updateSelectedBlock, updateSelectedTrans, updateNavTitle } from '../actions';
import { Link } from 'react-router-dom';
import { ContentTitle, Content, BlockStyle } from './style/style';

class Block extends React.Component {
  componentDidMount = async () => {
    this.props.updateNavTitle('Block');

    if (Object.keys(this.props.blocks.selectedBlock).length < 1) {
      const blockInfo = await getBlock(this.props.match.params.block);
      this.props.updateSelectedBlock(blockInfo);
    }
  };

  render() {    
    const {
      number,
      gasUsed,
      hash,
      parentHash,
      size,
      stateRoot,
      timestamp,
      totalDifficulty
    } = this.props.blocks.selectedBlock;
    return (
      <Content>
        <ContentTitle>Block Data</ContentTitle>
        <BlockStyle>
          Number
          <div>{number}</div>
          Gas Used
          <div>{gasUsed}</div>
          Hash
          <div>{hash}</div>
          Parent Hash
          <div>{parentHash}</div>
          Size
          <div>{size}</div>
          State Root
          <div>{stateRoot}</div>
          Timestamp
          <div>{timestamp}</div>
          Total Difficulty
          <div>{totalDifficulty}</div>
        </BlockStyle>
        <ContentTitle>Transactions</ContentTitle>
        {this.props.blocks.selectedBlock.transactions &&
          this.props.blocks.selectedBlock.transactions.map((t,i) => {
            return (
              <div key={i}>
                <TransTitle
                  onClick={() => {
                    this.props.updateSelectedTrans(t);
                  }}
                  to={`/${this.props.match.params.block}/${t.hash}`}
                >
                  {t.hash}
                </TransTitle>
                <BlockStyle>
                  <div>Hash</div>
                  <div>{t.hash}</div>
                  <div>To</div>
                  <div>{t.to}</div>
                  <div>From</div>
                  <div>{t.from}</div>
                  <div>Value</div>
                  <div>{t.value}</div>
                  <div>Gas</div>
                  <div>{t.gas}</div>
                </BlockStyle>
              </div>
            );
          })}

        <div />
        <div />
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
    updateSelectedBlock: block => dispatch(updateSelectedBlock(block)),
    updateSelectedTrans: trans => dispatch(updateSelectedTrans(trans)),
    updateNavTitle: title => dispatch(updateNavTitle(title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Block);

const TransTitle = styled(Link)`
  text-decoration: none;
  color: #01b8e6;
  &:hover {
    color: black;
  }
`;
