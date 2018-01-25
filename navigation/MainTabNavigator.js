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
        headerStyle: {
          backgroundColor: '#2B3D41',
        },
        headerTitleStyle: {
          color: 'white',
          fontFamily: 'Cabin',
          fontSize: 23
        }
      },
    },
    PoemDetails: {
      screen: PoemDetails,
      navigationOptions: {
        title: '',
        headerStyle: {
          backgroundColor: '#2B3D41',
        },
        headerTitleStyle: {
          color: 'white',
          fontFamily: 'Cabin',
          fontSize: 23
        },
        headerBackTitleStyle: {
          color: 'white',
          fontFamily: 'Cabin',
          fontSize: 18
        },
        headerTintColor: 'white'
      },
    },
    CameraScreen: {
      screen: CameraScreen,
      navigationOptions: {
        title: 'Camera',
        headerStyle: {
          backgroundColor: '#2B3D41',
        },
        headerTitleStyle: {
          color: 'white',
          fontFamily: 'Cabin',
          fontSize: 23
        },
        headerTintColor: 'white'
      },
    },
    CreateExperience: {
      screen: CreateExperience,
      navigationOptions: {
        title: 'Create Experience',
        headerStyle: {
          backgroundColor: '#2B3D41',
        },
        headerTitleStyle: {
          color: 'white',
          fontFamily: 'Cabin',
          fontSize: 23
        },
        headerBackTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'
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
        headerStyle: {
          backgroundColor: '#2B3D41',
        },
        headerTitleStyle: {
          color: 'white',
          fontFamily: 'Cabin',
          fontSize: 23
        },
        headerBackTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'
      },
    },
    PoemDetails: {
      screen: PoemDetails,
      navigationOptions: {
        title: '',
        headerStyle: {
          backgroundColor: '#2B3D41',
        },
        headerTitleStyle: {
          color: 'white',
          fontFamily: 'Cabin',
          fontSize: 23
        },
        headerBackTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'
      },
    },
  },
);

export const ExperienceStackNavigator = StackNavigator(
  {
    ExperienceGallery: {
      screen: ExperienceGallery,
      navigationOptions: {
        title: 'Experiences',
        headerStyle: {
          backgroundColor: '#2B3D41',
        },
        headerTitleStyle: {
          color: 'white',
          fontFamily: 'Cabin',
          fontSize: 23
        },
        headerBackTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'
      },
    },
    ExperienceDetails: {
      screen: ExperienceDetails,
      navigationOptions: {
        title: '',
        headerStyle: {
          backgroundColor: '#2B3D41',
        },
        headerTitleStyle: {
          color: 'white',
          fontFamily: 'Cabin',
          fontSize: 23
        },
        headerBackTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'
      },
    },
  },
);

export const Settings = StackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
        headerStyle: {
          backgroundColor: '#2B3D41',
        },
        headerTitleStyle: {
          color: 'white',
          fontFamily: 'Cabin',
          fontSize: 23
        },
        headerBackTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'
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
    tabBarOptions: {
      showLabel: false,
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);
