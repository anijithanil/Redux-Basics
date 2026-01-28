import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increaseTotalLikes, increaseTotalLikesByAmount } from '../store/actions/dataActions';

const DataScreen = () => {
  const dispatch = useDispatch();
  const totalLikes = useSelector(state=>state.dataReducer.totalLikes)
  const userName = useSelector(state=>state.dataReducer.userName)

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#2323'}}>
      <Text>DataScreen</Text>
      <Text>Total Likes for {userName}: {totalLikes}</Text>
      <Button title="plus" onPress={()=>dispatch(increaseTotalLikes())}/>
      <Button title="plus 10" onPress={()=>dispatch(increaseTotalLikesByAmount(10))}/>
    </View>
  )
}

export default DataScreen

const styles = StyleSheet.create({})