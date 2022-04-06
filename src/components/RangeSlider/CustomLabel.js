import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import StyleSheetFactory2 from './styles2'

const AnimatedView = Animated.createAnimatedComponent(View)

function LabelBase(props) {
  const { position, value, leftDiff, pressed } = props
  const scaleValue = React.useRef(new Animated.Value(0.0)) // Behaves oddly if set to 0
  const cachedPressed = React.useRef(pressed)
  const { bgColor, txtColor, font, labelRounding, bodyFont } = props
  let myStyleSheet = StyleSheetFactory2.getSheet(
    bgColor,
    txtColor,
    font,
    labelRounding,
    bodyFont
  )
  const width = 50
  React.useEffect(() => {
    Animated.timing(scaleValue.current, {
      toValue: pressed ? 1 : 0.0,
      duration: 200,
      delay: pressed ? 0 : 2000,
      useNativeDriver: false,
    }).start()
    cachedPressed.current = pressed
  }, [pressed])
  return (
    Number.isFinite(position) &&
    Number.isFinite(value) && (
      <AnimatedView
        style={[
          myStyleSheet.sliderLabel,
          {
            left: position - width / 2,
            transform: [
              { translateY: width },
              { scale: scaleValue.current },
              { translateY: -width },
            ],
          },
        ]}
      >
        <View style={myStyleSheet.sliderLabelWrapper}>
          <Text style={myStyleSheet.sliderLabelText}>{value}</Text>
        </View>
      </AnimatedView>
    )
  )
}

class CustomLabel extends Component {
  render() {
    const {
      leftDiff,
      oneMarkerValue,
      oneMarkerLeftPosition,
      oneMarkerPressed,
      roundLabelValue
    } = this.props

    const roundedMarkerValue = roundLabelValue(oneMarkerValue)

    const { bgColor, font, txtColor, labelRounding } = this.props
    return (
      <View style={{ position: 'relative' }}>
        <LabelBase
          {...this.props}
          bgColor={bgColor}
          txtColor={txtColor}
          font={font}
          labelRounding={labelRounding}
          position={oneMarkerLeftPosition}
          value={roundedMarkerValue}
          leftDiff={leftDiff}
          pressed={oneMarkerPressed}
        />
      </View>
    )
  }
}

export default CustomLabel
