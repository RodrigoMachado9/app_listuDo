import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './pages/index'

export default function Routes() {

    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#7159c1' }, headerTintColor: '#FFF', headerTitleAlign: 'center'}}>
            <Stack.Screen name="Home" component={Home} options={{ title: 'ListuDo' }} />
        </Stack.Navigator>

    );
}
