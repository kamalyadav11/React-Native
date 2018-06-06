import React from 'react';
import { View, Dimensions, Text, StyleSheet} from 'react-native';

const {height, width } = Dimensions.get('window')

export default Square  = (props) => {
    return(
        <View>
            <View style={[styles.squareStyle, {backgroundColor: props.myColor}]}>
                <Text>{props.myText}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    squareStyle: {
        height: height * 0.5,
        width: width * .5,
        borderWidth: 2,
        borderColor: 'rgb(201,54,58)'
    }
})