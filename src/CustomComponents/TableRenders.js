import React from "react";
import { Box } from "@material-ui/core";

export function AmountColumnRender({ value }) {
  return <Box textAlign="right">{`$ ${value.toFixed(2)}`}</Box>;
}
