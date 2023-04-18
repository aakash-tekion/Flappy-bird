import React, { useEffect, useState } from 'react'
import { View,Dimensions} from 'react-native'
import { styles } from '../../styles/game.styles.js'
import FlappyBird from './FlappyBird.js'
import Pipes from './Pipes.js'
import { generateRandom } from '../../constants/index.js'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const decreasingValue = 20
export default function Game() {
  const [top,setTop] = useState(windowHeight/2)
  const [gap,setGap] = useState(generateRandom)
  const [left,setLeft] = useState(windowWidth-100)
  // const [pipe2Left,setpipe2Left] = useState(windowWidth-100)
  useEffect(()=>{
    if(left<10){
      setLeft(windowWidth-100)
    }
    
    if(top>(windowHeight-75)){
      setTop(windowHeight/2)
    }
    let timeOutIdForPipes = setTimeout(()=>{
      setLeft(prevLeft => prevLeft-decreasingValue)
    },1000)
    let timeOutIdForFlappyBird = setTimeout(()=>{
      setTop(prevTop => prevTop+decreasingValue)
    },1000)
    return ()=>{
      clearTimeout(timeOutIdForFlappyBird)
      clearTimeout(timeOutIdForPipes)
    }
  },[top,left])
  return (
    <View style={styles.gameContainer}>
        <Pipes gap={gap} left={left}/>
        <FlappyBird top={top}/>
    </View>
  )
}
