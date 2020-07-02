import React, {Component} from 'react'
import {Container} from 'react-bootstrap'
import { getAsyncImg} from '../../actions';
import connect from 'react-redux/lib/connect/connect';

import Spinner from '../../components/spinner';

export class MainPage extends Component {


  componentDidMount() {
    this.props.dispatch(getAsyncImg());
  }


  updateImage = () => {
    this.props.dispatch(getAsyncImg());
  };

  render() {
    return (
      <Container>
        <div className="text-center">
          <button type="button" className="btn btn-primary d-block mx-auto" onClick={this.updateImage}> Загрузить картинку</button>
          {this.props.loading
            ? <Spinner/>
            :
            <img className="img-thumbnail" src={this.props.current.image} title={this.props.current.title} alt="Random GIF"/>}
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

export default connect(mapStateToProps)(MainPage);
