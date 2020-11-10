import React, { Component } from 'react';
import './Hello.css'

class Hello extends Component{
    render()
    {
        return(
            //"f1 tc" is from tachyons package
            <div className='f1 tc'> 
                <h1>Hello World</h1>
                <p>Welcome to React</p>
            </div>
        );
    }
}

export default Hello;
