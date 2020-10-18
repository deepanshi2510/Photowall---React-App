import React, {Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';




class Photowall extends Component{
    
  

    render(){
    
    
        return <div>
            <Link className = "addIcon" to="/AddPhoto"></Link>
                
            <div className = "photogrid">
               {this.props.posts
                    
                    .map((post,index) => <Photo key={index} post={post} {...this.props} index={index} />)}
                  
                 </div>
              </div>
    }
    }


Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    
   }


export default Photowall