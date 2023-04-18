import React from 'react'
import  { Image,Text,View} from 'react-native'
import { styles } from '../../styles/game.styles.js'
export default function Pipes({gap,left}) {
  let pipesHeight = (100-gap)/2
  return (
    <View style = { [styles.pipesContainer,{
      left:left
    }] }>
      <Image style={[styles.upperPipe,{
        height:`${pipesHeight}%`
      }]} source={require('../../assets/pipe-down.png')}/>
      <View style={{
        height:`${gap}%`
      }}>
        <Text>Gap</Text>
      </View>
      <Image style={[styles.bottomPipe,{
        height:`${pipesHeight}%`
      }]} source={require('../../assets/pipe-up.png')}/>
    </View>

  )
}
