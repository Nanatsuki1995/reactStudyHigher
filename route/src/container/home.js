import React from 'react'



export default class Home extends React.Component {
    render() {
        return (
            <div>
                <a href="#/detail">go to detail</a>
                <button onClick={()=> this.props.history.push({
                    pathname: '/detail',
                    state: {
                        id: 3
                    }
                })}>function go to detail</button>
            </div>
        )
    }
}