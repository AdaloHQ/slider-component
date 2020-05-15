import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

class RangeSlider extends Component {
	render() {
		const { color, text, minValue, maxValue} = this.props

		return (
			<View style={styles.wrapper}>
				<Text style={{ color }}>{text}</Text>
				<MultiSlider
					min={minValue}
					max={maxValue}
					currentValue={5}
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
