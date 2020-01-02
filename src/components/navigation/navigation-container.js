import React, { Component } from 'react'

export default class NavigationComponent extends Component {
    constructor() {
          super();  
    }
    
    render() {
        return (
            <div>
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
                { false ? <button>Add Blog</button> : null }
            </div>
        );
    }
}
