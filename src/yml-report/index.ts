import {buildReport} from "./report";
import {SemanticTree} from "../types";

export const getYAMLReport = (tree: SemanticTree): string => {
  return buildReport(tree);
}