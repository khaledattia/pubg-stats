import React, { Component } from 'react';
import { Filter } from './Filter';
import { Results } from './Results';
import { AnalyzedResult } from './AnalyzedResult'


export class SearchResults extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            display: "none", 

        }
    }

      ///////////////////////////////////
     ///////// LifeCycle ///////////////
    ///////////////////////////////////

    componentDidMount(){
        this.props.bg(this.props.location)
            setTimeout(() => {
    
                this.setState(prevState => ({
                    display: "block", 
                }))
            }, 1000)

        if(!this.props.fromSearch){
            this.props.fetchFun(this.props.playerName, null, true)
        }
        
    }

    componentWillUnmount(){
        this.props.bgOpacity("toggled-animation")
        this.setState(prevState => ({
            display: "none", 

        }))
    }

    
      /////////////////////////////////////
     ///////////// Render ////////////////
    /////////////////////////////////////

    render(){
        const { data , gameMode, mode, onGameMode, testFun} = this.props;

        const styleMessage = {
            width: '100%',
            display: 'flex',
            margin: 'auto',
            marginTop: '50px',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
            background: 'rgba(204, 204, 204, 0.82)',
            borderRadius: '10px',
            fontSize: '25px'
        }
        return (
            <div className="srch-results" 
            style={{display: this.state.display}} >

                <Filter 
                    gameMode   = {gameMode} 
                    mode       = {mode} 
                    fun        = {this.fun} 
                    onGameMode = {onGameMode} 
                    testFun    = {testFun} 
                />

                {data && data[gameMode+mode].roundsPlayed ?

                    <div className="analized">
                        <Results 
                            data     = {data} 
                            gameMode = {gameMode} 
                            mode     = {mode} 
                        /> 
                        <AnalyzedResult 
                            data     = {data} 
                            gameMode = {gameMode} 
                            mode     = {mode} 
                        />
                    </div> : 
                    <div style={styleMessage}>
                        there is no {gameMode} Game yet.
                    </div>
                }
            </div>
        )
    }
} 