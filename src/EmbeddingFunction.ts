import { IEmbeddingFunction } from "chromadb";
import fetch from 'node-fetch';

export class EmbeddingFunction implements IEmbeddingFunction {
    private api_key: string;
    private api_path: string;



    constructor({
        api_path,
        api_key,
    }: {
        api_path: string
        api_key: string,

    }) {

        this.api_key = api_key;
        this.api_path = api_path;

    }

    public async generate(texts: string[]): Promise<number[][]> {

        const res = await fetch(this.api_path, {
            method: "POST",
            headers: { "Authorization": `Bearer ${this.api_key}` },
            body: JSON.stringify({
                "inputs": texts
            })
        })


        const response: any = await res.json()
        // console.log(response);
        
        return response;
    }
}
