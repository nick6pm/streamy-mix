import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JoinBetaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Profile {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Profile, ProfileMetaData>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}

export declare class JoinBeta {
  readonly id: string;
  readonly Name?: string;
  readonly Email?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<JoinBeta, JoinBetaMetaData>);
  static copyOf(source: JoinBeta, mutator: (draft: MutableModel<JoinBeta, JoinBetaMetaData>) => MutableModel<JoinBeta, JoinBetaMetaData> | void): JoinBeta;
}