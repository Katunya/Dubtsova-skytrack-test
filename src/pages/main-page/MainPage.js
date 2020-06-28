import React, {Component} from 'react'
import { Container } from 'react-bootstrap'
import {requestImg, requestImgSuccess} from "../../actions";
import connect from "react-redux/lib/connect/connect";
import ApiService from "../../api/api-services";

export class MainPage extends Component{

  apiService = new ApiService();

  componentDidMount() {
    this.updateImage();
  }

  onLoadedImage = ({ id, image, title }) => {
    this.props.dispatch(requestImgSuccess({ id, image, title }));
  };

  updateImage = () => {
    console.log('update');
    this.props.dispatch(requestImg());
    this.apiService
      .getResource()
      .then( (data) => ({ id: data.data.id, image: data.data.images.original.url, title: data.data.title}))
      .then(this.onLoadedImage)
};

  render () {
    return(
      <Container>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary d-block mx-auto"
            onClick={this.updateImage}> Загрузить картинку </button>
          <img className='img-thumbnail' src={this.props.current.image} title={this.props.current.title} alt="Random GIF"/>
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
