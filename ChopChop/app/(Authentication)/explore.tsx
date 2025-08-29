import { StyleSheet, Text, View, TextInput, SectionList, FlatList, Image, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import restaurantdata from '../data/restaurantdata';
import { useRouter } from 'expo-router';

export default function Explore() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  return (
    <View style={styles.container}>
       <View style={styles.searchContainer}>
                <TextInput
                    value={search}
                    onChangeText={setSearch}
                    placeholder="Search..."
                    style={styles.searchInput}
                />
                <Ionicons name="search" size={24} color="#aaa" style={{color:'black', padding: 10}} />
          </View>
           <SectionList
  sections={restaurantdata}
  keyExtractor={(item, index) => item.id?.toString() || index.toString()}
  renderSectionHeader={({ section: { title } }) => (
    <Text style={styles.header}>{title}</Text>
  )}
  renderItem={({ section }) => (
    <FlatList
      data={section.data}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        marginBottom:16
      }}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image style={styles.itemImage} source={item.image} />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.location}</Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText} onPress={() => router.replace('/(tabs)')}>Food Menu</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  )}
/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop:20,
        paddingHorizontal: 10,
    },
    searchContainer:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#aaa',
        borderRadius:6,
        marginBottom:20
    },
    searchInput:{
        padding:10,
        fontSize:16,
        flex:1,
    },
    row:{
        flexDirection: "row",
        flexWrap: "wrap",    
        justifyContent: "space-between",
    },

   item:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:6,
        borderWidth:1,
        borderColor:'#aaa',
        marginBottom:10,
        width: '45%',
        flex:1,

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
        backgroundColor:'#4F46E5',
        padding:8,
        borderRadius:6,
    },
    cardButtonText:{
        fontSize:16,
        color:'#fff',
    },
})