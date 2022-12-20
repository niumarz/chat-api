const Participants = require('../models/participants.models')

//? Controlador para buscar los paricipantes de una conversacion
const findParticipantConversations = async (userId, conversationId) => {
  const data = await Participants.findOne({
    where: {
      userId: userId,
      conversationId: conversationId
    }
  })
  return data
}

module.exports = {
  findParticipantConversations
}