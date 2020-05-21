import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import StyleSheetFactory2 from "./styles2"

const AnimatedView = Animated.createAnimatedComponent(View);

const width = 50;

function LabelBase(props) {
  const { position, value, leftDiff, pressed } = props;
  const scaleValue = React.useRef(new Animated.Value(0.1)); // Behaves oddly if set to 0
  const cachedPressed = React.useRef(pressed);
  const {bgColor, txtColor, font, labelBorder, labelBorderColor, labelBorderNum} = props;
  let myStyleSheet = StyleSheetFactory2.getSheet(bgColor, txtColor, font, labelBorderColor, labelBorderNum);

  React.useEffect(() => {
    Animated.timing(scaleValue.current, {
      toValue: pressed ? 1 : 0.1,
      duration: 200,
      delay: pressed ? 0 : 2000,
      useNativeDriver: false,
    }).start();
    cachedPressed.current = pressed;
  }, [pressed]);
  
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
        ]}>
        <View style={myStyleSheet.pointer} />
        <Text style={myStyleSheet.sliderLabelText}>{value}</Text>
      </AnimatedView>
    )
  );
}

class CustomLabel extends React.Component {

  render() {
    const {
      leftDiff,
      oneMarkerValue,
      oneMarkerLeftPosition,
      oneMarkerPressed,
    } = this.props;
    const {bgColor, font, txtColor, labelBorder, labelBorderColor, labelBorderNum} = this.props;
    return (
      <View style={{position: 'relative'}}>
        <LabelBase {...this.props} bgColor={bgColor} txtColor= {txtColor} font={font}
											labelBorder={labelBorder} labelBorderColor={labelBorderColor} labelBorderNum={labelBorderNum}
          position={oneMarkerLeftPosition}
          value={oneMarkerValue}
          leftDiff={leftDiff}
          pressed={oneMarkerPressed}
        />
      </View>
    );
  }
}

export default CustomLabel





// class LabelBase extends React.Component {
//   constructor(props) {
//     super(props)

//     const { pressed } = props

//     this.scaleValue = React.createRef(new Animated.Value(0.1))
//     this.cachedPressed = React.createRef(pressed)
//   }

//   // componentDidUpdate(prevProps) {
//   //   console.log('here')
//   //   const { pressed } = this.props

//   //   if (prevProps.pressed !== pressed) {
//   //     console.log('here2')
//   //     Animated.timing(this.scaleValue.current, {
//   //       toValue: pressed ? 1 : 0.1,
//   //       duration: 200,
//   //       delay: pressed ? 0 : 2000,
//   //       useNativeDriver: false,
//   //     }).start();
      
//   //     this.cachedPressed.current = pressed;
//   //   }
//   // }

//   render() {
//     const { position, value } = this.props;
//     const {bgColor, font, labelBorder, labelBorderColor, labelBorderNum} = this.props;
//     let myStyleSheet = StyleSheetFactory2.getSheet(bgColor, font, labelBorderColor, labelBorderNum);

//     return (
//       Number.isFinite(position) &&
//       Number.isFinite(value) && (
//         <AnimatedView
//           style={[
//             myStyleSheet.sliderLabel,
//             {
//               left: position - width / 2,
//               transform: [
//                 { translateY: width },
//                 { scale: this.scaleValue.current },
//                 { translateY: -width },
//               ],
//             },
//           ]}>
//           <View style={myStyleSheet.pointer} />
//           <Text style={myStyleSheet.sliderLabelText}>{value}</Text>
//         </AnimatedView>
//       )
//     )
//   }
// }