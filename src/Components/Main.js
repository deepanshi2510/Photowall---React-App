import React, {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom'
import Single from './Single.js'




class Main extends Component{
    

    render(){
        console.log(this.props)
        return(
        <div>
            <Route exact path = "/" render={() => (
              <div>
                  <Title title = {'Photowall'}/>
                  <Photowall {...this.props}/>
              </div>
            )}/>
            
            <Route path = "/AddPhoto" render={({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>

            )}/>

            <Route path = "/single/:id" render={(params)=>(
                <Single  {...this.props} {...params}/>
            )}/>
                    
                    

              

           
        </div>
        )
    }

}



export default Main