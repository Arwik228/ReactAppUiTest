import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';

export default () => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">Рейтинг</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    backgroundColor: '#f9f9f9',
  },
});
