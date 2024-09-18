import { Text } from 'react-native';

export default function Page() {
  return <Text>Index page</Text>;
}

import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Link push href="/sandsich">Sandwich</Link>
    </View>
  );
}
