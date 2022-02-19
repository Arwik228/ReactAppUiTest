import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  View
} from 'react-native';
import {Text, Layout, Icon,  Button} from '@ui-kitten/components';
import Tts from 'react-native-tts';

const width = Dimensions.get('window').width;

const EventIcon = props => <Icon {...props} name="star" />;

// Return  block
export default props => {
  const card = props.card;
  Tts.setDefaultLanguage(props.lang);
  return (
    <Layout style={{justifyContent: 'center', backgroundColor: '#f2f4f7'}}>
      <View style={styles.card}>
        <View style={{position:"relative"}}>
     
            <Image source={{uri: card.image}} style={styles.image} />
            <Button appearance="ghost" status="danger" accessoryLeft={EventIcon} style={{position:"absolute"}}/>
        </View>
        <View style={styles.content}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text onPress={() => Tts.speak(card.word)} category="h2">
              {card.word}
            </Text>
            <Text category="h4" style={{color: 'gray'}}> ({card.translate})</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Tts.speak(card.text);
            }}>
            <Text style={{color: 'gray'}}>{card.text}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    width: width - 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
  image: {
    width: width - 20,
    height: 250,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  content: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 1,
    borderColor: '#e9eaf1',
    padding: 10,
  },
});
