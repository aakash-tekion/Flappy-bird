/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Game from './components/GameComponents/GameContainer';
import { styles } from './styles/main.background.js'


function App(): JSX.Element {


  return (
    <SafeAreaView>
      <ImageBackground style={styles.background} source={require('./assets/bg.png')}>
        <Game/>
      </ImageBackground>
    </SafeAreaView>

  );
}



export default App;
