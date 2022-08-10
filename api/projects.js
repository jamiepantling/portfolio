import connectMongo from '../utils/connectMongo'
const Project = require('../models/Project')



export default async function getProjects(req, res) {
    try {
      console.log('CONNECTING TO MONGO');
      await connectMongo();
      console.log('CONNECTED TO MONGO');
  
      console.log('FETCHING DOCUMENTS');
      const projects = await Project.find()
      console.log('FETCHED DOCUMENTS');
      console.log(projects)
      res.status(200).json(projects);
    } catch (error) {
      console.log(error);
    }
  }