import {buildReport} from "./report";
import {htmlStyles} from "./styles";
import {SemanticTree} from "../types";

export const getHTMLReport = (tree: SemanticTree): string => {
  return `<style>${htmlStyles}</style>${buildReport(tree)}`
}