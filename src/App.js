import React,{Component} from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import Searchbox from './Searchbox';
import './App.css';
class App extends Component{

    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:''

        }
    }
    
    onSearchChange=(event)=>{

        this.setState({searchfield: event.target.value})
        
    }

    render()
    {
        const filteredRobots=this.state.robots.filter(robot=>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })

        return(
            <div className='tc'>
                <h1 className='f2'>Robo Friends</h1>
                <Searchbox searchange={this.onSearchChange}/>
                <Cardlist robots={filteredRobots}/>
            </div>
        );

    }
    
}

export default App;