import React, {Component} from 'react';


class AddPhoto extends Component{

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imagelink: imageLink
        }

        
            this.props.addPost(post)
            this.props.onHistory.push('/')
        }
        

    
    render(){

        return(

    <div>
        <h1>photowall</h1>
        <div className="form">
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="link"/>
            <input type="text" placeholder="description" name="description"/>
            <button type="submit">post</button>
        </form>
        </div>
    </div>
        
        )

    }
}

export default AddPhoto
