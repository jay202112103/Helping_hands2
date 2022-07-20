// import axios from "axios";
// import React, { useEffect, useState } from "react"


// // const Chore = props => (
// //     <tr>
// //         <td className={props.chore.chore_completed ? 'completed' : ''}>{props.chore.first_name}</td>
// //         <td className={props.chore.chore_completed ? 'completed' : ''}>{props.chore.last_name}</td>
// //         {/* <td className={props.chore.chore_completed ? 'completed' : ''}>{props.chore.chore_address[0].formattedAddress}</td>
// //         <td className={props.chore.chore_completed ? 'completed' : ''}>{props.chore.chore_phone}</td> */}
// //         {/* <td>
// //             <Link to={"/edit/"+props.chore._id}>Edit</Link>
// //         </td>  */}
       
// //     </tr>
// // )
// const Chorelist = props => {
    
 
//     const getData = async() =>{
//         const req = await fetch('http://localhost:5000/chore',{
//           method:"GET",
//         })
//         const data = await req.json();
        
//         console.warn(data.email.);
//         console.log(data);
//       }
//       useEffect(() => {
//         // const response = axios.get('http://localhost:8080/service/service1');
//         // console.warn(response);
//         getData();
     
//       }, [])

//   return (
//     <div>
//       <p>Hello World</p>
      
//         {/* <ul>
//           {data.map(user => (
//             <li key={user.first_name}>{user.last_name}</li>
//           ))}
//         </ul> */}
//         <h1>hello</h1>
      
//     </div>
//   )
// }

// export default Chorelist

import React from "react";
// import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { filter, cloneDeep, map } from 'lodash';
import axios from "axios";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '../../pages/modules/components/Typography';
import Card from '@material-ui/core/Card'
import theme from '../../pages/modules/theme';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import Moment from 'react-moment'
class Servant extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"http://localhost:5000/chore")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
              {
                items.map((item) => ( 
                <ol key = { item.id } >
                    First_Name: { item.firstName}, 
                    Last_Name: { item.firstName}, 
                    Email: { item.email}, 
                    Service_type: { item.service_type}, 
                    
                    </ol>
                ))
            }
        </div>
    //     items.map((item) => ( 
    //        <ol key = { item.id } >
    //     <ThemeProvider theme={theme}>
    //     <Container component="section">
    //     <Box display="flex" p={1} bgcolor="background.paper">
    //         <Grid container spacing={4}>    
    //             <Grid item spacing={8}>
    //                 <CardActionArea>
    //                 <Card style={{backgroundColor:'#cb2d6f'}} >
    //                     <Grid  container spacing={4} padding={5}>
                            
    //                         <Grid item xs={12} md={6}>
    //                             <Hidden smDown>
    //                                 <img 
    //                                     src="https://cdn3.eyeem.com/thumb/eaf5a605b848ab17473a73d38687f48d9790e578-1512310445786/w/850"
    //                                     alt="call to action"   
    //                                 />
    //                             </Hidden>
    //                         </Grid> 
    //                         <Grid  spacing={4} item xs={12} md={6}>
    //                             <Box p={8}>
    //                                 <Typography style={{color:'#cccccc'}} padding="theme.spacing(4)" variant="h3" component="h2" gutterBottom>
    //                                     {items.date}
    //                                 </Typography>
    //                                 <Typography style={{color:'#cccccc'}} variant="h5" component="h3" gutterBottom>
    //                                     Who Needs Help: {items.date}
    //                                 </Typography>
    //                                 {/* <Typography style={{color:'#cccccc'}} variant="h5" gutterBottom>
    //                                     Chore Address: {props.chore.chore_address[0].formattedAddress}
    //                                 </Typography> */}
    //                                 <Typography style={{color:'#cccccc'}} variant="h5" gutterBottom>
    //                                     Chore Date: <Moment format="D MMM YYYY" withTitle date={items.email}/>
    //                                 </Typography>
    //                                 <Typography style={{color:'#cccccc'}} variant="h5" gutterBottom>
    //                                     Phone Number: {items.date}
    //                                 </Typography>
    //                             </Box>
    //                         </Grid>
                                 
    //                     </Grid>
    //                 </Card>
    //                 </CardActionArea>
    //             </Grid>
    //         </Grid>
    //     </Box>
    //     </Container>     
    // </ThemeProvider>
    // </ol>
    // )));
        )
}
}
   
export default Servant;