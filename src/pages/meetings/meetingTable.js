import React from 'react';
import meetingRow from './meetingRow.js';

function meetingTable(props) {
	return <tbody className='meetings-table-body'>{props.data.map(meetingRow)}</tbody>;
}

export default meetingTable;
