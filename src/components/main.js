
import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TabBarIOS
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default class Main extends Component{
    render() {
        return (
            // <View style={styles.container}>
            //   <Text style={styles.welcome}>
            //     主页面
            //   </Text>
            // </View>
          <TabNavigator>
            <TabNavigator.Item title='首页'>
 
            </TabNavigator.Item>
            <TabNavigator.Item title='我的'>

            </TabNavigator.Item>
          </TabNavigator>

          );
    }
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    }
});
