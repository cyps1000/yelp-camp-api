/**
 * Defines the content security policy
 */
export const ContentSecurityPolicy = {
  useDefaults: true,
  directives: {
    "img-src": ["self", "https://i.imgur.com"],
  },
};
