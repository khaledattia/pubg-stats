import React, { Component } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { SearchResults } from './components/SearchResults';
import { Search } from './components/Search';
import { Page404 } from './components/Page404';

class App extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            data: null, 
            player: "",
            gameMode: "squad", 
            mode: "-fpp", 
            toggledAnimation: "", 
            animateBg: "",
            fetch: false, 
            shouldbgchange: false, 
            isLoading: false, 
            redirect: false, 
            fromSrch: false, 
            status: 0, 
            error: "", 

        }

        this.bgOpacity      = this.bgOpacity.bind(this)
        this.changeBg       = this.changeBg.bind(this)
        this.submit         = this.submit.bind(this)
        this.bg             = this.bg.bind(this)
        this.chnageGameMode = this.chnageGameMode.bind(this)
        this.test           = this.test.bind(this)
        this.handelErrors   = this.handelErrors.bind(this)
        this.isValid        = this.isValid.bind(this)
    }

      ///////////////////////////////////
     ///////// Functions ///////////////
    ///////////////////////////////////

    // changing the state of status and error
    handelErrors(status, error){
        this.setState(per => ({
            status, 
            error
        }))
    }

    // check if the name contain invalid characters
    isValid(name){

        let check = (
            name === ('')      || 
            name.includes(' ') ||
            name.includes('.') ||  
            name.includes(',') || 
            name.includes(';') || 
            name.includes('"') || 
            name.includes("'") || 
            name.includes('|') || 
            name.includes(':') ||
            name.includes('/') || 
            name.includes('\\')
        ) ?  false :  true

        return check
    }

    //checking if searching done from the search page
    // or from the url itself to manage fetching
    submit(name, e=0, srchpage=null){

        if(e && this.isValid(name)){
            e.preventDefault() 
            this.setState(prev => ({
                fetch: true, 
                isLoading: true, 
                player: name, 
                fromSrch: true
                
            }));       
        }else if(srchpage && this.isValid(name)){

            this.setState(prev => ({
                fetch: true, 
                isLoading: true, 
                player: name,
                
            }));
        }
        else{
            e && e.preventDefault();
            this.setState(pre => ({status: 404, error: 'No Players Found Matching Criteria'}))
            this.props.history.push(`/${this.props.match.params.platform}/error`)
        }
    }

    // this func changeing the mode if the team mode
    chnageGameMode(mode,e){
        e.preventDefault()        

        this.setState(prev => ({
            gameMode: mode,
            
        }));
    }

    // this fun changeing the game mode FPP or TTP
    test(mode) {
        this.setState({
            mode
        })
    }

    // increase and reduce the opecity by toggling the class on and off again
    bgOpacity(clas) {
        this.setState({
            toggledAnimation: clas, 
            shouldbgchange: true, 
            
        })

        setTimeout(prevState => {
            this.setState({
                toggledAnimation: "", 
            })

        }, 700)

    }
    
    // change the background photo of the App
    changeBg(clas) {
        this.setState({
            animateBg: clas, 
        })
    }

    // controls the background for the pages
    // runn the nacessary class
    // changing the background during the opacity animation to be don't able to watch the changes
    bg(path) {

        if(path === "/"){
            setTimeout(() => {
                this.changeBg("");
                
            }, 1700)
            
        }else {
            setTimeout(() => {
                this.changeBg("animate-bg")

            }, 1700)
        }


        return this.state.animateBg
    }

      /////////////////////////////////
     /////////// LifeCycle ///////////
    /////////////////////////////////

    componentDidUpdate(preProps, preState){
        if(this.state.shouldbgchange){

            this.bg(this.props.location.pathname)
            this.setState({shouldbgchange: false})
        }

        if(this.state.fetch && this.state.status !== 404){
            console.log("Loading...")
            fetch(`https://api.pubg.com/shards/${this.props.match.params.platform}/players?filter[playerNames]=`+this.state.player, {
                method: 'Get', 
	            headers: {
                    'Authorization': "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1NmY4NDYxMC03MDFmLTAxMzctNjVlNi03M2JkNGNmZGYxNWQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTYwNDQwMzYyLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImtoYWxlZC1hdHRpYTU1In0.nVmNX2Ha7hBLMojuetKMCsQpAicRTSItIi-eZ86i_HY", 
                    "accept": "application/vnd.api+json"
                }
            })
            .then(
                player => {
                    if(player.status === 404){
                        this.setState({
                            status: player.status, 
                            
                        })
                        
                    }

                    return player.json()
                }
            )
            .then(data => {
                if(this.state.status === 404 ){
                    this.setState({
                        error: data.errors[0].detail, 
                    })
                }
                else{
                    fetch(`https://api.pubg.com/shards/${this.props.match.params.platform}/players/${data.data[0].id}/seasons/${
                        (this.props.match.params.platform === 'steam') ? 
                        'division.bro.official.pc-2018-03' : 
                        'division.bro.official.playstation-02'}`, {
                        method: 'Get', 
                        headers: {
                            'Authorization': "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1NmY4NDYxMC03MDFmLTAxMzctNjVlNi03M2JkNGNmZGYxNWQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTYwNDQwMzYyLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImtoYWxlZC1hdHRpYTU1In0.nVmNX2Ha7hBLMojuetKMCsQpAicRTSItIi-eZ86i_HY", 
                            "accept": "application/vnd.api+json"
                        }
                    })
                    .then(lifetime => lifetime.json())
                    .then(lftm => this.setState({data: lftm.data.attributes.gameModeStats}))
                    .then(() => console.log(this.state.data))
                    .then(() => console.log("Done"))
                    .catch(err => this.props.history.push(`/${this.props.match.params.platform}/name`))
                }
            })
            .then(() => this.setState(prev => ({
                fetch: false, 
                isLoading: false, 
                redirect: true, 
            })))
            .then(() => {
                if(this.state.status === 404){
                    this.props.history.push(`/${this.props.match.params.platform}/error`)
                }
                else{
                    this.props.history.push(`/${this.props.match.params.platform}/name/${this.state.player}`)
                }
            })
            .catch(e => {
                this.setState(prev => ({
                    fetch: false, 
                    isLoading: false, 
                    redirect: true, 
                    error: "Something Went Wrong!", 
                }))
                this.props.history.push(`/${this.props.match.params.platform}/error`)
                console.log("Done")
            })

        }

    }

      ////////////////////////////
     ///////// Render ///////////
    ////////////////////////////

    render() {
        
        const path       = this.props.location.pathname
        const playerName = this.props.match.params.name
        const platform   = this.props.match.params.platform

        return (
            <div id="home"  
                className={`root ${this.state.animateBg} ${
                    (path === `/${platform}/name/${playerName}`) ? 
                'search-results' : ''}`}>

                <div 
                    className = "loading" 
                    style     =  {this.state.isLoading ? 
                    {display: "block"} : 
                    {display: "none"}}>

                    <span className="spin"></span>

                </div>

                <div id="bg-op" 
                    className={`home ${this.state.toggledAnimation}`}>

                    <Header 
                        location  = {path}
                        bgOpacity = {this.bgOpacity}
                    />

                    {(path === "/") ? 
                    <Home op={this.bgOpacity} /> :
                    (path === "/steam" || path === "/psn")  ? 
                        <div className="component">
                            <Search 
                                redi      = {this.state.redirect} 
                                location  = {path} 
                                bgOpacity = {this.bgOpacity} 
                                onsub     = {this.submit} 
                                bg        = {this.bg} 
                                validity  = {this.isValid}
                            />

                        </div> : 

                        (path === `/${platform}/name/${playerName}`) ? 
                        <div className="component search-result">
                            <SearchResults 
                                data       = {this.state.data} 
                                mode       = {this.state.mode} 
                                gameMode   = {this.state.gameMode} 
                                fromSearch = {this.state.fromSrch}
                                location   = {path} 
                                playerName = {playerName}
                                bgOpacity  = {this.bgOpacity} 
                                bg         = {this.bg} 
                                onGameMode = {this.chnageGameMode} 
                                testFun    = {this.test} 
                                fetchFun   = {this.submit} 
                            />
                        </div> : 

                        (path === `/${this.props.match.params.platform}/error`) ?
                        <Page404
                            error        = {this.state.error} 
                            status       = {this.state.status}
                            bgOpacity    = {this.bgOpacity} 
                            handleErrors = {this.handelErrors}
                            platform     = {platform}
                        /> : this.props.history.push('/')
                    }

                </div>
            </div>
            
        )
    }

}

export default App;