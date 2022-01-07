import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function User() {

    return (
        <View>
            <MapView
                style={{height: '50%', width: '100%'}}
            />
        </View>
    );
}


