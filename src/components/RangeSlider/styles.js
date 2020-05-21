import {StyleSheet, Platform } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(markerColor, markerSize, shadowNum, markerBorderColor, markerBorderNum) {
        return StyleSheet.create({
          markerStyle: {
            ...Platform.select({
              ios: {
                height: markerSize,
                width: markerSize,
                borderRadius: markerSize,
                borderWidth: markerBorderNum,
                borderColor: markerBorderColor,
                backgroundColor: markerColor,
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: shadowNum,
                },
                shadowRadius: 1,
                shadowOpacity: 0.2,
              },
              android: {
                height: markerSize,
                width: markerSize,
                borderRadius: markerSize,
                backgroundColor: markerColor,
              },
              web: {
                height: markerSize,
                width: markerSize,
                borderRadius: markerSize,
                borderWidth: markerBorderNum,
                borderColor: markerBorderColor,
                backgroundColor: markerColor,
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: shadowNum,
                },
                shadowRadius: 1,
                shadowOpacity: 0.2,
              },
            }),
          },
          pressedMarkerStyle: {
            ...Platform.select({
              web: {},
              ios: {},
              android: {
                height: 20,
                width: 20,
                borderRadius: 20,
              },
            }),
          },
          disabled: {
            backgroundColor: '#d3d3d3',
          },
        });
    }
}
