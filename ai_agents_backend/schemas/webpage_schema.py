# schemas/webpage_schema.py

from pydantic import BaseModel, Field


class WebpageQueryRequest(BaseModel):
    webpage_text: str = Field(..., description="Text extracted from webpage")

class WebpageQueryResponse(BaseModel):
    answer: str

class WebChatReq(BaseModel):
    query:str=Field(...,description="user query")
class WebChatRes(BaseModel):
    answer:str