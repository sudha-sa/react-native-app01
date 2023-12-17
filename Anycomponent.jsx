import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
 import {useDispatch,useSelector} from "react-redux"
import { decrement, increment } from './component/reducers'

const Anycomponent = () => {
    const counter =useSelector((state)=>state.counter)
    const dispatch =useDispatch()
  return (
    <View>
      <Text>{counter}</Text>
      <Button
       title='increment'
       onPress={()=>dispatch(increment())}
      />
      <Button
       title='decrement'
       onPress={()=>dispatch(decrement())}
      />
    </View>
  )
}

export default Anycomponent

// const styles = StyleSheet.create({})