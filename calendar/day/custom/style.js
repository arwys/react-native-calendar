import { StyleSheet, Platform } from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.single';

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    base: {
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    text: (isSchedule) => ({
      marginTop: Platform.OS === 'android' ? 0 : 4,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: appStyle.textDayFontWeight,
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      marginBottom: 1,
    }),
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6,
    },
    selected: {
      backgroundColor: '#66BD4E',
      borderRadius: 16,
      // borderWidth: 4,
      // borderColor: 'black',
    },
    today: {
      backgroundColor: appStyle.todayBackgroundColor,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: appStyle.selectedDayBackgroundColor,
      marginTop: 0,
    },
    todayText: (isSchedule) =>( {
      color: isSchedule ? '#FFFFFF' : 'black',
    }),
    selectedText: {
      color: 'black',
      marginBottom: 4,
    },
    disabledText: {
      color: appStyle.textDisabledColor,
    },
    dot: {
      backgroundColor: 'white',
      width: 7,
      height: 7,
      borderRadius: 100,
      display: 'none',
      bottom: 0
    },
    period: (containerStyle) => ({
      height: 30, 
      width: 77, 
      backgroundColor: 'red',
      backgroundColor: containerStyle[2]?.backgroundColor || containerStyle[1]?.backgroundColor, 
      borderRadius: 20,
      position: 'absolute', 
      left: 8, 
      zIndex: -1
    }),
    ...(theme[STYLESHEET_ID] || {}),
  });
}
