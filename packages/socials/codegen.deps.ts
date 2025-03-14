import type { CodegenConfig } from "@graphql-codegen/cli";

const codegenConfig: CodegenConfig = {
  overwrite: true,
  generates: {
    "./generated/github/schema.gql": {
      schema: "https://docs.github.com/public/fpt/schema.docs.graphql",
      plugins: ["schema-ast"],
    },
  },
};

export default codegenConfig;
