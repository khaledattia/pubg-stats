import React from 'react';
import { GiChart } from 'react-icons/gi';

const displayTime = (time) => {
    let temp = time < 10 ? '0'+time : time
    return temp; 
}

export const Survival = ({data, gameMode, mode}) => {
    const seasonData = data && data[`${gameMode+mode}`];
    
    return (
        <div className="survival">
            <div className="heading">
                <h4>
                    <GiChart /> Survival
                </h4>
            </div>
            
            <div>
                <div className="p" >
                    <div>
                        <span>Longest Survival</span>
                        <span>
                            {(data) ? displayTime(Math.floor(seasonData.longestTimeSurvived/60)) : 0} : <span> </span>
                            {(data) ? displayTime(Math.floor((seasonData.longestTimeSurvived*60)%60)) : 0} min.
                        </span>
                    </div>

                    <div>
                        <span>AVG Survival</span>
                        <span>
                            {(data) ? displayTime(Math.floor((seasonData.timeSurvived/60)/seasonData.roundsPlayed)) : 0} : 
                            <span> </span>
                            {(data) ? displayTime(Math.floor((seasonData.timeSurvived*60)%60)) : 0} min.
                        </span>
                    </div>
                </div>

                <div className="p" >
                    <div>
                        <span>Ride Distance</span>
                        <span>
                            {(data) ? Math.floor(seasonData.rideDistance/1000) : 0} KM
                        </span>
                    </div>

                    <div>
                        <span>
                            walk distance
                        </span>
                        <span>
                            {(data) ? Math.floor(seasonData.walkDistance/1000) : 0} KM
                        </span>
                    </div>
                </div>

                <div className="p" >
                    <div>
                        <span>Win Ratio</span>
                        <span>
                            {(data) ? 
                                Number.isNaN(seasonData.wins/seasonData.roundsPlayed) ? 0 : 
                                (seasonData.wins/seasonData.roundsPlayed*100).toFixed(2) 
                                : 0
                            } %
                        </span>
                    </div>

                    <div>
                        <span>Top 10%</span>
                        <span>
                            {(data) ? 
                                Number.isNaN(seasonData.top10s/seasonData.roundsPlayed) ? 0 : 
                                (seasonData.top10s/seasonData.roundsPlayed*100).toFixed(2) 
                                : 0
                            } %
                        </span>
                    </div>
                </div>

                <div className="p" >
                    <div>
                        <span>Heals</span>
                        <span>
                            {(data) ? seasonData.heals : 0}
                        </span>
                    </div>
                    {(data && gameMode === 'solo') ? 
                        null : 
                        <div>
                            <span>Revive</span>
                            <span>
                                {(data) ? seasonData.revives : 0}
                            </span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}