const width = 50

import { StyleSheet } from 'react-native'
export default class StyleSheetFactory2 {
  static getSheet(bgColor, txtColor, font, labelRounding, bodyFont) {
    return StyleSheet.create({
      sliderLabel: {
        position: 'absolute',
        justifyContent: 'center',
        bottom: '100%',
        width: width,
        height: width,
        borderRadius: labelRounding / 2,
      },
      sliderLabelWrapper: {
        borderRadius: labelRounding / 2,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: bgColor,
        width: width,
        height: width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      sliderLabelText: {
        textAlign: 'center',
        fontSize: font,
        color: txtColor,
        ...bodyFont,
      },
    })
  }
}
