import React from 'react';

export const Results = ({data, gameMode, mode}) => {
    const seasonData = data && data[`${gameMode+mode}`];

    return ( 
        <div className="main-results">
            <div>
                <h4>matches Played</h4>
                <span>
                    {(data) ? 
                        seasonData.roundsPlayed : 
                        0
                    }
                </span>
            </div>

            <div>
                <h4>Wins</h4>
                <span>
                    {(data) ? 
                        seasonData.wins : 
                        0
                    }
                </span>
            </div>

            <div>    
                <h4>Top 10</h4>
                <span>
                    {(data) ? 
                        seasonData.top10s : 
                        0
                    }
                </span>
            </div>

            <div>
                <h4>Kills</h4>
                <span>
                    {(data) ? 
                        seasonData.kills : 
                        0
                    }
                </span>
            </div>

            <div>
                <h4>K/O Ratio</h4>
                <span>
                    {(data) ? 
                        (Number.isNaN(seasonData.kills/seasonData.losses) ? 
                        0 : 
                        seasonData.kills/seasonData.losses).toFixed(2) : 
                        0
                    }
                </span>
            </div>
            
        </div>

    )
}