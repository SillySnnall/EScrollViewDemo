/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let widthDimensions = require('Dimensions').get('window').width;

export default class App extends Component<{}> {
    render() {
        return (
            <ScrollView
                // 横向
                horizontal={true}
                // 隐藏水平滚动条
                showsHorizontalScrollIndicator={false}
                // 自动分页viewpage----ios
                pagingEnabled={true}
                // 禁止滚动
                scrollEnabled={false}
            >
                {App.renderChildView()}
            </ScrollView>
        );
    }

    static renderChildView() {
        let allChild = [];
        let colors = ['red', 'green', 'yellow', 'blue', 'purple'];
        for (let i = 0; i < 5; i++) {
            allChild.push(
                <View key={i} style={{backgroundColor: colors[i], width: widthDimensions, height: 400}}>
                    <Text>{i}</Text>
                </View>
            )
        }
        return allChild
    }
}

const styles = StyleSheet.create({});
