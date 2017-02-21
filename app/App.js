import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import KanbanBoardContainer from './KanbanBoardContainer';
import KanbanBoard from './KanbanBoard';
import EditCard from './EditCard';
import NewCard from './NewCard';

let cardsList = [
		{
			id: 1,
			title: "Read the Book",
			description: "I should read the whole book",
			color: '#BD8D31',
			status: "in-progress",
			tasks: []
		},
		{
			id: 2,
			title: "Write some code",
			description: "Code",
			color: '#3A7E28',
			status: "todo",
			tasks: [
				{
						id: 1,
						name: "ContactList Example",
						done: true
				},
				{
						id: 2,
						name: "Kanban Example",
						done: false
				},
				{
						id: 3,
						name: "My own experiments",
						done: false
				}
			]
		}
];

render((
	<Router history={createBrowserHistory()}>
		<Route component={KanbanBoardContainer}>
			<Route path="/" component={KanbanBoard}>
				<Route path="new" component={NewCard} />
				<Route path="edit/:card_id" component={EditCard} />
			</Route>
		</Route>
	</Router>
), document.getElementById('root'));
