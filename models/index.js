import mongoose from 'mongoose';
import gradesModel from './gradesModel.js';

const db = {};
db.mongoose = mongoose;
// db.url = process.env.MONGODB;
db.url =
  'mongodb+srv://grades:Cabeca1234%24%24@mongodbcluster.9rajd.mongodb.net/grades?retryWrites=true&w=majority';
db.gradesModel = gradesModel(mongoose);

export { db };
