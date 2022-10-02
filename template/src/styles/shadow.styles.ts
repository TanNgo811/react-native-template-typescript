import {StyleSheet} from 'react-native';

export const shadowStyles = StyleSheet.create({
  //
  container: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  loading: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: '100%',
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
