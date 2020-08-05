import React from 'react'

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
      <Card>
        <CardImg top width='10%' src={img} alt='' />
        <CardBody>
          <CardTitle>{title}</CardTitle>
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
