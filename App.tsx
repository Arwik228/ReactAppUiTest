import React from 'react';
import * as eva from '@eva-design/eva';
import {StyleSheet} from 'react-native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  ApplicationProvider,
  IconRegistry,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

//Import screen navigator
import RatingScreen from './src/components/RatingScreen';
import HomeScreen from './src/components/HomeScreen';
import ProfileScreen from './src/components/ProfileScreen';
import ActionBar from './src/components/layout/ActionBar';

const {Navigator, Screen} = createBottomTabNavigator();

// Navigation bar icon load
const RatingIcon = (props: object) => <Icon {...props} name="people-outline" />;
const HomeIcon = (props: object) => <Icon {...props} name="home-outline" />;
const ProfileIcon = (props: object) => <Icon {...props} name="person-outline" />;

// Render navigation bar button
const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    appearance="noIndicator"
    selectedIndex={state.index}
    style={styles.bottomNavigation}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Рейтинг" icon={RatingIcon} />
    <BottomNavigationTab title="Главная" icon={HomeIcon} />
    <BottomNavigationTab title="Профиль" icon={ProfileIcon} />
  </BottomNavigation>
);

// Return main block
export default () => {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Navigator
            tabBar={props => <BottomTabBar {...props} />}
            initialRouteName="Главная">
            <Screen
              options={ActionBar}
              name="Рейтинг"
              component={RatingScreen}
            />
            <Screen options={ActionBar} name="Главная" component={HomeScreen} />
            <Screen
              options={ActionBar}
              name="Профиль"
              component={ProfileScreen}
            />
          </Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});
