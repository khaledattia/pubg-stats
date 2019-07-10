import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { MdTranslate } from 'react-icons/md';
import { FaCaretDown } from 'react-icons/fa'

export class Page404 extends Component {

    componentWillUnmount(){
        if(this.props.error){
            this.props.bgOpacity("toggled-animation")
            this.props.handleErrors(0, '')
        }
    }

    render(){
        // const toolTip = {
        // }

        return (
            <div className="component">
                <div className="cracked-logo">
                    <span className="logo-edges">
                    </span>
                    <span className="logo-edges">
                    </span>
                    <span className="logo-edges">
                    </span>
                    <span className="logo-edges">
                    </span>

                    <div className="cont-logo-letter">
                        <div className="lamb">
                            P
                        </div>
                    </div>
                    
                    <div className="cont-logo-letter">
                        <div className="lamb">
                            U
                        </div>
                    </div>
                    
                    <div className="cont-logo-letter">
                        <div className="lamb">
                            B
                        </div>
                    </div>
                    
                    <div className="cont-logo-letter">
                        <div className="lamb">
                            G
                        </div>
                    </div>

                </div>
                <div className="error-cont">
                    <p>{
                        (this.props.status !== 200 && this.props.error) ? 
                        this.props.error : 
                        "Whoops! The page not found."}
                    </p>
                    <Link className="back-link" to="/">
                        Home Page
                    </Link>{
                        this.props.platform && 
                        <span className="bk-to-search-page" style={{position: 'relative'}}>
                        <Link className="back-link" to={`/${this.props.platform && this.props.platform}`} >
                            Search Page
                            
                        </Link>

                        <span className='tooltip'>
                            Back to {this.props.platform} 
                            <span style={{color: 'black', position:'absolute', left: '50%', top: '82%', transform: 'translateX(-50%)'}}>
                                <FaCaretDown />
                            </span>
                        </span>
                    </span>}
                </div>
            </div>
            
        )
    }
}