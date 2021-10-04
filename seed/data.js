import db from '../db/connection.js'
import Post from '../models/post.js'
import faker from 'faker'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

    // create an array of 50 objects
    // use faker package to generate fake data
    const posts = [...Array(50)].map(item => {
        return {
            title: faker.lorem.sentence(),
            body: faker.lorem.paragraph(),
            authorFirstName: faker.name.firstName(),
            authorLastName: faker.name.lastName(),
            imgUrl: faker.internet.url()
        }
    })
    await Post.insertMany(posts)
    console.log('Created posts!')

  // close database connection. done.
  db.close()
}

insertData()
