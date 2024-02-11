export abstract class EnvUtils {
  /**
   * Checks if the required environment variables are set.
   * Throws an error if any required variable is missing.
   * @param envVars An array of environment variable names to be checked.
   */
  static checkEnvVariables(envVars: string[]): void {
    envVars.forEach((varName) => {
      const envVar = process.env[varName];
      if (!envVar) {
        throw new Error(`Environment variable ${varName} is not set!`);
      }
    });
  }
}
