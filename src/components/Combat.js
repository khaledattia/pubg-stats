import React from 'react';
import { GiArrowed } from 'react-icons/gi';

export const Combat = ({data, gameMode, mode}) => {
    const seasonData = data && data[`${gameMode+mode}`];
    
    return (
        <div className="combat">
            <div className="heading">
                <h4>
                    <GiArrowed /> Combat
                </h4>
            </div>
            
            <div>
                <div className="p" >
                    <div>
                        <span>Headshots</span>
                        <span>
                            {(data) ? seasonData.headshotKills : 0}
                        </span>
                    </div>

                    <div>
                        <span>Headshots %</span>
                        <span>
                            {(data) ? 
                                ((Number.isNaN(seasonData.headshotKills/seasonData.kills) ? 0 : 
                                seasonData.headshotKills/seasonData.kills)*100).toFixed(2) : 0
                            }
                            %
                        </span>
                    </div>
                </div>

                <div className="p" >
                    <div>
                        <span>Most Kills</span>
                        <span>
                            {(data) ? seasonData.roundMostKills : 0}
                        </span>
                    </div>

                    <div>
                        <span>longest Kill</span>
                        <span>
                            {(data) ? (seasonData.longestKill).toFixed(2) : 0}m
                        </span>
                    </div>
                </div>

                <div className="p" >
                    <div>
                        <span>AVG Damage</span>
                        <span>
                            {(data) ? 
                                (Number.isNaN(seasonData.damageDealt/seasonData.roundsPlayed) ? 0 : 
                                seasonData.damageDealt/seasonData.roundsPlayed).toFixed(2) : 0}
                        </span>
                    </div>
                    <div>
                        <span>Assists</span>
                        <span>
                            {(data) ? seasonData.assists : 0}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}