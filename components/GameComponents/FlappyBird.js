import React from 'react'
import { Image,Dimensions } from 'react-native'
import { styles } from '../../styles/game.styles.js'
const windowWidth = Dimensions.get('window').width;
const adjustment = 50
export default function FlappyBird({top}) {
  return (
    <Image style={[styles.flappyBird,{
        position:'absolute',
        top:top,
        left:windowWidth/2 - adjustment
    }]} source={require('../../assets/bird1.png')} />
  )
}
