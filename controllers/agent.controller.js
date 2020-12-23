// Import Model
const Agent = require('../models').Agent;
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');

/**
 * 
 * List all agents
 */
exports.list_agent = (req, res, next) =>{
  Agent.findAll({})
  .then( agents => res.status(200).json(agents))
  .catch( err => console.log(err))
}

/**
 * 
 * Detail agent
 */
exports.detail_agent = (req, res, next) =>{
  const id = req.params.id;
  Agent.findByPk(id)
  .then( agent => res.status(200).json(agent))
  .catch( err => console.log(err))
}

/**
 * Add a agent
 */
exports.add_agent = (req, res, next) =>{
  const agent = req.body;
  Agent.create(agent)
  .then( agentCreated => res.status(201).json(agentCreated))
  .catch( err => console.log(err))
}

/**
 * Edit a agent
 */
exports.edit_agent = (req, res, next) =>{
  const id = req.params.id;
  const agent = req.body;
  Agent.update(agent, {
    where:{
      id: id
    }
  })
  .then( agentEdited => res.status(201).json(agentEdited))
  .catch( err => console.log(err))
}

/**
 * Delete a agent
 */
exports.delete_agent = (req, res, next) =>{
  const id = req.params.id;
  Agent.destroy({
    where:{
      id: id
    }
  })
  .then( agentDeleted => res.status(200).json({message:`Agent Deleted ${agentDeleted}`}))
  .catch( err => console.log(err))
}
/**
 * 
 * Register
 */
exports.agent_register =(req,res,next)=>{
    bcrypt.hash(req.body.pwd,10,(err,hash)=>{
      if(err ){
          throw err
      }
    
    let agent = req.body;
    agent.pwd= hash;
    Agent.create(agent)
    .then(data=>res.status(201).json(data))
    .catch(error=>console.log(error))
});
}
exports.agent_login=(req,res,next)=>{
    Agent.findOne({
        where:{
            email: req.body.email
        }
    })
    .then(agent=>{
        if(agent){
            bcrypt.compare(req.body.pwd, user.pwd, (err,result)=>{
                if(err) res.status(500).json(err)
                else{
                    if(result){
                        const token= jwt.sign({email:agent.email, name:agent.name}, process.env.SECRET_PHRASE,{expiresIn:'24h'})
                        res.status(200).json({token: token});
                    }
                    else{
                        res.status(500).json({message:'You fail'})
                    }
                }
            })
    }
    else{
        res.status(404).json({message:'Bad login/pwd'})
    }
    })
    .catch(err=>res.status(500).json(err))
}