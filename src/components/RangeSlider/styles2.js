const width = 50;

import {StyleSheet} from 'react-native';
export default class StyleSheetFactory2 {
    static getSheet(bgColor, txtColor, font, labelBorderColor, labelBorderNum){
        return StyleSheet.create({
            sliderLabel: {
                position: 'absolute',
                justifyContent: 'center',
                bottom: '100%',
                width: width,
                height: width,
            },
            sliderLabelText: {
                textAlign: 'center',
                lineHeight: width,
                borderRadius: width/2,
                borderWidth: 2,
                borderColor: '#999',
                backgroundColor: bgColor,
                flex: 1,
                fontSize: font,
                color: txtColor,
                width: width,
                height: width
            }
        });
    }
}