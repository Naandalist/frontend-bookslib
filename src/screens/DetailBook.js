import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Badge } from 'native-base'
import Axios from 'axios';
import {Button, Icon, Fab} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

class DetailBook extends Component {
  constructor(){
    super();
    this.state={
      id:0,
    }
  }
  async componentDidMount() {

    if (this.state.id >0){
    await Axios.get(`http://192.168.6.174:7777/api/v1/books/select?id=${this.state.id}`,)
			.then(response=>{				
				console.log('response: ', response)
				
			})
			.catch(error=>{
				console.log('ERRORNYA: ',error)
      })
    }
	 
  }
  onSubmitHandle =(num)=>{
		this.setState({
			id: num
		})
		const data={status: 'not available'}
		Axios.patch(`http://192.168.6.174:7777/api/v1/books/book?id=${this.state.id}`, data )
			.then(response=>{				
				//console.log('response: ', response)
				
			})
			.catch(error=>{
				console.log(error)
			})
	}
  render() {
    const book=this.props.navigation.getParam('data')
    console.log('ID: ', this.state.id)

   
    return (
      <>
      
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={{
              uri: book.image,
            }}
            style={{
              backgroundColor: 'black',
              width: '100%',
              height: 250,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Button transparent onPress={()=> this.props.navigation.goBack()}>
              <Icon
                type="FontAwesome"
                name="chevron-left"
                style={{color: 'white', fontWeight: 'bold', fontSize: 20}}
              />
            </Button>
            <View>
              <Text style={styles.bigTitle}>{book.title} </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  marginLeft: 15,
                  marginBottom: 5,
                  width: '60%',
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowRadius: 10,
                }}>
                {book.author}
              </Text>
            </View>
          </ImageBackground>
          <View
            style={{
              flex: 1,
              flexDirection: 'row-reverse',
              marginTop: -140,
              padding: 20,
            }}>
            <View
              style={{
                height: 150,
                width: 100,
                elevation: 10,
                borderRadius: 5,
                justifyContent: 'flex-end',
              }}>
              <Image
                source={{
                  uri:
                    book.image ,
                }}
                style={{
                  height: 150,
                  width: 100,
                  resizeMode: 'cover',
                  borderRadius: 5,
                }}
              />
             
            </View>
            <Badge
                style={{
                    height: 16,
                    backgroundColor:'pink',
                    marginLeft:80,
                    marginRight:-90,
                    marginTop: 160,
                }}>
                <Text> {book.status} </Text>
            </Badge>
          </View>
          <View style={{paddingLeft: 20, paddingRight: 20, marginBottom: 15}}>
            <Text
              style={{
                textAlign: 'justify',
				lineHeight: 20,
				letterSpacing: 0.5,
              }}>
              {
                book.book_descript
              }
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}></View>
			<View
					style={{
						paddingHorizontal: 80,
						paddingVertical: 20,
						marginTop: 100,
					}}>
         {
           book.status.toLowerCase() === 'available' ?
                    <Button
                    onPress={()=> this.onSubmitHandle(book.id)}
                      style={{
                        borderRadius: 50,
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#218c74',
                        elevation: 8,
                      }}>
                      <Text style={{ color: 'white' }}>
                        Borrow
                      </Text>
                    </Button>
                    :
                    <Button
                      style={{
                        borderRadius: 50,
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#eee',
                        elevation: 8,
                      }}>
                      <Text style={{ color: 'black' }}>
                        Borrow
                      </Text>
                    </Button>


         }
				</View>
        </ScrollView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  detailContainer: {
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    marginTop: 5,
    width: Dimensions.get('window').width / 1.3,
    justifyContent: 'space-between',
  },
  bigTitle: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowRadius: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 15,
    width: '60%',
    marginBottom: 4,
  },
});

export default DetailBook;
