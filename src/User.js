import React, {useState} from 'react';
import { View } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


export default function User() {
    const [coordinates] = useState([
        {
          latitude: 48.8587741,
          longitude: 2.2069771,
        },
        {
          latitude: 48.8323785,
          longitude: 2.3361663,
        },
    ]);

    return (
        <View>
            <MapView
                style={{height: '50%', width: '100%'}}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={{
                    latitude: coordinates[0].latitude,
                    longitude: coordinates[0].longitude,
                    latitudeDelta: 0.0622,
                    longitudeDelta: 0.0121,
                  }}
            >
            <MapViewDirections
                origin={coordinates[0]}
                destination={coordinates[1]}
                apikey={"AIzaSyBrkYoHLtzAamkjzt89FaC69TopUxvSERA"} // insert your API Key here
                strokeWidth={4}
                strokeColor="#111111"
                />
            <Marker coordinate={coordinates[0]} />
            <Marker coordinate={coordinates[1]} />
            </MapView>

        </View>
    );
}


