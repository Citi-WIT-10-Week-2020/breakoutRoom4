/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateProfessorInput = {
  id?: string | null;
  professorName: string;
  universityName: string;
  _version?: number | null;
};

export type ModelProfessorConditionInput = {
  professorName?: ModelStringInput | null;
  universityName?: ModelStringInput | null;
  and?: Array<ModelProfessorConditionInput | null> | null;
  or?: Array<ModelProfessorConditionInput | null> | null;
  not?: ModelProfessorConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateProfessorInput = {
  id: string;
  professorName?: string | null;
  universityName?: string | null;
  _version?: number | null;
};

export type DeleteProfessorInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateCourseInput = {
  id?: string | null;
  professor: string;
  courseName: string;
  courseDescription: string;
  _version?: number | null;
};

export type ModelCourseConditionInput = {
  professor?: ModelStringInput | null;
  courseName?: ModelStringInput | null;
  courseDescription?: ModelStringInput | null;
  and?: Array<ModelCourseConditionInput | null> | null;
  or?: Array<ModelCourseConditionInput | null> | null;
  not?: ModelCourseConditionInput | null;
};

export type UpdateCourseInput = {
  id: string;
  professor?: string | null;
  courseName?: string | null;
  courseDescription?: string | null;
  _version?: number | null;
};

export type DeleteCourseInput = {
  id?: string | null;
  _version?: number | null;
};

export type ModelProfessorFilterInput = {
  id?: ModelIDInput | null;
  professorName?: ModelStringInput | null;
  universityName?: ModelStringInput | null;
  and?: Array<ModelProfessorFilterInput | null> | null;
  or?: Array<ModelProfessorFilterInput | null> | null;
  not?: ModelProfessorFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null;
  professor?: ModelStringInput | null;
  courseName?: ModelStringInput | null;
  courseDescription?: ModelStringInput | null;
  and?: Array<ModelCourseFilterInput | null> | null;
  or?: Array<ModelCourseFilterInput | null> | null;
  not?: ModelCourseFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type CreateProfessorMutation = {
  __typename: "Professor";
  id: string;
  professorName: string;
  universityName: string;
  courses: {
    __typename: "ModelCourseConnection";
    items: Array<{
      __typename: "Course";
      id: string;
      professor: string;
      courseName: string;
      courseDescription: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProfessorMutation = {
  __typename: "Professor";
  id: string;
  professorName: string;
  universityName: string;
  courses: {
    __typename: "ModelCourseConnection";
    items: Array<{
      __typename: "Course";
      id: string;
      professor: string;
      courseName: string;
      courseDescription: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProfessorMutation = {
  __typename: "Professor";
  id: string;
  professorName: string;
  universityName: string;
  courses: {
    __typename: "ModelCourseConnection";
    items: Array<{
      __typename: "Course";
      id: string;
      professor: string;
      courseName: string;
      courseDescription: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateCourseMutation = {
  __typename: "Course";
  id: string;
  professor: string;
  courseName: string;
  courseDescription: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCourseMutation = {
  __typename: "Course";
  id: string;
  professor: string;
  courseName: string;
  courseDescription: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCourseMutation = {
  __typename: "Course";
  id: string;
  professor: string;
  courseName: string;
  courseDescription: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type SyncProfessorsQuery = {
  __typename: "ModelProfessorConnection";
  items: Array<{
    __typename: "Professor";
    id: string;
    professorName: string;
    universityName: string;
    courses: {
      __typename: "ModelCourseConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetProfessorQuery = {
  __typename: "Professor";
  id: string;
  professorName: string;
  universityName: string;
  courses: {
    __typename: "ModelCourseConnection";
    items: Array<{
      __typename: "Course";
      id: string;
      professor: string;
      courseName: string;
      courseDescription: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListProfessorsQuery = {
  __typename: "ModelProfessorConnection";
  items: Array<{
    __typename: "Professor";
    id: string;
    professorName: string;
    universityName: string;
    courses: {
      __typename: "ModelCourseConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncCoursesQuery = {
  __typename: "ModelCourseConnection";
  items: Array<{
    __typename: "Course";
    id: string;
    professor: string;
    courseName: string;
    courseDescription: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetCourseQuery = {
  __typename: "Course";
  id: string;
  professor: string;
  courseName: string;
  courseDescription: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListCoursesQuery = {
  __typename: "ModelCourseConnection";
  items: Array<{
    __typename: "Course";
    id: string;
    professor: string;
    courseName: string;
    courseDescription: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type CourseByProfessorQuery = {
  __typename: "ModelCourseConnection";
  items: Array<{
    __typename: "Course";
    id: string;
    professor: string;
    courseName: string;
    courseDescription: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type OnCreateProfessorSubscription = {
  __typename: "Professor";
  id: string;
  professorName: string;
  universityName: string;
  courses: {
    __typename: "ModelCourseConnection";
    items: Array<{
      __typename: "Course";
      id: string;
      professor: string;
      courseName: string;
      courseDescription: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProfessorSubscription = {
  __typename: "Professor";
  id: string;
  professorName: string;
  universityName: string;
  courses: {
    __typename: "ModelCourseConnection";
    items: Array<{
      __typename: "Course";
      id: string;
      professor: string;
      courseName: string;
      courseDescription: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProfessorSubscription = {
  __typename: "Professor";
  id: string;
  professorName: string;
  universityName: string;
  courses: {
    __typename: "ModelCourseConnection";
    items: Array<{
      __typename: "Course";
      id: string;
      professor: string;
      courseName: string;
      courseDescription: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCourseSubscription = {
  __typename: "Course";
  id: string;
  professor: string;
  courseName: string;
  courseDescription: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCourseSubscription = {
  __typename: "Course";
  id: string;
  professor: string;
  courseName: string;
  courseDescription: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCourseSubscription = {
  __typename: "Course";
  id: string;
  professor: string;
  courseName: string;
  courseDescription: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateProfessor(
    input: CreateProfessorInput,
    condition?: ModelProfessorConditionInput
  ): Promise<CreateProfessorMutation> {
    const statement = `mutation CreateProfessor($input: CreateProfessorInput!, $condition: ModelProfessorConditionInput) {
        createProfessor(input: $input, condition: $condition) {
          __typename
          id
          professorName
          universityName
          courses {
            __typename
            items {
              __typename
              id
              professor
              courseName
              courseDescription
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProfessorMutation>response.data.createProfessor;
  }
  async UpdateProfessor(
    input: UpdateProfessorInput,
    condition?: ModelProfessorConditionInput
  ): Promise<UpdateProfessorMutation> {
    const statement = `mutation UpdateProfessor($input: UpdateProfessorInput!, $condition: ModelProfessorConditionInput) {
        updateProfessor(input: $input, condition: $condition) {
          __typename
          id
          professorName
          universityName
          courses {
            __typename
            items {
              __typename
              id
              professor
              courseName
              courseDescription
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProfessorMutation>response.data.updateProfessor;
  }
  async DeleteProfessor(
    input: DeleteProfessorInput,
    condition?: ModelProfessorConditionInput
  ): Promise<DeleteProfessorMutation> {
    const statement = `mutation DeleteProfessor($input: DeleteProfessorInput!, $condition: ModelProfessorConditionInput) {
        deleteProfessor(input: $input, condition: $condition) {
          __typename
          id
          professorName
          universityName
          courses {
            __typename
            items {
              __typename
              id
              professor
              courseName
              courseDescription
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProfessorMutation>response.data.deleteProfessor;
  }
  async CreateCourse(
    input: CreateCourseInput,
    condition?: ModelCourseConditionInput
  ): Promise<CreateCourseMutation> {
    const statement = `mutation CreateCourse($input: CreateCourseInput!, $condition: ModelCourseConditionInput) {
        createCourse(input: $input, condition: $condition) {
          __typename
          id
          professor
          courseName
          courseDescription
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCourseMutation>response.data.createCourse;
  }
  async UpdateCourse(
    input: UpdateCourseInput,
    condition?: ModelCourseConditionInput
  ): Promise<UpdateCourseMutation> {
    const statement = `mutation UpdateCourse($input: UpdateCourseInput!, $condition: ModelCourseConditionInput) {
        updateCourse(input: $input, condition: $condition) {
          __typename
          id
          professor
          courseName
          courseDescription
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCourseMutation>response.data.updateCourse;
  }
  async DeleteCourse(
    input: DeleteCourseInput,
    condition?: ModelCourseConditionInput
  ): Promise<DeleteCourseMutation> {
    const statement = `mutation DeleteCourse($input: DeleteCourseInput!, $condition: ModelCourseConditionInput) {
        deleteCourse(input: $input, condition: $condition) {
          __typename
          id
          professor
          courseName
          courseDescription
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCourseMutation>response.data.deleteCourse;
  }
  async SyncProfessors(
    filter?: ModelProfessorFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncProfessorsQuery> {
    const statement = `query SyncProfessors($filter: ModelProfessorFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncProfessors(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            professorName
            universityName
            courses {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncProfessorsQuery>response.data.syncProfessors;
  }
  async GetProfessor(id: string): Promise<GetProfessorQuery> {
    const statement = `query GetProfessor($id: ID!) {
        getProfessor(id: $id) {
          __typename
          id
          professorName
          universityName
          courses {
            __typename
            items {
              __typename
              id
              professor
              courseName
              courseDescription
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProfessorQuery>response.data.getProfessor;
  }
  async ListProfessors(
    filter?: ModelProfessorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProfessorsQuery> {
    const statement = `query ListProfessors($filter: ModelProfessorFilterInput, $limit: Int, $nextToken: String) {
        listProfessors(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            professorName
            universityName
            courses {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProfessorsQuery>response.data.listProfessors;
  }
  async SyncCourses(
    filter?: ModelCourseFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCoursesQuery> {
    const statement = `query SyncCourses($filter: ModelCourseFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncCourses(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            professor
            courseName
            courseDescription
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCoursesQuery>response.data.syncCourses;
  }
  async GetCourse(id: string): Promise<GetCourseQuery> {
    const statement = `query GetCourse($id: ID!) {
        getCourse(id: $id) {
          __typename
          id
          professor
          courseName
          courseDescription
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCourseQuery>response.data.getCourse;
  }
  async ListCourses(
    filter?: ModelCourseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCoursesQuery> {
    const statement = `query ListCourses($filter: ModelCourseFilterInput, $limit: Int, $nextToken: String) {
        listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            professor
            courseName
            courseDescription
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCoursesQuery>response.data.listCourses;
  }
  async CourseByProfessor(
    professor?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelCourseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<CourseByProfessorQuery> {
    const statement = `query CourseByProfessor($professor: String, $sortDirection: ModelSortDirection, $filter: ModelCourseFilterInput, $limit: Int, $nextToken: String) {
        courseByProfessor(professor: $professor, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            professor
            courseName
            courseDescription
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (professor) {
      gqlAPIServiceArguments.professor = professor;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CourseByProfessorQuery>response.data.courseByProfessor;
  }
  OnCreateProfessorListener: Observable<
    OnCreateProfessorSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProfessor {
        onCreateProfessor {
          __typename
          id
          professorName
          universityName
          courses {
            __typename
            items {
              __typename
              id
              professor
              courseName
              courseDescription
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateProfessorSubscription>;

  OnUpdateProfessorListener: Observable<
    OnUpdateProfessorSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProfessor {
        onUpdateProfessor {
          __typename
          id
          professorName
          universityName
          courses {
            __typename
            items {
              __typename
              id
              professor
              courseName
              courseDescription
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateProfessorSubscription>;

  OnDeleteProfessorListener: Observable<
    OnDeleteProfessorSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProfessor {
        onDeleteProfessor {
          __typename
          id
          professorName
          universityName
          courses {
            __typename
            items {
              __typename
              id
              professor
              courseName
              courseDescription
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteProfessorSubscription>;

  OnCreateCourseListener: Observable<OnCreateCourseSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateCourse {
        onCreateCourse {
          __typename
          id
          professor
          courseName
          courseDescription
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCourseSubscription>;

  OnUpdateCourseListener: Observable<OnUpdateCourseSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCourse {
        onUpdateCourse {
          __typename
          id
          professor
          courseName
          courseDescription
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCourseSubscription>;

  OnDeleteCourseListener: Observable<OnDeleteCourseSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCourse {
        onDeleteCourse {
          __typename
          id
          professor
          courseName
          courseDescription
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCourseSubscription>;
}
