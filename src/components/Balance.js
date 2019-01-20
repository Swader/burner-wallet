import React from 'react';
import Blockies from 'react-blockies';
import { Scaler } from "dapparatus";

export  default ({icon, text, selected, amount, address, dollarDisplay}) => {

  let opacity = 0.5
  if(text == selected){
    opacity=1.0
  }

  if(!amount){
    amount=0.00
    opacity=0.19
  }

  return (
    <div className="balance content row" style={{opacity,paddingBottom:0}}>
      <div className="avatar col p-0">
        <img src={icon} style={{maxWidth:50,maxHeight:50}}/>
      </div>
      <div style={{position:"absolute",right:10,marginTop:15}}>
        <Scaler config={{startZoomAt:400,origin:"200px 30px",adjustedZoom:1}}>
          <div style={{fontSize:40,letterSpacing:-2}}>
            ${dollarDisplay(amount)}
          </div>
        </Scaler>
      </div>
    </div>
  )
};
