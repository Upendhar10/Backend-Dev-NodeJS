# Database Design

- Database design is the process of structuring and organizing data in a way that supports efficient storage, retrieval, and management within a database system.
- Effective database design is critical for creating robust, efficient, and scalable database systems that meet the needs of users and applications.

## Importance of Database Design

1. Data Integrity: Ensures accuracy and consistency of data over its lifecycle.
2. Efficiency: Optimizes data storage and retrieval processes, enhancing performance.
3. Scalability: Allows the database to grow and handle increasing amounts of data without significant redesign.
4. Maintainability: Makes the database easier to maintain, update, and expand.
5. Security: Protects sensitive data through proper access controls and constraints.

## Designing a database for MongoDB

- MongoDB is a document-oriented database, which means it stores data in JSON-like BSON (Binary JSON) documents.
- Designing a database using/for MongoDB involves different principles compared to traditional relational databases due to its NoSQL nature.

## Key Concepts in MongoDB Database Design

1. Collections:
   - Similar to tables in relational databases.
   - Collections store documents.
2. Documents:
   - The basic unit of data in MongoDB, similar to rows in relational databases.
   - Documents are JSON-like objects.
3. Embedded Documents:
   - Documents within documents, used to represent one-to-many relationships within a single document.
4. References:
   - Linking documents in different collections, used for many-to-many relationships or when embedding is not feasible.
5. Indexes:
   - Improve the performance of queries. MongoDB supports various indexing strategies.
6. Shard Keys:
   - Used in sharding to distribute data across multiple servers.

## Key Steps in MongoDB Database Design

1. Requirement Analysis:

   - Understand the application requirements, data structure, and query patterns.
   - Identify the types of data to be stored and how they will be accessed.

2. Schema Design:

   - Determine the collections and the structure of documents within those collections.
   - Unlike relational databases, MongoDB doesn’t enforce a fixed schema, but having a planned schema helps maintain consistency.

3. Normalization vs. Denormalization:

   - Decide the balance between normalization and denormalization.
   - In MongoDB, denormalization (embedding data) is often preferred to reduce the number of joins and improve read performance.
   - Normalization (referencing data) is used to avoid data duplication and maintain data consistency.

4. Data Modeling:

   - Use embedded documents and arrays to model one-to-one and one-to-many relationships within a single document.
   - Use referencing for many-to-many relationships or when embedding would result in excessively large documents.

5. Indexes:

   - Create indexes to optimize query performance.
   - MongoDB supports various types of indexes, including single field, compound, multikey, geospatial, and text indexes.

6. Sharding:

   - Plan for sharding if you expect the database to grow significantly.
   - Sharding involves distributing data across multiple servers to handle large datasets and high throughput.

---

---

- Find all the Databases here : [All Database Designs](https://app.eraser.io/workspace/ihiAwVmpGn35BhKeB3LK)

## Database Design for a TodoList App

![TodoList](./assets/TodoList%20Db%20Design.png)

```
// # TodoList Db Design

todos[icon:list]{
  _id string pk
  createdBy objectId users
  createdAt Date
  updatedAt Date
  subTodos objectId[] subTodos
  content string
  status boolean
}

users[icon: user] {
  _id string pk
  username string
  email string
  password string
}

subTodos[icon:list] {
  _id string pk
  createdBy objectId users
  createdAt Date
  updatedAt Date
  content string
  status boolean
}

// relation mapping

todos.createdBy - users._id
todos.subTodos < subTodos._id
subTodos.createdBy - users._id

```

---

---

## Database Design for a Hospital Management App

---

---

## Database Design for a E-commerce App

![E-commerce ](./assets/E-commerce%20App%20DB%20Design.png)

```
// # Ecommerce store Db Design

users[icon: user]{
  _id string pk
  username string
  email string
  mobile number
  password string
  address string
  pincode string
  city string
  state string
}

categories[icon: package] {
  _id string pk
  name string
  createdAt Date
  updatedAt Date
}

products[icon: box]{
  _id string pk
  name string
  description string
  productImage string
  stock number
  price number
  category objectId categories
  owner ObjectId users
  createdAt Date
  updatedAt Date
}

orders[icon: onedrive]{
  _id string pk
  customer ObjectId users
  orderItems ObjectId[] orderItems
  address string
  status enum "Pending","cancelled","Delivered"
  paymentId string
  createdAt Date
  UpdatedAt Date
}

orderItems[icon: list]{
  _id string pk
  productId ObjectId products
  quantity number
}

// relation mapping

products.categories - categories._id
products.owner - users._id
orderItems.productId - products._id
orders.customer - users._id
orders.orderItems < orderItems._id

```