import { NavigationActions } from 'react-navigation'

let navigator

function setTopLevelNavigator(ref) {
  navigator = ref
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

export default {
  setTopLevelNavigator,
  navigate
}
