import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/tasks`


const createStep = async (taskId, stepData) => {
  try {
    const res = await fetch(`${BASE_URL}/${taskId}/steps`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(stepData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { 
  createStep,
}