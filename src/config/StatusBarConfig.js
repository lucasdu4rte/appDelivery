import {StatusBar, Platform } from 'react-native'

StatusBar.setBarStyle('light-content')

if (Platform.OS==='android') {
  StatusBar.setBackgroundColor('rgb(11, 32, 49)')
}
