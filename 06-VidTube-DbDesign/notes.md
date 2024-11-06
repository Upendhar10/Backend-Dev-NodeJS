# VidTube

- A Video streaming platform that is equiped with some of the features from both Youtube and Twitter.

## Database Design

```
Users[icon:user]{
  _id string pk
  username string
  email string
  password string
  avatar string
  coverImg string 
  fullname string
  age number
  watchHistory ObjectId[] Videos
  refreshToken string
  createdAt Date
  updatedAt Date
}

Subscriptions[icon:dollar-sign]{
  _id string pk
  Subscriber ObjectId Users
  channel ObjectId users
  createdAt Date
  updatedAt Date
}

Videos[icon:video]{
  _id string pk
  title string 
  description string
  thumbnail string 
  videoFile string
  owner ObjectId Users
  duration number
  isPublished boolean
  views number
  createdAt Date
  updatedAt Date
}

Tweets[icon:twitter]{
  _id string pk
  owner ObjectId Users
  content string 
  createdAt Date
  updatedAt Date
}

Likes[icon:thumbs-down]{
  _id string pk
  likedBy ObjectId users
  video ObjectId videos
  comment ObjectId Comments
  tweet ObjectId Tweets
  createdAt Date
  updated Date
}

Comments[icon:message-square]{
  _id string pk
  owner ObjectId users
  content string
  video ObjectId videos
  createdAt Date
  updatedAt Date
}

Playlists[icon:list]{
  _id string pk
  name string
  description string
  owner ObjectId Users
  videolist ObjectId[] Videos
  createdAt Date
  updatedAt Date
}

// Relation mapping








```