import React ,{Component} from 'react'

class ErrorBoundry extends Component {

  constructor(props){
    super(props);
    this.state={
      hasError :false
    }

  }
  componentDidCatch(error , info){
   this.setState({hasError:true});
  }
  render(){
       if(this.state.hasError){
        return<h2>Ooops!! The user was not suppose this see that</h2>
       }
       return this.props.children
    }
}

export default ErrorBoundry
