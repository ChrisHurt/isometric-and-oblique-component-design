import React from "react"
import "./iso-rectangular-prism.scss"

export default function(props){
  return (
    <div className="rectangular-prism">
      <div className="zero-dimension-container">
        <div
          className="rp-outside-left"
          style={{
            width: (!props.width) ? "50px" : `${props.width}px`,
            height: (!props.height) ? "10px" : `${props.height}px`
          }}
        ></div>
      </div>
      <div className="zero-dimension-container">
        <div
          className="rp-outside-right"
          style={{
            width: (!props.length || !props.height) ? "100px" : `${props.length}px`,
            height: (!props.height) ? "10px" : `${props.height}px`,
            transform: (!props.width) ? `translate(${Math.cos(Math.PI/6)*50}px,25px) rotateZ(-30deg) skew(-30deg)` : `translate(${Math.cos(Math.PI/6)*props.width}px,${props.width/2}px) rotateZ(-30deg) skew(-30deg)`
          }}></div>
      </div>
      <div className="zero-dimension-container">
        <div 
          className="rp-outside-top"
          style={{
            width: (!props.length) ? "100px" : `${props.length}px`,
            height: (!props.width) ? `${Math.cos(Math.PI/6)*50}px` : `${Math.cos(Math.PI/6)*props.width}px`,
          }}></div>
      </div>
      <div className="zero-dimension-container">
        <div className="rp-inside-left"></div>
      </div>
      <div className="zero-dimension-container">
        <div className="rp-inside-right"></div>
      </div>
      <div className="zero-dimension-container">
        <div className="rp-inside-bottom"></div>
      </div>
    </div>
  )
}