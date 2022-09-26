import PlaylistItem from '../pages/PlaylistItem';
import Favorite from '../pages/Favorite';
import Recent from '../pages/Recent';
import PlaylistDetails from '../pages/PlaylistDetails';
import Error from "../pages/Error"



export const router = [
    
	{
		path: '/',
		component: PlaylistItem
	},
	{
		path: '/home',
		component: PlaylistItem
	},
	{
		path: '/recent',
		component: Recent
	},
	{
		path: '/favorite',
		component: Favorite
	},
	{
		path: '/playlist/watch/:id',
		component: PlaylistDetails
	},
	{
		path: '*',
		component: Error
	},

	
]