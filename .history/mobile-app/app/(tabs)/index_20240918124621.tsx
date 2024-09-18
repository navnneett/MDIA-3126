import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Text>Index page</Text>
      <Link push href="/sandwich">Go to Sandwich Page</Link>
      <Link push href="/cheese">Go to Cheese Page</Link>
    </View>
  );
}
