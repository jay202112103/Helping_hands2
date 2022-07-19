// import TopBar from '../topbar/Topbar'
import React from 'react';

import axios from 'axios';

export default class Servant extends React.Component {
 state = {
  posts: []
 }

 componentDidMount() {
  axios.get(`https://localhost:5000/chore`)
 .then(res => {
    const posts = res.data;
    console.log(res);
    this.setState({ posts });
   })
 }

 render() {
  return (
    <div>
        
   <ul>
    { this.state.posts.map(post => <li>{post.title}</li>)}
   </ul>
   </div>
  )
 }
}
