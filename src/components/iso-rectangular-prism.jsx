import React from "react"
import "./iso-rectangular-prism.scss"

export default function(props){
  return (
    <div className="rectangular-prism">
      <div className="zero-dimension-container z-index-1">
        <div
          className="rp-outside-left z-index-1"
          style={{
            width: (!props.outsideDimensions.width) ? "50px" : `${props.outsideDimensions.width}px`,
            height: (!props.outsideDimensions.height) ? "10px" : `${props.outsideDimensions.height}px`
          }}
        ></div>
      </div>
      <div className="zero-dimension-container z-index-1">
        <div
          className="rp-outside-right z-index-1"
          style={{
            width: (!props.outsideDimensions.length || !props.outsideDimensions.height) ? "100px" : `${props.outsideDimensions.length}px`,
            height: (!props.outsideDimensions.height) ? "10px" : `${props.outsideDimensions.height}px`,
            transform: (!props.outsideDimensions.width) ? `translate(${Math.cos(Math.PI/6)*50}px,25px) rotateZ(-30deg) skew(-30deg)` : `translate(${Math.cos(Math.PI/6)*props.outsideDimensions.width}px,${props.outsideDimensions.width/2}px) rotateZ(-30deg) skew(-30deg)`
          }}></div>
      </div>
      <div className="zero-dimension-container z-index-1">
        <div 
          className="rp-outside-top z-index-1"
          style={{
            width: (!props.outsideDimensions.length) ? "100px" : `${props.outsideDimensions.length}px`,
            height: (!props.outsideDimensions.width) ? `${Math.cos(Math.PI/6)*50}px` : `${Math.cos(Math.PI/6)*props.outsideDimensions.width}px`,
          }}></div>
      </div>
      <div className="zero-dimension-container z-index-2">
        <div
          className="rp-inside-left z-index-2"
          style={{
            width: "40px",
            height: "5px",
            transform: `rotateZ(-30deg) skew(-30deg) translate(60px,0px)`
          }}></div>
      </div>
      <div className="zero-dimension-container z-index-2">
        <div
          className="rp-inside-right z-index-2"
          style={{
            width: `${20/Math.cos(Math.PI/6)}px`,
            height: "5px",
            transform: `rotateZ(30deg) skew(30deg) translate(${100}px,${-Math.cos(Math.PI/6)*100+1}px)`
          }}></div>
      </div>
      <div className="zero-dimension-container z-index-2">
        <div
          className="rp-inside-bottom z-index-2"
          style={{
            width: "40px",
            height: "20px",
            transform: `rotateZ(-30deg) skew(30deg) translate(${60-5*Math.sin(Math.PI/3)-1}px,${5*Math.sin(Math.PI/3)+0.5}px)`
          }}></div>
      </div>
    </div>
  )
}