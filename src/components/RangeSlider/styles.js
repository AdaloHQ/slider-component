import {StyleSheet, Platform } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(markerColor, markerSize, shadowNum, markerBorderColor, markerBorderNum, heightNum) {
        return StyleSheet.create({
          markerStyle: {
            ...Platform.select({
              ios: {
                marginTop:heightNum,
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
                marginTop:heightNum,
                height: markerSize,
                width: markerSize,
                borderRadius: markerSize,
                backgroundColor: markerColor,
              },
              web: {
                marginTop:heightNum,
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
              marginTop:heightNum,
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
