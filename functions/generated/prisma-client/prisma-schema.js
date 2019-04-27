module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.30.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateLuiism {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Luiism {
  id: ID!
  ism: String!
  usage: String!
  submittedBy: User
  favouritedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type LuiismConnection {
  pageInfo: PageInfo!
  edges: [LuiismEdge]!
  aggregate: AggregateLuiism!
}

input LuiismCreateInput {
  ism: String!
  usage: String!
  submittedBy: UserCreateOneWithoutSubmissionsInput
  favouritedBy: UserCreateManyWithoutFavouritesInput
}

input LuiismCreateManyWithoutFavouritedByInput {
  create: [LuiismCreateWithoutFavouritedByInput!]
  connect: [LuiismWhereUniqueInput!]
}

input LuiismCreateManyWithoutSubmittedByInput {
  create: [LuiismCreateWithoutSubmittedByInput!]
  connect: [LuiismWhereUniqueInput!]
}

input LuiismCreateWithoutFavouritedByInput {
  ism: String!
  usage: String!
  submittedBy: UserCreateOneWithoutSubmissionsInput
}

input LuiismCreateWithoutSubmittedByInput {
  ism: String!
  usage: String!
  favouritedBy: UserCreateManyWithoutFavouritesInput
}

type LuiismEdge {
  node: Luiism!
  cursor: String!
}

enum LuiismOrderByInput {
  id_ASC
  id_DESC
  ism_ASC
  ism_DESC
  usage_ASC
  usage_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LuiismPreviousValues {
  id: ID!
  ism: String!
  usage: String!
}

input LuiismScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  ism: String
  ism_not: String
  ism_in: [String!]
  ism_not_in: [String!]
  ism_lt: String
  ism_lte: String
  ism_gt: String
  ism_gte: String
  ism_contains: String
  ism_not_contains: String
  ism_starts_with: String
  ism_not_starts_with: String
  ism_ends_with: String
  ism_not_ends_with: String
  usage: String
  usage_not: String
  usage_in: [String!]
  usage_not_in: [String!]
  usage_lt: String
  usage_lte: String
  usage_gt: String
  usage_gte: String
  usage_contains: String
  usage_not_contains: String
  usage_starts_with: String
  usage_not_starts_with: String
  usage_ends_with: String
  usage_not_ends_with: String
  AND: [LuiismScalarWhereInput!]
  OR: [LuiismScalarWhereInput!]
  NOT: [LuiismScalarWhereInput!]
}

type LuiismSubscriptionPayload {
  mutation: MutationType!
  node: Luiism
  updatedFields: [String!]
  previousValues: LuiismPreviousValues
}

input LuiismSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LuiismWhereInput
  AND: [LuiismSubscriptionWhereInput!]
  OR: [LuiismSubscriptionWhereInput!]
  NOT: [LuiismSubscriptionWhereInput!]
}

input LuiismUpdateInput {
  ism: String
  usage: String
  submittedBy: UserUpdateOneWithoutSubmissionsInput
  favouritedBy: UserUpdateManyWithoutFavouritesInput
}

input LuiismUpdateManyDataInput {
  ism: String
  usage: String
}

input LuiismUpdateManyMutationInput {
  ism: String
  usage: String
}

input LuiismUpdateManyWithoutFavouritedByInput {
  create: [LuiismCreateWithoutFavouritedByInput!]
  delete: [LuiismWhereUniqueInput!]
  connect: [LuiismWhereUniqueInput!]
  set: [LuiismWhereUniqueInput!]
  disconnect: [LuiismWhereUniqueInput!]
  update: [LuiismUpdateWithWhereUniqueWithoutFavouritedByInput!]
  upsert: [LuiismUpsertWithWhereUniqueWithoutFavouritedByInput!]
  deleteMany: [LuiismScalarWhereInput!]
  updateMany: [LuiismUpdateManyWithWhereNestedInput!]
}

input LuiismUpdateManyWithoutSubmittedByInput {
  create: [LuiismCreateWithoutSubmittedByInput!]
  delete: [LuiismWhereUniqueInput!]
  connect: [LuiismWhereUniqueInput!]
  set: [LuiismWhereUniqueInput!]
  disconnect: [LuiismWhereUniqueInput!]
  update: [LuiismUpdateWithWhereUniqueWithoutSubmittedByInput!]
  upsert: [LuiismUpsertWithWhereUniqueWithoutSubmittedByInput!]
  deleteMany: [LuiismScalarWhereInput!]
  updateMany: [LuiismUpdateManyWithWhereNestedInput!]
}

input LuiismUpdateManyWithWhereNestedInput {
  where: LuiismScalarWhereInput!
  data: LuiismUpdateManyDataInput!
}

input LuiismUpdateWithoutFavouritedByDataInput {
  ism: String
  usage: String
  submittedBy: UserUpdateOneWithoutSubmissionsInput
}

input LuiismUpdateWithoutSubmittedByDataInput {
  ism: String
  usage: String
  favouritedBy: UserUpdateManyWithoutFavouritesInput
}

input LuiismUpdateWithWhereUniqueWithoutFavouritedByInput {
  where: LuiismWhereUniqueInput!
  data: LuiismUpdateWithoutFavouritedByDataInput!
}

input LuiismUpdateWithWhereUniqueWithoutSubmittedByInput {
  where: LuiismWhereUniqueInput!
  data: LuiismUpdateWithoutSubmittedByDataInput!
}

input LuiismUpsertWithWhereUniqueWithoutFavouritedByInput {
  where: LuiismWhereUniqueInput!
  update: LuiismUpdateWithoutFavouritedByDataInput!
  create: LuiismCreateWithoutFavouritedByInput!
}

input LuiismUpsertWithWhereUniqueWithoutSubmittedByInput {
  where: LuiismWhereUniqueInput!
  update: LuiismUpdateWithoutSubmittedByDataInput!
  create: LuiismCreateWithoutSubmittedByInput!
}

input LuiismWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  ism: String
  ism_not: String
  ism_in: [String!]
  ism_not_in: [String!]
  ism_lt: String
  ism_lte: String
  ism_gt: String
  ism_gte: String
  ism_contains: String
  ism_not_contains: String
  ism_starts_with: String
  ism_not_starts_with: String
  ism_ends_with: String
  ism_not_ends_with: String
  usage: String
  usage_not: String
  usage_in: [String!]
  usage_not_in: [String!]
  usage_lt: String
  usage_lte: String
  usage_gt: String
  usage_gte: String
  usage_contains: String
  usage_not_contains: String
  usage_starts_with: String
  usage_not_starts_with: String
  usage_ends_with: String
  usage_not_ends_with: String
  submittedBy: UserWhereInput
  favouritedBy_every: UserWhereInput
  favouritedBy_some: UserWhereInput
  favouritedBy_none: UserWhereInput
  AND: [LuiismWhereInput!]
  OR: [LuiismWhereInput!]
  NOT: [LuiismWhereInput!]
}

input LuiismWhereUniqueInput {
  id: ID
}

type Mutation {
  createLuiism(data: LuiismCreateInput!): Luiism!
  updateLuiism(data: LuiismUpdateInput!, where: LuiismWhereUniqueInput!): Luiism
  updateManyLuiisms(data: LuiismUpdateManyMutationInput!, where: LuiismWhereInput): BatchPayload!
  upsertLuiism(where: LuiismWhereUniqueInput!, create: LuiismCreateInput!, update: LuiismUpdateInput!): Luiism!
  deleteLuiism(where: LuiismWhereUniqueInput!): Luiism
  deleteManyLuiisms(where: LuiismWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  luiism(where: LuiismWhereUniqueInput!): Luiism
  luiisms(where: LuiismWhereInput, orderBy: LuiismOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Luiism]!
  luiismsConnection(where: LuiismWhereInput, orderBy: LuiismOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LuiismConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  luiism(where: LuiismSubscriptionWhereInput): LuiismSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  submissions(where: LuiismWhereInput, orderBy: LuiismOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Luiism!]
  favourites(where: LuiismWhereInput, orderBy: LuiismOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Luiism!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  submissions: LuiismCreateManyWithoutSubmittedByInput
  favourites: LuiismCreateManyWithoutFavouritedByInput
}

input UserCreateManyWithoutFavouritesInput {
  create: [UserCreateWithoutFavouritesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutSubmissionsInput {
  create: UserCreateWithoutSubmissionsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFavouritesInput {
  name: String!
  email: String!
  submissions: LuiismCreateManyWithoutSubmittedByInput
}

input UserCreateWithoutSubmissionsInput {
  name: String!
  email: String!
  favourites: LuiismCreateManyWithoutFavouritedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  submissions: LuiismUpdateManyWithoutSubmittedByInput
  favourites: LuiismUpdateManyWithoutFavouritedByInput
}

input UserUpdateManyDataInput {
  name: String
  email: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
}

input UserUpdateManyWithoutFavouritesInput {
  create: [UserCreateWithoutFavouritesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFavouritesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFavouritesInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneWithoutSubmissionsInput {
  create: UserCreateWithoutSubmissionsInput
  update: UserUpdateWithoutSubmissionsDataInput
  upsert: UserUpsertWithoutSubmissionsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFavouritesDataInput {
  name: String
  email: String
  submissions: LuiismUpdateManyWithoutSubmittedByInput
}

input UserUpdateWithoutSubmissionsDataInput {
  name: String
  email: String
  favourites: LuiismUpdateManyWithoutFavouritedByInput
}

input UserUpdateWithWhereUniqueWithoutFavouritesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFavouritesDataInput!
}

input UserUpsertWithoutSubmissionsInput {
  update: UserUpdateWithoutSubmissionsDataInput!
  create: UserCreateWithoutSubmissionsInput!
}

input UserUpsertWithWhereUniqueWithoutFavouritesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFavouritesDataInput!
  create: UserCreateWithoutFavouritesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  submissions_every: LuiismWhereInput
  submissions_some: LuiismWhereInput
  submissions_none: LuiismWhereInput
  favourites_every: LuiismWhereInput
  favourites_some: LuiismWhereInput
  favourites_none: LuiismWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    