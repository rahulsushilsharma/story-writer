import { ChromaClient, Collection } from 'chromadb';
import { HuggingFaceEmbeddingFunction } from 'huggingface-embeddings'
import 'dotenv/config'
import { Documents, IDs, Metadata, Metadatas } from 'chromadb/dist/main/types';


export default class Database {

    private API_URL = { 'all-mpnet-base-v2': "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-mpnet-base-v2" }
    private API_KEY = process.env.HF_TOKEN
    private client !: ChromaClient;
    private embedder !: HuggingFaceEmbeddingFunction;
    private collection !: Collection;
    private collectionName !: string;

    constructor(collectionName: string) {
        if (!this.API_KEY) {
            throw new Error('Unable to access hugging face access token from .env file.')
        }
        this.client = new ChromaClient();
        this.embedder = new HuggingFaceEmbeddingFunction({ api_path: this.API_URL['all-mpnet-base-v2'], api_key: this.API_KEY });
        this.collectionName = collectionName;
    }

    async createCollection(collectionName: string) {
        if (this.collectionName !== collectionName) {
            this.collectionName = collectionName
            this.collection = await this.client.createCollection({ name: this.collectionName, embeddingFunction: this.embedder });
            return
        }
        if (this.collection) return;
        this.collection = await this.client.createCollection({ name: this.collectionName, embeddingFunction: this.embedder });
    }

    async save(collectionName: string, ids: string | IDs, metadatas: Metadatas | Metadata, documents: Documents | string) {
        await this.createCollection(collectionName);
        await this.collection.add({
            ids: ids,
            metadatas: metadatas,
            documents: documents,
        })
    }

    


    // const results = await collection.query({
    //     nResults: 2,
    //     queryTexts: ["doc"]
    // })
    // console.log(results);
}