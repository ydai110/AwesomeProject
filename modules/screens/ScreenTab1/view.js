import React from 'react';
import {View, Button, Text, TextInput} from 'react-native';
import xgRequest from '../../config/xgRequest';

const ScreenTabView = () => {
  const [inputs, setInputs] = React.useState({
    todayOnHistoryInfo: {result: [{des: ''}]},
    inputMonthText: '',
    inputDayText: '',
  });

  function handleData({todayOnHistoryInfo}) {
    // console.log(todayOnHistoryInfo);
    setInputs(previousInputs => ({
      ...previousInputs,
      todayOnHistoryInfo: todayOnHistoryInfo,
    }));
  }
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 24}}>Today in History</Text>
      <TextInput
        placeholder="month"
        onChangeText={text =>
          setInputs(previousInputs => ({
            ...previousInputs,
            inputMonthText: text,
          }))
        }
      />
      <TextInput
        placeholder="day"
        onChangeText={text =>
          setInputs(previousInputs => ({
            ...previousInputs,
            inputDayText: text,
          }))
        }
      />
      <Button
        title="Search"
        onPress={() => {
          getTodayOnHistoryInfo(inputs, {handleData});
        }}
      />
      {/* 展示查询数据 */}
      <Text>
        what happened
        {inputs.todayOnHistoryInfo.result
          ? inputs.todayOnHistoryInfo.result[0].des
          : 'No data'}
      </Text>
    </View>
  );
};

async function getTodayOnHistoryInfo(inputs, {handleData}) {
  if (!inputs.inputMonthText || !inputs.inputDayText) {
    // this.xgToast.show('请输入有效数据', 2000, 'error');
    return;
  }
  try {
    const urlPar = {
      // 大佬们，这个是我申请的聚合数据应用的key，每天只有100免费请求次数
      key: '7606e878163d494b376802115f30dd4e',
      v: '1.0',
      month: Number(inputs.inputMonthText),
      day: Number(inputs.inputDayText),
    };
    const todayOnHistoryInfo = await xgRequest.todayOnHistory(urlPar);
    // 捕获错误，具体捕获过程需与写api的同学商量确定
    if (todayOnHistoryInfo.error_code) {
      //   this.xgToast.show(todayOnHistoryInfo.reason, 2000, 'error');
    } else {
      // 更新state，render函数自动重新渲染DOM中变化了的那部分
      //   this.setState({todayOnHistoryInfo});
      console.log('success');
      handleData({todayOnHistoryInfo});
    }
  } catch (e) {
    console.log(e);
  }
}

export default ScreenTabView;
