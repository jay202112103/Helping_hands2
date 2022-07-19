// import React, {Component} from 'react';
// import Messages from './Messages';
// import Input from "./Input"
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';

// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
// import theme from '../../pages/modules/theme';
// import { ThemeProvider } from '@material-ui/styles';
// import Box from '@material-ui/core/Box';


// function randomName() {
//     const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
//     const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
//     const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
//     const noun = nouns[Math.floor(Math.random() * nouns.length)];
//     return adjective + noun;
// }
  
// function randomColor() {
//     return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
// }




// export default class SendMessage extends Component {

//     state = {
//         messages: [],
//         member: {
//           username: randomName(),
//           color: randomColor(),
//         }
//     }

//     constructor(props) {
//         super(props);
//         this.drone = new window.Scaledrone("5nNrvoa1lp1x0t3c", {
//             data: this.state.member
//         });
//         const fixedState = {...this.state}
//         fixedState.member.username = props.currentUser
//         this.state = fixedState
//         console.log("this.state: ");
//         console.log(this.state);
//         console.log("This.state.member: ");
//         console.log(this.state.member);
//         this.drone.on('open', error => {
//             if (error) {
//                 return console.error(error);
//             }
          
//             const member = {...this.state.member};
//             member.id = this.drone.clientId;
//             this.setState({member});
//         });


//         const room = this.drone.subscribe(this.props.match.params.id, {historyCount: 5});
//         room.on('history_message', (message) => {
//             console.log("PRINTING MESSAGE: ");
//             console.log(message);
//             const messages = this.state.messages;
//             console.log("PRINTING MESSAGE.MEMBER: ");
//             console.log(message.member);
//             messages.push(message);
//             this.setState({messages});
//         });
//         room.on('message', message => { 
//             const messages = this.state.messages;
//             console.log(message.member)
//             messages.push(message);
//             this.setState({messages});
//         });
//     }
    
//     render() {
//             return (
            
//                 <div class = "custom-chat">
//                 <ThemeProvider theme={theme}>
//         <Container component="section">
//         {/* <Box display="flex" p={1} bgcolor="background.paper"> */}
//             {/* <Grid container spacing={4}>    
//                 <Grid item spacing={8}> */}


//             <Card >
//                 <CardContent>
//                     <div className="App">
                        
//                         <div className="App-header">
//                         <h3><i class="far fa-comments"></i> Send a Message</h3>
//                         </div>
//                         <div className="messageParent">
//                         <Messages
//                         messages={this.state.messages}
//                         currentMember={this.state.member}
//                         />
//                         <Input
//                         onSendMessage={this.onSendMessage}
//                         />
//                         </div>
//                     </div>
//                 </CardContent>
//             </Card>


//             {/* </Grid>
//             </Grid> */}
//         {/* </Box>     */}
//         </Container>     
//     </ThemeProvider>
//     </div>
//             );
//     }
    
//     onSendMessage = (message) => {
//         this.drone.publish({
//             room: this.props.match.params.id,
//             message
//         });
//     }
    
//     }