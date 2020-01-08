import React from 'react';
import {Button} from 'native-base';
import {View, Text, Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import jwt_decode from 'jwt-decode';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      name: '',
      email: '',
      memberSince: '',
    };
  }

  async componentDidMount() {
    if (await AsyncStorage.getItem('userToken')) {
      const token = await AsyncStorage.getItem('userToken');
      const decodeToken = jwt_decode(token);
      this.setState({
        userId: decodeToken.response.user_id,
        name: decodeToken.response.name,
        email: decodeToken.response.email,
        memberSince: decodeToken.response.created_at,
      });
    } else {
      this.props.navigation.navigate('AuthScreen');
    }
  }
  render() {
    return (
      <>
        <View style={{backgroundColor: 'white'}}>
          <View style={{backgroundColor: 'white'}}>
            <Image
              source={{
                uri:
                  'https://res.cloudinary.com/naandalistcloud/image/upload/v1575563380/samples/plane-right_mkdg0w.png',
              }}
              style={{
                height: 200,
                width: 200,
                resizeMode: 'cover',
                opacity: 0.9,
              }}
            />
            <Image
              source={{
                uri:
                  'https://res.cloudinary.com/naandalistcloud/image/upload/v1573126729/icon-male_ep884n.png',
              }}
              style={{
                alignSelf: 'center',
                marginTop: 10,
                height: 150,
                width: 150,
                resizeMode: 'cover',
                opacity: 0.9,
              }}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 28,
                alignSelf: 'center',
                marginTop: 30,
              }}>
              User Profile
            </Text>
          </View>
          <View
            style={{
              marginLeft: 104,
              backgroundColor: 'white',
            }}>
            <Text style={styles.descript}>
              {' '}
              {
                <Icon style={styles.Ico} name="user" size={23} color="black" />
              }{' '}
              {this.state.name}
            </Text>
            <Text style={styles.descript}>
              {' '}
              {
                <Icon
                  style={styles.Ico}
                  name="id-badge"
                  size={23}
                  color="black"
                />
              }{' '}
              {this.state.userId}
            </Text>
            {/* <Text>Member Since: {this.state.memberSince}</Text> */}
            <Text style={styles.descript}>
              {' '}
              {
                <Icon
                  style={styles.Ico}
                  name="envelope-square"
                  size={23}
                  color="black"
                />
              }{' '}
              {this.state.email}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}></View>
          <Button
            rounded
            style={{
              height: 54,
              width: 54,
              paddingLeft: 8,
              marginLeft: '75%',
              marginBottom: 60,
              marginTop: 20,
              backgroundColor: '#7d977d',
            }}
            onPress={async () => {
              try {
                await AsyncStorage.removeItem('userToken');
                this.props.navigation.navigate('AuthScreen');
              } catch (error) {
                console.log(error);
              }
            }}>
            {
              <Icon
                style={{
                  marginLeft: 10,
                }}
                name="sign-out"
                size={23}
                color="white"
              />
            }
          </Button>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  descript: {
    backgroundColor: 'white',
    fontSize: 20,
  },
  Ico: {
    marginRight: 2,
  },
});

export default Profile;
