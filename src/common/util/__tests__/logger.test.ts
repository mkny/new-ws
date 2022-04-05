import { logger, LogTypes } from "../logger";

let spy: jest.SpyInstance;

beforeEach(() => {
  spy = jest.spyOn(console, "log");
});

afterEach(jest.clearAllMocks);

describe("Logger tests", () => {
  it("should be able to call console.logger", () => {
    const params: [LogTypes, string] = [LogTypes.DEBUG, "debug message"];

    logger.call(this, ...params);

    expect(spy).toHaveBeenCalledWith(...[`${params[0]}:`, params[1]]);
  });
  it("should be able to log with a default value", () => {
    logger(undefined, "message");

    expect(spy).toHaveBeenCalledWith(...[`${LogTypes.INFO}:`, "message"]);
  });
});
