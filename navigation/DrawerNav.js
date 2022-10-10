import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react';
import Home from '../screens/Home';
import TabNav from './TabNav';

const Drawer = createDrawerNavigator();

class DrawerNav extends Component {
    state = {  } 
    render() { 
        return (
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={Home} />
                <Drawer.Screen name='TabNav' component={TabNav} />
            </Drawer.Navigator>
        );
    }
}
 
export default DrawerNav;