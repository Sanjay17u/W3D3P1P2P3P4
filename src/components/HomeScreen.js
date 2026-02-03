import React from 'react'
import { View, Text, Button } from 'react-native'


function HomeScreen({ navigation }) {
    return (
        <>
            <View>
                <Text>HomeScreen</Text>

                <Button title='Go To DetailScreen'
                onPress={() => navigation.navigate('DetailScreen')}
                />
            </View>
        </>
    )
}

export default HomeScreen