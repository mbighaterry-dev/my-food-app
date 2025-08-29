import {Tabs} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{headerShown:false,
            tabBarStyle: {
                backgroundColor: "#fff5ee",
                borderRadius:30,
                height: 60,
                left:20,
                right:20,
                position:'absolute',
                bottom:5,
             },
            tabBarActiveTintColor:'#ff914d',
            // tabBarInactiveTintColor:'#4a4a4a'
         }}>
            <Tabs.Screen name="index" 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <Ionicons name="home-outline" size={24} color="gray" />
                )
            }}
            />
            <Tabs.Screen name="categories" 
            options={{
                tabBarLabel: 'Categories',
                tabBarIcon: () => (    
               <Ionicons name="grid-outline" size={24} color="gray" />
          )}}
            />
            <Tabs.Screen name="explore" 
            options={{
                tabBarLabel: 'Explore',
                tabBarIcon: () => (
                    <Ionicons name="compass-outline" size={24} color="gray" />
                )
            }}
            />
            <Tabs.Screen name="card" 
            options={{
                tabBarLabel: 'Cart',
                tabBarIcon: () => (
                    <Ionicons name="cart-outline" size={24} color="gray" />
                )
            }}
            />
            <Tabs.Screen name="profile" 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: () => (
                    <Ionicons name="person-outline" size={24} color="gray" />
                )
            }}
            />
        </Tabs>
    );
}