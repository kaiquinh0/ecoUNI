import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { carregaTopo } from '../../../servicos/carregaDados';
import icon from '../../../assets/icon.png'

class Topo extends React.Component{
    state = {
        topo: {
            boasVindas: '',
        }
    }

    atualizaTopo(){
        const retorno = carregaTopo();
        this.setState({ topo: retorno });
    }

    componentDidMount(){
        this.atualizaTopo();
    }

    render(){
        return ( <View>
            <View style={estilos.topo}>
            <View style={estilos.container}>
            <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
            <Image source={icon} style={estilos.imagem}/>
            </View>
        </View>
        </View>
        
        )
    }
}

const estilos = StyleSheet.create({
    topo:{
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imagem: {
        width: 69,
        height: 68
    },
    boasVindas:{
        width: 148,
        height: 40,
        fontFamily: "Montserrat Alternates",
        fontSize: 16,
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: 16,
        color: "#0F334D"
    },

})

export default Topo;