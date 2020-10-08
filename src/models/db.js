import Sequelize from 'sequelize'
import todo from './todos.js'
import user from './user.js'

export const sequelize = new Sequelize(
    'db_todo',
    'db_user',
    'strongpassword123',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
        define: {
            //prevent sequelize from pluralizing table names
            freezeTableName: true,
            // prevent sequelize from adding timestamps column in tables
            //timestamps: false,
        },
        //logging: false,
    }
)

export const User = user(sequelize)
export const Todo = todo(sequelize)