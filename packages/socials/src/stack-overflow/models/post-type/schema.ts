import { z } from "zod";

export enum StackOverflowPostType {
  Question = "question",
  Answer = "answer",
}

export const stackOverflowPostTypeSchema = z.enum(StackOverflowPostType);
