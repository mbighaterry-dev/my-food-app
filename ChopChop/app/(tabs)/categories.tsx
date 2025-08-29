import { StyleSheet, Text, View, TextInput,Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Categories() {
  const [search, setSearch] = useState('');
  return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <Ionicons name="menu-outline" size={28} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="restaurant-outline" size={28} color="#f59e0b" />
                  <Text style={{ fontSize: 22, fontWeight: "700", marginLeft: 6, color:'#111827' }}>ChopChop</Text>
                </View>
                <Ionicons name="cart-outline" size={28} />
          </View>
          <View style={styles.searchContainer}>
                <TextInput
                    value={search}
                    onChangeText={setSearch}
                    placeholder="Search..."
                    placeholderTextColor={'gray'}
                    style={styles.searchInput}
                />
                <Ionicons name="search" size={24}  style={{color:'gray', padding: 10}} />
        </View>
        <ScrollView>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Select Menu</Text>
        </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#f9eaddff",
      padding:Platform.OS === 'android' ?  25 :  60,
      paddingHorizontal:20,
    },
    searchContainer:{
      flexDirection:'row',
      borderWidth:1,
      borderColor:'#f4bd94ff',
      borderRadius:6,
      marginBottom:20
    },
    searchInput:{
      padding:10,
      fontSize:16,
      flex:1,
      color:'gray',
    },
})