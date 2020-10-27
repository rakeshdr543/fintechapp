import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Chip, Container, Grid, List, ListItem } from '@material-ui/core';
import { useHistory } from 'react-router';

const ThirdQpage = ({setAnsThree}) => {
    let history=useHistory();
    // const [option,setOption]=useState('')
    const [seconds,setSeconds]=useState(7);

    const handleChange=(choice)=>{
        // setOption(choice);
        // setAnsThree(option);
        history.push('/qstns/page4')
    }

    useEffect(() => {
        if(seconds>0){
            setTimeout(() => {
                setSeconds(seconds-1)
            }, 1000);
        }
        else{
            history.push('/qstns/page4')
        }       
    })
    return (
        <Box>
        <Container >
        <div className='q-container'>
              <div className='timer'><span className='timer-container'>{seconds}</span></div>
              <List> 
                <h2>3. You've caught a fever and mild flu- what do you do? </h2>
                <Card>
                <Grid container spacing={2} >
                <Grid item xs={6}>
                <ListItem> <p onClick={e=>{setAnsThree('a');handleChange()}}>A. Go see the doctor and take the prescribed medication </p></ListItem>
                <ListItem> <p onClick={e=>{setAnsThree('b');handleChange()}}>B. Take lots of rest- better safe than sorry   </p> </ListItem>
                </Grid>
                <Grid item xs={6}>
                <ListItem> <p onClick={e=>{setAnsThree('c');handleChange()}}>C. Maybe take a day or less off, and get back to work 		</p></ListItem>
                <ListItem> <p onClick={e=>{setAnsThree('d');handleChange()}}>D. Push through- there are important things to do 		 </p></ListItem>
                </Grid>
                </Grid>
                </Card>
                </List>
                </div>
                
        </Container>
        </Box>
        
    )
}

export default ThirdQpage

