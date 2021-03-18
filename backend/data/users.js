import bcrypt from 'bcryptjs'


const users = [
  {
    name: 'Admin User',
    email: 'admin@techreign.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Jane Doe',
    email: 'jane@techreign.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'John Doe',
    email: 'john@techreign.com',
    password: bcrypt.hashSync('123456', 10)
  }
]

export default users