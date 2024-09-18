import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Text>This is a page about sandwiches</Text>
      <Link push href="/">My Index Page</Link>
      <Link push href="/cheese">My Cheese Page</Link>
    </View>
  );
}
