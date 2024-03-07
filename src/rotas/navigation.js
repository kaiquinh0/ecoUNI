import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../telas/Home";
import Adicionar from "../telas/Adicionar";

const Stack = createStackNavigator();

export default function Navigation() {
    return (
    <NavigationContainer>
        <StackNavigator>
            <Stack.Screen nome='Home' component={Home} />
            <Stack.Screen nome='Adicionar' component={Adicionar} />
        </StackNavigator>
    </NavigationContainer>
)}