import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';
import { GlobalStyles } from '../../Global Styles/global';


export default function ViewToDo({ route }) {

    const { title, level, describe, date } = route.params
    return (

        <View style={GlobalStyles.container}>

            <Text style={GlobalStyles.title}>{title}</Text>

            <View >
                <Text style={GlobalStyles.formLabel}>Prioridade:</Text>
                <Text style={GlobalStyles.field}>{level}</Text>
            </View>

            <View >
                <Text style={GlobalStyles.formLabel}>Descrição:</Text>
                <Text style={GlobalStyles.field}>{describe}</Text>
            </View>

            <View >
                <Text style={GlobalStyles.formLabel}>Entrega:</Text>
                <Text style={GlobalStyles.field}>{date}</Text>
            </View>
        </View>
    )
}