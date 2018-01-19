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
import ExperienceDetails from '../screens/ExperienceDetails';

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
    //headerMode: 'none',
    initialRouteName: 'Discover',
  },
);

export const SavedPoemsStackNavigator = StackNavigator(
  {
    SavedPoems: {
      screen: SavedPoemsScreen,
      navigationOptions: {
        title: 'Saved Poems',
        headerLeft: null,
      },
    },
    PoemDetails: {
      screen: PoemDetails,
      navigationOptions: {
        title: '',
      },
    },
  },
);

export const ExperienceStackNavigator = StackNavigator(
  {
    ExperienceGallery: {
      screen: ExperienceGallery,
      navigationOptions: {
        title: 'Experience Gallery',
      },
    },
    ExperienceDetails: {
      screen: ExperienceDetails,
      navigationOptions: {
        title: 'Your Experience',
      },
    },
  },
);

export const Settings = StackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Profile',
      },
    },
  },
);

export default TabNavigator(
  {
    DiscoverStackNavigator: {
      screen: DiscoverStackNavigator,
    },
    SavedPoemsStackNavigator: {
      screen: SavedPoemsStackNavigator,
    },
    ExperienceStackNavigator: {
      screen: ExperienceStackNavigator,
    },
    Settings: {
      screen: Settings,
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
          case 'SavedPoemsStackNavigator':
            iconName = Platform.OS === 'ios' ? `ios-clipboard${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'DiscoverStackNavigator':
            iconName = Platform.OS === 'ios' ? `ios-compass${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'ExperienceStackNavigator':
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
