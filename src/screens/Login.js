import React, { Component } from 'react'
import Axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage'
import {
	Container,
	Header,
	Content,
	Form,
	Item,
	Input,
	Label,
	Button,
	Text,
	Toast,
	Root
} from 'native-base'
import {
	View,
	TextInput,
	ScrollView,
	StatusBar,
	TouchableHighlight,
	ActivityIndicator,
	Keyboard,
	StyleSheet,
} from 'react-native'

class Login extends Component{
	constructor(){
		super()
		this.state={
			email:'',
			password:'',
			stillSending: false,
		}
	}
	componentDidMount(){

	}
	onSubmitHandle =()=>{
		this.setState({
			isSending: true
		})
		const data={email: this.state.email, password: this.state.password}
		Axios.post('http://192.168.6.174:7777/api/v2/users/login-user', data )
			.then(response=>{
				
				AsyncStorage.setItem('userToken', response.data)
				Toast.show({
					text: 'Login Success',
					buttonText: "Okay",
					type: "success",
					duration: 3000,
					position: "top"
				})
				setTimeout(() => {
					this.props.navigation.navigate('App');
				  }, 3000);
				
			})
			.catch(error=>{
				console.log(error.response.data.msg)
				this.setState({
					isSending: false
				})
				// showToast(error.response.data.msg, 'warning')
				Toast.show({
					text: error.response.data.msg,
					buttonText: "Okay",
					type: "danger",
					duration: 3000,
					position: "top"
				})
			})
	}

    render(){
		
        return(
            <>
			<Root>
            <ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						alignSelf: 'center',
						width: '87%',
						justifyContent: 'center',
						flexDirection: 'column',
						flex: 1,
						marginTop: 100,
					}}>
					<StatusBar barStyle='dark-content' backgroundColor='white' />
					<View style={{ marginBottom: 30 }}>
						<Text
							style={{
								fontSize: 24,
								fontWeight: 'bold',
								color: '#7d977d',
							}}>
							Here To Get
						</Text>
						<Text
							style={{
								fontSize: 30,
								fontWeight: 'bold',
								color: '#7d977d',
							}}>
							Welcomed !
						</Text>
					</View>
					<View style={{ marginTop: -20 }}>
						<Form>
							<Item floatingLabel style={{ marginLeft: 0 }}>
								<Label style={{ color: '#c8d6e5' }}>Email</Label>
								<Input 
									disabled= {this.state.isSending}
									autoCapitalize= 'none'
									keyboardType= 'email-address'
									onChangeText= {email=>this.setState({email})}
								/>
							</Item>
							<Item floatingLabel style={{ marginLeft: 0 }}>
								<Label style={{ color: '#c8d6e5' }}>
									Password
								</Label>
								<Input
									disabled= {this.state.isSending}
									autoCapitalize='none'
									secureTextEntry={true}
									onChangeText= {password=>this.setState({password})}
								/>
							</Item>
						</Form>
					</View>
					<View
						style={{
							marginTop: 50,
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						<Text
							style={{
								fontSize: 22,
								marginTop: 16,
								color: '#7d977d',
								fontWeight: 'bold',
							}}>
							Sign In
						</Text>
						<Button
							rounded
							style={{
								height: 54,
								width: 54,
								paddingLeft: 8,
								backgroundColor: '#7d977d',
							}}
							disabled={this.state.isSending}
							onPress={()=> this.onSubmitHandle()} >
							{
								this.state.isSending ? <ActivityIndicator size='large' color='white'/> 
								: <Icon
								style={styles.signinIco}
								name="sign-in"
								size={23}
								color="white" />
							}

							
						</Button>
					</View>
					<View
						style={{
							marginTop: 40,
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						<View>
							<Text
								onPress={() => this.props.navigation.replace('Register')}
								style={{
									fontSize: 15,
									marginTop: -15,
									color: '#7d977d',
									fontWeight: 'bold',
								}}>
								Switch to Sign Up
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
			</Root>			
            </>
        );
    }
}

const styles = StyleSheet.create({
	signinIco:{
		marginLeft: 9,
	},
  });

export default Login;