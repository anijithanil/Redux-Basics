import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { changeRole } from '../store/actions/settingsActions'
import { increaseTotalLikes } from '../store/actions/dataActions'

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const totalLikes = useSelector((state:RootState)=>state.dataReducer.totalLikes)
  const userRole = useSelector((state:RootState)=>state.settings.userRole)
  return (
    <View  style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#2323'}}>
      <Text>SettingsScreen</Text>
      <Text>Total Likes: {totalLikes}</Text>
      <Text>User Role:{userRole} </Text>
      <Button title='change role' onPress={()=>dispatch(changeRole("admin"))} />
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})