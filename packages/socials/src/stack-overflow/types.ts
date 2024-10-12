export enum StackOverflowPostType {
  Answer = "Answer",
  Question = "Question",
}

export type StackOverflowPost = {
  score: number;
  id: string;
  title: string;
  link: string;
  type: StackOverflowPostType;
};

export type StackOverflowUserBadgeCounts = {
  gold: number;
  silver: number;
  bronze: number;
};

export type StackOverflowUser = {
  reputation: number;
  badgeCounts?: StackOverflowUserBadgeCounts;
};

export type GetStackOverflowSocialsResponse = {
  user: StackOverflowUser;
  posts: Array<StackOverflowPost>;
};
