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
  firstName?: string | null;
  lastName?: string | null;
};

export type ModelProfessorConditionInput = {
  professorName?: ModelStringInput | null;
  universityName?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
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
  firstName?: string | null;
  lastName?: string | null;
};

export type DeleteProfessorInput = {
  id?: string | null;
};

export type CreateStudentInput = {
  id?: string | null;
  studentName: string;
  universityName: string;
};

export type ModelStudentConditionInput = {
  studentName?: ModelIDInput | null;
  universityName?: ModelStringInput | null;
  and?: Array<ModelStudentConditionInput | null> | null;
  or?: Array<ModelStudentConditionInput | null> | null;
  not?: ModelStudentConditionInput | null;
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

export type UpdateStudentInput = {
  id: string;
  studentName?: string | null;
  universityName?: string | null;
};

export type DeleteStudentInput = {
  id?: string | null;
};

export type CreateStudentCourseInput = {
  id?: string | null;
  studentID: string;
  courseID: string;
};

export type ModelStudentCourseConditionInput = {
  studentID?: ModelIDInput | null;
  courseID?: ModelIDInput | null;
  and?: Array<ModelStudentCourseConditionInput | null> | null;
  or?: Array<ModelStudentCourseConditionInput | null> | null;
  not?: ModelStudentCourseConditionInput | null;
};

export type UpdateStudentCourseInput = {
  id: string;
  studentID?: string | null;
  courseID?: string | null;
};

export type DeleteStudentCourseInput = {
  id?: string | null;
};

export type CreateCourseInput = {
  id?: string | null;
  professor: string;
  courseName: string;
  courseDescription: string;
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
};

export type DeleteCourseInput = {
  id?: string | null;
};

export type CreateTopicInput = {
  id?: string | null;
  professor: string;
  TopicName: string;
  course: string;
  TopicDescription: string;
};

export type ModelTopicConditionInput = {
  professor?: ModelStringInput | null;
  TopicName?: ModelStringInput | null;
  course?: ModelStringInput | null;
  TopicDescription?: ModelStringInput | null;
  and?: Array<ModelTopicConditionInput | null> | null;
  or?: Array<ModelTopicConditionInput | null> | null;
  not?: ModelTopicConditionInput | null;
};

export type UpdateTopicInput = {
  id: string;
  professor?: string | null;
  TopicName?: string | null;
  course?: string | null;
  TopicDescription?: string | null;
};

export type DeleteTopicInput = {
  id?: string | null;
};

export type CreateResourceGroupInput = {
  id?: string | null;
  course: string;
  topic: string;
  groupName: string;
};

export type ModelResourceGroupConditionInput = {
  course?: ModelStringInput | null;
  topic?: ModelStringInput | null;
  groupName?: ModelStringInput | null;
  and?: Array<ModelResourceGroupConditionInput | null> | null;
  or?: Array<ModelResourceGroupConditionInput | null> | null;
  not?: ModelResourceGroupConditionInput | null;
};

export type UpdateResourceGroupInput = {
  id: string;
  course?: string | null;
  topic?: string | null;
  groupName?: string | null;
};

export type DeleteResourceGroupInput = {
  id?: string | null;
};

export type CreateFileInput = {
  id?: string | null;
  course: string;
  topic: string;
  filename: string;
  filetype: string;
  fileDescription?: string | null;
  resourseGroup: string;
  file?: S3ObjectInput | null;
};

export type S3ObjectInput = {
  bucket: string;
  region: string;
  key: string;
};

export type ModelFileConditionInput = {
  course?: ModelStringInput | null;
  topic?: ModelStringInput | null;
  filename?: ModelStringInput | null;
  filetype?: ModelStringInput | null;
  fileDescription?: ModelStringInput | null;
  resourseGroup?: ModelStringInput | null;
  and?: Array<ModelFileConditionInput | null> | null;
  or?: Array<ModelFileConditionInput | null> | null;
  not?: ModelFileConditionInput | null;
};

export type UpdateFileInput = {
  id: string;
  course?: string | null;
  topic?: string | null;
  filename?: string | null;
  filetype?: string | null;
  fileDescription?: string | null;
  resourseGroup?: string | null;
  file?: S3ObjectInput | null;
};

export type DeleteFileInput = {
  id?: string | null;
};

export type ModelProfessorFilterInput = {
  id?: ModelIDInput | null;
  professorName?: ModelStringInput | null;
  universityName?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  and?: Array<ModelProfessorFilterInput | null> | null;
  or?: Array<ModelProfessorFilterInput | null> | null;
  not?: ModelProfessorFilterInput | null;
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null;
  studentName?: ModelIDInput | null;
  universityName?: ModelStringInput | null;
  and?: Array<ModelStudentFilterInput | null> | null;
  or?: Array<ModelStudentFilterInput | null> | null;
  not?: ModelStudentFilterInput | null;
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

export type ModelTopicFilterInput = {
  id?: ModelIDInput | null;
  professor?: ModelStringInput | null;
  TopicName?: ModelStringInput | null;
  course?: ModelStringInput | null;
  TopicDescription?: ModelStringInput | null;
  and?: Array<ModelTopicFilterInput | null> | null;
  or?: Array<ModelTopicFilterInput | null> | null;
  not?: ModelTopicFilterInput | null;
};

export type ModelResourceGroupFilterInput = {
  id?: ModelIDInput | null;
  course?: ModelStringInput | null;
  topic?: ModelStringInput | null;
  groupName?: ModelStringInput | null;
  and?: Array<ModelResourceGroupFilterInput | null> | null;
  or?: Array<ModelResourceGroupFilterInput | null> | null;
  not?: ModelResourceGroupFilterInput | null;
};

export type ModelFileFilterInput = {
  id?: ModelIDInput | null;
  course?: ModelStringInput | null;
  topic?: ModelStringInput | null;
  filename?: ModelStringInput | null;
  filetype?: ModelStringInput | null;
  fileDescription?: ModelStringInput | null;
  resourseGroup?: ModelStringInput | null;
  and?: Array<ModelFileFilterInput | null> | null;
  or?: Array<ModelFileFilterInput | null> | null;
  not?: ModelFileFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreateProfessorMutation = {
  __typename: "Professor";
  id: string;
  professorName: string;
  universityName: string;
  firstName: string | null;
  lastName: string | null;
  courses: {
    __typename: "ModelCourseConnection";
    items: Array<{
      __typename: "Course";
      id: string;
      professor: string;
      courseName: string;
      courseDescription: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProfessorMutation = {
  __typename: "Professor";
  id: string;
  professorName: string;
  universityName: string;
  firstName: string | null;
  lastName: string | null;
  courses: {
    __typename: "ModelCourseConnection";
    items: Array<{
      __typename: "Course";
      id: string;
      professor: string;
      courseName: string;
      courseDescription: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProfessorMutation = {
  __typename: "Professor";
  id: string;
  professorName: string;
  universityName: string;
  firstName: string | null;
  lastName: string | null;
  courses: {
    __typename: "ModelCourseConnection";
    items: Array<{
      __typename: "Course";
      id: string;
      professor: string;
      courseName: string;
      courseDescription: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateStudentMutation = {
  __typename: "Student";
  id: string;
  studentName: string;
  universityName: string;
  courses: {
    __typename: "ModelStudentCourseConnection";
    items: Array<{
      __typename: "StudentCourse";
      id: string;
      studentID: string;
      courseID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStudentMutation = {
  __typename: "Student";
  id: string;
  studentName: string;
  universityName: string;
  courses: {
    __typename: "ModelStudentCourseConnection";
    items: Array<{
      __typename: "StudentCourse";
      id: string;
      studentID: string;
      courseID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteStudentMutation = {
  __typename: "Student";
  id: string;
  studentName: string;
  universityName: string;
  courses: {
    __typename: "ModelStudentCourseConnection";
    items: Array<{
      __typename: "StudentCourse";
      id: string;
      studentID: string;
      courseID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateStudentCourseMutation = {
  __typename: "StudentCourse";
  id: string;
  studentID: string;
  courseID: string;
  student: {
    __typename: "Student";
    id: string;
    studentName: string;
    universityName: string;
    courses: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  course: {
    __typename: "Course";
    id: string;
    professor: string;
    students: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    courseName: string;
    courseDescription: string;
    topics: {
      __typename: "ModelTopicConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateStudentCourseMutation = {
  __typename: "StudentCourse";
  id: string;
  studentID: string;
  courseID: string;
  student: {
    __typename: "Student";
    id: string;
    studentName: string;
    universityName: string;
    courses: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  course: {
    __typename: "Course";
    id: string;
    professor: string;
    students: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    courseName: string;
    courseDescription: string;
    topics: {
      __typename: "ModelTopicConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteStudentCourseMutation = {
  __typename: "StudentCourse";
  id: string;
  studentID: string;
  courseID: string;
  student: {
    __typename: "Student";
    id: string;
    studentName: string;
    universityName: string;
    courses: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  course: {
    __typename: "Course";
    id: string;
    professor: string;
    students: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    courseName: string;
    courseDescription: string;
    topics: {
      __typename: "ModelTopicConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateCourseMutation = {
  __typename: "Course";
  id: string;
  professor: string;
  students: {
    __typename: "ModelStudentCourseConnection";
    items: Array<{
      __typename: "StudentCourse";
      id: string;
      studentID: string;
      courseID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  courseName: string;
  courseDescription: string;
  topics: {
    __typename: "ModelTopicConnection";
    items: Array<{
      __typename: "Topic";
      id: string;
      professor: string;
      TopicName: string;
      course: string;
      TopicDescription: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCourseMutation = {
  __typename: "Course";
  id: string;
  professor: string;
  students: {
    __typename: "ModelStudentCourseConnection";
    items: Array<{
      __typename: "StudentCourse";
      id: string;
      studentID: string;
      courseID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  courseName: string;
  courseDescription: string;
  topics: {
    __typename: "ModelTopicConnection";
    items: Array<{
      __typename: "Topic";
      id: string;
      professor: string;
      TopicName: string;
      course: string;
      TopicDescription: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCourseMutation = {
  __typename: "Course";
  id: string;
  professor: string;
  students: {
    __typename: "ModelStudentCourseConnection";
    items: Array<{
      __typename: "StudentCourse";
      id: string;
      studentID: string;
      courseID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  courseName: string;
  courseDescription: string;
  topics: {
    __typename: "ModelTopicConnection";
    items: Array<{
      __typename: "Topic";
      id: string;
      professor: string;
      TopicName: string;
      course: string;
      TopicDescription: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTopicMutation = {
  __typename: "Topic";
  id: string;
  professor: string;
  TopicName: string;
  course: string;
  TopicDescription: string;
  resourceGroups: {
    __typename: "ModelResourceGroupConnection";
    items: Array<{
      __typename: "ResourceGroup";
      id: string;
      course: string;
      topic: string;
      groupName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTopicMutation = {
  __typename: "Topic";
  id: string;
  professor: string;
  TopicName: string;
  course: string;
  TopicDescription: string;
  resourceGroups: {
    __typename: "ModelResourceGroupConnection";
    items: Array<{
      __typename: "ResourceGroup";
      id: string;
      course: string;
      topic: string;
      groupName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTopicMutation = {
  __typename: "Topic";
  id: string;
  professor: string;
  TopicName: string;
  course: string;
  TopicDescription: string;
  resourceGroups: {
    __typename: "ModelResourceGroupConnection";
    items: Array<{
      __typename: "ResourceGroup";
      id: string;
      course: string;
      topic: string;
      groupName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateResourceGroupMutation = {
  __typename: "ResourceGroup";
  id: string;
  course: string;
  topic: string;
  groupName: string;
  files: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      id: string;
      course: string;
      topic: string;
      filename: string;
      filetype: string;
      fileDescription: string | null;
      resourseGroup: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateResourceGroupMutation = {
  __typename: "ResourceGroup";
  id: string;
  course: string;
  topic: string;
  groupName: string;
  files: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      id: string;
      course: string;
      topic: string;
      filename: string;
      filetype: string;
      fileDescription: string | null;
      resourseGroup: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteResourceGroupMutation = {
  __typename: "ResourceGroup";
  id: string;
  course: string;
  topic: string;
  groupName: string;
  files: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      id: string;
      course: string;
      topic: string;
      filename: string;
      filetype: string;
      fileDescription: string | null;
      resourseGroup: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateFileMutation = {
  __typename: "File";
  id: string;
  course: string;
  topic: string;
  filename: string;
  filetype: string;
  fileDescription: string | null;
  resourseGroup: string;
  file: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFileMutation = {
  __typename: "File";
  id: string;
  course: string;
  topic: string;
  filename: string;
  filetype: string;
  fileDescription: string | null;
  resourseGroup: string;
  file: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFileMutation = {
  __typename: "File";
  id: string;
  course: string;
  topic: string;
  filename: string;
  filetype: string;
  fileDescription: string | null;
  resourseGroup: string;
  file: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetProfessorQuery = {
  __typename: "Professor";
  id: string;
  professorName: string;
  universityName: string;
  firstName: string | null;
  lastName: string | null;
  courses: {
    __typename: "ModelCourseConnection";
    items: Array<{
      __typename: "Course";
      id: string;
      professor: string;
      courseName: string;
      courseDescription: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
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
    firstName: string | null;
    lastName: string | null;
    courses: {
      __typename: "ModelCourseConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetStudentQuery = {
  __typename: "Student";
  id: string;
  studentName: string;
  universityName: string;
  courses: {
    __typename: "ModelStudentCourseConnection";
    items: Array<{
      __typename: "StudentCourse";
      id: string;
      studentID: string;
      courseID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListStudentsQuery = {
  __typename: "ModelStudentConnection";
  items: Array<{
    __typename: "Student";
    id: string;
    studentName: string;
    universityName: string;
    courses: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCourseQuery = {
  __typename: "Course";
  id: string;
  professor: string;
  students: {
    __typename: "ModelStudentCourseConnection";
    items: Array<{
      __typename: "StudentCourse";
      id: string;
      studentID: string;
      courseID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  courseName: string;
  courseDescription: string;
  topics: {
    __typename: "ModelTopicConnection";
    items: Array<{
      __typename: "Topic";
      id: string;
      professor: string;
      TopicName: string;
      course: string;
      TopicDescription: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCoursesQuery = {
  __typename: "ModelCourseConnection";
  items: Array<{
    __typename: "Course";
    id: string;
    professor: string;
    students: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    courseName: string;
    courseDescription: string;
    topics: {
      __typename: "ModelTopicConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTopicQuery = {
  __typename: "Topic";
  id: string;
  professor: string;
  TopicName: string;
  course: string;
  TopicDescription: string;
  resourceGroups: {
    __typename: "ModelResourceGroupConnection";
    items: Array<{
      __typename: "ResourceGroup";
      id: string;
      course: string;
      topic: string;
      groupName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTopicsQuery = {
  __typename: "ModelTopicConnection";
  items: Array<{
    __typename: "Topic";
    id: string;
    professor: string;
    TopicName: string;
    course: string;
    TopicDescription: string;
    resourceGroups: {
      __typename: "ModelResourceGroupConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetResourceGroupQuery = {
  __typename: "ResourceGroup";
  id: string;
  course: string;
  topic: string;
  groupName: string;
  files: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      id: string;
      course: string;
      topic: string;
      filename: string;
      filetype: string;
      fileDescription: string | null;
      resourseGroup: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListResourceGroupsQuery = {
  __typename: "ModelResourceGroupConnection";
  items: Array<{
    __typename: "ResourceGroup";
    id: string;
    course: string;
    topic: string;
    groupName: string;
    files: {
      __typename: "ModelFileConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetFileQuery = {
  __typename: "File";
  id: string;
  course: string;
  topic: string;
  filename: string;
  filetype: string;
  fileDescription: string | null;
  resourseGroup: string;
  file: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListFilesQuery = {
  __typename: "ModelFileConnection";
  items: Array<{
    __typename: "File";
    id: string;
    course: string;
    topic: string;
    filename: string;
    filetype: string;
    fileDescription: string | null;
    resourseGroup: string;
    file: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type ProfessorByNameQuery = {
  __typename: "ModelProfessorConnection";
  items: Array<{
    __typename: "Professor";
    id: string;
    professorName: string;
    universityName: string;
    firstName: string | null;
    lastName: string | null;
    courses: {
      __typename: "ModelCourseConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type StudentByNameQuery = {
  __typename: "ModelStudentConnection";
  items: Array<{
    __typename: "Student";
    id: string;
    studentName: string;
    universityName: string;
    courses: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type CourseByProfessorQuery = {
  __typename: "ModelCourseConnection";
  items: Array<{
    __typename: "Course";
    id: string;
    professor: string;
    students: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    courseName: string;
    courseDescription: string;
    topics: {
      __typename: "ModelTopicConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type TopicByCourseByProfessorQuery = {
  __typename: "ModelTopicConnection";
  items: Array<{
    __typename: "Topic";
    id: string;
    professor: string;
    TopicName: string;
    course: string;
    TopicDescription: string;
    resourceGroups: {
      __typename: "ModelResourceGroupConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type FileByCourseByTopicQuery = {
  __typename: "ModelResourceGroupConnection";
  items: Array<{
    __typename: "ResourceGroup";
    id: string;
    course: string;
    topic: string;
    groupName: string;
    files: {
      __typename: "ModelFileConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type FileByTopicByResourceGroupQuery = {
  __typename: "ModelFileConnection";
  items: Array<{
    __typename: "File";
    id: string;
    course: string;
    topic: string;
    filename: string;
    filetype: string;
    fileDescription: string | null;
    resourseGroup: string;
    file: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type FileByFilenameQuery = {
  __typename: "ModelFileConnection";
  items: Array<{
    __typename: "File";
    id: string;
    course: string;
    topic: string;
    filename: string;
    filetype: string;
    fileDescription: string | null;
    resourseGroup: string;
    file: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateProfessorSubscription = {
  __typename: "Professor";
  id: string;
  professorName: string;
  universityName: string;
  firstName: string | null;
  lastName: string | null;
  courses: {
    __typename: "ModelCourseConnection";
    items: Array<{
      __typename: "Course";
      id: string;
      professor: string;
      courseName: string;
      courseDescription: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProfessorSubscription = {
  __typename: "Professor";
  id: string;
  professorName: string;
  universityName: string;
  firstName: string | null;
  lastName: string | null;
  courses: {
    __typename: "ModelCourseConnection";
    items: Array<{
      __typename: "Course";
      id: string;
      professor: string;
      courseName: string;
      courseDescription: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProfessorSubscription = {
  __typename: "Professor";
  id: string;
  professorName: string;
  universityName: string;
  firstName: string | null;
  lastName: string | null;
  courses: {
    __typename: "ModelCourseConnection";
    items: Array<{
      __typename: "Course";
      id: string;
      professor: string;
      courseName: string;
      courseDescription: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateStudentSubscription = {
  __typename: "Student";
  id: string;
  studentName: string;
  universityName: string;
  courses: {
    __typename: "ModelStudentCourseConnection";
    items: Array<{
      __typename: "StudentCourse";
      id: string;
      studentID: string;
      courseID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateStudentSubscription = {
  __typename: "Student";
  id: string;
  studentName: string;
  universityName: string;
  courses: {
    __typename: "ModelStudentCourseConnection";
    items: Array<{
      __typename: "StudentCourse";
      id: string;
      studentID: string;
      courseID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteStudentSubscription = {
  __typename: "Student";
  id: string;
  studentName: string;
  universityName: string;
  courses: {
    __typename: "ModelStudentCourseConnection";
    items: Array<{
      __typename: "StudentCourse";
      id: string;
      studentID: string;
      courseID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateStudentCourseSubscription = {
  __typename: "StudentCourse";
  id: string;
  studentID: string;
  courseID: string;
  student: {
    __typename: "Student";
    id: string;
    studentName: string;
    universityName: string;
    courses: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  course: {
    __typename: "Course";
    id: string;
    professor: string;
    students: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    courseName: string;
    courseDescription: string;
    topics: {
      __typename: "ModelTopicConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateStudentCourseSubscription = {
  __typename: "StudentCourse";
  id: string;
  studentID: string;
  courseID: string;
  student: {
    __typename: "Student";
    id: string;
    studentName: string;
    universityName: string;
    courses: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  course: {
    __typename: "Course";
    id: string;
    professor: string;
    students: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    courseName: string;
    courseDescription: string;
    topics: {
      __typename: "ModelTopicConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteStudentCourseSubscription = {
  __typename: "StudentCourse";
  id: string;
  studentID: string;
  courseID: string;
  student: {
    __typename: "Student";
    id: string;
    studentName: string;
    universityName: string;
    courses: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  course: {
    __typename: "Course";
    id: string;
    professor: string;
    students: {
      __typename: "ModelStudentCourseConnection";
      nextToken: string | null;
    } | null;
    courseName: string;
    courseDescription: string;
    topics: {
      __typename: "ModelTopicConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCourseSubscription = {
  __typename: "Course";
  id: string;
  professor: string;
  students: {
    __typename: "ModelStudentCourseConnection";
    items: Array<{
      __typename: "StudentCourse";
      id: string;
      studentID: string;
      courseID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  courseName: string;
  courseDescription: string;
  topics: {
    __typename: "ModelTopicConnection";
    items: Array<{
      __typename: "Topic";
      id: string;
      professor: string;
      TopicName: string;
      course: string;
      TopicDescription: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCourseSubscription = {
  __typename: "Course";
  id: string;
  professor: string;
  students: {
    __typename: "ModelStudentCourseConnection";
    items: Array<{
      __typename: "StudentCourse";
      id: string;
      studentID: string;
      courseID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  courseName: string;
  courseDescription: string;
  topics: {
    __typename: "ModelTopicConnection";
    items: Array<{
      __typename: "Topic";
      id: string;
      professor: string;
      TopicName: string;
      course: string;
      TopicDescription: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCourseSubscription = {
  __typename: "Course";
  id: string;
  professor: string;
  students: {
    __typename: "ModelStudentCourseConnection";
    items: Array<{
      __typename: "StudentCourse";
      id: string;
      studentID: string;
      courseID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  courseName: string;
  courseDescription: string;
  topics: {
    __typename: "ModelTopicConnection";
    items: Array<{
      __typename: "Topic";
      id: string;
      professor: string;
      TopicName: string;
      course: string;
      TopicDescription: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTopicSubscription = {
  __typename: "Topic";
  id: string;
  professor: string;
  TopicName: string;
  course: string;
  TopicDescription: string;
  resourceGroups: {
    __typename: "ModelResourceGroupConnection";
    items: Array<{
      __typename: "ResourceGroup";
      id: string;
      course: string;
      topic: string;
      groupName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTopicSubscription = {
  __typename: "Topic";
  id: string;
  professor: string;
  TopicName: string;
  course: string;
  TopicDescription: string;
  resourceGroups: {
    __typename: "ModelResourceGroupConnection";
    items: Array<{
      __typename: "ResourceGroup";
      id: string;
      course: string;
      topic: string;
      groupName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTopicSubscription = {
  __typename: "Topic";
  id: string;
  professor: string;
  TopicName: string;
  course: string;
  TopicDescription: string;
  resourceGroups: {
    __typename: "ModelResourceGroupConnection";
    items: Array<{
      __typename: "ResourceGroup";
      id: string;
      course: string;
      topic: string;
      groupName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateResourceGroupSubscription = {
  __typename: "ResourceGroup";
  id: string;
  course: string;
  topic: string;
  groupName: string;
  files: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      id: string;
      course: string;
      topic: string;
      filename: string;
      filetype: string;
      fileDescription: string | null;
      resourseGroup: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateResourceGroupSubscription = {
  __typename: "ResourceGroup";
  id: string;
  course: string;
  topic: string;
  groupName: string;
  files: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      id: string;
      course: string;
      topic: string;
      filename: string;
      filetype: string;
      fileDescription: string | null;
      resourseGroup: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteResourceGroupSubscription = {
  __typename: "ResourceGroup";
  id: string;
  course: string;
  topic: string;
  groupName: string;
  files: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      id: string;
      course: string;
      topic: string;
      filename: string;
      filetype: string;
      fileDescription: string | null;
      resourseGroup: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateFileSubscription = {
  __typename: "File";
  id: string;
  course: string;
  topic: string;
  filename: string;
  filetype: string;
  fileDescription: string | null;
  resourseGroup: string;
  file: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFileSubscription = {
  __typename: "File";
  id: string;
  course: string;
  topic: string;
  filename: string;
  filetype: string;
  fileDescription: string | null;
  resourseGroup: string;
  file: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFileSubscription = {
  __typename: "File";
  id: string;
  course: string;
  topic: string;
  filename: string;
  filetype: string;
  fileDescription: string | null;
  resourseGroup: string;
  file: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
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
          firstName
          lastName
          courses {
            __typename
            items {
              __typename
              id
              professor
              courseName
              courseDescription
              createdAt
              updatedAt
            }
            nextToken
          }
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
          firstName
          lastName
          courses {
            __typename
            items {
              __typename
              id
              professor
              courseName
              courseDescription
              createdAt
              updatedAt
            }
            nextToken
          }
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
          firstName
          lastName
          courses {
            __typename
            items {
              __typename
              id
              professor
              courseName
              courseDescription
              createdAt
              updatedAt
            }
            nextToken
          }
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
  async CreateStudent(
    input: CreateStudentInput,
    condition?: ModelStudentConditionInput
  ): Promise<CreateStudentMutation> {
    const statement = `mutation CreateStudent($input: CreateStudentInput!, $condition: ModelStudentConditionInput) {
        createStudent(input: $input, condition: $condition) {
          __typename
          id
          studentName
          universityName
          courses {
            __typename
            items {
              __typename
              id
              studentID
              courseID
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <CreateStudentMutation>response.data.createStudent;
  }
  async UpdateStudent(
    input: UpdateStudentInput,
    condition?: ModelStudentConditionInput
  ): Promise<UpdateStudentMutation> {
    const statement = `mutation UpdateStudent($input: UpdateStudentInput!, $condition: ModelStudentConditionInput) {
        updateStudent(input: $input, condition: $condition) {
          __typename
          id
          studentName
          universityName
          courses {
            __typename
            items {
              __typename
              id
              studentID
              courseID
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <UpdateStudentMutation>response.data.updateStudent;
  }
  async DeleteStudent(
    input: DeleteStudentInput,
    condition?: ModelStudentConditionInput
  ): Promise<DeleteStudentMutation> {
    const statement = `mutation DeleteStudent($input: DeleteStudentInput!, $condition: ModelStudentConditionInput) {
        deleteStudent(input: $input, condition: $condition) {
          __typename
          id
          studentName
          universityName
          courses {
            __typename
            items {
              __typename
              id
              studentID
              courseID
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <DeleteStudentMutation>response.data.deleteStudent;
  }
  async CreateStudentCourse(
    input: CreateStudentCourseInput,
    condition?: ModelStudentCourseConditionInput
  ): Promise<CreateStudentCourseMutation> {
    const statement = `mutation CreateStudentCourse($input: CreateStudentCourseInput!, $condition: ModelStudentCourseConditionInput) {
        createStudentCourse(input: $input, condition: $condition) {
          __typename
          id
          studentID
          courseID
          student {
            __typename
            id
            studentName
            universityName
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          course {
            __typename
            id
            professor
            students {
              __typename
              nextToken
            }
            courseName
            courseDescription
            topics {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
    return <CreateStudentCourseMutation>response.data.createStudentCourse;
  }
  async UpdateStudentCourse(
    input: UpdateStudentCourseInput,
    condition?: ModelStudentCourseConditionInput
  ): Promise<UpdateStudentCourseMutation> {
    const statement = `mutation UpdateStudentCourse($input: UpdateStudentCourseInput!, $condition: ModelStudentCourseConditionInput) {
        updateStudentCourse(input: $input, condition: $condition) {
          __typename
          id
          studentID
          courseID
          student {
            __typename
            id
            studentName
            universityName
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          course {
            __typename
            id
            professor
            students {
              __typename
              nextToken
            }
            courseName
            courseDescription
            topics {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
    return <UpdateStudentCourseMutation>response.data.updateStudentCourse;
  }
  async DeleteStudentCourse(
    input: DeleteStudentCourseInput,
    condition?: ModelStudentCourseConditionInput
  ): Promise<DeleteStudentCourseMutation> {
    const statement = `mutation DeleteStudentCourse($input: DeleteStudentCourseInput!, $condition: ModelStudentCourseConditionInput) {
        deleteStudentCourse(input: $input, condition: $condition) {
          __typename
          id
          studentID
          courseID
          student {
            __typename
            id
            studentName
            universityName
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          course {
            __typename
            id
            professor
            students {
              __typename
              nextToken
            }
            courseName
            courseDescription
            topics {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
    return <DeleteStudentCourseMutation>response.data.deleteStudentCourse;
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
          students {
            __typename
            items {
              __typename
              id
              studentID
              courseID
              createdAt
              updatedAt
            }
            nextToken
          }
          courseName
          courseDescription
          topics {
            __typename
            items {
              __typename
              id
              professor
              TopicName
              course
              TopicDescription
              createdAt
              updatedAt
            }
            nextToken
          }
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
          students {
            __typename
            items {
              __typename
              id
              studentID
              courseID
              createdAt
              updatedAt
            }
            nextToken
          }
          courseName
          courseDescription
          topics {
            __typename
            items {
              __typename
              id
              professor
              TopicName
              course
              TopicDescription
              createdAt
              updatedAt
            }
            nextToken
          }
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
          students {
            __typename
            items {
              __typename
              id
              studentID
              courseID
              createdAt
              updatedAt
            }
            nextToken
          }
          courseName
          courseDescription
          topics {
            __typename
            items {
              __typename
              id
              professor
              TopicName
              course
              TopicDescription
              createdAt
              updatedAt
            }
            nextToken
          }
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
  async CreateTopic(
    input: CreateTopicInput,
    condition?: ModelTopicConditionInput
  ): Promise<CreateTopicMutation> {
    const statement = `mutation CreateTopic($input: CreateTopicInput!, $condition: ModelTopicConditionInput) {
        createTopic(input: $input, condition: $condition) {
          __typename
          id
          professor
          TopicName
          course
          TopicDescription
          resourceGroups {
            __typename
            items {
              __typename
              id
              course
              topic
              groupName
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <CreateTopicMutation>response.data.createTopic;
  }
  async UpdateTopic(
    input: UpdateTopicInput,
    condition?: ModelTopicConditionInput
  ): Promise<UpdateTopicMutation> {
    const statement = `mutation UpdateTopic($input: UpdateTopicInput!, $condition: ModelTopicConditionInput) {
        updateTopic(input: $input, condition: $condition) {
          __typename
          id
          professor
          TopicName
          course
          TopicDescription
          resourceGroups {
            __typename
            items {
              __typename
              id
              course
              topic
              groupName
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <UpdateTopicMutation>response.data.updateTopic;
  }
  async DeleteTopic(
    input: DeleteTopicInput,
    condition?: ModelTopicConditionInput
  ): Promise<DeleteTopicMutation> {
    const statement = `mutation DeleteTopic($input: DeleteTopicInput!, $condition: ModelTopicConditionInput) {
        deleteTopic(input: $input, condition: $condition) {
          __typename
          id
          professor
          TopicName
          course
          TopicDescription
          resourceGroups {
            __typename
            items {
              __typename
              id
              course
              topic
              groupName
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <DeleteTopicMutation>response.data.deleteTopic;
  }
  async CreateResourceGroup(
    input: CreateResourceGroupInput,
    condition?: ModelResourceGroupConditionInput
  ): Promise<CreateResourceGroupMutation> {
    const statement = `mutation CreateResourceGroup($input: CreateResourceGroupInput!, $condition: ModelResourceGroupConditionInput) {
        createResourceGroup(input: $input, condition: $condition) {
          __typename
          id
          course
          topic
          groupName
          files {
            __typename
            items {
              __typename
              id
              course
              topic
              filename
              filetype
              fileDescription
              resourseGroup
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <CreateResourceGroupMutation>response.data.createResourceGroup;
  }
  async UpdateResourceGroup(
    input: UpdateResourceGroupInput,
    condition?: ModelResourceGroupConditionInput
  ): Promise<UpdateResourceGroupMutation> {
    const statement = `mutation UpdateResourceGroup($input: UpdateResourceGroupInput!, $condition: ModelResourceGroupConditionInput) {
        updateResourceGroup(input: $input, condition: $condition) {
          __typename
          id
          course
          topic
          groupName
          files {
            __typename
            items {
              __typename
              id
              course
              topic
              filename
              filetype
              fileDescription
              resourseGroup
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <UpdateResourceGroupMutation>response.data.updateResourceGroup;
  }
  async DeleteResourceGroup(
    input: DeleteResourceGroupInput,
    condition?: ModelResourceGroupConditionInput
  ): Promise<DeleteResourceGroupMutation> {
    const statement = `mutation DeleteResourceGroup($input: DeleteResourceGroupInput!, $condition: ModelResourceGroupConditionInput) {
        deleteResourceGroup(input: $input, condition: $condition) {
          __typename
          id
          course
          topic
          groupName
          files {
            __typename
            items {
              __typename
              id
              course
              topic
              filename
              filetype
              fileDescription
              resourseGroup
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <DeleteResourceGroupMutation>response.data.deleteResourceGroup;
  }
  async CreateFile(
    input: CreateFileInput,
    condition?: ModelFileConditionInput
  ): Promise<CreateFileMutation> {
    const statement = `mutation CreateFile($input: CreateFileInput!, $condition: ModelFileConditionInput) {
        createFile(input: $input, condition: $condition) {
          __typename
          id
          course
          topic
          filename
          filetype
          fileDescription
          resourseGroup
          file {
            __typename
            bucket
            region
            key
          }
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
    return <CreateFileMutation>response.data.createFile;
  }
  async UpdateFile(
    input: UpdateFileInput,
    condition?: ModelFileConditionInput
  ): Promise<UpdateFileMutation> {
    const statement = `mutation UpdateFile($input: UpdateFileInput!, $condition: ModelFileConditionInput) {
        updateFile(input: $input, condition: $condition) {
          __typename
          id
          course
          topic
          filename
          filetype
          fileDescription
          resourseGroup
          file {
            __typename
            bucket
            region
            key
          }
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
    return <UpdateFileMutation>response.data.updateFile;
  }
  async DeleteFile(
    input: DeleteFileInput,
    condition?: ModelFileConditionInput
  ): Promise<DeleteFileMutation> {
    const statement = `mutation DeleteFile($input: DeleteFileInput!, $condition: ModelFileConditionInput) {
        deleteFile(input: $input, condition: $condition) {
          __typename
          id
          course
          topic
          filename
          filetype
          fileDescription
          resourseGroup
          file {
            __typename
            bucket
            region
            key
          }
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
    return <DeleteFileMutation>response.data.deleteFile;
  }
  async GetProfessor(id: string): Promise<GetProfessorQuery> {
    const statement = `query GetProfessor($id: ID!) {
        getProfessor(id: $id) {
          __typename
          id
          professorName
          universityName
          firstName
          lastName
          courses {
            __typename
            items {
              __typename
              id
              professor
              courseName
              courseDescription
              createdAt
              updatedAt
            }
            nextToken
          }
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
            firstName
            lastName
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
  async GetStudent(id: string): Promise<GetStudentQuery> {
    const statement = `query GetStudent($id: ID!) {
        getStudent(id: $id) {
          __typename
          id
          studentName
          universityName
          courses {
            __typename
            items {
              __typename
              id
              studentID
              courseID
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <GetStudentQuery>response.data.getStudent;
  }
  async ListStudents(
    filter?: ModelStudentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStudentsQuery> {
    const statement = `query ListStudents($filter: ModelStudentFilterInput, $limit: Int, $nextToken: String) {
        listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            studentName
            universityName
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
    return <ListStudentsQuery>response.data.listStudents;
  }
  async GetCourse(id: string): Promise<GetCourseQuery> {
    const statement = `query GetCourse($id: ID!) {
        getCourse(id: $id) {
          __typename
          id
          professor
          students {
            __typename
            items {
              __typename
              id
              studentID
              courseID
              createdAt
              updatedAt
            }
            nextToken
          }
          courseName
          courseDescription
          topics {
            __typename
            items {
              __typename
              id
              professor
              TopicName
              course
              TopicDescription
              createdAt
              updatedAt
            }
            nextToken
          }
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
            students {
              __typename
              nextToken
            }
            courseName
            courseDescription
            topics {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
  async GetTopic(id: string): Promise<GetTopicQuery> {
    const statement = `query GetTopic($id: ID!) {
        getTopic(id: $id) {
          __typename
          id
          professor
          TopicName
          course
          TopicDescription
          resourceGroups {
            __typename
            items {
              __typename
              id
              course
              topic
              groupName
              createdAt
              updatedAt
              
            }
            nextToken
          }
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
    return <GetTopicQuery>response.data.getTopic;
  }
  async ListTopics(
    filter?: ModelTopicFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTopicsQuery> {
    const statement = `query ListTopics($filter: ModelTopicFilterInput, $limit: Int, $nextToken: String) {
        listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            professor
            TopicName
            course
            TopicDescription
            resourceGroups {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
    return <ListTopicsQuery>response.data.listTopics;
  }
  async GetResourceGroup(id: string): Promise<GetResourceGroupQuery> {
    const statement = `query GetResourceGroup($id: ID!) {
        getResourceGroup(id: $id) {
          __typename
          id
          course
          topic
          groupName
          files {
            __typename
            items {
              __typename
              id
              course
              topic
              filename
              filetype
              fileDescription
              resourseGroup
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <GetResourceGroupQuery>response.data.getResourceGroup;
  }
  async ListResourceGroups(
    filter?: ModelResourceGroupFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListResourceGroupsQuery> {
    const statement = `query ListResourceGroups($filter: ModelResourceGroupFilterInput, $limit: Int, $nextToken: String) {
        listResourceGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            course
            topic
            groupName
            files {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
    return <ListResourceGroupsQuery>response.data.listResourceGroups;
  }
  async GetFile(id: string): Promise<GetFileQuery> {
    const statement = `query GetFile($id: ID!) {
        getFile(id: $id) {
          __typename
          id
          course
          topic
          filename
          filetype
          fileDescription
          resourseGroup
          file {
            __typename
            bucket
            region
            key
          }
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
    return <GetFileQuery>response.data.getFile;
  }
  async ListFiles(
    filter?: ModelFileFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFilesQuery> {
    const statement = `query ListFiles($filter: ModelFileFilterInput, $limit: Int, $nextToken: String) {
        listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            course
            topic
            filename
            filetype
            fileDescription
            resourseGroup
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
          }
          nextToken
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
    return <ListFilesQuery>response.data.listFiles;
  }
  async ProfessorByName(
    professorName?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelProfessorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ProfessorByNameQuery> {
    const statement = `query ProfessorByName($professorName: String, $sortDirection: ModelSortDirection, $filter: ModelProfessorFilterInput, $limit: Int, $nextToken: String) {
        professorByName(professorName: $professorName, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            professorName
            universityName
            firstName
            lastName
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (professorName) {
      gqlAPIServiceArguments.professorName = professorName;
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
    return <ProfessorByNameQuery>response.data.professorByName;
  }
  async StudentByName(
    studentName?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelStudentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<StudentByNameQuery> {
    const statement = `query StudentByName($studentName: ID, $sortDirection: ModelSortDirection, $filter: ModelStudentFilterInput, $limit: Int, $nextToken: String) {
        studentByName(studentName: $studentName, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            studentName
            universityName
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (studentName) {
      gqlAPIServiceArguments.studentName = studentName;
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
    return <StudentByNameQuery>response.data.studentByName;
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
            students {
              __typename
              nextToken
            }
            courseName
            courseDescription
            topics {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
  async TopicByCourseByProfessor(
    professor?: string,
    course?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelTopicFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<TopicByCourseByProfessorQuery> {
    const statement = `query TopicByCourseByProfessor($professor: String, $course: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelTopicFilterInput, $limit: Int, $nextToken: String) {
        topicByCourseByProfessor(professor: $professor, course: $course, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            professor
            TopicName
            course
            TopicDescription
            resourceGroups {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (professor) {
      gqlAPIServiceArguments.professor = professor;
    }
    if (course) {
      gqlAPIServiceArguments.course = course;
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
    return <TopicByCourseByProfessorQuery>(
      response.data.topicByCourseByProfessor
    );
  }
  async FileByCourseByTopic(
    course?: string,
    topic?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelResourceGroupFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<FileByCourseByTopicQuery> {
    const statement = `query FileByCourseByTopic($course: String, $topic: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelResourceGroupFilterInput, $limit: Int, $nextToken: String) {
        fileByCourseByTopic(course: $course, topic: $topic, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            course
            topic
            groupName
            files {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (course) {
      gqlAPIServiceArguments.course = course;
    }
    if (topic) {
      gqlAPIServiceArguments.topic = topic;
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
    return <FileByCourseByTopicQuery>response.data.fileByCourseByTopic;
  }
  async FileByTopicByResourceGroup(
    topic?: string,
    resourseGroup?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelFileFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<FileByTopicByResourceGroupQuery> {
    const statement = `query FileByTopicByResourceGroup($topic: String, $resourseGroup: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelFileFilterInput, $limit: Int, $nextToken: String) {
        fileByTopicByResourceGroup(topic: $topic, resourseGroup: $resourseGroup, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            course
            topic
            filename
            filetype
            fileDescription
            resourseGroup
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (topic) {
      gqlAPIServiceArguments.topic = topic;
    }
    if (resourseGroup) {
      gqlAPIServiceArguments.resourseGroup = resourseGroup;
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
    return <FileByTopicByResourceGroupQuery>(
      response.data.fileByTopicByResourceGroup
    );
  }
  async FileByFilename(
    resourseGroup?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelFileFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<FileByFilenameQuery> {
    const statement = `query FileByFilename($resourseGroup: String, $sortDirection: ModelSortDirection, $filter: ModelFileFilterInput, $limit: Int, $nextToken: String) {
        fileByFilename(resourseGroup: $resourseGroup, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            course
            topic
            filename
            filetype
            fileDescription
            resourseGroup
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (resourseGroup) {
      gqlAPIServiceArguments.resourseGroup = resourseGroup;
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
    return <FileByFilenameQuery>response.data.fileByFilename;
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
          firstName
          lastName
          courses {
            __typename
            items {
              __typename
              id
              professor
              courseName
              courseDescription
              createdAt
              updatedAt
            }
            nextToken
          }
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
          firstName
          lastName
          courses {
            __typename
            items {
              __typename
              id
              professor
              courseName
              courseDescription
              createdAt
              updatedAt
            }
            nextToken
          }
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
          firstName
          lastName
          courses {
            __typename
            items {
              __typename
              id
              professor
              courseName
              courseDescription
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteProfessorSubscription>;

  OnCreateStudentListener: Observable<
    OnCreateStudentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateStudent {
        onCreateStudent {
          __typename
          id
          studentName
          universityName
          courses {
            __typename
            items {
              __typename
              id
              studentID
              courseID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateStudentSubscription>;

  OnUpdateStudentListener: Observable<
    OnUpdateStudentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateStudent {
        onUpdateStudent {
          __typename
          id
          studentName
          universityName
          courses {
            __typename
            items {
              __typename
              id
              studentID
              courseID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateStudentSubscription>;

  OnDeleteStudentListener: Observable<
    OnDeleteStudentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteStudent {
        onDeleteStudent {
          __typename
          id
          studentName
          universityName
          courses {
            __typename
            items {
              __typename
              id
              studentID
              courseID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteStudentSubscription>;

  OnCreateStudentCourseListener: Observable<
    OnCreateStudentCourseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateStudentCourse {
        onCreateStudentCourse {
          __typename
          id
          studentID
          courseID
          student {
            __typename
            id
            studentName
            universityName
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          course {
            __typename
            id
            professor
            students {
              __typename
              nextToken
            }
            courseName
            courseDescription
            topics {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateStudentCourseSubscription>;

  OnUpdateStudentCourseListener: Observable<
    OnUpdateStudentCourseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateStudentCourse {
        onUpdateStudentCourse {
          __typename
          id
          studentID
          courseID
          student {
            __typename
            id
            studentName
            universityName
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          course {
            __typename
            id
            professor
            students {
              __typename
              nextToken
            }
            courseName
            courseDescription
            topics {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateStudentCourseSubscription>;

  OnDeleteStudentCourseListener: Observable<
    OnDeleteStudentCourseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteStudentCourse {
        onDeleteStudentCourse {
          __typename
          id
          studentID
          courseID
          student {
            __typename
            id
            studentName
            universityName
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          course {
            __typename
            id
            professor
            students {
              __typename
              nextToken
            }
            courseName
            courseDescription
            topics {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteStudentCourseSubscription>;

  OnCreateCourseListener: Observable<OnCreateCourseSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateCourse {
        onCreateCourse {
          __typename
          id
          professor
          students {
            __typename
            items {
              __typename
              id
              studentID
              courseID
              createdAt
              updatedAt
            }
            nextToken
          }
          courseName
          courseDescription
          topics {
            __typename
            items {
              __typename
              id
              professor
              TopicName
              course
              TopicDescription
              createdAt
              updatedAt
            }
            nextToken
          }
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
          students {
            __typename
            items {
              __typename
              id
              studentID
              courseID
              createdAt
              updatedAt
            }
            nextToken
          }
          courseName
          courseDescription
          topics {
            __typename
            items {
              __typename
              id
              professor
              TopicName
              course
              TopicDescription
              createdAt
              updatedAt
            }
            nextToken
          }
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
          students {
            __typename
            items {
              __typename
              id
              studentID
              courseID
              createdAt
              updatedAt
            }
            nextToken
          }
          courseName
          courseDescription
          topics {
            __typename
            items {
              __typename
              id
              professor
              TopicName
              course
              TopicDescription
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCourseSubscription>;

  OnCreateTopicListener: Observable<OnCreateTopicSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateTopic {
        onCreateTopic {
          __typename
          id
          professor
          TopicName
          course
          TopicDescription
          resourceGroups {
            __typename
            items {
              __typename
              id
              course
              topic
              groupName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateTopicSubscription>;

  OnUpdateTopicListener: Observable<OnUpdateTopicSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTopic {
        onUpdateTopic {
          __typename
          id
          professor
          TopicName
          course
          TopicDescription
          resourceGroups {
            __typename
            items {
              __typename
              id
              course
              topic
              groupName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateTopicSubscription>;

  OnDeleteTopicListener: Observable<OnDeleteTopicSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTopic {
        onDeleteTopic {
          __typename
          id
          professor
          TopicName
          course
          TopicDescription
          resourceGroups {
            __typename
            items {
              __typename
              id
              course
              topic
              groupName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteTopicSubscription>;

  OnCreateResourceGroupListener: Observable<
    OnCreateResourceGroupSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateResourceGroup {
        onCreateResourceGroup {
          __typename
          id
          course
          topic
          groupName
          files {
            __typename
            items {
              __typename
              id
              course
              topic
              filename
              filetype
              fileDescription
              resourseGroup
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateResourceGroupSubscription>;

  OnUpdateResourceGroupListener: Observable<
    OnUpdateResourceGroupSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateResourceGroup {
        onUpdateResourceGroup {
          __typename
          id
          course
          topic
          groupName
          files {
            __typename
            items {
              __typename
              id
              course
              topic
              filename
              filetype
              fileDescription
              resourseGroup
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateResourceGroupSubscription>;

  OnDeleteResourceGroupListener: Observable<
    OnDeleteResourceGroupSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteResourceGroup {
        onDeleteResourceGroup {
          __typename
          id
          course
          topic
          groupName
          files {
            __typename
            items {
              __typename
              id
              course
              topic
              filename
              filetype
              fileDescription
              resourseGroup
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteResourceGroupSubscription>;

  OnCreateFileListener: Observable<OnCreateFileSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateFile {
        onCreateFile {
          __typename
          id
          course
          topic
          filename
          filetype
          fileDescription
          resourseGroup
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateFileSubscription>;

  OnUpdateFileListener: Observable<OnUpdateFileSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFile {
        onUpdateFile {
          __typename
          id
          course
          topic
          filename
          filetype
          fileDescription
          resourseGroup
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateFileSubscription>;

  OnDeleteFileListener: Observable<OnDeleteFileSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFile {
        onDeleteFile {
          __typename
          id
          course
          topic
          filename
          filetype
          fileDescription
          resourseGroup
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteFileSubscription>;
}
