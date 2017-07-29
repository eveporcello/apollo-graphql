import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { graphql } from 'graphql'
import casual from 'casual'

const schemaString = `
  type Lift {
    name: String
    type: String
    capacity: Int
    status: String
    manufacturer: String
    built: String
    summer: Boolean
    night: Boolean
    elevation_gain: Int
    time: String
    hours: String
    updated: String
    //trails: [Trail]
  }
  type Query {
    allLifts(status: String): [Lift]
    lift(name: String): Lift
  }
}`

export const schema = makeExecutableSchema(
      {
        typeDefs: schemaString,
        resolvers: {

        }
      }
)

const mocks = {}

addMockFunctionsToSchema({ schema, mocks })

const query = `
  query allLifts(status: "hold") {
    name
    type
    status
    elevation_gain
  }
`

graphql(schema, query).then(result => console.log('Got Result', result))
