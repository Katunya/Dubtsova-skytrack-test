import React, {Component} from 'react'
import { Container } from 'react-bootstrap'

export default class MainPage extends Component{
  render () {
    return(
        <Container>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary d-block mx-auto">
              Загрузить картинку
            </button >
          </div>
        </Container>
    )
  }
}
