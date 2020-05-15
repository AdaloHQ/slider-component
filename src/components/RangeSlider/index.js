import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

class RangeSlider extends Component {

	render() {
		const {text, minValue, maxValue, incrementSize, filledColor, unfilledColor, height, orient, markerColor, markerSize} = this.props

		return (
			<View style={styles.wrapper}>
				<Text style={unfilledColor}>{text}</Text>
				<MultiSlider
					min={minValue}
					max={maxValue}
					enabledOne
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
