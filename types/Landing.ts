import React from 'react'
import { Media } from './Media'

export type RawLanding = {
	data: {
		id: number
		attributes: {
			createdAt: string
			updatedAt: string
			me: Me
			platforms: Platform[]
			projects: Project[]
			archives: Archive[]
		}
	}
}

export type Landing = Omit<
	RawLanding['data']['attributes'],
	'createdAt' | 'updatedAt'
>

// Parts
export type Platform = {
	id: number
	name: string
	link: string
}

export type Project = {
	id: number
	name: string
	short_description: string
	long_description: string
	technologies: Technology[]
	sources: Source[]
	image: Media
	label: string
}

export type Me = {
	id: number
	about: React.ReactNode
	technologies: {
		name: string
	}[]
	portrait: Media
	title: string
}

export type Archive = {
	id: number
	name: string
	description: string
	technologies: Technology[]
	sources?: Source[]
}

export type Technology = {
	id: number
	name: string
	link: string
	logo: Media
	label: string
}

export type Source = {
	id: number
	name: string
	link: string
}
