import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import CameraScreen from '../screens/CameraScreen';
import CreateExperience from '../screens/CreateExperience';
import SavedPoemsScreen from '../screens/SavedPoemsScreen';
import ExperienceGallery from '../screens/ExperienceGallery';
import SettingsScreen from '../screens/SettingsScreen';
import Discover from '../screens/Discover';
import PoemDetails from '../screens/PoemDetails';

export const DiscoverStackNavigator = StackNavigator(
  {
    Discover: {
      screen: Discover,
      navigationOptions: {
        title: 'Discover',
      },
    },
    PoemDetails: {
      screen: PoemDetails,
      navigationOptions: {
        title: '',
      },
    },
    CameraScreen: {
      screen: CameraScreen,
      navigationOptions: {
        title: 'Camera',
      },
    },
    CreateExperience: {
      screen: CreateExperience,
      navigationOptions: {
        title: 'Create Experience',
      },
    },
  },
  {
    initialRouteName: 'Discover',
  },
);

export default TabNavigator(
  {
    DiscoverStackNavigator: {
      screen: DiscoverStackNavigator,
    },
    SavedPoems: {
      screen: SavedPoemsScreen,
    },
    ExperienceGallery: {
      screen: ExperienceGallery,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'SavedPoems':
            iconName = Platform.OS === 'ios' ? `ios-clipboard${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'DiscoverStackNavigator':
            iconName = Platform.OS === 'ios' ? `ios-compass${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'ExperienceGallery':
            iconName = Platform.OS === 'ios' ? `ios-images${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);
