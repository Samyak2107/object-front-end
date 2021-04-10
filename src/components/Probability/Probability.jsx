import React from 'react';
import './Probability.css';

const Probability = ({ userClickedDetect }) => {
    if(userClickedDetect) {
        return (
            <div id='inputimage' class="table-box">
            <div class="table-row table-head">
                <div class="table-cell first-cell">
                    <p>Prediction</p>
                </div>
                <div class="table-cell">
                    <p>Probability</p>
                </div> 
            </div>
    
    
            <div class="table-row">
                <div class="table-cell first-cell">
                    <strong><p id='p1'></p></strong>
                </div>
                <div class="table-cell">
                <strong><p id='p2'></p></strong>
                </div>  
            </div>
    
    
            <div class="table-row">
                <div class="table-cell first-cell">
                <strong><p id='p3'></p></strong>
                </div>
                <div class="table-cell">
                <strong><p id='p4'></p></strong>
                </div>
            </div>
    
            <div class="table-row">
                <div class="table-cell first-cell">
                <strong><p id='p5'></p></strong>
                </div>
                <div class="table-cell">
                <strong><p id='p6'></p></strong>
                </div>
            </div>
    
            <div class="table-row">
                <div class="table-cell first-cell">
                <strong><p id='p7'></p></strong>
                </div>
                <div class="table-cell">
                <strong><p id='p8'></p></strong>
                </div>
            </div>
    
            <div class="table-row">
                <div class="table-cell first-cell">
                <strong><p id='p9'></p></strong>
                </div>
                <div class="table-cell">
                <strong><p id='p10'></p></strong>
                </div>
            </div>
            </div>
        );
    } else {
        return(
        <h3 className='mt4'>The image and its predictions will appear here once you enter the image address and press detect.</h3>
        );
    }
        
    } 
    

export default Probability;
