import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import StarRating from 'react-native-star-rating';

class PopularBook extends Component {
  render() {
    return (
      <>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            paddingTop: 8,
            paddingBottom: 8,
          }}>
            {
              this.props.PopularBook.map((book, index)=>{
                return(
                  <View key={index}>
                  <TouchableHighlight
                    style={styles.imageContainer}>
                    <Image style={styles.mainImage} source={{uri: book.image}} />
                  </TouchableHighlight>
                  <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.authorText}>
                    {book.author}
                  </Text>
                  <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.title}>
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
                </View>
                );
              })
            }
       
        </ScrollView>
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
        fontSize: 20
	},
	imageContainer: {
		height: 180,
		width: 120,
		backgroundColor: 'white',
		marginRight: 8,
		borderRadius: 5,
		flexDirection: 'column',
        flex: 1,
        marginLeft: 15,
	},
	mainImage: {
		width: 120,
		height: 180,
		borderRadius: 5,
	},
	authorText: {
		width: 120,
		marginTop: 6,
		marginLeft: 15,
		fontSize: 12,
		lineHeight: 12,
		color: '#98A0B3',
		fontFamily: 'Poppins-Regular',
	},
})

export default PopularBook;
