import React, {Component} from 'react';
import {createDrawing} from './api';

export default class DrawingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawingName: ''
          }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({drawingName: event.target.value});
      }

    handleSubmit(event){
        event.preventDefault();        
        
        createDrawing(this.state.drawingName + '');
        
        this.setState({
            drawingName: ''
        });
    }

    render() { 
        return (  
            <div className="Form">
                <form>
                    <input type="text" 
                        value={this.state.drawingName} 
                        onChange={this.handleChange}
                        placeholder='Drawing name'
                        className='Form-drawingInput'
                    />
                    <button
                        type="submit"
                        onClick={this.handleSubmit}
                        className='Form-drawingInput'>
                        Create
                    </button>

                </form>
            
            </div>

        )
    }
}
 