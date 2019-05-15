import React from 'react'



export default class Home extends React.Component {
    render() {
        return (
            <div>
                <a href="#/">back to home</a>
                <button onClick={()=> this.props.history.push('')}>function back to home</button>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.history.location.state)
    }
}