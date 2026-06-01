from schemas.webpage_schema import WebpageQueryRequest,WebChatReq
from services.webpage_service import load_webpage
from graphs.webpage_graph import web_agent
async def webpage_query_controller(data:WebpageQueryRequest):
    result=load_webpage(data.webpage_text)
    return {'answer':result['message']}


async def webchat(data:WebChatReq):
    result=web_agent.invoke({
        "query":data.query,
        "context":"",
        "answer":""
    })
    return {"answer":result['answer']}