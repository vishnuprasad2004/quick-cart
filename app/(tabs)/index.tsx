import Item from '@/components/Item';
import SearchBar from '@/components/SearchBar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import phones, { ItemType } from '@/lib/data/phones';
import { StyleSheet, TextInput, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ThemedView>
        {/* Search Bar */}
        <ThemedView style={styles.titleContainer}>
          <ThemedText>Quick Cart</ThemedText>
          <SearchBar/>
        </ThemedView>
        {/* Ads */}
        <ThemedView>
          <Image
            source={require('@/assets/images/2d6d51e8-9454-413a-86fd-a88d496d5c14.jpg')}
            style={{ width: '100%', height: 320}}/>
        </ThemedView>
        {/* Items */}
        <FlatList 
          data={phones}
          scrollEnabled={true}
          horizontal={true}
          style={styles.list}
          showsHorizontalScrollIndicator={false}   
          ListEmptyComponent={<ThemedText>No Items found</ThemedText>}
          ListFooterComponent={<ThemedView style={{width:60}}></ThemedView>}
          renderItem={({ item }: {item:ItemType}) => (
            <Item
              id={item.id}
              brand={item.brand}
              description={item.description}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
            />
          )}
          />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  list: {
    top: -60,
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
  }
});
