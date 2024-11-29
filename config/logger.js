const winston = require("winston");
const colors = require("./colors");

const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    success: 3,
    custom: 4,
  },
  colors: {
    error: "bgRed bold", // Background red for error
    warn: "yellow bold", // Yellow and bold for warning
    info: "blue", // Blue for informational logs
    success: "green bold", // Green and bold for success
    custom: "magenta", // Magenta for custom logs
  },
};

// Dynamically calculate the padding based on level names
const maxLevelLength = Math.max(...Object.keys(customLevels.levels).map((l) => l.length));
const padLevel = (level) => level.toUpperCase().padEnd(maxLevelLength);

const customFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.colorize(),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${colors.dim}${timestamp}${colors.reset} | ${level} | ${message}`;
  })
);

const logger = winston.createLogger({
  levels: customLevels.levels,
  level: "custom",
  format: customFormat,
  transports: [
    // Console Transport
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        customFormat
      ),
    }),
    // Optional: File Transport
    new winston.transports.File({
      filename: "application.log",
      level: "info", // Logs 'info' and above
      format: winston.format.combine(
        winston.format.uncolorize(), // Remove colors for file output
        winston.format.json()
      ),
    }),
  ],
});

winston.addColors(customLevels.colors);

// Example usage
logger.error("This is an error log.");
logger.warn("This is a warning.");
logger.info("This is an informational message.");
logger.success("This action was successful!");
logger.custom("This is a custom message.");

module.exports = logger;