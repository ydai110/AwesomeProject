import {View, Text, Button} from 'react-native';
import React from 'react';
function ScreenTab2View({props}) {
  return (
    <View>
      <Text style={{fontSize: 20}}>我的名字是：{props.userInfo.name}</Text>
      <Text style={{fontSize: 20}}>我的性别是：{props.userInfo.gender}</Text>
      <Button
        title="改变名字"
        onPress={() => {
          props.changeReduxStore({name: 'vince'});
        }}
      />
      <Button
        title="改变性别"
        onPress={() => {
          props.changeReduxStore({gender: '女'});
        }}
      />
      <Button
        title="还原"
        onPress={() => {
          props.changeReduxStore({name: '小光', gender: '男'});
        }}
      />
    </View>
  );
}
export default ScreenTab2View;
