from services.vectorStore_service import create_webpage_vectorstore
from storage.vector_store import set_vectorstore
def load_webpage(webpage_text:str):
    vectorstore=create_webpage_vectorstore(webpage_text)
    set_vectorstore(vectorstore)
    return{
        "message":"Webpage stored successfully"
    }