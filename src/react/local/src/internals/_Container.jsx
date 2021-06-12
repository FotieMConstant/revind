import React from "react";
import Container from "../../../components/Container/Container";

function _Container() {
    return (
        <div>
            <Container>A regular primary container</Container>
            <Container max-width="xl" scheme="secondary">
                A xl container (100% width on xl & down)
            </Container>
            <Container scheme="secondary">
                A regular/lg container (100% width on lg & down)
            </Container>
            <Container max-width="md" scheme="secondary">
                A md container (100% width on md & down)
            </Container>
            <Container max-width="sm" scheme="secondary">
                A sm container (100% width on sm & down)
            </Container>

            <Container fixed scheme="secondary">
                A fixed container (max-width is equal to each breakpoint's min-width)
            </Container>
            <Container center scheme="secondary">
                A centered container
            </Container>
            <Container gutters scheme="secondary">
                A guttered container (with padding)
            </Container>
            <br />
            <Container variant="elevated" scheme="secondary">
                An elevated container
            </Container>
            <br />
            <Container variant="elevated" scheme="primary">
                An elevated primary container
            </Container>
            <br />
            <Container variant="bordered" scheme="secondary">
                A bordered container
            </Container>
            <Container variant="bordered">A bordered primary container</Container>
        </div>
    );
}

export default _Container;
