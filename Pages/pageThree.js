import React from 'react';
import { View, Button, Dimensions, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import Square from "../Components/Square";

const {height, width } = Dimensions.get('window')

export default class PageThree extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            color: 'red'
        }

    }
    static navigationOptions = {
        header: null
    }
    render() {
        return(
            <View>

                <View style={{flexDirection:'row'}}>
                    <TouchableWithoutFeedback onPress={() => this.setState({color: 'white'})}>
                            <Square myColor={'yellow'} myText={"Not Clicked"}/>
                    </TouchableWithoutFeedback>
                    <Square myColor={'red'} myText={"Not Clicked"}/>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Square myColor={'blue'} myText={'Not Clicked'}/>
                    <Square myColor={'green'} myText={'Not Clicked'}/>
                </View>

            </View>
        );
    }
}