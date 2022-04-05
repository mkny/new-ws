export enum LogTypes {
  ERROR = "ERROR",
  INFO = "INFO",
  DEBUG = "DEBUG",
  VERBOSE = "VERBOSE",
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function logger(this: any, lt: LogTypes = LogTypes.INFO, ...args: any) {
  // eslint-disable-next-line no-console
  console.log.apply(this, [`${lt}:`, ...args]);
}

export { logger };
