<<<<<<< HEAD
export function manageFriends(state={friends:[]}, action){
  
  switch(action.type) {
    case "ADD_FRIEND":
      const currentFriends = state.friends
      currentFriends.push(action.friend)
      return {friends: currentFriends}
      break
    case "REMOVE_FRIEND":
      const newFriends = state.friends.filter(friend => friend.id != action.id)
      return {friends: newFriends}
=======
export function manageFriends(state, action){
  
  switch(action.type) {
    case "ADD_FRIEND":
      return {friends: state.friends.push(action.friend)
>>>>>>> a91fe94757be74db7f69fa62bac12062207ccd48
      break
    default:
      return state
      break
  }
  
}
