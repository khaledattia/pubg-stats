import React, { Component } from 'react';
import { PubgPsn } from './PubgPsn';
import { PubgSteam } from './PubgSteam';



export class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            show: "", 
            stroke: "", 
            fill: "", 
            psnsvg: "", 
            steamsvg: "", 
            fixedPsnTranslate: "",
            fixedSteamTranslate: "", 
        }

    }
    
      /////////////////////////////////
     /////////// LifeCycle ///////////
    /////////////////////////////////

    componentDidMount() {
        setTimeout(() => {
            this.setState(prevState => ({
                show: "show", 
                fixedPsnTranslate: "fixed-psn-translate", 
                fixedSteamTranslate: "fixed-steam-translate", 
                
            }))
        }, 3900)

        setTimeout(() => {
            this.setState(prevState => ({
                stroke: "stroke", 
                fill: "fill", 

            }))
        }, 3000)
        
    }

    componentWillUnmount(){
        // removing the classes to redoing the animation when it appears once again
        this.setState(prevState => ({
            show: "", 
            stroke: "", 
            fill: "", 
            psnsvg: "", 
            steamsvg: "", 
            fixedPsnTranslate: "", 
            fixedSteamTranslate: "", 
            
        }))

        this.props.op("toggled-animation")
    }

      ////////////////////////////
     ///////// Render ///////////
    ////////////////////////////

    render(){
        const { show, stroke, fill, psnsvg, steamsvg, fixedPsnTranslate, fixedSteamTranslate } = this.state

        return (
            <div className="test">
                <PubgPsn 
                    show = {show} 
                    stroke = {stroke} 
                    fill = {fill} 
                    psnsvg = {psnsvg} 
                    steamsvg = {steamsvg} 
                    fixedPsnTranslate = {fixedPsnTranslate} 
                    fixedSteamTranslate = {fixedSteamTranslate} 
                />
                
                <PubgSteam 
                    show = {show} 
                    stroke = {stroke} 
                    fill = {fill} 
                    psnsvg = {psnsvg} 
                    steamsvg = {steamsvg} 
                    fixedPsnTranslate = {fixedPsnTranslate} 
                    fixedSteamTranslate = {fixedSteamTranslate} 
                />
            </div>
        )
    }

}