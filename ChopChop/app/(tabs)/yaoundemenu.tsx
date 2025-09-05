import { StyleSheet, Text, View, Platform, TextInput, ScrollView, FlatList, Image, Animated, useWindowDimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import menuCategories from '../data/menuCaterories';
import { useState, useRef } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function YaoundeMenu() {
    const scrollx = useRef(new Animated.Value(0)).current;
    const {width: windowWidth} =useWindowDimensions();
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
             <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginBottom: 10 }}>
            {/* <Text style={{ fontSize: 18, fontWeight: "600" }}>Our Menu</Text> */}
            <Text style={{ color: "#f59e0b" }}>View more</Text>
          </View>
          <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.scrollContainer}>
                    <Animated.FlatList
                    data ={menuCategories}
                    horizontal
                    pagingEnabled
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{nativeEvent : {contentoffset:{x: scrollx}}}],
                        {useNativeDriver:false}
                    )}
                    scrollEventThrottle={16}
                    renderItem={({ item }) => (
                        <View key={item.id} style={{ alignItems: "center", marginBottom: 20,}} >
                            <Image style={{ width: 70, height: 70, borderRadius: 50 }} source={item.image} />
                            <Text style={{ marginTop: 6, fontSize: 13 }}>{item.name}</Text>
                        </View>
                    )}
                    />
                </View>
            </SafeAreaView>
          </SafeAreaProvider>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
     container:{
            flex:1,
            backgroundColor:'#f9eaddff',
            paddingTop: Platform.OS === 'android' ? 25 : 60,
            paddingHorizontal: 20,
        },
        scrollContainer:{
            height:300,
            alignItems:'center',
            justifyContent:'center'
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