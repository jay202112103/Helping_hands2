// import TopBar from '../topbar/Topbar'
import { Link } from "react-router-dom";
import React, {Component} from 'react';
import axios from "axios";
import "./servant.css";
//export default function Servant() {
    const chores = props => (
        <tr>
            <td className={props.chore.chore_completed ? 'completed' : ''}>{props.chore.chore_description}</td>
            <td className={props.chore.chore_completed ? 'completed' : ''}>{props.chore.chore_responsible}</td>
            <td className={props.chore.chore_completed ? 'completed' : ''}>{props.chore.chore_address[0].formattedAddress}</td>
            <td className={props.chore.chore_completed ? 'completed' : ''}>{props.chore.chore_phone}</td>
            <td>
                <Link to={"/edit/"+props.chore._id}>Edit</Link>
            </td> 
           
        </tr>
    )

const RequestedChore = (props) => (
                    <div>
                    <strong>
            <h1 className="servantTitle">Servant List</h1>
            </strong>
            
                  <div className="menustyle">
              
                      <div className="menuimage">
                      <center>
                      <img className="postImage" src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg" alt="" />
                               {/* <img src="" style="width:400px; height:80%; margin-top:30px; margin-left: 10px;">  */}
                      </center>
              
                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="menudetails" >
                              <h2></h2>
                              <p className="servantDescrip">ratings/desc</p>
                              <p className="servantDescrip">1500/hour</p>
                              <center><button><Link to="/booking" >Book</Link></button></center>
                      </div>
                      
                  </div>
                
            <br></br>
        
            {/* <center><button><Link to="/servant" >Submit</Link></button></center> */}
          
            <div className="menustyle">
              
              <div className="menuimage">
              <center>
              <img className="postImage" src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg" alt="" />
                       {/* <img src="" style="width:400px; height:80%; margin-top:30px; margin-left: 10px;">  */}
              </center>
      
              </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="menudetails" >
              <h2>ABC</h2>
                              <p> {props.chores.firstname}</p>
                              <p> {props.chores.lastname}</p>
                      <center><button><Link to="/booking" >Book</Link></button></center>
              </div>
          </div>
          </div>
    )
    class Servant extends Component
    {
        constructor(props) {
            super(props);
            this.state = {chores: []};
            // this.onAccept = this.onAccept.bind(this);
            // this.onCompleted = this.onCompleted.bind(this);
        }
        componentDidMount() {
            axios.get('/chore')
                .then(response => {
                    this.setState({chores: response.data});
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        choreList() {
            return this.state.chores.map(function(currentChore, i) {
                // console.log(currentChore);
                return <Chore chore={currentChore} key={i} />;
            });
        }
    
        render(){
    return (
        
            
        <div>
        <h3>Requested Chores</h3>
        
           {this.choreList()} 

    </div>    
    
        )
    }  
    }

        export default Servant