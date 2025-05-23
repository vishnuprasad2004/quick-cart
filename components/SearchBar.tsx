import { View, TextInput, StyleSheet, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // for search icon

export default function SearchBar() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#232F3E' : '#ffffff' }]}>
      <Ionicons
        name="search"
        size={20}
        color={isDarkMode ? '#ffffff' : '#000000'}
        style={styles.icon}
      />
      <TextInput
        placeholder="Search on Quick Cart"
        placeholderTextColor={isDarkMode ? '#cccccc' : '#888888'}
        style={[
          styles.input,
          {
            color: isDarkMode ? '#ffffff' : '#000000',
          },
        ]}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
