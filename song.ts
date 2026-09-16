export type Song = { id:string; title:string; artist:string; album:string; artwork:any; audio:any; duration:number; genre:string; releaseDate:string; liked:boolean; downloadable:boolean; };
export type Playlist = { id:string; name:string; songIds:string[]; createdAt:number; };
export type RepeatMode = 'off'|'all'|'one';
