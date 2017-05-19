import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Home from './components/Home';
import Detail from './components/Detail';
import { StackNavigator } from 'react-navigation';

const RedditFeed = StackNavigator({
  Home: { screen: Home },
  Detail: { screen: Detail },
});

AppRegistry.registerComponent('RedditFeed', () => RedditFeed);
