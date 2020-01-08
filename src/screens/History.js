
import React from 'react';
import { View, Text, Image } from 'react-native';

class History extends React.Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
        render() {
            return (
                <>
                {
                    this.state.data.length < 1 ? 
                            <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Image
                            source={{
                                uri: 'https://res.cloudinary.com/naandalistcloud/image/upload/v1575563308/samples/no-history_tmxwjd.png' ,
                            }}
                            style={{
                                alignSelf:'center',
                                marginTop: 10,
                                height: 300,
                                width: 300,
                                resizeMode: 'cover',
                                opacity: 0.9,
                            }}
                        />
                        </View>
                        : ' '
                }
                
                </>
            )
        }
}
export default History;