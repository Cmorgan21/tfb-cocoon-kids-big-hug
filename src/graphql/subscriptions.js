/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudents = /* GraphQL */ `
  subscription OnCreateStudents($filter: ModelSubscriptionStudentsFilterInput) {
    onCreateStudents(filter: $filter) {
      id
      name
      classs {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateStudents = /* GraphQL */ `
  subscription OnUpdateStudents($filter: ModelSubscriptionStudentsFilterInput) {
    onUpdateStudents(filter: $filter) {
      id
      name
      classs {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteStudents = /* GraphQL */ `
  subscription OnDeleteStudents($filter: ModelSubscriptionStudentsFilterInput) {
    onDeleteStudents(filter: $filter) {
      id
      name
      classs {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass($filter: ModelSubscriptionClassFilterInput) {
    onCreateClass(filter: $filter) {
      id
      ClassName
      Students {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass($filter: ModelSubscriptionClassFilterInput) {
    onUpdateClass(filter: $filter) {
      id
      ClassName
      Students {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass($filter: ModelSubscriptionClassFilterInput) {
    onDeleteClass(filter: $filter) {
      id
      ClassName
      Students {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateClassStudents = /* GraphQL */ `
  subscription OnCreateClassStudents(
    $filter: ModelSubscriptionClassStudentsFilterInput
  ) {
    onCreateClassStudents(filter: $filter) {
      id
      studentsId
      classId
      students {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      class {
        id
        ClassName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateClassStudents = /* GraphQL */ `
  subscription OnUpdateClassStudents(
    $filter: ModelSubscriptionClassStudentsFilterInput
  ) {
    onUpdateClassStudents(filter: $filter) {
      id
      studentsId
      classId
      students {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      class {
        id
        ClassName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteClassStudents = /* GraphQL */ `
  subscription OnDeleteClassStudents(
    $filter: ModelSubscriptionClassStudentsFilterInput
  ) {
    onDeleteClassStudents(filter: $filter) {
      id
      studentsId
      classId
      students {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      class {
        id
        ClassName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
