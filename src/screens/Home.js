import React from 'react';

import { AuthContext } from '../contexts/AuthContext'
import {
  Button,
  Text,
  View
} from 'react-native'

function HomeScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}
export default HomeScreen
