import { ChromaClient, Collection } from 'chromadb';
import { HuggingFaceEmbeddingFunction } from 'huggingface-embeddings'
import { Documents, IDs, Metadata, Metadatas } from 'chromadb/dist/main/types';
import { exec } from 'child_process';
import { randomUUID } from 'crypto';
interface CollectionNotFoundError {
    msg: string
}

export default class Database {

    private API_URL = { 'all-mpnet-base-v2': "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-mpnet-base-v2" }
    private API_KEY = process.env.HF_TOKEN
    private client !: ChromaClient;
    private embedder !: HuggingFaceEmbeddingFunction;
    private collection !: Collection | null;
    private collectionName !: string;

    constructor(apiKey: string | undefined) {
        if (!apiKey) {
            throw new Error('Unable to access hugging face access token from .env file.')
        }
        this.API_KEY = apiKey
        this.client = new ChromaClient({
            path:"http://127.0.0.1:8000",
            
        });
        this.embedder = new HuggingFaceEmbeddingFunction({ api_path: this.API_URL['all-mpnet-base-v2'], api_key: this.API_KEY });
    }

    async createCollection(collectionName: string) {
        this.collectionName = collectionName
        try {
            this.collection = await this.client.createCollection({
                name: this.collectionName, embeddingFunction: this.embedder
            }).catch((error) => {
                console.error(error.message,'checking old collections')
                return this.client.getCollection({ name: this.collectionName, embeddingFunction: this.embedder })
            });

        } catch {
            console.error('Please make sure that chroma instance of docker is running.')
        }
    }

    async save(ids: string | IDs | undefined, metadatas: Metadatas | Metadata, documents: Documents | string) {
        if (!this.collectionName || !this.collection) {
            throw new Error('Collection not Found: Create a collection by calling createCollection method.')
        }
        return await this.collection.add({
            ids: ids|| randomUUID(),
            metadatas: metadatas,
            documents: documents,
        })
    }

    async querry(querry: string | string[], maxResults: number = 1) {
        if (!this.collectionName || !this.collection) {
            throw new Error('Collection not Found: Create a new collection by callig createCollection method first.')
        }
        return await this.collection.query({
            nResults: maxResults,
            queryTexts: querry
        })
    }

    async setupChromaLocal() {
        const script = `npm run docker`
        return new Promise((resolve, reject) => exec(`${script}`, (error, stdout, stderr) => {
            if (error) {
                console.error('Error running the shell script:', error);
                reject('Error running the shell script');
                return;
            }

            console.log('Shell script output:');
            resolve(stdout);
        }))
    }

}