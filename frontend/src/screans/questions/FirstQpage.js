import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Chip, Container, Grid, List, ListItem } from '@material-ui/core';
import { useHistory } from 'react-router';


const FirstQpage = ({setAnsOne,ansOne}) => {
    let history=useHistory();
    // const [option,setOption]=useState()
    const [seconds,setSeconds]=useState(7);


    const handleChange=()=>{
        // changeState(choice);
        // setOption(choice);
        // // console.log('pag1 op',option);
        //  setAnsOne(option)
       
        history.push('/qstns/page2')
    }

    useEffect(() => {
        if(seconds>0){
            setTimeout(() => {
                setSeconds(seconds-1)
            }, 1000);
        }
        else{
            history.push('/qstns/page2')
        }  
           
    },[seconds])
    return (
        <Box>
        <Container >
        <div className='q-container'>
              <div className='timer'><span className='timer-container'>{seconds}</span></div>
              <List> 
                <h2>1. When your job requires you to do something that you don't have experience with	You volutneer to do it without hesitation </h2>
                <Card>
                <Grid container spacing={2} >
                <Grid item xs={6}>
                <ListItem> <p onClick={e=>{setAnsOne('a');handleChange() }}>A. You volutneer to do it without hesitation</p></ListItem>
                <ListItem> <p onClick={e=>{setAnsOne('b');handleChange()}}>B. You get anxious, but get over it quickly and get on with it </p> </ListItem>
                </Grid>
                <Grid item xs={6}>
                <ListItem> <p onClick={e=>{setAnsOne('c');handleChange()}}>C. You are resistant, but realize you must do it in order to get ahead </p></ListItem>
                <ListItem> <p onClick={e=>{setAnsOne('d');handleChange()}}>D. You propose that your colleague does it </p></ListItem>
                </Grid>
                </Grid>
                </Card>
                </List>
                </div>
                
        </Container>
        
        </Box>
        
    )
}

export default FirstQpage
