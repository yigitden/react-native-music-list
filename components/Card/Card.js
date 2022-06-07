import React from 'react'
import { SafeAreaView, View, Image, Text } from 'react-native';
import styles from './Card.style'
const Card = ({item}) => {
    return (

        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: item.imageUrl
                }}
            />

            <View style={styles.inner_container}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.content}>
                    <View style={styles.info}>
                        <Text style={styles.artist}>{item.artist}</Text>
                        <Text style={styles.year}>{item.year}</Text>
                    </View>
                    {item.isSoldOut && <View style={styles.soldout_container}>
                        <Text style={styles.soldout_title}>SOLD OUT</Text>
                    </View>}

                </View>
            </View>
        </View>
    )
}

export default Card