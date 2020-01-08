import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {Badge} from 'native-base';
import StarRating from 'react-native-star-rating';

class AllBook extends Component {
  render() {
    //console.log('ini props: ', props)
    return (
      <>
        {this.props.AllBook.map((book, index) => {
          return (
            <View style={{flexDirection: 'row', marginBottom: 10}} key={index}>
              <TouchableHighlight
                style={styles.imageContainer}
                onPress={() => this.props.onPress({...book})}>
                <Image style={styles.mainImage} source={{uri: book.image}} />
              </TouchableHighlight>

              <View style={styles.descript}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={styles.authorText}>
                  {book.author}
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={styles.title}>
                  {book.title}
                </Text>
                <View style={{width: 60, marginLeft: 15}}>
                  <StarRating
                    disable={true}
                    maxStars={5}
                    rating={4}
                    starSize={10}
                    fullStarColor="#F3AC13"
                    emptyStarColor="#98A0B3"
                  />
                </View>
                <Badge
                  style={{
                    height: 16,
                    backgroundColor: '#34ace0',
                    marginLeft: 15,
                    marginTop: 10,
                  }}>
                  <Text> {book.status} </Text>
                </Badge>
                <Badge
                  style={{
                    height: 16,
                    backgroundColor: '#33d9b2',
                    marginLeft: 15,
                    marginTop: 10,
                  }}>
                  <Text> {book.genre} </Text>
                </Badge>
              </View>
            </View>
          );
        })}
      </>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    width: 120,
    marginLeft: 15,
    fontSize: 14,
    color: '#4B4C72',
    fontWeight: 'bold',
    fontSize: 20,
  },
  imageContainer: {
    height: 200,
    width: 120,
    backgroundColor: 'white',
    marginRight: 20,
    borderRadius: 5,
    flexDirection: 'column',
    flex: 1,
    marginLeft: 15,
  },
  mainImage: {
    width: 150,
    height: 200,
    borderRadius: 5,
  },
  descript: {
    marginRight: 40,
    marginTop: 25,
  },
  authorText: {
    width: 120,
    marginTop: 6,
    marginLeft: 15,
    fontSize: 13,
    lineHeight: 12,
    color: '#98A0B3',
    fontFamily: 'Poppins-Regular',
  },
});

export default AllBook;
