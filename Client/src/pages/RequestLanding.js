import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./header.css";
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Card from '@material-ui/core/Card';
// import RequestCreateChore from '../components/chore-components/RequestCreateChore';
// import RequestAcceptChore from '../components/chore-components/RequestAcceptChore';
// import RequestCompleteChore from '../components/chore-components/RequestCompleteChore';
// import RequestNotAccepted from '../components/chore-components/RequestNotAccepted'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { 
    url: "https://www.youthhelpingtrust.org/wp-content/uploads/2019/08/oldage-670x480.jpg" 
  },
  {
    url:"https://img.freepik.com/free-photo/image-two-hands-holding-each-other_466494-760.jpg?w=740"
  },
  {
    url:"https://www.wallpaperuse.com/wallp/26-268103_m.jpg"
  }
];

class RequestLanding extends Component {
    render(){
        return(
            <div className="header1">
      <div className="headerTitles1">
          <span className="headerTitleSmall1">We care</span>
          <span className="headerTitleLarge1"> Helping Hands </span>
      </div>
      <div className="headerImg1">
      <SimpleImageSlider //style={{ margin: 'auto', marginTop: '50px', width: '100%', height:'50%' }}
        // width={1350}
        width="100%"
        // height="80%"
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        navStyle={1}
        autoPlay={true}
        autoPlayDelay={1}
      />
      </div>
  <br></br><br></br><br></br>
      <div className="mainDivCategories1">
      <div className="categories1">
        <div className="post1">
          <img className="postImage1"
            src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
            alt="" />

          <div className="postInfo1">
            <span className="postTitle1">Home Services</span>
            <hr />
            {/* <span className="postDate">1 hour ago</span> */}
          </div>
          
          <ul className="postDesc1">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
            <li>Service 5</li>
          </ul>  
          {/* <br></br> */}
          <center><button className="submitBtn"><Link to="/servant" >Submit</Link></button></center>
        </div>
      </div>


      <div className="categories1">
        <div className="post1">
          <img className="postImage1"
            src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
            alt="" />

          <div className="postInfo1">
            <span className="postTitle1">Baby Care Services</span>
            <hr />
            {/* <span className="postDate">1 hour ago</span> */}
          </div>
          <ul className="postDesc1">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
            <li>Service 5</li>
          </ul>  
          <br></br>
          <center><button className="submitBtn"><Link to="/servant"> Submit</Link></button></center>
        </div>
        
      </div>

      
    </div>

      {/* <img className="headerImg" src="https://www.youthhelpingtrust.org/wp-content/uploads/2019/08/oldage-670x480.jpg" alt="" /> */}
    </div>

            // <React.Fragment>
            //     <CssBaseline/>
            //     <Card style={{padding: 20, margin: 20}}>
            //         <RequestCreateChore/>
            //     </Card>
            //     <Card style={{padding: 20, margin: 20}}>
            //         <RequestNotAccepted/>
            //     </Card>
            //     <Card style={{padding: 20, margin: 20}}>
            //         <RequestAcceptChore/>
            //     </Card>
            //     <Card style={{padding: 20, margin: 20}}>
            //         <RequestCompleteChore/>
            //     </Card>

            // </React.Fragment>
        )
    }
}

export default RequestLanding