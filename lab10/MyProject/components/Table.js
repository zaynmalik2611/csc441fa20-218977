import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';

export default function Table() {
    return (
        <>
            <View style={{flexDirection: 'row'}}>
                <View>
                    <Text style={styles.HeadText}>Items</Text>
                    <Text style={styles.items}>Nashpati</Text>
                    <Text style={styles.items}>Apple</Text>
                    <Text style={styles.items}>Lays</Text>
                    <Text style={styles.items}>Coke</Text>
                </View>
                <View style={{paddingLeft:50}}>
                    <Text style={styles.HeadText}>Price</Text>
                    <Text style={styles.price}>Rs. 100</Text>
                    <Text style={styles.price}>Rs. 55</Text>
                    <Text style={styles.price}>Rs. 50</Text>
                    <Text style={styles.price}>Rs. 80</Text>
                </View>
                <View style={{paddingLeft: 50, paddingTop: 34}}>
                    <TouchableOpacity style={styles.OrderBtn}>
                        <Text style={styles.BtnText}>Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.OrderBtn}>
                        <Text style={styles.BtnText}>Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.OrderBtn}>
                        <Text style={styles.BtnText}>Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.OrderBtn}>
                        <Text style={styles.BtnText}>Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({  
    Head: {
        flexDirection: 'row',
    },
    HeadText: {
        fontWeight: 'bold',
    },
    items: {
        paddingTop: 19,
    },
    price: {
        paddingTop: 19,
    },
    OrderBtn: {
        height: 33,
        width: 75,
        paddingLeft: 13,
        marginTop: 9,
        paddingTop: 5,
        backgroundColor: '#2196F3',
    },
    BtnText: {
        color: 'white',
    }
});
  