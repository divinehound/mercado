import { StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from './Feed';
import Discover from './Discover';
import Orders from './Orders';
import TabBarText from '../components/TabBarText';
import TabBarIcon from '../components/TabBarIcon';

const Tabs = createBottomTabNavigator();
export class Main extends Component {
  render() {
    return (
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: ({ focused }) => <TabBarText focused={focused} title="Feed" />,
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon="newspaper-outline" />,
          }}
        />
        <Tabs.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarLabel: ({ focused }) => <TabBarText focused={focused} title="Discover" />,
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon="md-location" />,
          }}
        />
        <Tabs.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarLabel: ({ focused }) => <TabBarText focused={focused} title="Orders" />,
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon="pricetags" />,
          }}
        />
      </Tabs.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Main;
