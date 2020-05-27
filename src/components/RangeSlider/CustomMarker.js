import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import StyleSheetFactory from "./styles"

class DefaultMarker extends React.Component {
  render() {
    const {markerColor, markerSize, shadow, markerBorder, markerBorderColor, height} = this.props;
    let {markerBorderNum} = this.props;
    let shadowNum = 0;
    if(shadow){
      shadowNum = 3;
    }
    if(markerBorder === "No"){
      
    }
    if(!markerBorder){
      markerBorderNum = 0;
    }
    let heightNum = height-2;
    console.log(height);
    let myStyleSheet = StyleSheetFactory.getSheet(markerColor, markerSize, shadowNum, markerBorderColor, markerBorderNum, heightNum);
    return (
      <TouchableHighlight>
        <View
          style={
            this.props.enabled
              ? [
                  myStyleSheet.markerStyle, 
                  this.props.markerStyle,
                  this.props.pressed && myStyleSheet.pressedMarkerStyle,
                  this.props.pressed && this.props.pressedMarkerStyle,
                ]
              : [
                  myStyleSheet.markerStyle,
                  myStyleSheet.disabled,
                  this.props.disabledMarkerStyle,
                ]
          }
        />
      </TouchableHighlight>
    );
  }
}

export default DefaultMarker;