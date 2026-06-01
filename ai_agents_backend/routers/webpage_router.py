# routers/webpage_router.py

from fastapi import APIRouter

from schemas.webpage_schema import (WebpageQueryRequest, WebpageQueryResponse,
                                    WebChatReq,WebChatRes)
from controllers.webpage_controller import (webpage_query_controller,
                                            webchat)


router = APIRouter(
    prefix="/webpage",
    tags=["Webpage"]
)


@router.post("/load", response_model=WebpageQueryResponse)
async def webpage_query(data: WebpageQueryRequest):
    return await webpage_query_controller(data)

@router.post('/chat',response_model=WebChatRes)
async def webpage_chat(data:WebChatReq):
    return await webchat(data)