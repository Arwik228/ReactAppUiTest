import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Icon} from '@ui-kitten/components';

// Action bar icon load
const EventIcon = (props: object) => <Icon {...props} name="activity-outline" />;

// Return  block
export default () => {
  return {
    headerRight: () => (
      <Button appearance="ghost" status="danger" accessoryLeft={EventIcon} style={{borderRadius:30}}/>
    ),
    headerStyle: styles.header,
  };
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
});
