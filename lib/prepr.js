import { createPreprClient } from '@preprio/nodejs-sdk'

const prepr = createPreprClient({
  token: '19db412a781856b46483354c0139e3f26b6dcad7f512074c2a388f9383a3f03f',
  baseUrl: 'https://graphql.prepr.io/graphql',
})

export { prepr }
