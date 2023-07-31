import { Platform, Dimensions, I18nManager } from 'react-native';

const windowSize = Dimensions.get('window');
const height = Math.max(windowSize.height, windowSize.width);
const width = Math.min(windowSize.height, windowSize.width);

export const { isRTL } = I18nManager;
export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
export const screenWidth = width;
export const screenHeight = height;
export const todayString = 'today';

export const UPDATE_SOURCES = {
  CALENDAR_INIT: 'calendarInit',
  TODAY_PRESS: 'todayPress',
  LIST_DRAG: 'listDrag',
  DAY_PRESS: 'dayPress',
  PAGE_SCROLL: 'pageScroll',
  PROP_UPDATE: 'propUpdate',
};
