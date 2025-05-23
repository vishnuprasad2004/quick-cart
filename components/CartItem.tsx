import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { ItemType } from '@/lib/data/phones'
import { ThemedText } from './ThemedText'
import { RelativePathString, useRouter } from 'expo-router'

const Item = ({ id, brand, description, imageUrl, name, price }: ItemType) => {
  const router = useRouter()
  return (
    <TouchableOpacity key={id} style={styles.card} activeOpacity={1} onPress={() => router.push(`/item/${id!.toString()}` as RelativePathString)}>
      <Image source={imageUrl} style={styles.image} resizeMode="contain" />

      <View style={styles.details}>
        <ThemedText style={styles.name}>{name}</ThemedText>
        <ThemedText style={styles.price}>₹ {price}</ThemedText>
        <ThemedText style={styles.brand}>{brand}</ThemedText>
        <ThemedText style={styles.description}>
          {description.length > 100 ? description.substring(0, 50) + " ..." : description}
        </ThemedText>
      </View>
    </TouchableOpacity>
  )
}

export default Item

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    margin: 10,
    width: 170,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 130,
    marginBottom: 10,
  },
  details: {
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
    color: 'black',
  },
  price: {
    fontSize: 13,
    color: '#2E8B57',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  brand: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  description: {
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
    lineHeight: 12,
  },
})
