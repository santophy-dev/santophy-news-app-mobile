import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#000',
  },
  headline: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 20,
    marginTop: 20,
  },
  listContainer: {
    borderColor: '#fff',
    borderWidth: 1,
    width: '90%',
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  urlToImage: {
    width: 100,
    height: 90,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  innerContainer: {
    padding: 10,
  },
  titleStyle:{
    color: '#fff',
    width: '60%',
    fontSize: 16,
    fontWeight: '700',
  },
  description:{
    color: '#fff',
    width: '40%',
    fontSize: 12,
    marginTop: 10,
  }
});
