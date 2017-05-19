import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import styles from '../Style';
import config from '../Config';

class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.data.title,
  });

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <WebView source={{uri: `${config.url.detail}/${params.data.id}`}}/>
      </View>
    );
  }
}

export default DetailScreen;
