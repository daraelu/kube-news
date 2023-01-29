import { Sequelize, Model, DataTypes } from 'sequelize';

const DB_DATABASE = process.env.DB_DATABASE || "kubedevnews";
const DB_USERNAME = process.env.DB_USERNAME || "kubedevnews";
const DB_PASSWORD = process.env.DB_PASSWORD || "Pg#123";
const DB_HOST = process.env.DB_HOST || "localhost";

const seque = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres'
  });

class Post extends Model {
  
  save() {
    
    console.log('Entrou')
    super.save();
  }
}

Post.init({
  title: {
    type: DataTypes.STRING,
    require: true
  },
  summary: {
    type: DataTypes.STRING,
    require: true
  },
  publishDate: {
    type: DataTypes.DATEONLY,
    require: true
  },
  content: {
    type: DataTypes.STRING,
    require: true
  },
}, {
  sequelize: seque, // We need to pass the connection instance
  modelName: 'Post' // We need to choose the model name
})

export function initDatabase() {
    seque.sync({ alter: true })
}

const _Post = Post;
export { _Post as Post };

