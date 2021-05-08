import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import ViewToDo from '../ToDo/ViewToDo';
import DetailsScreen from '../DetailsScreen';
import DrawerContent from '../DrawerContent';
import HomeScreen from '../HomeScreen';
import MainTabScreen from '../MainTabScreen';
import ProfileScreen from '../ProfileScreen';
import SettingsScreen from '../SettingsScreen';
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';
import SplashScreen from '../SplashScreen';
import BookmarkScreen from '../BookmarkScreen';
import { Settings } from 'react-native';

const Stack = createStackNavigator();

const Routes = () => {
    return (

        <NavigationContainer>

            <Stack.Navigator initialRouteName="SignInScreen">

                    <Stack.Screen name="BookmarkScreen" component={BookmarkScreen}/>
                    <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
                    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                    <Stack.Screen name="MainTabScreen" component={MainTabScreen}/>
                    <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: "Perfil" }}/>
                    <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
                    <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ title: "Perfil" }}/>
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: "Primeiro Acesso" }}/>
                    <Stack.Screen name="SplashScreen" component={SplashScreen}/>
                    <Stack.Screen name="Home" component={Home} options={{ title: "Meus ToDos" }}/>
                    <Stack.Screen name="ViewToDo" component={ViewToDo} options={{ title: "Descrição" }}/>
            </Stack.Navigator>

        </NavigationContainer>



    )
}

export default Routes;