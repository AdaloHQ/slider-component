import React from 'react';
import PropTypes from 'prop-types';
import RangeSlider from './index'
import { View, Text, StyleSheet } from 'react-native';

const sliderRadius = 3;
const width = 50;
export default class DefLabel extends React.Component {
  static propTypes = {

    oneMarkerValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    oneMarkerLeftPosition: PropTypes.number,
    oneMarkerPressed: PropTypes.bool,
  };


  render() {
    const {
      oneMarkerValue,
      oneMarkerLeftPosition,
      oneMarkerPressed,
    } = this.props;

    const {bgColor, padding} = this.props;

    return (
      <View style={{ position: 'relative' }}>
        {Number.isFinite(oneMarkerLeftPosition) &&
          Number.isFinite(oneMarkerValue) && (
            <View
              style={[
                styles.sliderLabel,
                {backgroundColor: bgColor, color: "#000000", padding, left: oneMarkerLeftPosition - width / 2 + sliderRadius },
                oneMarkerPressed && styles.markerPressed,
              ]}
            >
              <Text style={styles.sliderLabelText}>{oneMarkerValue}</Text>
            </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderLabel: {
    position: 'absolute',
    bottom: 0,
    minWidth: width,
  },
  sliderLabelText: {
    alignItems: 'center',
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 11,
  },
  markerPressed: {
    borderWidth: 2,
    borderColor: '#999',
  },
});
