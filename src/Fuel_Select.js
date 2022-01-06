
import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';

class Fuel_Select extends Component {

    state = {
        gas: 'petrol'
    }

    render() {
        return (
            <View style={{paddingTop: 10,  alignItems: 'center'}}>
                <Picker style={{height: 50, width: 250}}
                        selectedValue={this.state.gas}
                        onValueChange={(val, idx) => this.setState({gas: val})
                        }
                >  
                        
                 <Picker.Item label='Petrol' value='petrol'/>
                 <Picker.Item label='Dissel' value='dissel'/>
                 <Picker.Item label='LNG' value='lng'/>
                 <Picker.Item label='CNG' value='cng'/> 

                </Picker>

            </View>
        )  
    }
}


export default Fuel_Select