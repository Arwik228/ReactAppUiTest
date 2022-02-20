import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styleView = (select: number, item: number) => {
  return select === item ? styles.select : styles.default;
};

const styleText = (select: number, item: number) => {
  return select === item
    ? {color: '#000000', fontSize: 20}
    : {color: 'gray', fontSize: 20};
};

export default (props: any) => {
  return (
    <View style={styles.list}>
      {props.themes.map((e: object) => {
        return (
          <View style={styleView(props.select, e.id)} key={e.id}>
            <Text style={styleText(props.select, e.id)}>{e.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  default: {
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  select: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderBottomColor: '#3995db',
    borderBottomWidth: 2,
  },
});
