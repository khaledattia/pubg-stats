import React, { Component } from 'react';

export class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            display: "none", 
            radio: true, 
            validName: true
        }

        this.onRadioChange = this.onRadioChange.bind(this);
    }

      ///////////////////////////////////
     ///////// Functions ///////////////
    ///////////////////////////////////

    onRadioChange() {
        this.setState(prev => ({
            radio: !this.state.radio, 
        }));
    }

    // validity(validity)


      /////////////////////////////////
     /////////// LifeCycle ///////////
    /////////////////////////////////



    componentDidMount(){
        this.props.bg(this.props.location)
        setTimeout(() => {

            this.setState(prevState => ({
                display: "flex"
            }))
        }, 1000)
        
    }

    componentWillUnmount(){
        this.props.bgOpacity("toggled-animation")
        this.setState(prevState => ({
            display: "none"
        }))

    }


      /////////////////////////////////////
     ///////////// Render ////////////////
    /////////////////////////////////////

    render(){
        return (
            <div className="srch-form" 
                style={{display: this.state.display}} >
               <div className="form">
                    <div className={`${this.state.validName ? '':'not-'}valid-text`} style={{color: 'white', 
                        background: '#ff2d00', 
                        width: '50%', 
                        margin: '0 auto', 
                        textAlign: 'center', 
                        padding: '2px 0', 
                        borderRadius: '5px'
                        }}>
                        The name is not valid
                    </div>
                    <form onSubmit={(e) => this.props.onsub(this.refs.input.value, e)}>
                        <div className="input-field">
                            <input type="text" 
                                name="input" 
                                autoComplete="off" 
                                ref="input" 
                                required 
                                onChange={() => this.props.validity(this.refs.input.value) ? 
                                            this.setState(pre => ({validName: true})) : 
                                            this.setState(pre => ({validName: false}))
                                        }
                            />

                            <label htmlFor="input" className="input-label">
                                <span className="chosen-content" >
                                    {this.state.radio ? 'Player Name' : 'Player ID'}
                                </span>
                            </label>
                            
                        </div>
                        
                        <div className="srch-filter">
                            <span htmlFor="name" style={{color: "#E8E8E8"}}>by Name</span>
                            <input checked={this.state.radio} 
                                className="radio-name" 
                                onChange={this.onRadioChange}
                                name="name" type="radio" 
                            />&nbsp;&nbsp;
                                
                            <span htmlFor="account-id" 
                                style={{color: "#E8E8E8"}}>by Acc.ID
                            </span>
                                
                            <input checked={!this.state.radio} 
                                className="radio-acc" 
                                onChange={this.onRadioChange}
                                name="account-id" 
                                type="radio" 
                            />

                        </div>

                        <button className="submit-btn" >
                            <span></span>
                            <b>SEARCH</b>
                        </button>
                        
                    </form>
                </div>
                <div className="note">
                    <p>
                        Thanks for Using my app please make sure of the following for a good experince<br />
                        - The player name is Case sensitive <br/>
                        - You can try {this.props.location === '/steam' ? 'Muslim88' : 'VENOM_SNAKE727' }
                    </p>
                </div>
            </div>
        )
    }
} 