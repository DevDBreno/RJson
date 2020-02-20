import RulesController from "./rules.controller"

const { addRule } = RulesController

export default [
  {
    path: "/rules",
    method: "post",
    handler: [addRule]
  }
]
