import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Chip, Container, Grid, List, ListItem } from '@material-ui/core';
import { useHistory } from 'react-router';

const SecondQpage = ({setAnsTwo}) => {
    let history=useHistory();
    // const [option,setOption]=useState('')
    const [seconds,setSeconds]=useState(7);

    const handleChange=(choice)=>{
        // setOption(choice);
        // setAnsTwo(option);
        history.push('/qstns/page3')
    }

    useEffect(() => {
        if(seconds>0){
            setTimeout(() => {
                setSeconds(seconds-1)
            }, 1000);
        }
        else{
            history.push('/qstns/page3')
        }       
    })
    return (
        <Box>
        <Container >
        <div className='q-container'>
              <div className='timer'><span className='timer-container'>{seconds}</span></div>
              
              <List> 
                <h2>2. A friend invites you to go to a plan with him last minute. What do you do? </h2>
                <Card>
                <Grid container spacing={2} >
                <Grid item xs={6}>
                <ListItem> <p onClick={e=>{setAnsTwo('a');handleChange()}}>A. Ask what the gig is and then decide </p></ListItem>
                <ListItem> <p onClick={e=>{setAnsTwo('b');handleChange()}}>B. See if I can cancel the plan I already have </p> </ListItem>
                </Grid>
                <Grid item xs={6}>
                <ListItem> <p onClick={e=>{setAnsTwo('c');handleChange()}}>C. I need more notice than that </p></ListItem>
                <ListItem> <p onClick={e=>{setAnsTwo('d');handleChange()}}>D. Definitely go  </p></ListItem>
                </Grid>
                </Grid>
                </Card>
                </List>
                </div>
                
        </Container>
        </Box>
        
    )
}

export default SecondQpage
