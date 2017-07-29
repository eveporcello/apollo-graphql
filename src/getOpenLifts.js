import fetch from 'isomorphic-fetch'

export const getOpenLifts = url => {
  const liftFetch = fetch(url)
    .then(liftList => liftList.json())
    .then(l => l.data.allLifts.map(lift => lift.name))
    .then(liftNames => {
      var liftArray = [...liftNames]
      return liftArray
    })
}
