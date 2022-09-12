import React from 'react'
import { CtFeature, TxtContent, TxtTitle } from './Feature.styled';

function Feature({animal}) {


    /* const {name, animal_type, active_time, habitat, diet, geo_range, image_link, id} = animal */

  return (
    <>
        <CtFeature>
            <TxtTitle>Latin Name</TxtTitle>
            <TxtContent>{animal.latin_name}</TxtContent>
        </CtFeature>
        <CtFeature>
            <TxtTitle>Type</TxtTitle>
            <TxtContent>{animal.animal_type}</TxtContent>
        </CtFeature>
        <CtFeature>
            <TxtTitle>Active Time</TxtTitle>
            <TxtContent>{animal.active_time}</TxtContent>
        </CtFeature>
        <CtFeature>
            <TxtTitle>Habitat</TxtTitle>
            <TxtContent>{animal.habitat}</TxtContent>
        </CtFeature>
        <CtFeature>
            <TxtTitle>Diet</TxtTitle>
            <TxtContent>{animal.diet}</TxtContent>
        </CtFeature>
        <CtFeature>
            <TxtTitle>Location</TxtTitle>
            <TxtContent>{animal.geo_range}</TxtContent>
        </CtFeature>
    </>
  )
}

export default Feature