import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020f22',
  },
  categories: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 20,
    marginTop: 20,
  },
  innerContainer: {
    marginTop: 20,
    height: 120,
  },
  listContainer: {
    width: 150,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    borderWidth: 1,
    borderColor: '#fff',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  titleStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  headline:{
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 20,
    marginTop: 10,
  },
  listStyle:{
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
  imageStyles:{
    width: 101,
    height: 97,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  titleStyles:{
    color: '#fff',
    width: '45%',
    fontSize: 16,
    fontWeight: '700',
    maxWidth:600
  },
  desStyle:{
    color: '#fff',
    width: '70%',
    fontSize: 12,
    marginTop: 10,
  }
});
