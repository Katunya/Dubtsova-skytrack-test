import React, {Component} from 'react'
import {Container} from 'react-bootstrap';
import {deleteImg} from '../../actions';
import connect from 'react-redux/lib/connect/connect';


export class HistoryPage extends Component {

  onDeleteItem = (id) => {
    this.props.dispatch(deleteImg(id))
  };

  render() {
    return (
      <Container>
        <div className="row-custom-align">
          {this.props.history.map(({id, image, title, timeLoad}) =>
            <div key={id} className="card mb-3">
              <h5 className="card-title">{title}</h5>
              <h6 className="card-subtitle text-muted">{timeLoad.toLocaleString("ru")}</h6>
              <img key={id} src={image} title={title}/>
              <button className="image__button" onClick={() => this.onDeleteItem(id)}>Удалить</button>
            </div>
          )}
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
  }
};

export default connect(mapStateToProps)(HistoryPage);

