export type AdResult={shown:boolean;reason?:string};
// V1 adapter: intentionally no native ad SDK is bundled so the local player remains buildable offline.
// V2 integration target: react-native-google-mobile-ads with Google TEST interstitial unit IDs.
export const AdService={
 initialized:false, enabled:false,
 async initialize(){this.initialized=true;},
 canShowInterstitial(){return this.enabled&&this.initialized;},
 async showInterstitial():Promise<AdResult>{return {shown:false,reason:'Ads disabled until an AdMob app/unit ID is configured.'};},
 async preloadInterstitial(){return false;}
};
