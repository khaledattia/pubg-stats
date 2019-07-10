import React from 'react';
import { Survival } from './Survival';
import { Combat } from './Combat';

export const AnalyzedResult = ({data, gameMode, mode}) => 


    <div className="survival-combat">
        <Survival 
            data     = {data} 
            gameMode = {gameMode} 
            mode     = {mode} 
        />
        
        <Combat 
            data     = {data} 
            gameMode = {gameMode} 
            mode     = {mode} 
        />
    </div>
