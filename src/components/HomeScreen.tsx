import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';

import CardBlock from './layout/CardBlock';

export default () => {
  const [object, setArrayCard] = React.useState({});
  React.useEffect(() => {
    fetch(`https://api.npoint.io/31877f7fc30d6283df09`)
      .then(results => results.json())
      .then(data => {
        setArrayCard(data);
      });
  }, []);

  return (
    <Layout style={styles.container}>
      {'cards' in object ? (
        <ScrollView horizontal={true} pagingEnabled={true}>
          {object.cards.map((card, index) => (
            <CardBlock card={card} lang={object.language} key={index} />
          ))}
        </ScrollView>
      ) : (
        <Text>Loading...</Text>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f4f7',
  },
});
