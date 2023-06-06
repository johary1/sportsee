import React from "react";
import { Container, Text } from "../customizeComponents/sessionsDurationStyle";
import PropTypes from "prop-types";

export default function SessionsDuration({ active, payload }) {
  if (active) {
    return (
      <Container>
        <Text>{payload[0].value}min</Text>
      </Container>
    );
  }
  return null;
}

SessionsDuration.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
