import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform,} from 'react-native'
import { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function Loginpage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    
  
    const router = useRouter();
    const validate = () => {
    let newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
        router.replace('/(tabs)')
        setEmail("");
        setPassword("");
        setErrors({})
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "700", marginRight: 6 }}>Welcome to </Text>
            <Ionicons name="restaurant-outline" size={30} color="#de6e0cff" />
            <Text style={{ fontSize: 24, fontWeight: "700", marginLeft: 2, color:'#111827' }}>ChopChop</Text>
        </View>
        <Text style={styles.subtitle}>Sign in to continue</Text>
        <View style={styles.form}>
            <Text style={styles.title}>Email</Text>
            <TextInput
            style={styles.input}
            placeholder='E-mail'
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize='none'
            autoCorrect={false}
            />
             {errors.email && <Text style={{color:'red', marginBottom:15}}>{errors.email}</Text>}
            <Text style={styles.title}>Password</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                style={styles.passwordInput}
                placeholder='Password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={!visible}
                autoCapitalize='none'
                autoCorrect={false}
                />
                <TouchableOpacity onPress={() => setVisible(!visible)} style={{padding:10}}>
                    <Ionicons
                    name={visible ? 'eye-off' : 'eye'}
                    color='gray'
                    size={24}
                    />
                </TouchableOpacity>
            </View>
              {errors.password && <Text style={{color:'red', marginTop:10}}>{errors.password}</Text>}
            <Text style={styles.forgotpassword}>forgot password</Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <Text style={{marginTop:20, justifyContent:'center', alignSelf:'center'}}>Do not have an account? <Text
             style={{fontWeight:'500', color:'#de6e0cff'}}
            onPress={()=> router.push('./Signup')}>Sign up</Text></Text>
            <View style={styles.signup}>
                <Text>Sign up with:</Text>
                <TouchableOpacity style={styles.googleButton}>
                    <Image style={styles.socialImages} source={require('../images/google.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iphoneButton}>
                   <Image style={styles.socialImages} source={require('../images/iphone.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:"#f9eaddff",
        alignContent:'center',
    },
    form:{
        paddingHorizontal:20,
    },

    subtitle:{
        fontSize:16,
        color:'#6B7280',
        marginBottom:30,
        marginTop:-10,
        alignSelf:'center'
    },
    input:{
        height:50,
        padding:10,
        borderRadius:8,
        color:'#6B7280',
        borderWidth:1,
        borderColor:'#f4bd94ff',
        fontSize:16,
        marginBottom:15,
    },
    title:{
        fontSize:16,
        fontWeight:"500",
        marginBottom:8,
        color:'#111827'
    },
    passwordContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderRadius:8,
        borderWidth:1,
        borderColor:'#f4bd94ff',
    },
    passwordInput:{
        padding:10,
        flex:1,
        fontSize:16,
    },
    loginButton:{
        height:50,
        padding:10,
        borderRadius:15,
        borderWidth:1,
        fontSize:16,
        marginTop: 40,
        justifyContent:'center',
         borderColor:'#f4a15dff',
        alignItems:'center',
        backgroundColor:'#f4a15dff',
    },
    loginText:{  
        fontSize:16,
        fontWeight:'500',
        color:'#fff'

        
    },
    forgotpassword:{
        alignSelf:"flex-end",
        marginTop:10,
        color:'#111827'
    },
    signup:{
        flexDirection:'row',
        gap:10,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
    },
    googleButton:{
        marginTop:10,
        padding:10,
        borderRadius:8,
        marginBottom:10,
        backgroundColor:'#e2822eff',
    },
    iphoneButton:{
        marginTop:10,
        padding:10,
        borderRadius:8,
        marginBottom:10,
        backgroundColor:'#111827',
    },
    socialImages:{
        width:26,
        height:26,
        tintColor:'#fff'
    }   
})

