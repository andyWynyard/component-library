import React from 'react'
import Table from '../../src/lib/components/atoms/table'
import './style.css'

const Th = Table.Th
const Td = Table.Td

const table = () => {
  return (
    <div className="storybook-wrapper">
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Sex</Th>
            <Th>Location</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Dave Gamache</Td>
            <Td>26</Td>
            <Td>Male</Td>
            <Td>San Francisco</Td>
          </tr>
          <tr>
            <Td>Dwayne Johnson</Td>
            <Td>42</Td>
            <Td>Male</Td>
            <Td>Hayward</Td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default table
