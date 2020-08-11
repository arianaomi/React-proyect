//
import React, { Component } from 'react'

//Components
import CustomTextField from '../../components/CustomTextField'

// Material UI
import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
} from '@material-ui/core'

// CSS
import './NotesBlog.css'

class NotesBlog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      noteTitle: '',
      noteContent: '',
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChangeCustom = this.handleChangeCustom.bind(this)
  }

  componentDidMount() {
    let stringNotes = localStorage.getItem('notes')
    if (stringNotes) {
      let parsedNotes = JSON.parse(stringNotes)
      this.setState({
        notes: parsedNotes,
      })
    }
  }

  handleFormSubmit(event) {
    event.preventDefault()
    const { noteTitle, noteContent, notes } = this.state
    const newNotes = [...notes, { title: noteTitle, content: noteContent }]
    const stringNewNotes = JSON.stringify(newNotes)
    localStorage.setItem('notes', stringNewNotes)
    this.setState({
      notes: newNotes,
      noteTitle: '',
      noteContent: '',
    })
  }

  handleChangeCustom(name, value) {
    console.log('hola', name, value)
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { noteTitle, noteContent, notes } = this.state

    const UINotes = notes.map(({ title, content }, index) => (
      <ListItem key={index} className='List-item'>
        <ListItemText primary={title} secondary={content} />
      </ListItem>
    ))

    return (
      <>
        <Container maxWidth='md'>
          <List dense={true}>{UINotes}</List>
        </Container>
        <Container maxWidth='md'>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
          >
            <form onSubmit={this.handleFormSubmit}>
              <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'
              >
                <CustomTextField
                  value={noteTitle}
                  callback={this.handleChangeCustom}
                  name='noteTitle'
                />
                <CustomTextField
                  value={noteContent}
                  callback={this.handleChangeCustom}
                  name='noteContent'
                />
                <Button type='submit' variant='contained' color='primary'>
                  Add
                </Button>
              </Grid>
            </form>
          </Grid>
        </Container>
      </>
    )
  }
}

export default NotesBlog
