export const DownloadService={
 async downloadSong(_songId:string){throw new Error('Downloads are reserved for V2 remote/local-file management. Bundled V1 tracks are already offline.');},
 async pauseDownload(){return false;},async resumeDownload(){return false;},async cancelDownload(){return false;},async deleteDownload(){return false;},async getDownloads(){return [];}
};
