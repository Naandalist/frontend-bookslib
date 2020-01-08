import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

const PopularBook = (props) => {
    return(
        <>
        <View style={styles.container}>
        <TouchableOpacity onPress={props.ditekan}> 
            <Image style={styles.imageCarl} 
            source={{uri:'https://ssvr.bukukita.com/babacms/displaybuku/113836_f.jpg'}}
            />
            <Text style={styles.author}>Alvi Syahrin</Text>
            </TouchableOpacity>
            <Text style={styles.bookName}>JIka Kita Tak Pernah Jadi Apa-Apa</Text>
        </View>
        
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '20%',
        height: '55%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 20,
        marginTop: 60,
    },
    imageCarl:{
        width:190,
        height: "110%",
        borderRadius: 15,
        marginLeft: 57,
        marginRight: 30,
        marginTop: 50,
    },
    author:{
        fontSize: 17,
        marginRight: 70,
        marginTop: 5,
        color: 'grey'
    },
    bookName:{
        color: 'black',
        marginRight: 30,
        marginLeft: 20,
        fontSize: 17,
        fontWeight: 'bold',
    },
    haloText: {
        fontSize: 20,
    }
})
export default PopularBook;