import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#fff'
  },
  loadding: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    flex: 1,
    backgroundColor: '#eff0f1',
    marginBottom: 8
  },
  cardTitle: {
    fontSize: 25,
    color: 'blue'
  },
  cardDetail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  cardTitleDetail: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#000'
  }
});

export default styles;
