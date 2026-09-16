import {Song} from '../models/song';
export const songs:Song[]=[
 {id:'demo-01',title:'Neon Pulse',artist:'DEEX Originals',album:'After Dark',artwork:require('../../assets/artwork/cover-01.png'),audio:require('../../assets/music/deex-neon-pulse.wav'),duration:18,genre:'Electronic',releaseDate:'2026-09-01',liked:false,downloadable:true},
 {id:'demo-02',title:'Midnight Drive',artist:'DEEX Originals',album:'After Dark',artwork:require('../../assets/artwork/cover-02.png'),audio:require('../../assets/music/deex-midnight-drive.wav'),duration:20,genre:'Synthwave',releaseDate:'2026-09-02',liked:false,downloadable:true},
 {id:'demo-03',title:'Blue Horizon',artist:'DEEX Originals',album:'City Lights',artwork:require('../../assets/artwork/cover-03.png'),audio:require('../../assets/music/deex-blue-horizon.wav'),duration:22,genre:'Ambient',releaseDate:'2026-09-03',liked:false,downloadable:true},
 {id:'demo-04',title:'Redline',artist:'DEEX Originals',album:'City Lights',artwork:require('../../assets/artwork/cover-04.png'),audio:require('../../assets/music/deex-redline.wav'),duration:19,genre:'Electronic',releaseDate:'2026-09-04',liked:false,downloadable:true}
];
