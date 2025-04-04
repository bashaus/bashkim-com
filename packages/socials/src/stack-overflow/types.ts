export type StackOverflowPost = {
  score: number;
  id: string;
  title: string;
  link: string;
  type: "question" | "answer";
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
