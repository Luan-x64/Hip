// src/controllers/authController.js
// const createClient = require('@supabase/supabase-js')

import supabase from '../../config/dataBase.js';

async function login(req, res){
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password',
    })
  } catch (error) {
    
    console.log(error)
    return error
  }
 
}


export default { login }





