import { StyleSheet, SafeAreaView} from 'react-native'
import { Stack } from 'expo-router'
export default function AuthenticationLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="Login" />
        <Stack.Screen name="Signup" />
        <Stack.Screen name="explore" />
      </Stack>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:"#f9eaddff",

        
    },
    logo:{
        justifyContent:'center',
        alignSelf:'center',
        marginTop:50
    }
})