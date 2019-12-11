import axios from '@/utilsjs/axios'

export const signIn = ({email, password}) => async (dispatch, getState) => {
  const { form } = getState()
  console.log('email, password', email, password)
  dispatch({
    type: 'sign'
  })
}