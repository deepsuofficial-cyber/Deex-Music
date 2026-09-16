import {songs} from '../data/songs';
import {Song} from '../models/song';
export const MusicService={
 async getSongs(){return songs;}, async getTrending(){return songs.slice(0,3);}, async getLatest(){return [...songs].sort((a,b)=>b.releaseDate.localeCompare(a.releaseDate));},
 async searchSongs(query:string){const q=query.trim().toLowerCase(); if(!q)return []; return songs.filter(s=>[s.title,s.artist,s.album,s.genre].some(v=>v.toLowerCase().includes(q)));},
 async getSongById(id:string){return songs.find(s=>s.id===id)??null as Song|null;}
};
