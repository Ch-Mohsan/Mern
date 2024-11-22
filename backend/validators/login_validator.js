const z=require('zod');
const loginSchema = z.object({
    email: z.string()
      .email({ message: 'Invalid email address' })
      .min(8, { message: 'email must be at least 8 characters' })
      .max(50, { message: 'email must be at most 50 characters' }),
  
    password: z.string()
      .min(8, { message: 'password must be at least 8 characters' })
      .max(15, { message: 'password must be at most 15 characters' }),
  });
  module.exports=loginSchema