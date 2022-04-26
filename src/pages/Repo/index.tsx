import React from 'react';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

import { Link } from 'react-router-dom';

const Repo: React.FC = () => {
	return(
		<Container>
			<Breadcrumb>
				<RepoIcon />

				<Link className={'username'} to={'/dantealves'}>
					dantealves
				</Link>

				<span></span>

				<Link className={'reponame'} to={'/dantealves/react-discord-ui'}>
				react-discord-ui
				</Link>

			</Breadcrumb>

			<p>A React UI for Discord</p>

			<Stats>

				<li>
					<StarIcon />
					<b>129 </b>
					<span>stars</span>
				</li>
				<li>
					<ForkIcon />
					<b>114 </b>
					<span>forks</span>
				</li>

			</Stats>

		<LinkButton href={'https://github.com/dantealves'}>
			<GithubIcon />
			<span>View On GitHub</span>
		</LinkButton>
		</Container>
	);
}

export default Repo;