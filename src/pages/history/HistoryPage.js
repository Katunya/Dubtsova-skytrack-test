import React, {Component} from 'react'
import {Container} from "react-bootstrap";
import {requestImg} from "../../actions";
import connect from "react-redux/lib/connect/connect";


export class HistoryPage extends Component{

  itemPhoto = this.props.history.map(({ image, title }) => {
    return (
      <div className='card mb-3'>
        {title}
        <img src={image} title={title} />
      </div>
    )});

  render () {
    console.log(this.props.history)
    return(
      <Container>
        <div className='row-custom-align'>
          {this.itemPhoto}
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading,
    current: state.current,
    history: state.history
  }
};


export default connect(mapStateToProps)(HistoryPage);

