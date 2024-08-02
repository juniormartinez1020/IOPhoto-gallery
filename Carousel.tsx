import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type Carousel = {
    title: string,
    photos: any[]
}

export default function Carousel({ title, photos }: Carousel) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>

            <ScrollView 
            horizontal
            contentContainerStyle={styles.image}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="start"
            snapToInterval={250 + 15}
            // decelerationRate='fast'
            >
                {photos.map((photo) => (
                    <Image
                    key={photo.id}
                    source={photo.image}
                    style={styles.img}
                    />
                ))}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    title: {
        padding: 15,
        fontWeight: '600',
        fontSize: 20
    },
    image: {
        gap: 15,
        paddingHorizontal: 20
    },
    img: {
        width: 250, 
        height: 150,
        borderRadius: 15
    }
})