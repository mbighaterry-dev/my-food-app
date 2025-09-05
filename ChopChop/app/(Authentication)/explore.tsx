


// // import { StyleSheet, Text, View, TextInput, SectionList, FlatList, Image, TouchableOpacity } from 'react-native'
// // import Ionicons from '@expo/vector-icons/Ionicons';
// // import { useState } from 'react';
// // import restaurantdata from '../data/restaurantdata';
// // import { useRouter } from 'expo-router';

// // export default function Explore() {
// //   const [search, setSearch] = useState('');
// //   const router = useRouter();
// //   return (
// //     <View style={styles.container}>
// //        <View style={styles.searchContainer}>
// //                 <TextInput
// //                     value={search}
// //                     onChangeText={setSearch}
// //                     placeholder="Search..."
// //                     style={styles.searchInput}
// //                 />
// //                 <Ionicons name="search" size={24} color="#aaa" style={{color:'black', padding: 10}} />
// //           </View>
// //            <SectionList
// //   sections={restaurantdata}
// //   keyExtractor={(item, index) => item.id?.toString() || index.toString()}
// //   renderSectionHeader={({ section: { title } }) => (
// //     <Text style={styles.header}>{title}</Text>
// //   )}
// //   renderItem={({ section }) => (
// //     <FlatList
// //       data={section.data}
// //       keyExtractor={(item) => item.id.toString()}
// //       numColumns={2}
// //       columnWrapperStyle={{
// //         justifyContent: 'space-between',
// //         marginBottom:16
// //       }}
// //       renderItem={({ item }) => (
// //         <View style={styles.item}>
// //           <Image style={styles.itemImage} source={item.image} />
// //           <Text style={styles.itemName}>{item.name}</Text>
// //           <Text style={styles.itemPrice}>{item.location}</Text>
// //           <TouchableOpacity style={styles.cardButton}>
// //             <Text style={styles.cardButtonText} onPress={() => router.replace('/(tabs)')}>Food Menu</Text>
// //           </TouchableOpacity>
// //         </View>
// //       )}
// //     />
// //   )}
// // />
// //     </View>
// //   )
// // }

// // const styles = StyleSheet.create({
// //     container:{
// //         flex:1,
// //         backgroundColor:'#fff',
// //         paddingTop:20,
// //         paddingHorizontal: 10,
// //     },
// //     searchContainer:{
// //         flexDirection:'row',
// //         borderWidth:1,
// //         borderColor:'#aaa',
// //         borderRadius:6,
// //         marginBottom:20
// //     },
// //     searchInput:{
// //         padding:10,
// //         fontSize:16,
// //         flex:1,
// //     },
// //     row:{
// //         flexDirection: "row",
// //         flexWrap: "wrap",    
// //         justifyContent: "space-between",
// //     },

// //    item:{
// //         justifyContent:'center',
// //         alignItems:'center',
// //         padding:10,
// //         borderRadius:6,
// //         borderWidth:1,
// //         borderColor:'#aaa',
// //         marginBottom:10,
// //         width: '45%',
// //         flex:1,

// //     },
// //     itemImage:{
// //         width:  '100%',
// //         height:  120,
// //         marginBottom:6,
// //         borderRadius:6,
// //     },
// //     itemName:{
// //         fontSize:16,
// //         fontWeight:'600',
// //     },
// //     itemPrice:{
// //         fontSize:14,
// //         color:'gray',
// //         marginBottom:6,
// //     },
// //     header:{
// //         fontSize:18,
// //         fontWeight:'700',
// //         color:'#111827',
// //     },
// //     cardButton:{
// //         backgroundColor:'#4F46E5',
// //         padding:8,
// //         borderRadius:6,
// //     },
// //     cardButtonText:{
// //         fontSize:16,
// //         color:'#fff',
// //     },
// // })


// // import React, {useRef} from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   ImageBackground,
// //   Animated,
// //   useWindowDimensions,
// // } from 'react-native';
// // import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

// // const data = [
// //   {
// //     id: '1',
// //     image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
// //     name: 'Burger Deluxe',
// //     price: '$8.99',
// //   },
// //   {
// //     id: '2',
// //     image: 'https://images.unsplash.com/photo-1606756790138-196c9f32a8b1',
// //     name: 'Chicken Pizza',
// //     price: '$12.50',
// //   },
// //   {
// //     id: '3',
// //     image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90',
// //     name: 'Pasta Carbonara',
// //     price: '$10.00',
// //   },
// //   {
// //     id: '4',
// //     image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
// //     name: 'Fresh Salad',
// //     price: '$6.75',
// //   },
// //   {
// //     id: '5',
// //     image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
// //     name: 'Steak Special',
// //     price: '$18.20',
// //   },
// // ];

// // const Explore = () => {
// //   const scrollX = useRef(new Animated.Value(0)).current;
// //   const {width: windowWidth} = useWindowDimensions();

// //   return (
// //     <SafeAreaProvider>
// //       <SafeAreaView style={styles.container}>
// //         <View style={styles.scrollContainer}>
// //           <Animated.FlatList
// //             data={data}
// //             keyExtractor={(item) => item.id}
// //             horizontal
// //             pagingEnabled
// //             showsHorizontalScrollIndicator={false}
// //             onScroll={Animated.event(
// //               [{nativeEvent: {contentOffset: {x: scrollX}}}],
// //               {useNativeDriver: false},
// //             )}
// //             scrollEventThrottle={16}
// //             renderItem={({item}) => (
// //               <View style={{width: windowWidth, height: 250}}>
// //                 <ImageBackground source={{uri: item.image}} style={styles.card}>
// //                   <View style={styles.textContainer}>
// //                     <Text style={styles.infoText}>{item.name}</Text>
// //                     <Text style={styles.priceText}>{item.price}</Text>
// //                   </View>
// //                 </ImageBackground>
// //               </View>
// //             )}
// //           />

// //           {/* Pagination Dots */}
// //           <View style={styles.indicatorContainer}>
// //             {data.map((_, imageIndex) => {
// //               const width = scrollX.interpolate({
// //                 inputRange: [
// //                   windowWidth * (imageIndex - 1),
// //                   windowWidth * imageIndex,
// //                   windowWidth * (imageIndex + 1),
// //                 ],
// //                 outputRange: [8, 16, 8],
// //                 extrapolate: 'clamp',
// //               });
// //               return (
// //                 <Animated.View
// //                   key={imageIndex}
// //                   style={[styles.normalDot, {width}]}
// //                 />
// //               );
// //             })}
// //           </View>
// //         </View>
// //       </SafeAreaView>
// //     </SafeAreaProvider>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   scrollContainer: {
// //     height: 300,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   card: {
// //     flex: 1,
// //     marginVertical: 4,
// //     marginHorizontal: 16,
// //     borderRadius: 10,
// //     overflow: 'hidden',
// //     alignItems: 'center',
// //     justifyContent: 'flex-end',
// //   },
// //   textContainer: {
// //     width: '100%',
// //     backgroundColor: 'rgba(0,0,0,0.6)',
// //     padding: 12,
// //     alignItems: 'center',
// //   },
// //   infoText: {
// //     color: 'white',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   priceText: {
// //     color: '#FFD700',
// //     fontSize: 16,
// //     marginTop: 4,
// //   },
// //   normalDot: {
// //     height: 8,
// //     borderRadius: 4,
// //     backgroundColor: 'silver',
// //     marginHorizontal: 4,
// //   },
// //   indicatorContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     marginTop: 10,
// //   },
// // });

// // export default Explore;

// // import React, { useRef } from "react";
// // import {
// //   Text,
// //   Image,
// //   StyleSheet,
// //   Animated,
// // } from "react-native";
// // import { SafeAreaView } from "react-native-safe-area-context";

// // const categories = [
// //   {
// //     id: "1",
// //     name: "Pizza",
// //     image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
// //   },
// //   {
// //     id: "2",
// //     name: "Burgers",
// //     image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
// //   },
// //   {
// //     id: "3",
// //     name: "Fast Food",
// //     image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
// //   },
// //   {
// //     id: "4",
// //     name: "Desserts",
// //     image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
// //   },
// //   {
// //     id: "5",
// //     name: "Drinks",
// //     image: "https://images.unsplash.com/photo-1604908177074-14a6c17ec2f8",
// //   },
// //   {
// //     id: "6",
// //     name: "Sea Food",
// //     image: "https://images.unsplash.com/photo-1601312377746-15a7d6a1c0c1",
// //   },
// // ];

// // export default function HomeScreen() {
// //   const scrollX = useRef(new Animated.Value(0)).current;

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <Text style={styles.sectionTitle}>Categories</Text>

// //       <Animated.FlatList
// //         data={categories}
// //         keyExtractor={(item) => item.id}
// //         horizontal
// //         showsHorizontalScrollIndicator={false}
// //         contentContainerStyle={styles.listContainer}
// //         onScroll={Animated.event(
// //           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
// //           { useNativeDriver: true }
// //         )}
// //         scrollEventThrottle={16}
// //         renderItem={({ item, index }) => {
// //           const inputRange = [
// //             (index - 1) * 100,
// //             index * 100,
// //             (index + 1) * 100,
// //           ];

// //           const scale = scrollX.interpolate({
// //             inputRange,
// //             outputRange: [1, 1, 1],
// //             extrapolate: "clamp",
// //           });

          

// //           return (
// //             <Animated.View style={[styles.item, { transform: [{ scale }], }]}>
// //               <Image source={{ uri: item.image }} style={styles.image} />
// //               <Text style={styles.label}>{item.name}</Text>
// //             </Animated.View>
// //           );
// //         }}
// //       />
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: "#fff", padding: 16 },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     marginBottom: 12,
// //     color: "#333",
// //   },
// //   listContainer: {
// //     paddingHorizontal: 8,
// //   },
// //   item: {
// //     alignItems: "center",
// //     marginRight: 20,
// //     width: 100,
// //   },
// //   image: {
// //     width: 80,
// //     height: 80,
// //     borderRadius: 40, // circle
// //     marginBottom: 6,
// //   },
// //   label: {
// //     fontSize: 14,
// //     color: "#444",
// //     textAlign: "center",
// //   },
// // });

// import React from "react";
// import {
//   View,
//   StyleSheet,
//   Image,
//   FlatList,
//   Animated,
//   useWindowDimensions,
// } from "react-native";

// const images: string[] = [
//   "https://images.unsplash.com/photo-1601924582971-df3bb90f1a3a",
//   "https://images.unsplash.com/photo-1550547660-d9450f859349",
//   "https://images.unsplash.com/photo-1529042410759-befb1204b468",
//   "https://images.unsplash.com/photo-1559628233-5d4a1bb30f09",
//   "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
//   "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
// ];

// const Carousel: React.FC = () => {
//   const scrollX = React.useRef(new Animated.Value(0)).current;
//   const { width: windowWidth } = useWindowDimensions();

//   return (
//     <View style={styles.container}>
//       <Animated.FlatList
//         data={images}
//         keyExtractor={(_, index) => index.toString()}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false }
//         )}
//         renderItem={({ item }) => (
//           <View style={{ width: windowWidth, alignItems: "center" }}>
//             <Image source={{ uri: item }} style={styles.image} />
//           </View>
//         )}
//       />

//       {/* Indicators */}
//       <View style={styles.indicatorContainer}>
//         {images.map((_, index) => {
//           const width = scrollX.interpolate({
//             inputRange: [
//               windowWidth * (index - 1),
//               windowWidth * index,
//               windowWidth * (index + 1),
//             ],
//             outputRange: [8, 16, 8],
//             extrapolate: "clamp",
//           });
//           return <Animated.View key={index} style={[styles.dot, { width }]} />;
//         })}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 260,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     marginVertical: 20,
//   },
//   indicatorContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   dot: {
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "silver",
//     marginHorizontal: 4,
//   },
// });

// export default Carousel;
