from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS

def create_webpage_vectorstore(webpage_text:str):
    """
    Create a FAISS vectorstore from webpage text.

    Agrs:
        webpage_text(str):Extracted webpage content
    Returns:
        FAISS: vector database containing webpage embeddings.
    """
    if not webpage_text.strip():
        raise ValueError("webpage text cannot be empty")
    splitter=RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=150
    )
    docs=splitter.create_documents(
        [webpage_text]
    )
    embeddings=GoogleGenerativeAIEmbeddings(
        model="models/gemini-embedding-001"
    )
    vectorstore=FAISS.from_documents(
        docs,
        embeddings
    )
    return vectorstore