import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';

import CardBlock from './layout/CardBlock';
import ProgressBar from './layout/ProgressBar';

const onScroll = (e: any) => {
  let contentOffset = e.nativeEvent.contentOffset;
  let viewSize = e.nativeEvent.layoutMeasurement;
  return Math.floor(contentOffset.x / viewSize.width);
};

export default () => {
  const [object, setArrayCard] = React.useState({});
  const [page, setPage] = React.useState(1);

  //TODO
  React.useEffect(() => {
    fetch(`https://api.npoint.io/31877f7fc30d6283df09`)
      .then(results => results.json())
      .then(data => {
        setArrayCard(data);
      });
  }, []);
  //TODO

  return (
    <Layout style={styles.container}>
      {'cards' in object ? (
        <View>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            onMomentumScrollEnd={e => setPage(onScroll(e) + 1)}>
            {object.cards.map((card, index) => (
              <CardBlock card={card} lang={object.language} key={index} />
            ))}
          </ScrollView>
          <View>
            <ProgressBar items={object.cards.length || 10} select={page} />
          </View>
        </View>
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
