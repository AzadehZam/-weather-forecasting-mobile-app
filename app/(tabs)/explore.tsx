import { StyleSheet, View, Text } from 'react-native';


export default function TabTwoScreen() {
  return (
    <View>
      <Text>For Expansion</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
