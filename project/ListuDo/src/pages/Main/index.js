import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { ScrollView, View, Text } from 'react-native';
import ToDoForm from '../ToDo';
import Home from '../Home';
import ViewToDo from '../ToDo/ViewToDo';


const Stack = createStackNavigator();

const Routes = () => {
    return (

        <NavigationContainer>

            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ title: "Meus ToDos" }}/>
                <Stack.Screen name="ViewToDo" component={ViewToDo} options={{ title: "Descrição" }}/>
            </Stack.Navigator>

        </NavigationContainer>



    )
}

export default Routes;