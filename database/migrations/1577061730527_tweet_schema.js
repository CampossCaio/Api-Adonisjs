'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TweetSchema extends Schema {
  up () {
    this.create('tweets', (table) => {
      table
          .integer('user_id')
          .unsigned() //Indica o mysql que o valor não pode ser abaixo de 0.
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      table.string('content', 240).notNullable();
      table.increments();
      table.timestamps();
    })
  }

  down () {
    this.drop('tweets');
  }
}

module.exports = TweetSchema
