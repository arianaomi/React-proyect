//
import React, { Component } from 'react'
import Post from '../Post'
import { Col, Container, Row } from 'reactstrap'

const dataPosts = [
  {
    img:
      'https://www.guiadelnino.com/var/guiadelnino.com/storage/images/juegos-y-fiestas/canciones-infantiles/aprender-a-contar-cantando-yo-tenia-10-perritos/7609482-7-esl-ES/aprender-a-contar-cantando-yo-tenia-10-perritos_w1140.jpg',
    title: 'What is Lorem Ipsum?',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    img:
      'https://www.dogalize.com/wp-content/uploads/2017/06/La-sverminazione-e-la-pulizia-del-cucciolo-del-cane-2-800x400-800x400.jpg',
    title: 'What is Lorem Ipsum?',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    img:
      'https://www.aquien.mx/wp-content/uploads/2019/04/perrito-1024x810.jpg',
    title: 'What is Lorem Ipsum?',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
]

class LayoutPost extends Component {
  render() {
    const UIPost = dataPosts.map(({ title, subtitle, text, img }, index) => {
      return (
        <Col md='4'>
          <Post
            key={index}
            title={title}
            subtitle={subtitle}
            text={text}
            img={img}
          />{' '}
        </Col>
      )
    })
    
    return (
      <Container>
        <Row>{UIPost}</Row>
      </Container>
    )
  }
}

export default LayoutPost
