import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';

const DashboardScreen = () => {
    const walletOptions = [
        { id: '1', image: require('../../assets/icons/dashboard/ic_wallets.png'), label: 'Wallets' },
        { id: '2', image: require('../../assets/icons/dashboard/ic_add_fund.png'), label: 'Add Fund' },
        { id: '3', image: require('../../assets/icons/dashboard/ic_fund_transfer.png'), label: 'Fund Transfer' },
        { id: '4', image: require('../../assets/icons/dashboard/ic_history.png'), label: 'History' },
    ];

    const rechargeOptions = [
        { id: '1', image: require('../../assets/icons/dashboard/ic_mobile.png'), label: 'Mobile' },
        { id: '2', image: require('../../assets/icons/dashboard/ic_electricity.png'), label: 'Electricity' },
        { id: '3', image: require('../../assets/icons/dashboard/ic_water.png'), label: 'Water' },
        { id: '4', image: require('../../assets/icons/dashboard/ic_dth.png'), label: 'DTH' },
        { id: '5', image: require('../../assets/icons/dashboard/ic_gas.png'), label: 'Gas' },
        { id: '6', image: require('../../assets/icons/dashboard/ic_fastag.png'), label: 'FasTag' },
        { id: '7', image: require('../../assets/icons/dashboard/ic_history.png'), label: 'History' },
    ];

    const renderOption = ({ item }) => (
        <View style={styles.section}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.sectionText}>{item.label}</Text>
        </View>
    );

    // Add blank items to ensure 4 columns per row
    const addBlankItems = (data) => {
        const remainder = data.length % 4;
        if (remainder !== 0) {
            const blanks = Array(4 - remainder).fill({ id: `blank-${Math.random()}`, isBlank: true });
            return [...data, ...blanks];
        }
        return data;
    };

    return (
        <ScrollView style={styles.container}>
            {/* Section 1: My Wallet */}
            <Text style={styles.heading}>My Wallet</Text>
            <FlatList
                data={walletOptions}
                renderItem={renderOption}
                keyExtractor={(item) => item.id}
                numColumns={4}
                scrollEnabled={false}  // Disable scrolling on FlatList
                contentContainerStyle={styles.flatListContent}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
            />

            {/* Section 2: Recharge & Bill Pay */}
            <Text style={styles.heading}>Recharge & Bill Pay</Text>
            <FlatList
                data={addBlankItems(rechargeOptions)}
                renderItem={({ item }) =>
                    item.isBlank ? <View style={styles.blankSection} /> : renderOption({ item })
                }
                keyExtractor={(item) => item.id}
                numColumns={4}
                scrollEnabled={false}  // Disable scrolling on FlatList
                contentContainerStyle={styles.flatListContent}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#E9FAFF',
    },
    heading: {
        fontSize: 16,
        color: '#02448A',
        marginVertical: 10,
        textAlign: 'left',
    },
    row: {
        justifyContent: 'space-between',
    },
    section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        height: 100,
    },
    blankSection: {
        flex: 1,
        margin: 5,
        height: 100,
        backgroundColor: 'transparent',  // Invisible blank section
    },
    image: {
        width: 48,
        height: 48,
        marginBottom: 2,
    },
    sectionText: {
        fontSize: 12,
        color: '#02448AD9',
        textAlign: 'center',
    },
    flatListContent: {
        flexGrow: 0, // Prevent FlatList from growing vertically
    },
});

export default DashboardScreen;
