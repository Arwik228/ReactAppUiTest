import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';

import CardBlock from './layout/CardBlock';
import ProgressBar from './layout/ProgressBar';
import ThemeBar from './layout/ThemeBar';

const onScroll = (e: any) => {
  let contentOffset = e.nativeEvent.contentOffset;
  let viewSize = e.nativeEvent.layoutMeasurement;
  return Math.floor(contentOffset.x / viewSize.width);
};

export default () => {
  const [object, setArrayCard] = React.useState({});
  const [page, setPage] = React.useState(0);

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
            showsHorizontalScrollIndicator={false}
            style={{marginVertical: 5}}>
            <ThemeBar
              themes={[
                {id: 1, name: 'Новости'},
                {id: 2, name: 'Кухня'},
                {id: 3, name: 'Дом'},
                {id: 4, name: 'Машина'},
                {id: 5, name: 'Парк'},
                {id: 6, name: 'Магазин'},
              ]}
              select={3}
            />
          </ScrollView>
          <View
            style={{
              borderBottomColor: '#ced1d2',
              borderBottomWidth: 1,
              marginHorizontal: 12,
            }}
          />
          <ScrollView
            style={{paddingVertical: 10}}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={e => setPage(onScroll(e))}>
            {object.cards.map((card, index) => (
              <CardBlock card={card} lang={object.language} key={index} />
            ))}
          </ScrollView>
          <ProgressBar items={object.cards.length || 10} select={page} />
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
