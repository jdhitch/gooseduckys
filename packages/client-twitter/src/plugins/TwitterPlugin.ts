import { Plugin } from '@elizaos/core';
import { TwitterApi } from 'twitter-api-v2';

export class TwitterPlugin implements Plugin {
    name = 'twitter';
    description = 'Twitter integration plugin';
    private client: TwitterApi;

    constructor() {
        console.log('[TwitterPlugin] Constructing...');
        // Initialize Twitter client immediately with env vars
        this.client = new TwitterApi({
            appKey: process.env.TWITTER_API_KEY!,
            appSecret: process.env.TWITTER_API_SECRET!,
            accessToken: process.env.ACCESS_TOKEN!,
            accessSecret: process.env.ACCESS_TOKEN_SECRET!,
        });
    }

    async init(config: any) {
        console.log('[TwitterPlugin] Initializing with config:', config);
        try {
            const me = await this.client.v2.me();
            console.log('[TwitterPlugin] Connected as:', me.data.username);
            if (config?.twitter?.tweetOnStart) {
                await this.tweet('Hello, Twitter! I am now online. 🦆');
            }
            return true;
        } catch (error) {
            console.error('[TwitterPlugin] Init error:', error);
            return false;
        }
    }

    async tweet(text: string) {
        try {
            const result = await this.client.v2.tweet(text);
            console.log('[TwitterPlugin] Tweet sent:', text);
            return result;
        } catch (error) {
            console.error('[TwitterPlugin] Tweet error:', error);
            return null;
        }
    }
}