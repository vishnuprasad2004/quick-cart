import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getCartItems } from '@/lib/data/cart'

const cart = () => {
  const cartItems = getCartItems();
  return (
    <View>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (<></>))
      ) : <></>}
    </View>
  )
}

export default cart

const styles = StyleSheet.create({})