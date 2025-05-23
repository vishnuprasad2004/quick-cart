import { Image, StyleSheet, Text, TouchableWithoutFeedback, View, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import phones from '@/lib/data/phones'
import { ThemedText } from '@/components/ThemedText'
import { addToCart } from '@/lib/data/cart'

const ItemPage = () => {
  const  { id } = useLocalSearchParams()
  const itemDetails = phones.filter((item) => item.id === parseInt(id[0]))[0];
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: '100%',}}>
        <Image source={itemDetails.imageUrl} style={{ width: 400, height: 400 }} resizeMode="contain" />
      </View>

      <View style={{ padding: 20, }}>
        <ThemedText style={{ fontSize: 20, fontWeight: 'bold' }}>{itemDetails.name}</ThemedText>
        <ThemedText style={{ fontSize: 16, color: '#2E8B57', fontWeight: 'bold' }}>₹ {itemDetails.price}</ThemedText>
        <ThemedText style={{ fontSize: 16,  fontWeight: 'bold' }}>{itemDetails.brand}</ThemedText>
        <ThemedText style={{ fontSize: 16,  fontWeight: '200' }}>{itemDetails.description}</ThemedText>

        <TouchableWithoutFeedback onPress={() => addToCart(itemDetails)}>
          <View style={{ backgroundColor: '#2E8B57', padding: 10, borderRadius: 5, marginTop: 20 }}>
            <ThemedText style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</ThemedText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => console.log('Buy Now')}>
          <View style={{ backgroundColor: '#FF6347', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <ThemedText style={{ color: '#fff', textAlign: 'center' }}>Buy Now</ThemedText>
          </View>
        </TouchableWithoutFeedback>
        <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>Specifications</ThemedText>
        <View style={{height:200}}></View>
      </View>
    </ScrollView>
  )
}

export default ItemPage

const styles = StyleSheet.create({})