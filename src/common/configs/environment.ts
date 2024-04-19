import * as dotenv from 'dotenv';
dotenv.config();

export interface IEnvironment {
  DB: {
    URL: string;
  };
}

export const ENVIRONMENT: IEnvironment = {
  DB: {
    URL: process.env.DB_URL,
  },
};
