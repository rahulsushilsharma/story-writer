export class EmbeddingFunction {
    constructor({ api_path, api_key, }) {
        this.api_key = api_key;
        this.api_path = api_path;
    }
    async generate(texts) {
        const res = await fetch(this.api_path, {
            method: "POST",
            headers: { "Authorization": `Bearer ${this.api_key}` },
            body: JSON.stringify({
                "inputs": texts
            })
        }).catch(e => {
            console.error(e);
            throw new Error('Failed to fetch');
        });
        const response = await res.json().catch(e => {
            console.error(e);
            throw new Error('unknown response');
        });
        // console.log(response);
        return response;
    }
}
