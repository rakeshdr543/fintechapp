import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { Card,  Container, Grid, List, ListItem } from '@material-ui/core';
import { useHistory } from 'react-router';

const FourthQpage = ({setAnsFour}) => {
    let history=useHistory();
    // const [option,setOption]=useState('')
    const [seconds,setSeconds]=useState(7);

    const handleChange=(choice)=>{
        // setOption(choice);
        // setAnsFour(option);
        history.push('/qstns/page5')
    }

    useEffect(() => {
        if(seconds>0){
            setTimeout(() => {
                setSeconds(seconds-1)
            }, 1000);
        }
        else{
            history.push('/qstns/page5')
        }       
    })
    return (
        <Box>
        <Container >
        <div className='q-container'>
              <div className='timer'><span className='timer-container'>{seconds}</span></div>
              <List> 
                <h2>4.You've been prescribed medication, but you already feel like you've recovered. </h2>
                <Card>
                <Grid container spacing={2} >
                <Grid item xs={6}>
                <ListItem> <p onClick={e=>{setAnsFour('a');handleChange() }}>A. Finish the dosage, no matter how long </p></ListItem>
                <ListItem> <p onClick={e=>{setAnsFour('b');handleChange() }}>B. Take it for a few days to ensure it doesn't hop back  </p> </ListItem>
                </Grid>
                <Grid item xs={6}>
                <ListItem> <p onClick={e=>{setAnsFour('c');handleChange() }}>C. Take it for another day and stop </p></ListItem>
                <ListItem> <p onClick={e=>{setAnsFour('d');handleChange() }}>D. Stop immediately </p></ListItem>
                </Grid>
                </Grid>
                </Card>
                </List>
                </div>
                
        </Container>
        </Box>
        
    )
}

export default FourthQpage

