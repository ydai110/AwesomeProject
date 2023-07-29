import React from 'react';
import {View, Button, Text} from 'react-native';

const ScreenHomeView = ({route, navigation}) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  React.useEffect(() => {
    var str = {count} + '';
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Update Count"
          backgroundColor="#fff"
          onPress={() => setCount(c => c + 1)}
        />
      ),
    });
    console.log('count', {count});
  }, [navigation, setCount, count]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 36}}>home</Text>
      <Button
        title="goSomescreen"
        // 路由跳转
        onPress={() => {
          console.log('navigate to some');
          navigation.navigate('ScreenSome1', {
            itemId: 86,
            otherParam: 'anything you want here',
            name: 'Screen Some 1 custom',
          });
        }}
      />
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
      <Text> Count : {count}</Text>
    </View>
  );
};

export default ScreenHomeView;
