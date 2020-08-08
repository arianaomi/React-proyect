import React from 'react'
import './style.css'

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'

const Post = ({ title, subtitle, text, img }) => {
  return (
    <>
      <Card className='card'>
        <CardImg top className='cardImg' src={img} alt='' />
        <CardBody>
          <CardTitle className='cardTitle'>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          <CardText>{text}</CardText>
          <Button color='info' size='lg' block>
            Button
          </Button>
        </CardBody>
      </Card>
    </>
  )
}

export default Post
