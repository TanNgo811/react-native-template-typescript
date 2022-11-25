import {StyleSheet} from 'react-native';

export const layoutStyles = StyleSheet.create({
  //
  flex: {
    flex: 1,
  },

  flexGrow: {
    flexGrow: 1,
  },

  flexShrink: {
    flexShrink: 1,
  },

  flexRow: {
    flexDirection: 'row',
  },

  flexRowReverse: {
    flexDirection: 'row-reverse',
  },

  flexCol: {
    flexDirection: 'column',
  },

  flexColReverse: {
    flexDirection: 'column-reverse',
  },

  justifyContentCenter: {
    justifyContent: 'center',
  },

  justifyContentStart: {
    justifyContent: 'flex-start',
  },

  justifyContentEnd: {
    justifyContent: 'flex-end',
  },

  justifyContentBetween: {
    justifyContent: 'space-between',
  },

  justifyContentAround: {
    justifyContent: 'space-around',
  },

  alignItemsCenter: {
    alignItems: 'center',
  },

  alignItemsStart: {
    alignItems: 'flex-start',
  },

  alignItemsEnd: {
    alignItems: 'flex-end',
  },

  alignSelfStart: {
    alignSelf: 'flex-start',
  },

  alignSelfEnd: {
    alignSelf: 'flex-end',
  },

  alignContentStart: {
    alignContent: 'flex-start',
  },

  alignContentEnd: {
    alignContent: 'flex-end',
  },

  alignContentAround: {
    alignContent: 'space-around',
  },

  alignContentCenter: {
    alignContent: 'center',
  },

  alignContentBetween: {
    alignContent: 'space-between',
  },

  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flexRowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  flexRowAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  flexRowEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  flexColCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  flexColStart: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  flexColEnd: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});
