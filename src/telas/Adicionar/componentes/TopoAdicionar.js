import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { carregaTopoAdicionar } from '../../../servicos/carregaDados';
import topoAdicionar from '../../../mocks/topoAdicionar';

class TopoAdi extends React.Component{
    state = {
        topoAdicionar: {
            adicionar: '',
        }
    }

    atualizaTopoAdicionar(){
        const retorno = carregaTopoAdicionar();
        this.setState({ topoAdicionar: retorno });
    }

    componentDidMount(){
        this.atualizaTopoAdicionar();
    }

    render(){
        return ( <View>
            <View style={estilos.topoAdicionar}>
            <View style={estilos.container}>
            <Text style={estilos.adicionar}>{this.state.topoAdicionar.adicionar}</Text>
            </View>
        </View>
        </View>
        
        )
    }
}

const estilos = StyleSheet.create({
    topoAdicionar:{
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    adicionar:{
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

export default topoAdicionar;