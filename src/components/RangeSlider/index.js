import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import CustomLabel from './CustomLabel'
import DefaultMarker from './CustomMarker'

class RangeSlider extends Component {
  render() {
    // values
    const {
      minValue,
      maxValue,
      incrementSize,
      track,
      marker,
      labels,
      controlledValue: { value },
      editor,
    } = this.props
    // track
    const { filledColor, unfilledColor, height, trackRounding } = track
    // marker
    const {
      markerColor,
      markerSize,
      shadow,
      markerBorder,
      markerBorderColor,
      markerBorderNum,
    } = marker
    // labels
    const { enabled, bgColor, txtColor, font, labelRounding } = labels
    const trackValue = (editor || value===undefined) ? minValue : value
    return (
      <View style={styles.wrapper}>
        <MultiSlider
          enabledOne
          // values
          min={minValue}
          values={[trackValue]}
          max={maxValue}
          step={incrementSize}
          currentValue={[trackValue]}
          // track
          trackStyle={{
            backgroundColor: unfilledColor,
            height: height,
            borderRadius: trackRounding,
          }}
          selectedStyle={{
            backgroundColor: filledColor,
            height: height,
            borderRadius: trackRounding,
          }}
          // marker
          customMarker={(props) => (
            <DefaultMarker
              {...props}
              markerColor={markerColor}
              markerSize={markerSize}
              shadow={shadow}
              markerBorder={markerBorder}
              markerBorderColor={markerBorderColor}
              markerBorderNum={markerBorderNum}
              height={height}
            />
          )}
          // labels
          enableLabel={enabled}
          customLabel={(props) => (
            <CustomLabel
              {...props}
              bgColor={bgColor}
              txtColor={txtColor}
              font={font}
              labelRounding={labelRounding}
            />
          )}
          // database
          onValuesChangeFinish={this.sliderValuesChange}
        />
      </View>
    )
  }

  sliderValuesChange = (values) => {
    // database onchange props
    const {
      controlledValue: { onChange },
    } = this.props
    return onChange(values[0])
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default RangeSlider
