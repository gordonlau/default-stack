
import Knex from 'knex'
const config = require('../knexfile')

const knexConfig = config[process.env.NODE_ENV || 'development']

export const knex = Knex(knexConfig) 


