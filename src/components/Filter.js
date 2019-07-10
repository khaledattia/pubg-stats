import React from 'react';
import { MdPerson } from 'react-icons/md';

export const Filter = ({ onGameMode, mode, gameMode, testFun }) => {
    let changedMode;
    
    function fun(){
        testFun(changedMode.value)
    }

    return (
        <div className="filter" >
            <div className="filter-by-team">
                <a className={gameMode === 'solo'? 'active-mode' : ""} 
                    onClick={(e) => (onGameMode("solo", e))} href="/#">
                    <MdPerson /> 
                    solo
                </a>

                <a className={gameMode === 'duo'? 'active-mode' : ""} 
                    onClick={(e) => (onGameMode("duo", e))} href="/#">
                    <MdPerson />
                    <MdPerson /> 
                    Duo
                </a>

                <a className={gameMode === 'squad'? 'active-mode' : ""} 
                    onClick={(e) => (onGameMode("squad", e))} href="/#">
                    <MdPerson /> 
                    <MdPerson /> 
                    <MdPerson /> 
                    <MdPerson /> 
                    Squad
                </a>

            </div>

            <div className="filter-by-sms" >
                <div>
                    <select>
                        <option>Current Season</option>
                    </select>
                </div>

                <div>
                    <select id="mode" onChange={fun} ref={mode => {changedMode = mode}} value={mode}>
                        <option value="">Classic(TTP)</option>
                        <option value="-fpp">Classic(FPP)</option>
                    </select>
                </div>

                {/* <div>
                    <select>
                        <option>Europe</option>
                    </select>
                </div> */}
                
            </div>
        </div>
    )
}