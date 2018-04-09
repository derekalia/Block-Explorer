import React from 'react';
import { updateSelectedTrans, updateNavTitle } from '../actions';
import { getTransactionFromHash } from '../util/blockQuery';
import { connect } from 'react-redux';
import { BlockStyle, Content, ContentTitle } from './style/style';

class Transaction extends React.Component {
  async componentDidMount() {
    this.props.updateNavTitle('Transactions');

    if (Object.keys(this.props.blocks.selectedTrans).length < 1) {
      const TransInfo = await getTransactionFromHash(this.props.match.params.transaction);
      this.props.updateSelectedTrans(TransInfo);
    }
  }
  render() {
    return (
      <Content>
        <ContentTitle>Transaction</ContentTitle>
        <div>
          <BlockStyle>
            <div>Hash:</div>
            <div>{this.props.blocks.selectedTrans.hash}</div>
            <div>To</div>
            <div>{this.props.blocks.selectedTrans.to}</div>
            <div>From</div>
            <div>{this.props.blocks.selectedTrans.from}</div>
            <div>Value</div>
            <div>{this.props.blocks.selectedTrans.value}</div>
            <div>Gas</div>
            <div>{this.props.blocks.selectedTrans.gas}</div>
            <div>Gas Price</div>
            <div>{this.props.blocks.selectedTrans.gasPrice}</div>
            <div>BlockNumber</div>
            <div>{this.props.blocks.selectedTrans.blockNumber}</div>
            <div>Nonce</div>
            <div>{this.props.blocks.selectedTrans.nonce}</div>
            <div>Transransaction Index</div>
            <div>{this.props.blocks.selectedTrans.transactionIndex}</div>
          </BlockStyle>
        </div>
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
    updateSelectedTrans: block => dispatch(updateSelectedTrans(block)),
    updateNavTitle: block => dispatch(updateNavTitle(block))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
