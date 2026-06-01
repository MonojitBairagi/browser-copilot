current_vectorstore=None
def set_vectorstore(vectorstore):
    global current_vectorstore
    current_vectorstore=vectorstore
def get_vectorstore():
    return current_vectorstore
