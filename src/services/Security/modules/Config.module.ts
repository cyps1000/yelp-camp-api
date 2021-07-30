/**
 * External Imports
 */
import helmet from "helmet";

/**
 * Imports modules
 */
import { ContentSecurityPolicy } from "./ContentSecurityPolicy.module";

/**
 * Imports types
 */
import { Express } from "express";

/**
 * Configures headers using helmet
 * @see https://www.npmjs.com/package/helmet
 */
export const Config = async (Server: Express) => {
  Server.disable("x-powered-by");

  Server.use(
    helmet({
      contentSecurityPolicy: ContentSecurityPolicy,
      expectCt: {
        maxAge: 86400,
      },
      referrerPolicy: {
        policy: "no-referrer",
      },
      hsts: {
        maxAge: 63072000,
        preload: true,
      },
      noSniff: true,
      originAgentCluster: true,
      dnsPrefetchControl: {
        allow: false,
      },
      ieNoOpen: true,
      frameguard: {
        action: "sameorigin",
      },
      permittedCrossDomainPolicies: {
        permittedPolicies: "none",
      },
      xssFilter: true,
    })
  );
  console.log("SecurityService loaded");
};
