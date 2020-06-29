import React, {Component} from 'react'
import {Container} from 'react-bootstrap';
import {deleteImg} from '../../actions';
import connect from 'react-redux/lib/connect/connect';
import {ImageView} from "../../components/image-view/image-view";
import {Paginator} from "../../components/paginator/paginator";


export class HistoryPage extends Component {

   onDeleteItem = (id) => {
    this.props.dispatch(deleteImg(id))
  };

  render() {

    return (
      <Container>
        <div className="row-custom-align">
          <ImageView  history={this.props.history}
                      onDeleteItem = {this.onDeleteItem}/>
        </div>
        <div>
          <Paginator arrayImage = {this.props.history.length}
                     displayImage = {this.props.displayImage}
                     paginate = { this.props.history}
          />
        </div>
      </Container>
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading,
    current: state.current,
    history: state.history,
    displayImage: state.displayImage,
    currentPage: state.currentPage
  }
};

export default connect(mapStateToProps)(HistoryPage);

