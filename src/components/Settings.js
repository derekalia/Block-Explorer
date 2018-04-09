import React from 'react';
import { connect } from 'react-redux';
import { updateNavTitle } from '../actions';

class Setting extends React.Component {
  componentDidMount() {
    this.props.updateNavTitle('Settings');
  }
  render() {
    return <div>Coming Soon</div>;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateNavTitle: title => dispatch(updateNavTitle(title))
  };
};

export default connect(null, mapDispatchToProps)(Setting);
