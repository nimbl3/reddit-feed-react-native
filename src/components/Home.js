import React, { Component } from 'react';
import { Text, View, ListView, TouchableNativeFeedback } from 'react-native';
import styles from '../Style';
import config from '../Config';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Reddit Progreamming Feed',
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      posts: [],
      loaded: false
    };
  };

componentDidMount() {
  this._fetchRedditData();
};

_fetchRedditData() {
  return fetch(config.url.home)
        .then((response) => {
          let results = [];
          let data = JSON.parse(response._bodyInit).data;
          let nextPage = data.after;
          let posts = data.children;

          posts.forEach(post => {
            postData = post.data;

            results.push({
              id: postData.id,
              title: postData.title,
              point: postData.score,
              created_at: postData.created
            })
          });

          let dataRows = this.state.dataSource.cloneWithRows(results);

          this.setState({
            loaded: true,
            'posts': dataRows
          })
        })
        .catch((error) => {
          console.error(error);
        });
  }

  _formatDateTime(unixtime) {
    let dateConverted = new Date(unixtime * 1000);

    return `${dateConverted.toLocaleDateString()} ${dateConverted.toLocaleTimeString()}`
  }

  _renderPost(data) {
    const { navigate } = this.props.navigation;

    return (
      <TouchableNativeFeedback onPress={() => navigate('Detail', { data: data })}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{data.title}</Text>
          <View style={styles.cardDetail}>
            <Text style={styles.cardTitleDetail}>Points: {data.point}</Text>
            <Text style={styles.cardTitleDetail}>{this._formatDateTime(data.created_at)}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loaded &&

          <ListView
            dataSource={this.state.posts}
            renderRow={(rowData) => this._renderPost(rowData)}
          />
        }

        {
          !this.state.loaded &&

          <View style={styles.loadding}>
            <Text>Loadding...</Text>
          </View>
        }
      </View>
    );
  }
}

export default HomeScreen;
