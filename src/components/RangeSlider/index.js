import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import MultiSlider from '@adalo/react-native-multi-slider'
import CustomLabel from './CustomLabel'
import DefaultMarker from './CustomMarker'

class RangeSlider extends Component {
  state = { width: null }

  handleLayout = ({ nativeEvent }) => {
    const { width } = (nativeEvent && nativeEvent.layout) || {}
    const { width: prevWidth } = this.state

    if (width !== prevWidth) {
      this.setState({ width })
    }
  }

  roundLabelValue = value => {
    const {
      incrementSize
    } = this.props

    if (!value) return value;

    // precision function => obtains number of digits after decimal point of incrementSize
    if (!isFinite(incrementSize) || incrementSize <= 0) return value;
    let multiplier = 1
    let precision = 0
    while (Math.round(incrementSize * multiplier) / multiplier !== incrementSize) { 
      multiplier *= 10 
      precision++
    }
    
    let finalValue = parseFloat(parseFloat(value).toFixed(precision))
    return finalValue;
  }

  sliderValuesChange = values => {
    // database onchange props
    const {
      controlledValue: { onChange }
    } = this.props

    const finalValue = this.roundLabelValue(values[0])

    return onChange(finalValue)
  }

  render() {
    const { width } = this.state

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
      _fonts,
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
    const trackValue = editor || value === undefined ? minValue : value

    const padding = Math.ceil(markerSize / 2)
    const paddingStyles = { paddingLeft: padding, paddingRight: padding }
    const sliderLength = width - padding * 2

    return (
      <View
        style={[styles.wrapper, paddingStyles]}
        onLayout={this.handleLayout}
      >
        {width !== null && (
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
            customMarker={props => (
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
            customLabel={props => {
              let { oneMarkerValue } = props 
              oneMarkerValue = this.roundLabelValue(oneMarkerValue)

              return (
                <CustomLabel
                  {...props}
                  oneMarkerValue={oneMarkerValue}
                  bgColor={bgColor}
                  txtColor={txtColor}
                  font={font}
                  labelRounding={labelRounding}
                  bodyFont={
                    track.styles
                      ? track.styles.bodyFont
                      : { fontFamily: _fonts.body }
                  }
                />
              )
            }}
            // database
            onValuesChangeFinish={this.sliderValuesChange}
            sliderLength={sliderLength}
            snapped={true}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 50,
  },
})

export default RangeSlider
