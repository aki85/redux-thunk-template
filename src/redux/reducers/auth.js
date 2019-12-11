import { adjustIconSrc } from '@/utilsjs/utils'

const initialAppState = {
  email: '',
}

const auth = (state = initialAppState, action) => {
  if (action.type === 'sign') {
    return {
      email: 'email.com'
    }
  } else {
    return state
  }
}

export default auth