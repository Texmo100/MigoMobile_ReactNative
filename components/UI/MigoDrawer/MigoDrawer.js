import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MigoIcon from 'react-native-vector-icons/Ionicons';

const MigoDrawer = ({ navigation, state }) => {
    const { routeNames } = state;

    const itemHandler = route => {
        navigation.navigate(route);
        navigation.closeDrawer();
    };

    return (
        <View style={styles.drawer}>
            <View style={styles.navActions}>
                <TouchableOpacity style={[styles.navAction, styles.backAction]} onPress={() => navigation.closeDrawer()}>
                    <Icon name='angle-left' size={25} color='#e8e8e8' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.navAction}>
                    <MigoIcon name='play' size={25} color='#e8e8e8' style={styles.migoIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.appTitle}>
                <Text style={styles.title}>Migo</Text>
            </View>

            <View style={styles.items}>
                {
                    routeNames.map((item, index) => (
                        <TouchableOpacity style={styles.item} onPress={() => itemHandler(item)} key={index}>
                            <Text style={styles.itemText}>{item}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Migo V1.0 (Beta)</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        backgroundColor: 'black'
    },
    navActions: {
        flex: 1,
        flexDirection: 'row',
    },
    navAction: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backAction: {
        backgroundColor: '#2b2b2b',
    },
    migoIcon: {
        transform: [{ rotate: '90deg' }],
    },
    appTitle: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        textTransform: 'capitalize',
        color: '#e8e8e8'
    },
    items: {
        flex: 15,
    },
    item: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        borderLeftWidth: 4,
        borderLeftColor: '#E30B5C',
    },
    itemIcon: {
        marginRight: 5,
    },
    itemText: {
        fontSize: 15,
        color: '#e8e8e8',
        textTransform: 'capitalize'
    },
    footer: {
        flex: 1,
        backgroundColor: '#E30B5C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: '#e8e8e8',
    },
});

export default MigoDrawer;
