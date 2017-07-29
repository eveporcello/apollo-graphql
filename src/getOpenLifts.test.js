import { getOpenLifts } from './getOpenLifts'
import fetch from 'isomorphic-fetch'

const parseGraphResponse = url =>
  fetch(url)
    .then(response => response.json())
    .then(json => json.data.allLifts)
    .then(lifts => lifts.map(lift => lift.name))

describe('Moon Highway Graph Tests - no mock', () => {

  it('finds open chairlifts (promise)', async () => {
      var query = `{
        allLifts(status: "open") {
          name
          status
          manufacturer
          type
        }
      }`
      expect(
        parseGraphResponse(`https://www.moonhighway.com/graphiql?query=${query}`)
      ).resolves.toEqual([
        'Astra Express',
        'Jazz Cat',
        'Jolly Roger',
        'Neptune Rope',
        'Prickly Peak',
        'Snowtooth Express'
     ])
  })

  it('finds open chairlifts', done => {
      var query = `{
        allLifts(status: "open") {
          name
          status
          manufacturer
          type
        }
      }`
      fetch(`https://www.moonhighway.com/graphiql?query=${query}`)
        .then(response => response.json())
        .then(json => json.data.allLifts)
        .then(lifts => lifts.map(lift => lift.name))
        .then(liftNames => {
          expect(liftNames).toEqual([
            'Astra Express',
            'Jazz Cat',
            'Jolly Roger',
            'Neptune Rope',
            'Prickly Peak',
            'Snowtooth Express'
         ])
         done()
        })

  })

})
