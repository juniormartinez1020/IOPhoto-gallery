import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { photos } from './data';

export default function App() {
  return (
    <View style={styles.container}>

      <FlatList
      data={photos}
      numColumns={5}
      contentContainerStyle={{ gap: 2 }}
      columnWrapperStyle={{ gap: 2 }}
      renderItem={({ item }) => 
      <Image 
      source={item.image} 
      style={{ width: `${100 / 5}%`, aspectRatio: 1 }}
      />
    } 
      />
       

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
