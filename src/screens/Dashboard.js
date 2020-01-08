import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {Container, Header, Button, Item, Input, Content} from 'native-base';
import Axios from 'axios';
import Genre from '../components/Genres';
import Popular from '../components/PopularBook';
import AllBook from '../components/AllBook';

class Dashboard extends Component {
  state = {
    popularData: [],
    allData: [],
  };

  componentDidMount() {
    Axios.get('http://192.168.6.174:7777/api/v2/books/popular-book')
      .then(response => {
        // console.log('data popular book: ', response.data.data)
        this.setState({
          popularData: response.data.data,
        });
      })
      .catch(error => {
        console.log('when get popular data', error.response.data);
      });

    Axios.get('http://192.168.6.174:7777/api/v2/books/')
      .then(response => {
        this.setState({
          allData: response.data.data,
        });
      })
      .catch(error => {
        console.log('when get all data', error.response.data);
      });
  }

  render() {
    return (
      <>
        <View style={{flexDirection: 'row'}}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={20}
            color="black"
          />
          <Text style={styles.headertitle}>Bookslib </Text>
          <View style={styles.searchbar}>
            <TextInput style={{marginLeft: 35}} />
          </View>
        </View>

        <ScrollView>
          <Genre />

          <Text style={styles.secondTitle}>Popular Books</Text>
          <Popular PopularBook={this.state.popularData} />

          <Text style={styles.secondTitle}>All books</Text>
          <AllBook
            AllBook={this.state.allData}
            onPress={data => {
              this.props.navigation.navigate('Detail', {
                data: data,
              });
            }}
          />
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  searchIcon: {
    marginLeft: 200,
    marginTop: 17,
    position: 'absolute',
    zIndex: 3,
  },
  searchbar: {
    marginLeft: 40,
    marginTop: 10,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eee',
    width: '50%',
    height: 40,
    fontSize: 19,
  },
  headertitle: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  secondTitle: {
    marginLeft: 17,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B4C72',
  },
  name: {
    fontSize: 40,
    color: 'red',
  },
});

export default Dashboard;
