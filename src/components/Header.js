import React, { Component } from 'react'
// import { Home } from './Home'
import { Link } from 'react-router-dom'





export class Header extends Component {



render() {
    const { location } = this.props;

            return (
                <header>
                    <div className={`logo ${(location === "/") ? "" : "animate-logo"}`}>
                        <Link to="/">
                            <img alt="logo" id="logo" src='/assets/logos.svg' />
                        </Link>
                    </div>
                </header>
            )
    }
}