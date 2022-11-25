import {StyleSheet} from 'react-native';

export const demoScreenStyles = StyleSheet.create({
  //
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },

  contentContainer: {
    flex: 1,
    padding: 16,
  },

  languageChoice: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 8,
  },
});
