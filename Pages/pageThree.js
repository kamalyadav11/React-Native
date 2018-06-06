import React from 'react';
import { View, Button, Dimensions } from 'react-native';

const {height, width } = Dimensions.get('window')

export default class PageThree extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return(
            <View>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start'}}>
                    <View style={{height: height * 0.5, width: width * .5, backgroundColor: 'blue', borderWidth: 2, borderColor: 'rgb(201,54,58)'}}/>
                    <View style={{height: height * 0.5, width: width * .5, backgroundColor: 'blue', borderWidth: 2, borderColor: 'rgb(201,54,58)' }}/>
                </View>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-end'}}>

                    <View style={{height: height * 0.5, width: width * .5, backgroundColor: 'blue', borderWidth: 2, borderColor: 'rgb(201,54,58)'}}/>
                    <View style={{height: height * 0.5, width: width * .5, backgroundColor: 'blue', borderWidth: 2, borderColor: 'rgb(201,54,58)'}}/>
                </View>
            </View>
        );
    }
}