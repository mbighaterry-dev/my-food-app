import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View ,} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import {useRouter} from 'expo-router';


export default function SignupPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (!name) {
            newErrors.name = 'Username is required';
        }

        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

    const handleSignup = () => {
        if (validate()) {
            router.replace("/(tabs)");
            setEmail("");
            setPassword("");
            setErrors({})
        }
    };

  return (
   <SafeAreaView style={styles.container}>
       <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "700", marginRight: 6 }}>Welcome to </Text>
            <Ionicons name="restaurant-outline" size={30} color="#de6e0cff" />
            <Text style={{ fontSize: 24, fontWeight: "700", marginLeft: 2, color:'#111827' }}>ChopChop</Text>
        </View>   
         <Text style={styles.subtitle}>Sign in to continue</Text>
    <View style={styles.form}>
        <Text style={styles.title}>Name</Text>
        <TextInput
        style={styles.input}
        placeholder='Enter Name'
        value={name}
        onChangeText={(text) => setName(text)}
        /> 
        {
            errors.name && <Text style={{color:'red', marginBottom:10}}>{errors.name}</Text>
        }
       
        <Text style={styles.title}>Email</Text>      
        <TextInput
        style={styles.input}
        placeholder='E-mail  '
        value={email}
        onChangeText={(text) => setEmail(text)}
        /> 
        {
            errors.email && <Text style={{color:'red', marginBottom:10}}>{errors.email}</Text>
        }
        
        <Text style={styles.title}>Password</Text>       
        <View style={styles.passwordContainer}>
            <TextInput
            style={styles.passwordinput}
            placeholder='Password'
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!visible}
            autoCapitalize='none'
            autoCorrect={false}
            />
            <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.icon}>
                <Ionicons
                name={visible ? 'eye-off': 'eye'}
                size={24}
                color='gray'
                />
            </TouchableOpacity>      
        </View>
        {
            errors.password && <Text style={{color:'red', marginTop:10}}>{errors.password}</Text>
        }
        <TouchableOpacity style={styles.Signup} onPress={handleSignup}>    
            <Text style={styles.SignupText}>Register Now</Text>
        </TouchableOpacity>
        <Text style={styles.logintext}>Already have an account? <Text style={{fontWeight:"500", color:'#de6e0cff'}}
        onPress={() => router.push('/explore')}
        >Login</Text></Text>
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#f9eaddff",

    },
     
    subtitle:{
        fontSize:16,
        color:'#6B7280',
        marginBottom:30,
        alignSelf:'center',
        marginTop:-10
    },
    form:{
        paddingHorizontal:20,

    },
    input:{
        height:50,
        padding:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#f4bd94ff',
        marginBottom:15,
        fontSize:16

    },
    passwordContainer:{
        flexDirection:"row",
        alignItems:'center',
        borderRadius:8,
        borderColor:'#f4bd94ff',
        borderWidth:1,
    },
    passwordinput:{
        flex:1,
        padding:10,
        fontSize:16
        
    },
    icon:{
        padding:10
    },
    title:{
        fontSize:16,
        fontWeight:"500",
        marginBottom:5
    },
    Signup:{
        height:50,
        borderRadius:15,
        borderWidth:1,
        marginTop:60,
        borderColor:'#f4a15dff',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f4a15dff',
    },
    SignupText:{
        fontSize:16,
        fontWeight:"500",
        padding:10,   
        color:'#fff' 
    },
    logintext:{
        justifyContent:'center',
        marginTop:20,
        alignSelf:'center',
    },
    
})



// // app/(auth)/login.js
// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
// import { useRouter } from "expo-router";

// export default function Login() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <View style={styles.container}>
//       {/* Logo */}
//       <Image
//         source={{ uri: "https://i.ibb.co/vdrx2VJ/chopchop-logo.png" }} // hosted logo URL
//         style={styles.logo}
//         resizeMode="contain"
//       />

//       <Text style={styles.title}>Welcome to ChopChop 🍴</Text>
//       <Text style={styles.subtitle}>Sign in to continue</Text>

//       {/* Email */}
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         placeholderTextColor="#6B7280"
//         value={email}
//         onChangeText={setEmail}
//       />

//       {/* Password */}
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         placeholderTextColor="#6B7280"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       {/* Login Button */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => router.push("/menu")}
//       >
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//       {/* Register Link */}
//       <TouchableOpacity onPress={() => router.push("/register")}>
//         <Text style={styles.registerText}>
//           Don’t have an account? <Text style={styles.registerLink}>Sign Up</Text>
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F7FA",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   logo: {
//     width: 120,
//     height: 120,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "#111827",
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#6B7280",
//     marginBottom: 30,
//   },
//   input: {
//     width: "100%",
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 8,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: "#E5E7EB",
//     fontSize: 16,
//     color: "#111827",
//   },
//   button: {
//     width: "100%",
//     backgroundColor: "#4F46E5",
//     padding: 15,
//     borderRadius: 8,
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   registerText: {
//     fontSize: 14,
//     color: "#6B7280",
//   },
//   registerLink: {
//     color: "#4F46E5",
//     fontWeight: "600",
//   },
// });
