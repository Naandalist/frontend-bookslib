import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';

const Genre = () => {
    const genreData = [
        {
            genre: 'Fantasy',
            image: 'https://res.cloudinary.com/naandalistcloud/image/upload/v1575432918/iconBooksGenre/1-fantasy_fcfaxt.png',
            color: '#7d977d',
            textColor: 'black'
        },
        {
            genre: 'Biographies',
            image: 'https://res.cloudinary.com/naandalistcloud/image/upload/v1575432918/iconBooksGenre/2-biographies_tldsjr.png',
            color: '#94aaa3',
            textColor: 'black'
        },
        {
            genre: 'History',
            image: 'https://res.cloudinary.com/naandalistcloud/image/upload/v1575432918/iconBooksGenre/3-history_pnad9k.png',
            color: '#3f844b',
            textColor: 'black'
        },
        {
            genre: 'Medicine',
            image: 'https://res.cloudinary.com/naandalistcloud/image/upload/v1575432918/iconBooksGenre/4-medicine_c3qqzt.png',
            color: '#6db096',
            textColor: 'black'
        },
        {
            genre: 'Religious',
            image: 'https://res.cloudinary.com/naandalistcloud/image/upload/v1575432918/iconBooksGenre/5-religious_nhogdw.png',
            color: '#00b894',
            textColor: 'black'
        },
        {
            genre: 'Arts',
            image: 'https://res.cloudinary.com/naandalistcloud/image/upload/v1575432918/iconBooksGenre/6-arts_uusfv6.png',
            color: '#b0d3bf',
            textColor: 'black'
        }
    ]
  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          marginTop: 0,
          paddingVertical: 10,
        }}>
            {
                genreData.map((genre, index)=>{
                    return(
                        <View
						key={index}
						style={[styles.cardStyle, { backgroundColor: genre.color }]}>
						<Text style={[styles.textStyle, { color: genre.textColor }]}>
							{genre.genre}
						</Text>
						<View>
							<Image
								source={{
									uri: genre.image,
								}}
								style={{
									marginLeft: 120,
									height: 100,
									width: 100,
									resizeMode: 'cover',
									opacity: 0.8,
								}}
							/>
						</View>
					</View>
                    );
                })
            }
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
    cardStyle:{
      padding: 20,
          alignContent: 'center',
          alignItems: 'center',
          height: 115,
          width: 240,
      marginRight: 20,
      marginLeft: 10,
      marginTop: 20,
          borderRadius: 10,
          flexDirection: 'row',
      elevation: 8,
      
    },
    textStyle:{
      position: 'absolute',
          marginLeft: 20,
          flex: 1,
          alignItems: 'center',
          fontFamily: 'Poppins-Bold',
          fontSize: 20,
    },  
  });
export default Genre;
