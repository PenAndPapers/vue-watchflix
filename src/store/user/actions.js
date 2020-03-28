export const actions = {
  /**
   * @Author: PenAndPapers
   * @Desc: Authenticate a user
   * @param {Object} user - object parameter
   * @return {String} - message if authorized or not
   */
  authenticate ({ commit }, user) {
    if (user) {
      return 'Access granted'
    } else {
      return 'Access denied'
    }
  },
  /**
   * @Author: PenAndPapers
   * @Desc: Retrives all item
   * @param {Object} user - object parameter
   * @return {Object} - returns an object
   */
  browse ({ commit }) {
    commit('USERS', [
      {
        name: 'Kyrie Irving',
        authorized: true,
        token: '867agsd5987diouchvtaiyusd'
      },
      {
        name: 'Kawhi Leonard',
        authorized: true,
        token: 'akjshdfioubas897dgasjhdk'
      },
      {
        name: 'Jayson Tatum',
        authorized: true,
        token: '978as9d6f8hajksdhlgjkfyhasd2'
      }
    ])
    return [{}]
  },
  /**
   * @Author: PenAndPapers
   * @Desc: Create a new item
   * @param {Object} user - object parameter
   * @return {String} - message if a new item is created of not
   */
  create ({ commit }, user) {
    if (user) {
      return 'New item has been created'
    } else {
      return 'Unable to create new item'
    }
  },
  /**
   * @Author: PenAndPapers
   * @Desc: Retrieve an item
   * @param {Object} user - object parameter
   * @return {Object} - returns an object
   */
  read ({ commit }, user) {
    commit('USER', {
      name: 'Klay Thompson',
      authorized: true,
      token: 'a789s6dghSJLKDHGA789SASD'
    })
    return user
  },
  /**
   * @Author: PenAndPapers
   * @Desc: Updates an item
   * @param {Object} user - object parameter
   * @return {String} - message if a item is updated or not
   */
  update ({ commit }, user) {
    if (user) {
      return 'Item is updated'
    } else {
      return 'Unable to update the item'
    }
  },
  /**
   * @Author: PenAndPapers
   * @Desc: Deletes a item
   * @param {Object} user - object parameter
   * @return {String} - message if a item is deleted or not
   */
  delete ({ commit }, user) {
    if (user) {
      return 'Item is deleted'
    } else {
      return 'Unable to delete the item'
    }
  }
}
