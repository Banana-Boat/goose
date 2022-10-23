export type Error = {
  code: string;
  msg: string;
};

export type ErrorTypes = {
  [key: string]: Error;
};
