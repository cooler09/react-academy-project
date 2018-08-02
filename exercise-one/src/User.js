import React, {Component} from 'react';


class User extends Component{
    render()
    {
        return (
            <div>
                <h1>{this.props.bob}</h1>
                <p>{this.props.silence}</p>
                <p>{this.props.moarsilence}</p>
                <img src={this.props.image} />
            </div>
        );
    }
}

export default User;