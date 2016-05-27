import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  TouchableHighlight,
  Image
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import logoImage from './assets/react_logo.png';
import barsIcon from './assets/fa-bars.png';
import ringIcon from './assets/ring.png';

class RNSimpleDrawerLayoutDemo extends Component {
  constructor(props) {
    super(props);
    this.imageToolbarActions = [
      {title: '提醒', icon: ringIcon, show: 'always'},
      {title: '夜间模式', show: 'never'},
      {title: '设置选项', show: 'never'},
    ];
    this.iconToolbarActions = [
      {title: '提醒', iconName: 'bell', show: 'always'},
      {title: '夜间模式', show: 'never'},
      {title: '设置选项', show: 'never'},
    ];

    this.openDrawer = this.openDrawer.bind(this);
    this.onImageActionSelected = this.onImageActionSelected.bind(this);
    this.onIconActionSelected = this.onIconActionSelected.bind(this);
  }

  openDrawer() {
    this.drawer.openDrawer();
  }
  onImageActionSelected(position) {
    let action = this.imageToolbarActions[position];
    Alert.alert(action.title, action.show);
  }
  onIconActionSelected(position) {
    let action = this.iconToolbarActions[position];
    Alert.alert(action.title, action.show);
  }

  render() {
    const navigationView = (
      <View style={{flex: 1, backgroundColor:'#FAFAFA'}}>
        <View style={styles.avatar}>
          <Image style={{width: 30, height: 30, backgroundColor: 'black'}} source={logoImage}/>
          <Text style={{margin:10,fontSize: 15, textAlign: 'center'}}>用户名</Text>
        </View>
        <Text style={{marginTop: 10,marginLeft:20,fontSize: 15, textAlign:'left'}}>消息</Text>
        <Text style={{marginTop: 10,marginLeft:20,fontSize: 15, textAlign:'left'}}>设置</Text>
      </View>
    );

    return (
      <DrawerLayoutAndroid
        ref={component => this.drawer = component}
        drawerWidth={150}
        drawerPosition={DrawerLayoutAndroid.positions.left}
        renderNavigationView={() =>navigationView}>
        <View>
          {/* 使用图片作图标 */}
          <ToolbarAndroid
            navIcon={barsIcon}
            onIconClicked={this.openDrawer}
            title="主页面-image"
            titleColor="white"
            actions={this.imageToolbarActions}
            onActionSelected={this.onImageActionSelected}
            style={styles.toolbar}/>

          {/* 使用字体作图标 */}
          <FontAwesome.ToolbarAndroid
            navIconName="bars"
            onIconClicked={this.openDrawer}
            title="主页面-icon"
            titleColor="white"
            actions={this.iconToolbarActions}
            onActionSelected={this.onIconActionSelected}
            style={[styles.toolbar, {marginTop: 20}]}/>

          <TouchableHighlight onPress={this.openDrawer} style={styles.button}>
            <View style={[styles.inlineContainer, {alignSelf: 'center'}]}>
              <Text style={styles.buttonText}>打开抽屉导航</Text>
            </View>
          </TouchableHighlight>
        </View>
      </DrawerLayoutAndroid>
     );
   }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#6DB82D',
    height: 56,
  },
  avatar : {
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default RNSimpleDrawerLayoutDemo;
