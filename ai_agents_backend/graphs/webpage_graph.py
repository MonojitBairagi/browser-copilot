from typing import TypedDict
from langgraph.graph import StateGraph,START,END
from services.retriever_service import retrieve_webpage_context
from llms.mistral_llm import get_llm
from prompts.web_page_prompt import get_prompt
class QAState(TypedDict):
    query:str
    context:str
    answer:str
def retrieve_context_node(state:QAState):
    context=retrieve_webpage_context(
        query=state['query']
    )
    return {
        "context":context
    }
def generate_answer_node(state:QAState):
    llm=get_llm()
    prompt=get_prompt(state['context'],state['query'])
    response=llm.invoke(prompt)
    return {'answer':response.content}
graph=StateGraph(QAState)
graph.add_node('retrieve_context',retrieve_context_node)
graph.add_node('generate_answer',generate_answer_node)
graph.add_edge(START,"retrieve_context")
graph.add_edge('retrieve_context','generate_answer')
graph.add_edge("generate_answer",END)
web_agent=graph.compile()