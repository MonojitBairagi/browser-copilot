from langchain_ollama import ChatOllama
def get_llm():
    return ChatOllama(
        model='mistral',
        temperature=0.7
    )
