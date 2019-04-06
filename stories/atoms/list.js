import React from 'react'
import List from '../../src/lib/components/atoms/list'
import './style.css'

const ListItem = List.Item

const list = () => {
  return (
    <div className={`storybook-wrapper`}>
      <List tag="ol">
        <List tag="ul">
          <ListItem>Hi there</ListItem>
          <ListItem>Hi there</ListItem>
        </List>
        <ListItem>Hi there</ListItem>
        <ListItem>Hi there</ListItem>
        <ListItem>Hi there</ListItem>
        <ListItem>Hi there</ListItem>
      </List>
    </div>
  )
}

export default list
