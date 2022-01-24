import { CreateSchemaCustomizationArgs, GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = async ({
  actions: { createFieldExtension },
}: CreateSchemaCustomizationArgs) => {
  createFieldExtension({
    name: "coverImage",
    extend() {
      return {
        resolve: async (_source: any, _args: any, _context: any) => {
          return null
        },
      }
    },
  })
}
