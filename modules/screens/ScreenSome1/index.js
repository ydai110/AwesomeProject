import {Component} from 'react';
import ScreenSome1View from './view';

export default class ScreenSome1 extends Component {
  // 自定义当前页面路由配置，后面介绍的TabNavigator也使用这个对象中的属性
  static navigationOptions = {
    // 设置 title
    title: '首页',
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.route = props.route;
    console.log('props fields', props);
  }

  render() {
    return <ScreenSome1View {...this} />;
  }
}
