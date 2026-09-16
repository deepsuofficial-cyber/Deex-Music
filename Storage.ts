import AsyncStorage from '@react-native-async-storage/async-storage';
const keys={profile:'deex.profile',favorites:'deex.favorites',recent:'deex.recent',playlists:'deex.playlists',history:'deex.history',settings:'deex.settings',playback:'deex.playback'};
export type Settings={autoplay:boolean;notifications:boolean;audioQuality:'standard'|'high'};
const defaults:Settings={autoplay:true,notifications:true,audioQuality:'standard'};
async function get<T>(key:string,fallback:T):Promise<T>{try{const raw=await AsyncStorage.getItem(key);return raw?JSON.parse(raw):fallback;}catch{return fallback;}}
async function set<T>(key:string,value:T){await AsyncStorage.setItem(key,JSON.stringify(value));}
export const Storage={
 getProfile:()=>get<string|null>(keys.profile,null), setProfile:(v:string)=>set(keys.profile,v),
 getFavorites:()=>get<string[]>(keys.favorites,[]), setFavorites:(v:string[])=>set(keys.favorites,v),
 getRecent:()=>get<string[]>(keys.recent,[]), setRecent:(v:string[])=>set(keys.recent,v),
 getPlaylists:()=>get<any[]>(keys.playlists,[]), setPlaylists:(v:any[])=>set(keys.playlists,v),
 getHistory:()=>get<string[]>(keys.history,[]), setHistory:(v:string[])=>set(keys.history,v),
 getSettings:()=>get<Settings>(keys.settings,defaults), setSettings:(v:Settings)=>set(keys.settings,v),
 setPlayback:(v:any)=>set(keys.playback,v), getPlayback:()=>get<any|null>(keys.playback,null),
 clearAll:async()=>AsyncStorage.clear()
};
