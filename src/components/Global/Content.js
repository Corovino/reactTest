import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/content.css';

class Content extends Component {
    static  propTypes = {
        body: PropTypes.object.isRequired
    }

    render(){
        const {body} = this.props;
        return(
            <div className="Content">
                <div>
                    {body}
                </div>
            </div>
        );
    }
   /*
    constructor(){
        super();

        this.state = {
            count:0,
            number1:0,
            number2:0,
            result:0
        };

        this.handleCountClick  = this.handleCountClick.bind(this);
        this.handleResultClick = this.handleResultClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleCountClick(e)
    {
        let id = e.target.id;
        console.log(id);
        switch (id){
            case 'add':
                this.setState({
                    count: this.state.count +1
                });
                break;
            case 'substract':
                this.setState({
                    count: this.state.count -1
                });
                break;
            case 'reset':
                this.setState({
                    count: 0
                });
                break;

        }
    }

    handleResultClick(e)
    {
        this.setState({
            result: this.state.number1 + this.state.number2
        });
    }

    handleInputChange(e)
    {

       let el =  e.target.id;
       console.log(el);
       if(el === 'number1')
       {
           this.setState({
               number1:Number(e.target.value)
           });
       }else{
           this.setState({
               number2:Number(e.target.value)
           });
       }
    }

    //reinicia el render
    componentDidMount()
    {
        this.setState({count:1});
    }


    render() {
        return (
            <div className="Content">
                <div>
                    <h1>Counter: {this.state.count}</h1>
                    <div>
                        <button id="add" onClick={this.handleCountClick}>Aumentar</button>
                        <button id="substract" onClick={this.handleCountClick}>Quitar</button>
                        <button id="reset" onClick={this.handleCountClick}>reset</button>
                    </div>
                    <div>
                        <h2>Calculadora</h2>
                        <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChange}/>
                        <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChange}/>
                        <button id="result" onClick={this.handleResultClick}>Result</button>
                        {this.state.result}
                    </div>
                </div>
            </div>
        );
    }*/


}


export default Content;
