const z=require('zod')

const ContectSchema=z.object({
    username: z.string()
    .min(8, { message: 'username must be at least 8 characters' })
    .max(15, { message: 'username must be at most 15 characters' }),
    email: z.string()
      .email({ message: 'Invalid email address' })
      .min(8, { message: 'email must be at least 8 characters' })
      .max(50, { message: 'email must be at most 50 characters' }),
      message: z.string()
    .min(12, { message: 'message must be at least 12 characters' })
    .max(50, { message: 'message must be at most 50 characters' }),

})
module.exports=ContectSchema;