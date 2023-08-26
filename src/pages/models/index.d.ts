import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerStudents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Students, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly classs?: (ClassStudents | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStudents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Students, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly classs: AsyncCollection<ClassStudents>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Students = LazyLoading extends LazyLoadingDisabled ? EagerStudents : LazyStudents

export declare const Students: (new (init: ModelInit<Students>) => Students) & {
  copyOf(source: Students, mutator: (draft: MutableModel<Students>) => MutableModel<Students> | void): Students;
}

type EagerClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Class, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ClassName?: string | null;
  readonly Students?: (ClassStudents | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Class, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ClassName?: string | null;
  readonly Students: AsyncCollection<ClassStudents>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Class = LazyLoading extends LazyLoadingDisabled ? EagerClass : LazyClass

export declare const Class: (new (init: ModelInit<Class>) => Class) & {
  copyOf(source: Class, mutator: (draft: MutableModel<Class>) => MutableModel<Class> | void): Class;
}

type EagerClassStudents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ClassStudents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly studentsId?: string | null;
  readonly classId?: string | null;
  readonly students: Students;
  readonly class: Class;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClassStudents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ClassStudents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly studentsId?: string | null;
  readonly classId?: string | null;
  readonly students: AsyncItem<Students>;
  readonly class: AsyncItem<Class>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ClassStudents = LazyLoading extends LazyLoadingDisabled ? EagerClassStudents : LazyClassStudents

export declare const ClassStudents: (new (init: ModelInit<ClassStudents>) => ClassStudents) & {
  copyOf(source: ClassStudents, mutator: (draft: MutableModel<ClassStudents>) => MutableModel<ClassStudents> | void): ClassStudents;
}