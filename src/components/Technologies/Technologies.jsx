import React, { Component } from 'react';
import { Tech, Technologies, TechContainer } from './Technologies.style';
const TECHNOLOGIES = [
    `HTML`,
    `CSS`,
    `React`,
    `NodeJS`,
    `TS`,
    `REST API`,
    `GraphQL`,
    `AWS`,
    `Kubernetes`,
    `C`,
    `Python`,
    `Github`,
  ]

export default class TechnologyBoxes extends Component{
    render() {
        return (
            <Technologies>
          {TECHNOLOGIES.map((technology, i) =>
              <TechContainer
                  key={i}
              >
                  <div>
                      <Tech>{technology}</Tech>
                  </div>
              </TechContainer>
          )}
        </Technologies>
        )
    }
}