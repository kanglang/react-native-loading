/*
 * @Author: kanglang
 * @Date: 2021-06-05 09:51:24
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-25 17:57:13
 * @Description: 加载框
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator, Dimensions } from 'react-native';

const vWidth = Dimensions.get('window').width;
const vHeight = Dimensions.get('window').height;
const twoWidth = Dimensions.get('window').width / 2;
const threeWidth = Dimensions.get('window').width / 3;
const fourWidth = Dimensions.get('window').width / 4;
const eightWidth = Dimensions.get('window').width / 6;

// 添加pxToDp
// UI图设计基准大小
const uiWidthPx = 750;

function px2dp(uiElementPx) {
    if (vWidth > vHeight) {
        return (uiElementPx * vHeight) / uiWidthPx;
    }
    return (uiElementPx * vWidth) / uiWidthPx;
}

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { isShowMC = true, loadText, xmGif, visible = true, iconStyle, textStyle, modalStyle, indicatorColor } = this.props;
        return (
            <>
                {
                    visible &&
                    <View style={[styles.common, isShowMC ? styles.mengceng : styles.noMengceng]}>
                        <View style={[styles.more, modalStyle]}>
                            {
                                xmGif ?
                                    <Image style={[styles.xmGifStyle, iconStyle]} source={xmGif} /> :
                                    <ActivityIndicator
                                        color={indicatorColor || '#FF6F00'}
                                    />
                            }
                            <Text style={[styles.textStyle, textStyle]}>{loadText || '加载中..'}</Text>
                        </View>
                    </View>
                }
            </>
        );
    }
}
const styles = StyleSheet.create({
    common: {
        flex: 1,
        position: 'absolute',
        width: vWidth,
        height: vHeight,
    },
    mengceng: {
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    noMengceng: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
    more: {
        position: 'absolute',
        top: vWidth * 0.7,
        left: twoWidth,
        transform: [{ translateX: -eightWidth }],
        height: fourWidth,
        width: threeWidth,
        backgroundColor: '#fff',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#09C15F',
        shadowOffset: { width: 2, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 12,
        elevation: 8
    },
    textStyle: {
        marginTop: px2dp(30),
        color: '#09C15F'
    },
    xmGifStyle: {
        width: px2dp(56),
        height: px2dp(56)
    }
});
