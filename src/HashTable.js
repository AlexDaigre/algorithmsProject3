import React from 'react';
import { Table } from 'semantic-ui-react';

const HashTable = (props) => {
  const hashKeys = Object.getOwnPropertyNames(props.hash);
  console.log(hashKeys);

  return(
    <Table basic>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Key</Table.HeaderCell>
          <Table.HeaderCell>Value</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {hashKeys.map(key =>
          <Table.Row>
            <Table.Cell>{key}</Table.Cell>
            <Table.Cell>{props.hash[key]}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  )
}

export default HashTable;
