import React, { useEffect, useState } from 'react';
// Styling
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
// Material UI Components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

// Set up styling
const useStyles = makeStyles(theme => ({
  pinkAvatar: {
    color: pink[600],
    backgroundColor: pink[100],
  },
  pink: {
    color: pink[600],
    paddingLeft: '5px'
  },
  red: {
    color: '#f00'
  },
  row: {
    textAlign: 'center'
  },
  spacer: {
    padding: '0 25px'
  }
}))

function SimpleDialog(props) {
    const classes = useStyles()
    const { close, open } = props
    let [message, setMessage] = useState('Viewing All')
    let [filter, setFilter] = useState('all')

    const handleClose = () => close()

    let matches = props.matches.filter((match) => {
        return filter == 'all' || match.swipe == filter
    }).map((m, i) => {
        return (
            <div key={i}>
                {m.matched.name}
                {m.swipe == 'skipped' ? <span role="icon" aria-label="icon">💔</span> : <span role="icon" aria-label="icon">❤️</span>}
                <hr />
            </div>
        )
    })

    return (
        <Dialog onClose={handleClose} aria-labelledby="dialog-title" open={open}>
            <DialogTitle id="dialog-title">My Matches</DialogTitle>
            <p className={classes.red}>{message}</p>
            <div className="home-bio-container">
                <div className="filter">
                    Filter:
                    <button onClick={() => setFilter('matched')}>Matches</button>
                    <button onClick={() => setFilter('skipped')}>Skipped</button>
                    <button onClick={() => setFilter('all')}>All</button>
                </div>
                {matches}
            </div>
        </Dialog>
    )
}

const MatchesDialog = props => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [matches, setMatches] = useState([])
  
    const handleClickOpen = () => {
      setOpen(true)
    }
  
    const handleClose = value => {
      setOpen(false)
    }
  
    // Implement useEffect to fetch the actual medications
    useEffect(() => {
      let token = localStorage.getItem('userToken')
      fetch(`${process.env.REACT_APP_SERVER_URL}matches`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        console.log(response)
        response.json().then(result => {
            console.log('success', result)
            setMatches(result.matches)
        })
        .catch(err => {
            console.log('err', err)
        })
      })
      .catch(err => {
          console.log(err)
      })
    }, [])
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          <Avatar className={classes.pinkAvatar}>
            <span role="icon" aria-label="icon">
                ❤️
            </span>
          </Avatar>
          <span className={classes.pink}>View Matches</span>
        </Button>
        <SimpleDialog open={open} close={handleClose} matches={matches} />
      </div>
    )
  }

export default MatchesDialog;