import { TwitterApi } from 'twitter-api-v2';

export class TwitterPlugin {
    private client: TwitterApi;
    
    constructor() {
        this.client = new TwitterApi({
            appKey: process.env.TWITTER_API_KEY!,
            appSecret: process.env.TWITTER_API_SECRET!,
            accessToken: process.env.ACCESS_TOKEN!,
            accessSecret: process.env.ACCESS_TOKEN_SECRET!,
        });
    }

    async init() {
        console.log('[TwitterPlugin] Initializing...');
        try {
            const me = await this.client.v2.me();
            console.log('[TwitterPlugin] Connected as:', me.data.username);
            return true;
        } catch (error) {
            console.error('[TwitterPlugin] Init error:', error);
            return false;
        }
    }

    async tweet(text: string) {
        try {
            await this.client.v2.tweet(text);
            console.log('[TwitterPlugin] Tweet sent:', text);
        } catch (error) {
            console.error('[TwitterPlugin] Tweet error:', error);
        }
    }
}