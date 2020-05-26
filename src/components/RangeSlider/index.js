import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import CustomLabel from './CustomLabel';
import DefaultMarker from './CustomMarker';

// needed
// values: 
// track: 
// marker: 
// labels: 
// connect to database

//done
// values: min value, max value, increment size
// track: height, filled color, unfilled color
// marker: marker color, marker size, shadow, border
// labels: background color, font

class RangeSlider extends Component {

	render() {
		// values
		const {minValue, maxValue, incrementSize, track, marker, labels} = this.props;
		let start = Math.round(minValue + ((maxValue-minValue)/3));
		// track
		const {filledColor,  unfilledColor, height} = track;
		// marker
		const {markerColor, markerSize, shadow, markerBorder, markerBorderColor, markerBorderNum} = marker;
		// labels
		const {enabled, bgColor, txtColor, font, labelBorder, labelBorderColor, labelBorderNum} = labels;
		return (
			<View style={styles.wrapper}>
				<MultiSlider 
					enabledOne
					// values
					min={minValue}
					values={[start]}
					max={maxValue}
					step={incrementSize}
					currentValue={[start]}
					// track
					trackStyle={{
						backgroundColor: unfilledColor,
						height: height,
					}}
					selectedStyle={{
						backgroundColor: filledColor,
						height: height,
					}}
					// marker
					customMarker={(props)=> <DefaultMarker {...props} markerColor={markerColor} markerSize={markerSize} shadow={shadow} 
												markerBorder={markerBorder} markerBorderColor={markerBorderColor} markerBorderNum={markerBorderNum} 
												bgColor = {bgColor}/>}
					// labels
					enableLabel = {enabled}
					customLabel={(props)=> <CustomLabel {...props} bgColor={bgColor} txtColor = {txtColor} font={font}
											labelBorder={labelBorder} labelBorderColor={labelBorderColor} labelBorderNum={labelBorderNum}/>}
					// database
					onValuesChangeFinish={this.sliderValuesChange}
				/>
			</View>
		)
	}

	sliderValuesChange = values => {
		const {value, onChange} = this.props.controlledValue; 
		console.log(this.props);
		return onChange(values[0])
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