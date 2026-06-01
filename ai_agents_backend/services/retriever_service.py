from storage.vector_store import get_vectorstore
def retrieve_webpage_context(query:str,k:int=4):
    vectorstore=get_vectorstore()
    if vectorstore is None:
        return "No web is loaded"
    docs=vectorstore.similarity_search(query,k=k)
    return "\n\n".join(
        doc.page_content for doc in docs
    )