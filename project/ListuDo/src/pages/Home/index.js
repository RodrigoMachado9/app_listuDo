import React, { useState } from 'react';
import { Text, Button, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import { GlobalStyles } from '../../Global Styles/global.js'
import ToDo from '../ToDo/index'


const Home = ({ navigation }) => {

    const [ModalOpen, setModalOpen] = useState(false);
    const [task, updatetask] = useState([]);

    const addToDo = (todo) => {

        todo.key = Math.random().toString();
        updatetask((currentTodos) => {

            return [todo, ...currentTodos]

        });

        setModalOpen(false);

    }

    return (


        <View>

            <FlatList
                data={task}
                renderItem={({ item }) => (

                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('ViewToDo', item)}>
                            <Text style={GlobalStyles.field}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            <Modal visible={ModalOpen} animationType="slide">
                <View>
                    <Button title="Voltar"
                        onPress={() => setModalOpen(false)} />
                    <ToDo addToDo={addToDo} />
                </View>
            </Modal>

            <View>
                <Button title="Novo ToDo"
                    onPress={() => setModalOpen(true)} />
            </View>
        </View>
    )
}

export default Home;