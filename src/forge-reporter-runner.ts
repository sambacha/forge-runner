import * as path from 'path';
import * as fs from 'fs';
import { ForgeGithubActionsReporter } from './forge-reporter';

// Path to the Forge test results JSON file (relative to project root)
const FORGE_RESULTS_PATH = path.join(process.cwd(), 'forge-output.json');
const PROJECT_ROOT = process.cwd();

// Create and run the reporter
const reporter = new ForgeGithubActionsReporter(FORGE_RESULTS_PATH, PROJECT_ROOT);
reporter.report();
