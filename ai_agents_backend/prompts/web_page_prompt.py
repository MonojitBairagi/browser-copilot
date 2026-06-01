from prompts.system_prompt import SYSTEM_PROMPT
from langchain_core.messages import (
    SystemMessage,
    HumanMessage
)


def get_prompt(context: str, query: str):

    return [
        SystemMessage(
            content=SYSTEM_PROMPT
        ),

        HumanMessage(
            content=f"""
Webpage Context:
{context}

Question:
{query}
"""
        )
    ]