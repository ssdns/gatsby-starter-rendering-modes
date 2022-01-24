import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = ({
  actions: { createPage },
}) => {
  createPage({
    path: "/dsg",
    component: require.resolve(`${process.cwd()}/src/templates/dsg`),
    context: {},
  });
};
