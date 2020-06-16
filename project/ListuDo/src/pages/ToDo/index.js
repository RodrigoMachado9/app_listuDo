import React, { useState } from 'react';
import { GlobalStyles } from '../../Global Styles/global.js'
import { Formik } from 'formik';
import {
    Text,
    TextInput,
    View,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import * as yup from 'yup';

const ToDoSchema = yup.object({

    title: yup.string().required().min(4),
    level: yup.string().required().test('is-num-1-5', 'Priority Level must be a number 1 - 5 ', (val) => {
        return parseInt(val) > 0 && parseInt(val) < 6;
    }),
    describe: yup.string().required().max(60),
    date: yup.string().required().test('is a num?', 'Date must be a num', (date) => {

        return parseInt(date);  

    } )

})

export default function ToDoForm({ addToDo }) {


    return (

        <Formik
            initialValues={{ title: '', level: '', describe: '', date: '' }}
            validationSchema={ToDoSchema}
            onSubmit={(values) => {
                addToDo(values);

            }}
        >

            {(formikprops) => (

                <ScrollView style={GlobalStyles.container}>

                    <View>

                        <View>
                            <TextInput style={GlobalStyles.title} placeholder={'Título'} onChangeText={formikprops.handleChange('title')} value={formikprops.values.title} required />
                            <Text style={GlobalStyles.errorText}>{formikprops.errors.title}</Text>
                        </View>
                        <TextInput style={GlobalStyles.field} placeholder={'Nível de Prioridade'} maxLength={1} onChangeText={formikprops.handleChange('level')} value={formikprops.values.level} />
                        <Text style={GlobalStyles.errorText}>{formikprops.errors.level}</Text>
                        <TextInput style={GlobalStyles.field} placeholder={'Descrição'} onChangeText={formikprops.handleChange('describe')} value={formikprops.values.describe} />
                        <Text style={GlobalStyles.errorText}>{formikprops.errors.describe}</Text>
                        <TextInput style={GlobalStyles.field} placeholder={'Data'} maxLength={8} onChangeText={formikprops.handleChange('date')} value={formikprops.values.date} keyboardType="number-pad" />
                        <Text style={GlobalStyles.errorText}>{formikprops.errors.date} </Text>

                        <TouchableWithoutFeedback onPress={formikprops.handleSubmit} >
                            <View style={GlobalStyles.button}>
                                <Text style={GlobalStyles.buttonText}>Pronto</Text>
                            </View>
                        </TouchableWithoutFeedback>

                    </View>

                </ScrollView>
            )}

        </Formik>

    )
}