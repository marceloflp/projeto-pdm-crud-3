import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from "react-native";
import { useState } from 'react';
import { IPilotos } from "@/interfaces/ipilotos";

export type PilotoModalProps = {
    visible: boolean;
    onAdd: (title: string, subTitle: string, id:number) => void;
    onCancel: () => void;
    onDelete: (id: number) => void;
    piloto?: IPilotos
}

export default function PilotoModal({visible, onAdd, onCancel,onDelete, piloto}: PilotoModalProps){

    const [title, setTitle] = useState<string>('');
    const [subTitle, setSubTitle] = useState<string>('');
    const [id, setId] = useState<number>(0);

    useEffect(() => {
        if(piloto){
            setTitle(piloto.nome);
            setSubTitle(piloto.equipe);
            setId(piloto.id);
        }else{
            setTitle('');
            setSubTitle('');
            setId(0)
        }
    }, [piloto])

    return(
        <Modal visible={visible} animationType='fade' transparent={true} onRequestClose={() => {}}>
            <View style={styles.container}>
                <View style={styles.boxContainer}>
                    <TextInput
                        style= {styles.boxInput}
                        placeholder="Nome"
                        value={title}
                        onChangeText={text => setTitle(text)}
                        autoFocus
                    />

                    <TextInput
                        style= {styles.boxInput}
                        placeholder="Equipe"
                        value={subTitle}
                        onChangeText={text => setSubTitle(text)}
                        
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonAdd} onPress={() => onAdd(title, subTitle, id)}>
                        <Text style={styles.buttonText}>
                                Salvar
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCancel} onPress={() => onCancel()}>
                        <Text style={styles.buttonText}>
                                Cancelar
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonDelete} onPress={() => onDelete(id)} disabled={id <= 0}>
                        <Text style={styles.buttonText}>
                                Deletar
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(0, 0, 0, 0, 7)',
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    boxContainer: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#FFF',
    },
    buttonAdd: {
        backgroundColor: 'green',
        borderRadius: 5,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin: 7,
        padding: 20,
    },
    buttonCancel: {
        backgroundColor: 'orange',
        borderRadius: 5,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin: 7,
        padding: 20,
    },
    buttonDelete:{
        backgroundColor: 'red',
        borderRadius: 5,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin: 7,
        padding: 20,
    },
    buttonContainer: {
        flexDirection:'row',
        marginTop: 10,
        height: 70,
    },
    boxInput:{
        alignSelf: 'stretch',
        height: 40,
        borderRadius: 5,
        backgroundColor: '#DDD',
        margin: 5,
    },
})