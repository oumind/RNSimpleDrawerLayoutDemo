import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  TouchableHighlight,
  Image
} from 'react-native';
import logoImage from './assets/react_logo.png';

class RNSimpleDrawerLayoutDemo extends Component {
  constructor(props) {
    super(props);

    this.openDrawer = this.openDrawer.bind(this);
  }

  openDrawer() {
    this.drawer.openDrawer();
  }

  render() {
    var navigationView = (
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
        <View style={{flex: 1, alignItems:'center'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>主页面</Text>

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
