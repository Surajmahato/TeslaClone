import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import CarItem from './assets/components/CarItem'
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>here you are</Text> */}
      <CarItem />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
