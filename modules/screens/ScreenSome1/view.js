import React from 'react';
import {View, Button, Text, TextInput} from 'react-native';

const ScreenSome1View = ({route, navigation}) => {
  const itemId = route.params?.itemId;
  const otherParam = route.params?.otherParam;
  const [postText, setPostText] = React.useState('');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 36}}>Page1</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 100, padding: 10, backgroundColor: 'white', width: 400}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="goHome"
        // 路由跳转
        onPress={() =>
          navigation.navigate({
            name: 'ScreenHome',
            params: {post: postText},
            merge: true,
          })
        }
      />
    </View>
  );
};

export default ScreenSome1View;
