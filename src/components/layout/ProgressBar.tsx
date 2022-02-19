import React from 'react';
import {View, StyleSheet} from 'react-native';

const type = (select: number, item: number) => {
  return select === item ? styles.select : styles.default;
};

export default (props: object) => {
  return (
    <View style={styles.list}>
      {[...Array(props.items)].map((e, i) => {
        return <View style={type(props.select, i + 1)} key={i}></View>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  default: {
    margin: 2,
    width: 4,
    height: 4,
    borderRadius: 20,
    backgroundColor: '#c4c4c4',
  },
  select: {
    margin: 2,
    width: 6,
    height: 6,
    borderRadius: 20,
    backgroundColor: '#005ed1',
  },
});
