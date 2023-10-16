import { randomUUID } from "crypto";
import Database from "./database.js";
import 'dotenv/config'


const hf_token = process.env.HF_TOKEN

const database = new Database(hf_token);

// await database.setupChromaLocal()
await database.createCollection('hello');
await database.save(undefined, {}, [
`Hi, @emilesilvis! I'm Dosu, and I'm helping the LangChain team manage their backlog. I wanted to let you know that we are marking this issue as stale.
From what I understand, the issue titled "chromadb.errors.InvalidDimensionException introduced somewhere between v0.0.123 and 0.0.167" describes a problem where the dimensionality of the code does not match the index dimensionality, resulting in an InvalidDimensionException. It seems that users czb154 and joefiorini have also encountered the same issue and suggest creating a new database called Chroma or deleting the existing database to fix the issue.
Before we proceed, we would like to confirm if this issue is still relevant to the latest version of the LangChain repository. If it is, please let us know by commenting on this issue. Otherwise, feel free to close the issue yourself or it will be automatically closed in 7 days.
Thank you for your understanding and cooperation. We appreciate your contribution to the LangChain community!`,
`@czb154 I also ran into this issue. I can confirm that deleting the database fixed it. I'm guessing it was caused by me changing the format of the input data, as I was testing an LLMs accuracy against the same texts in PDF and plain text.`,
`I have also encountered the same issue. It seems that the problem arises from the mismatch in the internal vector length between the previously stored database Chroma and the current one. Perhaps we can try creating a new database called Chroma to address this.`,
`
System Info
v.0.0.167
MacOS 13.3.1 (a) (22E772610a)

Who can help?
No response

Information
 The official example notebooks/scripts
 My own modified scripts
Related Components
 LLMs/Chat Models
 Embedding Models
 Prompts / Prompt Templates / Prompt Selectors
 Output Parsers
 Document Loaders
 Vector Stores / Retrievers
 Memory
 Agents / Agent Executors
 Tools / Toolkits
 Chains
 Callbacks/Tracing
 Async
Reproduction
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.llms import AzureOpenAI
from langchain.chains import RetrievalQAWithSourcesChain
from flask import Flask, request, jsonify, render_template

embeddings = OpenAIEmbeddings(model="text-search-davinci-query-001",chunk_size=1)

persist_directory = "db"
db = Chroma(persist_directory=persist_directory, embedding_function=embeddings)

retriever = db.as_retriever()

llm = AzureOpenAI(deployment_name="foo")

chain = RetrievalQAWithSourcesChain.from_chain_type(llm=llm, chain_type="stuff", retriever=retriever)

while True:
  question = input(f"Ask a question: ")
  answer = chain({"question": question}, return_only_outputs=True)
  print(answer)
Expected behavior
In 0.0.123 the above snippet works. In 0.0.167, I get the following:

swlib.py", line 119, in _check_dimensionality
    raise InvalidDimensionException(
chromadb.errors.InvalidDimensionException: Dimensionality of (1536) does not match index dimensionality (12288)`
]);
const result = await database.querry('what is the error?')
console.log(result)