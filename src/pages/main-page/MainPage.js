import React, {Component} from 'react'
import { Container } from 'react-bootstrap'
import { fetchImg } from "../../actions";
import connect from "react-redux/lib/connect/connect";
import ApiService from "../../api/api-services";

export class MainPage extends Component{

  apiService = new ApiService();

  state = {
    image: '',
    loading: true
  };

  componentDidMount() {
    this.updateImage();
  }

  onLoadedImage = (image) => {
    this.setState({
      image,
      loading: false
    });
  };

  updateImage = () => {
    console.log('update');
    this.apiService
      .getResource()
      .then(data => data.data.images.original.url)
      .then(this.onLoadedImage)
};

  render () {
    console.log(this.props)
    return(
      <Container>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary d-block mx-auto"
            onClick={this.updateImage}>Загрузить картинку</button>
          <img className='img-thumbnail' src={this.state.image} alt="Random GIF"/>
        </div>

      </Container>
    )
  }
}

function mapStateToProps (state, ownProps) {
  // console.log(state);
  // console.log(ownProps);
  return {
    loading : state.loading
  }
}

export default connect(mapStateToProps)(MainPage);
