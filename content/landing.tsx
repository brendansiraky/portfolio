import { ExternalLink } from '../components/shared/link/externalLink/ExternalLink'
import { LINKS } from '../constants/links'

export const landing = {
	platforms: [
		{
			id: 1,
			link: 'https://github.com/brendansiraky',
			name: 'github',
		},
		{
			id: 2,
			link: 'https://au.linkedin.com/in/brendansiraky',
			name: 'linkedin',
		},
	],
	me: {
		about: (
			<>
				<p>
					Hi, I'm Brendan, and I've been in the software development
					game for over 8 years now. My focus is on full-stack
					development, which means I handle everything from the
					frontend (like Mobile and Web applications) to the backend,
					including Blockchain Applications, often referred to as
					dApps.
				</p>

				<p>
					My journey began in 2014 when I started tinkering with HTML
					and CSS to create static webpages. This led me to dive into
					JavaScript, exploring frameworks like React and React
					Native. Backend-wise, I've focused on Node.js, building
					robust applications.
				</p>

				<p>
					More recently, I've been fascinated by blockchain
					technology. I've been exploring the world of Ethereum and
					learning how to write Solidity contracts, which are the
					backbone of smart contracts that run on the Ethereum
					network.
				</p>

				<p>
					Over the years I have had the pleasure of being involved in
					quite a number of large and small scale projects. I’ve
					worked as a freelancer, a full-stack developer at{' '}
					<ExternalLink href="https://jadendigital.com.au/">
						<>Jaden Digital</>
					</ExternalLink>
					, a couple of different start-ups in the cryptocurrency
					world where I was the lead developer, and now currently as
					an engineer at{' '}
					<ExternalLink href="https://www.westpac.com.au/">
						<>Westpac</>
					</ExternalLink>
				</p>

				<p>
					Here are some technologies that I've worked with recently:
				</p>
				<ul>
					{[
						'React',
						'Solidity',
						'NextJs',
						'Typescript',
						'Javascript',
						'NodeJs',
						'React Native',
					].map((name) => (
						<li key={name}>{name}</li>
					))}
				</ul>
			</>
		),
		id: 123,
		title: 'About Me',
		technologies: [],
	},
	projects: [
		{
			img: {
				src: '/images/sunterra-frontend.png',
				alt: 'Sunterra Frontend Landing Page Screenshot',
			},
			name: 'sunterra',
			short_description:
				'Sunterra is an original, Voxel-Styled, fantasy themed, metaverse MMORPG building on the Cardano Blockchain.',
			long_description: (
				<>
					<p>
						The application is primarily responsible for players
						being able to mint land, and then manage that land via
						the interactive map.
					</p>
					<p>
						The application utilises the Cardano proposals{' '}
						<ExternalLink href="https://cips.cardano.org/cips/cip30/">
							CIP30
						</ExternalLink>{' '}
						and{' '}
						<ExternalLink href="https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0008/">
							CIP-0008
						</ExternalLink>
						, to give the user a seamless sign up / login process
						via their chosen Cardano Wallet.
					</p>
				</>
			),
			technologies: [
				{
					name: 'react',
					link: LINKS.REACT,
				},
				{
					name: 'typescript',
					link: LINKS.TYPESCRIPT,
				},
				{
					name: 'easy-peasy',
					link: LINKS.EASY_PEASY,
				},
			],
			sources: [],
			label: 'Sunterra',
			featured: 3,
		},
		{
			img: {
				src: '/images/sunterra-backend-screenshot.png',
				alt: 'Sunterra Backend Code Screenshot',
			},
			name: 'sunterra-backend',
			short_description:
				'The accompanying project to Sunterra, A Voxel-Styled MMORPG building on the Cardano ecosystem.',
			long_description: (
				<>
					<p>
						This application is responsible to handing the entire
						automated minting process that is triggered by either
						the frontend application, or a user sending ADA tokens
						to the official Sunterra wallet address.
					</p>
					<p>
						It is also responsible for handling the entire user
						base, as well as the ownership and information against
						each land plot.
					</p>
				</>
			),
			technologies: [
				{
					name: 'nodejs',
					link: LINKS.NODE,
				},
				{
					name: 'nestjs',
					link: LINKS.NEST,
				},
				{
					name: 'typescript',
					link: LINKS.TYPESCRIPT,
				},
				{
					name: 'blockfrost',
					link: LINKS.BLOCKFROST,
				},
				{
					name: 'postgres',
					link: LINKS.POSTGRESQL,
				},
				{
					name: 'knex',
					link: LINKS.KNEX,
				},
			],
			sources: [],
			label: 'Sunterra (Backend)',
			featured: 4,
		},
		{
			img: {
				src: '/images/polygon-nft-minter-screenshot.png',
				alt: 'Polygon NFT Minter Landing Page Screenshot',
			},
			name: 'polygon-nft-minter',
			short_description:
				'A Project built in React that allows a user to connect via their Metamask wallet, and mint an NFT on the Polygon Network.',
			long_description: (
				<>
					<p>
						This project was built in React and utilises the Alchemy
						API in order to mint an NFT via a{' '}
						<ExternalLink href="https://github.com/brendansiraky/solidity-nft-mint-contract">
							Contract
						</ExternalLink>{' '}
						that was deployed to the{' '}
						<ExternalLink href="https://polygonscan.com/address/0xD2BDBC0b6B2fd88C46377546d565dC22088077E4#code">
							Polygon Blockchain Network
						</ExternalLink>
					</p>
					<p>
						This dapp also allows a user connect via their{' '}
						<ExternalLink href="https://metamask.io/">
							Metamask Wallet.
						</ExternalLink>
					</p>
				</>
			),
			technologies: [
				{
					name: 'nextjs',
					link: LINKS.NEXT,
				},
				{
					name: 'alchemy',
					link: LINKS.ALCHEMY,
				},
				{
					name: 'typescript',
					link: LINKS.TYPESCRIPT,
				},
			],
			sources: [
				{
					name: 'github',
					link: 'https://github.com/brendansiraky/polygon-nft-minter',
				},
			],
			label: 'Polygon NFT Minter',
			featured: 5,
		},
		{
			img: {
				src: '/images/arbitrage-scanner-screenshot.png',
				alt: 'Arbitrage Scanner Code Screenshot',
			},
			name: 'arbitrage-scanner-screenshot',
			short_description:
				'A project that checks current trading pairs for potential arbitrage and triangle trading opportunities.',
			long_description: (
				<>
					<p>
						An automated trading tool used to scan multiple
						exchanges for profit opportunities. It utilizes
						algorithms off-chain to execute transactions on-chain
						via custom{' '}
						<ExternalLink href="https://bscscan.com/address/0x3f6df0d0B48674e3b679435521dA73227300305B">
							Solidity contracts.
						</ExternalLink>
					</p>
					<p>
						Additionally, it explores{' '}
						<ExternalLink href="https://bscscan.com/address/0x7a3474a680ECD84a69149279E11cC3879914D46F">
							triangular trading
						</ExternalLink>{' '}
						opportunities, verifying profitability before executing
						transactions on-chain.
					</p>
				</>
			),
			technologies: [
				{
					name: 'nodejs',
					link: LINKS.NODE,
				},
				{
					name: 'web3',
					link: LINKS.WEB3,
				},
				{
					name: 'solidity',
					link: LINKS.SOLIDITY,
				},
			],
			sources: [
				{
					name: 'github',
					link: 'https://github.com/brendansiraky/arbitrage-price-scanner',
				},
			],
			label: 'Arbitrage Trading Bot',
			featured: 2,
		},
		{
			name: 'Warner Music Australia (E-Commerce Store)',
			short_description:
				'The Warner Music Australia E-Commerce Store. Built on NextJs and utilising the Shopify API.',
			technologies: [
				{
					name: 'nextjs',
					link: LINKS.NODE,
				},
				{
					name: 'shopify',
					link: LINKS.SHOPIFY,
				},
			],
			sources: [
				{
					name: 'website',
					link: 'https://store.warnermusic.com.au/',
				},
			],
			featured: false,
		},
		{
			img: {
				src: '/images/blockframe-screenshot.png',
				alt: 'Blockframe Landing Page Screenshot',
			},
			name: 'blockframe-screenshot',
			short_description:
				"A collaborative project for searching NFT's on the Ethereum network via our NFT search tool!",
			long_description: (
				<>
					<p>
						A collaborative effort to bring searching for NFT's on
						the Ethereum network easier.
					</p>
					<p>
						This was a final project done in a bootcamp course by
						Encode Club, funded by the Ethereum Foundation.
					</p>
				</>
			),
			technologies: [
				{
					name: 'nextjs',
					link: LINKS.NEXT,
				},
				{
					name: 'typescript',
					link: LINKS.TYPESCRIPT,
				},
			],
			sources: [
				{
					name: 'website',
					link: 'https://encode-final-project.vercel.app/',
				},
				{
					name: 'github',
					link: 'https://github.com/brendansiraky/encode-final-project/',
				},
			],
			label: 'Blockframe NFT Search Tool',
			featured: 1,
		},
		{
			name: 'Cardano Dapp Connector',
			short_description:
				'An example of the wallet connector standard CIP30 being implemented in order for a user to "connect" to the dapp via their Cardano wallet. See the backend example for the authentication implementation.',
			technologies: [
				{
					name: 'nextjs',
					link: LINKS.NEXT,
				},
				{
					name: 'typescript',
					link: LINKS.TYPESCRIPT,
				},
			],
			sources: [
				{
					name: 'github',
					link: 'https://github.com/brendansiraky/cardano-dapp-connector',
				},
				{
					name: 'website',
					link: 'https://cardano-dapp-connector.vercel.app/',
				},
			],
			featured: false,
		},
		{
			name: 'Cardano Dapp Connector (Backend)',
			short_description:
				'An example of authentication by reading from a token that was signed via a users Cardano wallet that implements the wallet connector standard CIP30.',
			technologies: [
				{
					name: 'nestjs',
					link: LINKS.NEXT,
				},
				{
					name: 'nodejs',
					link: LINKS.NODE,
				},
				{
					name: 'typescript',
					link: LINKS.TYPESCRIPT,
				},
				{
					name: 'postgres',
					link: LINKS.POSTGRESQL,
				},
				{
					name: 'knex',
					link: LINKS.KNEX,
				},
				{
					name: 'docker',
					link: LINKS.DOCKER,
				},
			],
			sources: [
				{
					name: 'github',
					link: 'https://github.com/brendansiraky/cardano-dapp-connector-backend',
				},
			],
			featured: false,
		},
		{
			name: 'Solidity NFT Mint Contract',
			short_description:
				"An example of a solidity contract that handles minting Non-Fungible-Tokens (NFT's) on the Ethereum Network or any Layer 2 Blockchain built on Ethereum, such as Polygon.",
			technologies: [
				{
					name: 'solidity',
					link: LINKS.SOLIDITY,
				},
			],
			sources: [
				{
					name: 'github',
					link: 'https://github.com/brendansiraky/solidity-nft-mint-contract',
				},
			],
			featured: false,
		},
		{
			name: 'Personal Portfolio',
			short_description:
				'The first iteration of my personal portfolio. Currently what you are looking at :D. Build with NextJs',
			technologies: [
				{
					name: 'nextjs',
					link: LINKS.NEXT,
				},
				{
					name: 'typescript',
					link: LINKS.TYPESCRIPT,
				},
			],
			sources: [
				{
					name: 'github',
					link: 'https://github.com/brendansiraky/portfolio',
				},
			],
			featured: false,
		},
		{
			name: 'Discord Invite Tracker',
			short_description:
				'A discord bot that tracks how many invites each user has made to the server.',
			technologies: [
				{
					name: 'discordjs',
					link: LINKS.DISCORD,
				},
				{
					name: 'nodejs',
					link: LINKS.NODE,
				},
				{
					name: 'typescript',
					link: LINKS.TYPESCRIPT,
				},
			],
			sources: [
				{
					name: 'github',
					link: 'https://github.com/brendansiraky/discord-invite-tracker',
				},
			],
			featured: false,
		},
		{
			name: 'Discord Address Whitelister',
			short_description:
				'A discord bot allowing users of a specific role the ability to whitelist an address against their discord id.',
			technologies: [
				{
					name: 'discordjs',
					link: LINKS.DISCORD,
				},
				{
					name: 'nodejs',
					link: LINKS.NODE,
				},
				{
					name: 'typescript',
					link: LINKS.TYPESCRIPT,
				},
				{
					name: 'knex',
					link: LINKS.KNEX,
				},
				{
					name: 'postgres',
					link: LINKS.POSTGRESQL,
				},
			],
			sources: [
				{
					name: 'github',
					link: 'https://github.com/brendansiraky/discord-address-whitelister',
				},
			],
			featured: false,
		},
		{
			name: 'Discord Cardano Epoch Tracker',
			short_description:
				'A discord bot that displays the current cardano epoch, as well as a live countdown untill the next epoch.',
			technologies: [
				{
					name: 'discordjs',
					link: LINKS.DISCORD,
				},
				{
					name: 'nodejs',
					link: LINKS.NODE,
				},
				{
					name: 'blockfrost',
					link: LINKS.BLOCKFROST,
				},
				{
					name: 'typescript',
					link: LINKS.TYPESCRIPT,
				},
			],
			sources: [
				{
					name: 'github',
					link: 'https://github.com/brendansiraky/discord-cardano-epoch-tracker',
				},
			],
			featured: false,
		},
		{
			name: 'ACTA (Web)',
			short_description: 'The future of event bookings.',
			technologies: [
				{
					name: 'nextjs',
					link: LINKS.NEXT,
				},
				{
					name: 'typescript',
					link: LINKS.TYPESCRIPT,
				},
				{
					name: 'laravel',
					link: LINKS.LARAVEL,
				},
				{
					name: 'docker',
					link: LINKS.DOCKER,
				},
			],
			sources: [
				{
					name: 'website',
					link: 'https://actaapp.com/',
				},
			],
			featured: false,
		},
		{
			name: 'DecodeU (Mobile)',
			short_description:
				'Decodeu uses the science of values to unlock individual and organisational potential to transform relationships through the power of alignment.',
			technologies: [
				{
					name: 'expo',
					link: LINKS.EXPO,
				},
				{
					name: 'react-native',
					link: LINKS.REACT_NATIVE,
				},
			],
			sources: [],
			featured: false,
		},
		{
			name: 'ACTA (Mobile)',
			short_description:
				'The future of event bookings. The mobile app to accompany the web application, built on React Native using Expo.',
			technologies: [
				{
					name: 'expo',
					link: LINKS.EXPO,
				},
				{
					name: 'react-native',
					link: LINKS.REACT_NATIVE,
				},
				{
					name: 'typescript',
					link: LINKS.TYPESCRIPT,
				},
			],
			sources: [
				{
					name: 'website',
					link: 'https://actaapp.com/',
				},
			],
			featured: false,
		},
		{
			name: 'SailDNA (Mobile)',
			short_description:
				'The SailDNA Mobile Application, an app for Ocean Navigation.',
			technologies: [
				{
					name: 'react-native',
					link: LINKS.REACT_NATIVE,
				},
				{
					name: 'typescript',
					link: LINKS.TYPESCRIPT,
				},
			],
			sources: [],
			featured: false,
		},
		{
			name: 'Discord Crypto Price Tracker',
			short_description:
				'A discord bot that tracks and displays the price of a cryptocurrency pair.',
			technologies: [
				{
					name: 'discordjs',
					link: LINKS.DISCORD,
				},
				{
					name: 'nodejs',
					link: LINKS.NODE,
				},
				{
					name: 'typescript',
					link: LINKS.TYPESCRIPT,
				},
			],
			sources: [],
			featured: false,
		},
	],
}
export type Landing = typeof landing
export type Projects = Landing['projects']
export type Technologies = Landing['projects'][number]['technologies']
export type Sources = Landing['projects'][number]['sources']
export type Platforms = Landing['platforms']
