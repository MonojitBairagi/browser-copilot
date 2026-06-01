from fastapi import Request
async def test_controller(req:Request):
    return {
        "message":"Server is running successfully"
    }
