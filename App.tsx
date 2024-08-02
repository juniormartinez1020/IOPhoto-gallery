import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { photos } from './data';
import Carousel from './Carousel';

export default function App() {

  const { height, width } = useWindowDimensions()

  return (
    <ScrollView style={styles.container}>
      
      {/* header */}
    <ScrollView 
    horizontal 
    style={{ height: height / 2 }}
    snapToInterval={width}
    snapToAlignment='start'
    decelerationRate='fast'
    showsHorizontalScrollIndicator={false}
    >
      <FlatList
      style={{ width }}
      data={photos}
      numColumns={5}
      contentContainerStyle={{ gap: 2 }}
      columnWrapperStyle={{ gap: 2 }}
      scrollEnabled={true}
      inverted
      renderItem={({ item }) => 
      <Image 
      source={item.image} 
      style={{ width: `${100 / 5}%`, aspectRatio: 1 }}
      />
    } 
      />

      <Image
       source={photos[0].image}
       style={{ width, height: '100%'}}
       resizeMode='cover'
      />

      <Image
       source={photos[10].image}
       style={{ width, height: '100%'}}
       resizeMode='cover'
      />
    </ScrollView>

     

      <Carousel 
      title='Gallery' 
      photos={photos.slice(0,5)}
      />  
      <Carousel title='People' photos={photos.slice(3,6)}/> 
      <Carousel title='Features' photos={photos.slice(6,9)}/>     
           
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
