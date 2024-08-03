import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { photos } from '../data';
import Carousel from '../Carousel';
import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { AnimatedImage } from 'react-native-reanimated/lib/typescript/reanimated2/component/Image';

export default function App() {

  const { height, width } = useWindowDimensions()

  const [headerCarousel, setHeaderCarousel] = useState(0)

  const scale = useSharedValue(1.2)
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }))

  useEffect(() => {
     scale.value = 1.2
     scale.value = withTiming(1, { duration: 5000 })
  }, [headerCarousel])
  

  const onHeaderCarouselScroll = (e:
    NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const currPage = Math.max(0, 
      Math.floor((e.nativeEvent.contentOffset.x + width / 2) / width))
     
      if (currPage !== headerCarousel) {
        setHeaderCarousel(currPage)
      }
  }

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
    onScroll={onHeaderCarouselScroll}
    >
      <FlatList
      style={{ width }}
      data={photos}
      numColumns={5}
      contentContainerStyle={{ gap: 2 }}
      columnWrapperStyle={{ gap: 2 }}
      scrollEnabled={true}
      inverted
      renderItem={({ item }) => (
      <Link href={`/photo/${item.id}`} asChild>
        <Pressable
        style={{ width: `${100 / 5}%`, aspectRatio: 1 }}
        >
          <Image 
          source={item.image} 
          style={{ width: '100%', height: '100%' }}
          />
        </Pressable>
    </Link>
  )} 
      />


    <View style={{  
        width, 
        height: '100%',
        overflow: 'hidden'
        }}>
      <Animated.Image
       source={photos[0].image}
       style={[{ 
        width: width,
        height: '100%'
      },
      animatedStyle
    ]}
       resizeMode='cover'
      />
    </View>


    <View style={{  
        width, 
        height: '100%',
        overflow: 'hidden'
        }}>
      <Animated.Image
       source={photos[10].image}
       style={[{ 
        width: width,
        height: '100%'
      },
      animatedStyle
    ]}
       resizeMode='cover'
      />
    </View>
    </ScrollView>


      <View style={{ 
        padding: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5
        }}
        >

        {Array(3).fill(0).map((item, index) => 
        <View 
        key={index}
        style={{
          width: index === headerCarousel ?  10 : 8,
          aspectRatio: 1,
          backgroundColor: index === headerCarousel ? 'black' : 'dimgray',
          borderRadius: 5
        }} />)}

      </View>


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
