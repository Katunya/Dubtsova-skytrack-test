import React, {Component} from 'react'
import {Container} from "react-bootstrap";
import {requestImg} from "../../actions";
import connect from "react-redux/lib/connect/connect";


export class HistoryPage extends Component{

  itemPhoto = this.props.history.map(({ image, title }) => {
    return (
      <div>
            {title}
        <img src={image} title={title} />
      </div>
    )});

  render () {
    console.log(this.props.history)
    return(
      <Container>
        {this.itemPhoto}
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

