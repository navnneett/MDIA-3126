import { Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Text>This is a page about cheese.</Text>;
      <Link href=>
          <Pressable>

          </Pressable>
      </Link>
    </View>
}
