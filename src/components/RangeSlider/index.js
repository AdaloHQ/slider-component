import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
// import DefLabel from './DefLabel';
import CustomLabel from './CustomLabel';
import DefaultMarker from './CustomMarker';

// needed
// values: 
// track: fix orient
// marker: 
// labels: border
// connect to database

//done
// values: title, min value, max value, increment size
// track: height, orientation, width, filled color, unfilled color
// marker: marker color, marker size, shadow, border
// labels: background color, font

class RangeSlider extends Component {

	render() {
		// values
		const {text, color, minValue, maxValue, incrementSize, track, marker, labels} = this.props;
		// track
		const {filledColor,  unfilledColor, orient, height, width} = track;
		// marker
		const {markerColor, markerSize, shadow, markerBorder, markerBorderColor, markerBorderNum} = marker;
		// labels
		const {enabled, bgColor, txtColor, font, labelBorder, labelBorderColor, labelBorderNum} = labels;
		return (
			<View style={styles.wrapper}>
				<Text style={{color}}>{text}</Text>
				<MultiSlider
					enabledOne
					// values
					min={minValue}
					max={maxValue}
					step={incrementSize}
					// track
					trackStyle={{
						backgroundColor: filledColor,
						height: height,
					}}
					selectedStyle={{
						backgroundColor: unfilledColor,
						height: height,
					}}
					vertical={orient}
					sliderLength={width}
					// marker
					customMarker={(props)=> <DefaultMarker {...props} markerColor={markerColor} markerSize={markerSize} shadow={shadow} 
					 						markerBorder={markerBorder} markerBorderColor={markerBorderColor} markerBorderNum={markerBorderNum} 
											 bgColor = {bgColor}/>}
					// labels
					enableLabel = {enabled}
					customLabel={(props)=> <CustomLabel {...props} bgColor={bgColor} txtColor = {txtColor} font={font}
											labelBorder={labelBorder} labelBorderColor={labelBorderColor} labelBorderNum={labelBorderNum}/>}
				/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})


export default RangeSlider


