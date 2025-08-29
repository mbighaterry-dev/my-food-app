import { StyleSheet, TextInput, View, Text, TouchableOpacity, Image , FlatList, ScrollView, Platform} from 'react-native'
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import menuData from '../data/menuData';
import menuCategories from '../data/menuCaterories';
export default function Home() {
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
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Our Menu</Text>
            <Text style={{ color: "#f59e0b" }}>View more</Text>
          </View>
            <FlatList
            data={menuCategories}
            renderItem={({ item }) => (
              <View style={{ alignItems: "center", marginBottom: 20, width: "23%" }} >
                <Image style={{ width: 70, height: 70, borderRadius: 50 }} source={item.image} />
                <Text style={{ marginTop: 6, fontSize: 13 }}>{item.name}</Text>
              </View>
            )}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginBottom:16
            }}
          />
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Most Popular</Text>
            <Text style={{ color: "#f59e0b" }}>View more</Text>
          </View>
          <FlatList
            data = {menuData}
            renderItem={({item}) => (
                <View style={styles.item} key={item.id}>
                <Image style={styles.itemImage} source={item.image} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.cardButton}>
                  <Text style={styles.cardButtonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            )}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginBottom:16
            }}
          />
          </ScrollView>
          {/* <SectionList
  sections={menuData}
  keyExtractor={(item, index) => item.id?.toString()}
  renderSectionHeader={({ section: { types } }) => (
    <Text style={styles.header}>{types}</Text>
  )}
  renderItem={({ item }) => (
    <View style={styles.item}>
      <Image style={styles.itemImage} source={item.image} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.cardButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  )}
/> */}

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

   flatlist:{
   },

   item:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        width: '47%',
        paddingBottom:10,
        borderWidth:1,
        borderColor:'#e58337ff',

    },
    itemImage:{
        width:  '100%',
        height:  120,
        marginBottom:6,
        borderRadius:6,
    },
    itemName:{
        fontSize:16,
        fontWeight:'600',
    },
    itemPrice:{
        fontSize:14,
        color:'gray',
        marginBottom:6,
    },
    header:{
        fontSize:18,
        fontWeight:'700',
        color:'#111827',
    },
    cardButton:{
        backgroundColor:'#f4a15dff',
        padding:8,
        borderRadius:6,
    },
    cardButtonText:{
        fontSize:16,
        color:'#fff',
    },
})