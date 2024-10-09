import { Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View className="m-2">
      <Text className="border-blue-700 border-2" >This is a page about cheese. 🧀</Text>
      <Link href="/" asChild>
        <Pressable>
          <Text>Index</Text>
        </Pressable>
      </Link>
    </View>
  );
}
