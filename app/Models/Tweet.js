'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tweet extends Model {

    /**
     * Informando que o tweet pertence a um usuário.
     */
    user() {
        return this.belongsTo("App/Models/User");
    }

}

module.exports = Tweet
